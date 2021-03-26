import { io } from "socket.io-client";

console.log("ws server:", process.env.REACT_APP_SOCKET_IO_SERVER);
const socket = io(process.env.REACT_APP_SOCKET_IO_SERVER as string);

socket.on("connect", () => console.log("connect"));
socket.on("reconnect", () => console.log("reconnect"));
socket.on("disconnect", () => console.log("disconnect"));
socket.on("connect_error", (err) => console.log("connect_error", err));

export default socket;

export function request(options: {
  [x: string]: any;
  event: string;
  offer?: RTCSessionDescription | null;
  candidate?: RTCIceCandidate;
  answer?: RTCSessionDescription | null;
}) {
  const { event, ...parameters } = options;
  return new Promise((resolve) => {
    socket.emit(event, parameters, resolve);
  });
}
