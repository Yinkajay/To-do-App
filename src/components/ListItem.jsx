import { useContext, useState } from 'react'
import classes from './ListItem.module.css'
import Statecontext from '../store/TaskContext'

const ListItem = ({ text, id }) => {
    const [taskStatus, setTaskStatus] = useState(false)
    const context = useContext(Statecontext)
    const currList = context.activeList
    const taskId = id
    return (
        <div className='list-entry'>

                <p className={`${taskStatus ? `${classes['list-text']} ${classes['complete']}` :  `${classes['list-text']}`}`}>{text}</p>
                <button onClick={()=> context.deleteTask(currList, taskId)}>Delete</button>
                <input type="checkbox" name="" value={taskStatus} onChange={()=>{setTaskStatus(prev=>!prev)}} id="" />
        </div>
    )
}

export default ListItem
