import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import "./Room.css";
import { Context } from "./stream";
import WebRTC from "./webrtc";
import { request } from "./webrtc/socket";

const canShare = navigator.share !== undefined;

function share() {
  const shareData = {
    title: "Working title",
    text: "Join me in video conference!",
    url: document.location.href,
  };

  navigator.share(shareData).then(console.log).catch(console.error);
}

interface RoomParams {
  id: string;
}

const Room: React.FC = () => {
  const params = useParams<RoomParams>();
  const history = useHistory();
  const stream = useContext(Context);

  const remote = useRef<HTMLVideoElement | null>(null);
  const local = useRef<HTMLVideoElement | null>(null);

  const disconnect = useCallback(() => {
    if (remote.current) {
      remote.current.removeAttribute("srcObject");
    }
  }, []);

  useEffect(() => {
    if (!stream) return;
    if (!local.current) return;

    // @ts-ignore
    local.current.srcObject = stream;

    async function main() {
      const webrtc = new WebRTC({
        stream: stream,
        handleTrackEvent: (event: {
          streams: (MediaStream | MediaSource | Blob | null)[];
        }) => {
          console.log(remote.current, event);
          if (remote.current) {
            remote.current.srcObject = event.streams[0];
          }
        },
        handleICEConnectionStateChangeEvent: (state: any) => {
          switch (state) {
            case "closed":
            case "failed":
            case "disconnected":
              disconnect();
              break;
            default:
              console.log(state);
              break;
          }
        },
        handleSignalingStateChangeEvent: (state: any) => {
          switch (state) {
            case "closed":
              disconnect();
              break;
            default:
              console.log(state);
              break;
          }
        },
      });

      const status = await request({ event: "join", room: params.id });
      if (!status) {
        history.push("/");
      }

      const participants = await request({
        event: "participants",
        room: params.id,
      });

      console.log("participants", participants);

      // we are alone here, wait for someone to call us
      // @ts-ignore
      if (!participants.length) return;

      webrtc.call();
    }

    main().catch(console.error);
  }, [stream, local]);

  return (
    <div className="container">
      <div className="videos">
        <video ref={remote} autoPlay controls={false} className="remote" />
        <video ref={local} autoPlay controls={false} muted className="local" />
      </div>
      {canShare && (
        <button onClick={share} className="button">
          Share
        </button>
      )}
    </div>
  );
};

export default Room;
