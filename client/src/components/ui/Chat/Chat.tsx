import { andrzejekMessages } from "../../../data/andrzejekMessagesData";
import { ChatMessagesField } from "./Messages/MessagesField";
import { ChatTitle } from "./Title";
import { MessageData } from "./Messages/Message";
import MessageInput from "./InputBar/MessageInput";
import { useState } from "react";

export interface ChatProps {
  title: string;
  messages: MessageData[];
}

const chatStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}

export const Chat: React.FC<ChatProps> = ({ title }) => {
  const [messages, setMessages] = useState<MessageData[]>(andrzejekMessages);

  const addMessage = (newMessage: MessageData) => {
    setMessages((prevMessages: MessageData[]) => [...prevMessages, newMessage]);
  };

  return (
    <div style={chatStyle}>
      <ChatTitle title={title} />
      <ChatMessagesField messages={messages}/>
      <MessageInput onSendMessage={addMessage}/>
    </div>
  );
};

