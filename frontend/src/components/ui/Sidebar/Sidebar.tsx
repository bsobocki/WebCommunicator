import { MsgList } from './Messages/MessageList';
import { Navigation } from './Navigation/Navigation';
import { SIDEBAR_WIDTH } from './constants';

export const Sidebar: React.FC = () => {
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
      <MsgList />
    </nav>
  );
};
