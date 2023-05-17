import React from "react";
import AddTask from "./AddTask";
import Todos from "./Todos";
import { useSelector } from "react-redux";



const Tasks = () => {

    const checkedCount = useSelector(state => state.todos.checkedCount)

    return (
        <div className="tasks-container">
           <AddTask />
           <Todos />
           <h3>Total complete tasks: {checkedCount}</h3>
        </div>
    )
}

export default Tasks;