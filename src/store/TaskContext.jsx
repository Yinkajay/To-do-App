import { createContext, useContext, useState } from "react";
import fs from 'fs'

const Statecontext = createContext({
    lists: [],
    addNewList: () => { },
    deleteList: () => { },
    addNewTask: () => { },
    deleteTask: () => { },
    activeList: '',
    changeList: () => { }
})

export const StateContextProvider = (props) => {
    const [lists, setLists] = useState([{
        name: 'Daily Tasks',
        tasks: [{
            id: '1',
            task: 'Codeeee',
            // completed: false
        },
        {
            id: '2',
            task: 'Sing',
            // completed: false
        },
        {
            id: '3',
            task: 'Pray',
            // completed: false
        }
        ]
    },
    {
        name: 'Weekly Tasks',
        tasks: [{
            id: '1',
            task: 'Dance',
            // completed: false
        },
        {
            id: '2',
            task: 'Cook',
            // completed: false
        },
        ]
    }
    ])
    const [activeList, setActiveList] = useState('Daily Tasks')

    const changeList = (listName) => {
        setActiveList(listName)
        console.log(listName)
    }
    const addNewList = (name) => {
        const list = { name, tasks: []}
        setLists((prevLists) => [...prevLists, list])
        setActiveList(name)
        // lists.push(list)
    }
    const deleteTask = (list, id) => {
        const listOfTaskName = list
        const taskId = id
        const listOfTask = lists.find(list => list.name === listOfTaskName)
        const newTasks = listOfTask.tasks.filter(task => task.id !== taskId)
        console.log(newTasks)
        const removeTask = lists.map(list => {
            if (list.name === listOfTaskName) {
                return { ...list, tasks: [...newTasks] }
                // return [...lists, { ...list, tasks: [] }]
            } else return list
        })
        setLists(removeTask)
    }

    return (
        <Statecontext.Provider value={{
            lists,
            activeList,
            changeList,
            addNewList,
            deleteTask
        }}>
            {props.children}
        </Statecontext.Provider>
    )
}
export default Statecontext