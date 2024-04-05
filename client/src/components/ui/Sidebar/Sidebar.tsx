import { ChatData } from '../../../interface/data';
import { MsgList } from './Messages/MessageList';
import { Navigation } from './Navigation/Navigation';
import { SIDEBAR_WIDTH } from './constants';

export interface SidebarProps {
  chatsInfo: ChatData[]
}

export const Sidebar: React.FC<SidebarProps> = ({ chatsInfo }) => {
  return (
    <nav
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        width: SIDEBAR_WIDTH,
        height: '100%',
      }}
    >
      <Navigation />
      <MsgList chats={chatsInfo}/>
    </nav>
  );
};
