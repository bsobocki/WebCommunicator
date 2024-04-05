import { ChatTitle } from "./Title";

const chatStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}     

export const NoMessageChat: React.FC = () => {
  return (
    <div style={chatStyle}>
      <ChatTitle title={'No messages'} />
    </div>
  );
};

