import { useContext, useState } from "react"
import Statecontext from "../store/TaskContext"
import { Button, Container } from "react-bootstrap"
import classes from './ListsNav.module.css'

const ListsNav = () => {
  const [listToAdd, setListToAdd] = useState('')
  const context = useContext(Statecontext)

  const createNewListHandler = () => {
    if (listToAdd.trim() === '') return
    context.addNewList(listToAdd)
    setListToAdd('')
  }

  return (
    <>
      <div className={classes['lists-nav']}>
        <h3>Task Lists</h3>
        <nav>
          {context.lists.map((list, index) => <Button key={list.name} onClick={() => context.changeList(list.name)}> {list.name}</Button>)}
          <div className={classes['add-list']}>
            <input value={listToAdd} onChange={(e) => setListToAdd(e.target.value)} type="text" placeholder="Add New List" />
            <Button onClick={createNewListHandler}>
              Add List +
            </Button>
          </div>
        </nav>
      </div>
      <Container className={classes['lists-nav']}>
        <h3>Task Lists</h3>
        <nav>
          {context.lists.map((list) => <Button key={list.name} onClick={() => context.changeList(list.name)}> {list.name}</Button>)}
          <div className={classes['add-list']}>
            <input value={listToAdd} onChange={(e) => setListToAdd(e.target.value)} type="text" placeholder="Add New List" />
            <Button onClick={createNewListHandler}>
              Add List +
            </Button>
          </div>
        </nav>
      </Container>
    </>
  )
}

export default ListsNav 
