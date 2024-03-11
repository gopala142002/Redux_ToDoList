import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
const AddTodo = () => {
    const [input,setInput]=useState('');
    const dispath=useDispatch();
    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispath(addTodo(input));
        setInput("");
    }
  return (
    <div>
      AddTodo  
    </div>
  )
}

export default AddTodo
