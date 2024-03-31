import { chats } from '../../../../data/itemListData';
import { MsgItem } from './MessageItem';

export const MsgList: React.FC = () => {
  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        boxSizing: 'border-box',
        borderTop: '1px solid grey',
        width: '100%',
        overflowY: 'scroll',
        scrollbarWidth: 'thin'
      }}
    >
      {chats.map((chat) => (
        <MsgItem {...chat} />
      ))}
    </ul>
  );
};
