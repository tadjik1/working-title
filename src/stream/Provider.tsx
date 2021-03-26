import React from "react";

import Context from "./Context";

interface StreamProviderProps {
  stream: MediaStream | null;
}

export const Provider: React.FC<StreamProviderProps> = ({
  stream,
  children,
}) => {
  return <Context.Provider value={stream}>{children}</Context.Provider>;
};
