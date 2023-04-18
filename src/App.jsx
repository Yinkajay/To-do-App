import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllLists from './components/AllLists'
import ListsNav from './components/ListsNav'
import CurrentList from './components/CurrentList'

import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ListsNav />
      <CurrentList />
      {/* <AllLists /> */}

    </div>
  )
}

export default App
