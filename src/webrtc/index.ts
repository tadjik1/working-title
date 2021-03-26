import socket, { request } from "./socket";

export default class WebRTC {
  private pc: RTCPeerConnection | null;
  private options: any;

  constructor(options: any) {
    this.pc = null;
    this.options = options;

    socket.on("call", this.handleCall);
    socket.on("answer", this.handleAnswer);
    socket.on("candidate", this.handleCandidate);
  }

  call() {
    this.pc = this.createPeerConnection();

    // @ts-ignore
    this.options.stream
      .getTracks()
      // @ts-ignore
      .forEach((track) => this.pc.addTrack(track, this.options.stream));
  }

  handleTrackEvent = (event: RTCTrackEvent) => {
    this.options.handleTrackEvent(event);
  };

  handleNegotiationNeededEvent = async () => {
    if (!this.pc) return;

    const offer = await this.pc.createOffer();
    await this.pc.setLocalDescription(offer);
    await request({ event: "call", offer: this.pc.localDescription });
  };

  handleICECandidateEvent = async (event: RTCPeerConnectionIceEvent) => {
    if (!event.candidate) return;
    await request({ event: "candidate", candidate: event.candidate });
  };

  handleICEConnectionStateChangeEvent = () => {
    if (!this.pc) return;

    const state = this.pc.iceConnectionState;

    switch (state) {
      case "closed":
      case "failed":
      case "disconnected":
        this.close();
    }

    this.options.handleICEConnectionStateChangeEvent(state);
  };

  handleSignalingStateChangeEvent = () => {
    if (!this.pc) return;

    const state = this.pc.signalingState;

    switch (state) {
      case "closed":
        this.close();
    }

    this.options.handleSignalingStateChangeEvent(state);
  };

  createPeerConnection() {
    const c = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    });

    c.onnegotiationneeded = this.handleNegotiationNeededEvent;
    c.ontrack = this.handleTrackEvent;
    c.onicecandidate = this.handleICECandidateEvent;
    c.oniceconnectionstatechange = this.handleICEConnectionStateChangeEvent;
    c.onsignalingstatechange = this.handleSignalingStateChangeEvent;

    // @ts-ignore
    c.onremovetrack = (event) => console.log("onremovetrack", event);
    c.onicegatheringstatechange = () =>
      console.log("onicegatheringstatechange");

    return c;
  }

  handleCall = async (msg: { offer: RTCSessionDescriptionInit }) => {
    console.log("call", msg);

    this.pc = this.createPeerConnection();

    await this.pc.setRemoteDescription(new RTCSessionDescription(msg.offer));

    // @ts-ignore
    this.options.stream
      .getTracks()
      // @ts-ignore
      .forEach((track) => this.pc.addTrack(track, this.options.stream));

    const answer = await this.pc.createAnswer();
    await this.pc.setLocalDescription(new RTCSessionDescription(answer));
    await request({ event: "answer", answer: this.pc.localDescription });
  };

  handleAnswer = async (msg: { answer: RTCSessionDescriptionInit }) => {
    console.log("answer", msg);

    if (!this.pc) return;

    await this.pc.setRemoteDescription(new RTCSessionDescription(msg.answer));
  };

  handleCandidate = async (msg: { candidate: RTCIceCandidate }) => {
    console.log("candidate", msg);

    if (!this.pc) return;

    await this.pc.addIceCandidate(msg.candidate);
  };

  close() {
    if (!this.pc) return;

    this.pc.ontrack = null;
    // @ts-ignore
    this.pc.onremovetrack = null;
    this.pc.onicecandidate = null;
    this.pc.oniceconnectionstatechange = null;
    this.pc.onsignalingstatechange = null;
    this.pc.onicegatheringstatechange = null;
    this.pc.onnegotiationneeded = null;

    this.pc.close();
    this.pc = null;
  }
}
