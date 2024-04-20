import React, { ReactNode, createContext, useEffect, useState } from "react";
import { WebSocketConnection } from "./WebSocketConnection"
import { SERVER_ADDR } from "../addresses";

export interface WebSocketCtx {
  webSocket: WebSocketConnection,
  setWebSocket: React.Dispatch<React.SetStateAction<WebSocketConnection>>
}

export const WebSocketContext = createContext<WebSocketCtx | undefined>(undefined);

interface WebSocketProviderProps {
    children: ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
    const [webSocket, setWebSocket] = useState<WebSocketConnection>(new WebSocketConnection(SERVER_ADDR));

    return (
      <WebSocketContext.Provider value={{ webSocket, setWebSocket }}>
        {children}
      </WebSocketContext.Provider>
    );
}