import { createContext, useContext } from "react";

const Statecontext = createContext({
    Lists: [{
        name: 'Daily List',
        tasks: [{
            id: '1',
            task: 'Code'
        },
        {
            id: '2',
            task: 'Sing'
        }]
    }],
    addNewList: () => { },
    deleteList: () => { },
    addNewTask: () => { },
    deleteTask: () => { }
})