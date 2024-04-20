import { ChatMessagesField } from "./Messages/MessagesField";
import { ChatTitle } from "./Title";
import { MessageInfoData } from "./Messages/Message";
import MessageInput from "./InputBar/MessageInput";
import { useContext, useState } from "react";
import { WebSocketContext } from "../../api/WebSocket/WebSocketProvider";

export interface ChatProps {
  title: string;
  messages: MessageInfoData[];
}

const chatStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}

export const Chat: React.FC<ChatProps> = ({ title, messages }) => {
  const [messagesData, setMessages] = useState<MessageInfoData[]>(messages);
  const webSocketCtx = useContext(WebSocketContext)!;
  const webSocket = webSocketCtx?.webSocket;
  const setWebSocket = webSocketCtx?.setWebSocket;

  if (!webSocket) {
    console.log("i dont have this webSocket!!!");
  } else {
    console.log("web socket is on!!");
  }

  setWebSocket((webSocket: any) => {
    webSocket?.addReceiveMessageCallback((newMessage: any) => {
      const msg: MessageInfoData =   {date:0, sender: 'interlocutor', content: newMessage.content};
      console.log('Trying to add: ', msg);
      setMessages((prevMessages: MessageInfoData[]) => [...prevMessages, msg]);
    });
  });
 

  const addMessage = (newMessage: MessageInfoData) => {
    webSocket?.sendMessage('papi', newMessage.content);
    setMessages((prevMessages: MessageInfoData[]) => [...prevMessages, newMessage]);
  };

  return (
    <div style={chatStyle}>
      <ChatTitle title={title} />
      <ChatMessagesField messages={messagesData}/>
      <MessageInput onSendMessage={addMessage}/>
    </div>
  );
};

