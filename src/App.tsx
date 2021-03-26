import React, { useEffect, useState } from "react";
import { Renderer, Provider } from "./stream";

import "./App.css";

const App: React.FC = ({ children }) => {
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const renderer = new Renderer();
    renderer.getStream().then(setStream).catch(console.error);
  }, []);

  return (
    <Provider stream={stream}>
      <main className="app">{children}</main>
    </Provider>
  );
};

export default App;
