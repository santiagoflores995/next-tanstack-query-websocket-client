import { useEffect } from 'react';

export default function Home() {
  const websocket = new WebSocket('ws://localhost:8000/wss/')

  const useReactQuerySubscription = () => {
    useEffect(() => {
      websocket.onopen = () => {
        console.log('connected')
      }

      websocket.onmessage = (event) => {
        console.log("got an event from server", event.data)
      }
  
    }, [])
  }

  useReactQuerySubscription()
  
  const handleSendHello = () => {
    websocket.send('hello from the client!')
  }

  const handleClose = () => {
    websocket.close()
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Hello World</h1>
      <h1>Closed: {websocket.CLOSED}</h1>
      <button 
        onClick={handleSendHello}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Send hello to server
      </button>
      <button 
        onClick={handleClose}
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
      >
        Close connection
      </button>

    </main>
  )
}