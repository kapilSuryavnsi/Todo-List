import { createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice( {
    name: 'todos',

    initialState:{
        checkBoxes: [
            { id: 1, title: 'todo1', completed: false },
            { id: 2, title: 'todo2', completed: false },
            { id: 3, title: 'todo3', completed: false },
            { id: 4, title: 'todo4', completed: false },
            { id: 5, title: 'todo5', completed: false },
        ],

        checkedCount: 0
    },

    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };

            state.checkBoxes.push(todo)
        },

        removeTodo: (state, action) => {
            const toDelete = state.checkBoxes.findIndex( todo => todo.id === action.payload.id);

            state.checkBoxes.splice(toDelete, 1);
            state.checkedCount = state.checkBoxes.filter(item => item.completed).length
        },

        toggleComplete: (state, action) => {
            const checkbox = state.checkBoxes.find( todo => todo.id === action.payload.id);
            
            if(checkbox){
                checkbox.completed = !checkbox.completed
                state.checkedCount = state.checkBoxes.filter(item => item.completed).length
            }
        }
    }

})

export const {addTodo, toggleComplete, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;

