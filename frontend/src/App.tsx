import { AppLayout } from './components/ui/Layout/AppLayout'
import { AppContainer } from './components/ui/Layout/AppContainer'
import { AppBar } from './components/ui/AppBar/AppBar'
import { Sidebar } from './components/ui/Sidebar/Sidebar'
import { Chat } from './components/ui/Chat/Chat'
import { andrzejekMessages } from './data/andrzejekMessagesData'

function App() {
  return (
    <AppContainer>
      <AppLayout appBar={<AppBar/>} navigation={<Sidebar/>}>
        <Chat title='Andrzejek Tate' messages={andrzejekMessages} />
      </AppLayout>

    {/* <div style={{background: 'red'}}>
      <div >
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
   </div> */}
   </AppContainer>

  )
}

export default App
