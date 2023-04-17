import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AllLists from './components/AllLists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AllLists />
    </div>
  )
}

export default App
