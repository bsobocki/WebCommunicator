import { ChatMessage, MessageInfoData } from './Message';
import { useEffect, useRef } from 'react';

const ChatMessagesFieldStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(25, 25, 10)',
  overflowY: 'scroll',
  gap: '16px',
  scrollbarWidth: 'thin',
};

export interface ChatMessagesFieldProperties {
  messages: MessageInfoData[];
}

export const ChatMessagesField: React.FC<ChatMessagesFieldProperties> = ({ messages }) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = (type: ScrollBehavior) => {
    messagesEndRef.current?.scrollIntoView({ behavior: type });
  };

  useEffect(() => {
    scrollToBottom('auto');
  }, []);

  useEffect(() => {
    scrollToBottom('smooth');
  }, [messages]);

  return (
    <div style={ChatMessagesFieldStyle}>
      {messages.map((message) => (
        <ChatMessage {...message} />
      ))}
      <div ref={messagesEndRef}/>
    </div>
  );
};
