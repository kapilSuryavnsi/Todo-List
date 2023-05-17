import React, {useState} from "react";
import { useDispatch} from "react-redux";
import { addTodo } from "../redux/totdoSlice";


 const AddTask = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {

        event.preventDefault();

        if (value) {
            dispatch(
                addTodo({
                    title: value
                })
            );
        }

        setValue('');
    };

    return(
        <div className="add-task-wraper">
        <input placeholder="Add todo..."
            value={value}
            onChange={event => setValue(event.target.value)}
        ></input>

        <button onClick={onSubmit} >Submit</button>
    </div>
    )

}

export default  AddTask;

