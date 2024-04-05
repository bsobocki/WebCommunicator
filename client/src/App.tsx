import { AppLayout } from './components/ui/Layout/AppLayout';
import { AppContainer } from './components/ui/Layout/AppContainer';
import { AppBar } from './components/ui/AppBar/AppBar';
import { Sidebar } from './components/ui/Sidebar/Sidebar';
import { Chat } from './components/ui/Chat/Chat';
import { ReactNode, useState } from 'react';
import { ChatData } from './interface/data';
import { NoMessageChat } from './components/ui/Chat/NoMessagesChat';

function App() {
  const initialChat: ChatData = { id: '0', title: 'No messages', participants: [], messages: [] };
  const [currChat, setCurrChat] = useState<ChatData>(initialChat);
  let chat: ReactNode;

  if (currChat.messages.length === 0) {
    chat = <NoMessageChat />;
  } else {
    chat = <Chat title={initialChat.title} messages={[]} />;
  }

  return (
    <AppContainer>
      <AppLayout appBar={<AppBar />} sidebar={<Sidebar chatsInfo={[]} />}>
        {chat}
      </AppLayout>
    </AppContainer>
  );
}

export default App;
