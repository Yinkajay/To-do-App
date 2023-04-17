import React from 'react'
import SingleList from './SingleList'

const AllLists = () => {
    const tasks = [
        {
            id: '1',
            task: 'Code'
        },
        {
            id: '2',
            task: 'Sing'
        }
    ]


    return (
        <>
            <SingleList ListName='Daily List' tasks={tasks} />
        </>
    )
}

export default AllLists
