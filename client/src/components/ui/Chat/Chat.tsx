import { ChatMessagesField } from "./Messages/MessagesField";
import { ChatTitle } from "./Title";
import { MessageInfoData } from "./Messages/Message";
import MessageInput from "./InputBar/MessageInput";
import { useState } from "react";

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

  const addMessage = (newMessage: MessageInfoData) => {
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

