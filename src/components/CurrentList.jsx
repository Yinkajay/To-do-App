import { useContext, useEffect } from "react"
import Statecontext from "../store/TaskContext"
import SingleList from "./SingleList"

const CurrentList = () => {
    const context = useContext(Statecontext)
    const activeList = context.lists.find((list) => list.name === context.activeList)


    return (
        <>
            <div>
                <SingleList tasks={activeList.tasks} ListName={activeList.name} />
            </div>
        </>
    )
}

export default CurrentList
