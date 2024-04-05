
import { CSSProperties } from 'react';
import { ChatData } from '../../../../interface/data';
import { MsgItem } from './MessageItem';

export interface MsgListProps {
  chats: ChatData[]
}

const msgListStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  boxSizing: 'border-box',
  borderTop: '1px solid grey',
  width: '100%',
  overflowY: 'scroll',
  scrollbarWidth: 'thin'
}

const noMessagesDivStyle: CSSProperties = {
  ...msgListStyle,
  color: 'white',
  alignItems: 'center',
  paddingTop: '20px',
}

export const MsgList: React.FC<MsgListProps> = ({ chats }) => {
  if (chats.length === 0) return (
    <div style={noMessagesDivStyle}>
      <h4>No chats avaliable</h4>
    </div>);

  return (
    <ul
      style={msgListStyle}
    >
      {chats.map((chat) => (
        <MsgItem {...chat} />
      ))}
    </ul>
  );
};
