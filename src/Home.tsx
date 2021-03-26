import React, { useCallback, useContext, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { Context } from "./stream";

import "./Home.css";
import { request } from "./webrtc/socket";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();
  const stream = useContext(Context);
  const video = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!stream) return;

    if (video.current) {
      // @ts-ignore
      video.current.srcObject = stream;
    }
  }, [stream, video]);

  const host = useCallback(async () => {
    const room = nanoid();
    const status = await request({ event: "create", room });

    if (status) {
      history.push(`/${room}`);
    }
  }, []);

  return (
    <div className="container">
      <h1 className="title">
        The most secure video conferencing powered by WebRTC
      </h1>
      <div className="content">
        <div className="buttons">
          <button onClick={host} className="button">
            Host
          </button>
          <p className="subtitle">Host your meeting and share the link</p>
        </div>
        <video className="video" autoPlay muted controls={false} ref={video} />
      </div>
    </div>
  );
};

export default Home;
