import React, {useEffect} from "react"
import { toggleComplete, removeTodo, getTodoAsync } from "../redux/totdoSlice";
import {useSelector, useDispatch } from "react-redux";

const Todos = () => {
    
    const todos = useSelector( state => state.todos.checkBoxes) 
    const dispatch = useDispatch();

    const handleCheckboxChange = (id) => {
        dispatch(toggleComplete({id}))
    }

    const handleDelte = (id) => {
        dispatch(removeTodo({id}))
    }

    return(
        <div className="task-container">
                <ul>
                    {todos.map( (task,index) => (
                        <li key={index} className="task-wraper">
                            <div className="task-text">
                                <input type="checkbox"
                                className="todo"
                                checked={task.completed}
                                onChange={() => handleCheckboxChange(task.id)}
                                 />
                                <label>{task.title}</label>
                            </div>

                            <div className="button-wraper">
                                <button onClick={() => handleDelte(task
                                .id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default Todos;