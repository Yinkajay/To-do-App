import { useState } from "react"
import ListItem from "./ListItem"
import classes from './SingleList.module.css'

const SingleList = ({ tasks, ListName }) => {
    const [task, setTask] = useState('')

    const addTaskHandler = (e) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1000)

        if (task.trim() === '') return

        const taskToAdd = { id, task }
        tasks.push(taskToAdd)
        console.log(taskToAdd)

        setTask('')
    }
    return (
        <>
            <section className={classes.list}>
                <h1>{ListName}</h1>
                {tasks.map((task) => <ListItem key={task.id} id={task.id} text={task.task} />)}
                <form onSubmit={addTaskHandler}>
                    <input type="text" value={task} onChange={e => setTask(e.target.value)} placeholder="Add task"/>
                    <button type="submit">+</button>
                </form>
            </section>
        </>
    )
}

export default SingleList
