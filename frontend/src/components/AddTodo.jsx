import { useEffect, useState } from "react";
import axios from 'axios'

const AddTodo = () => {
    const [todo, setTodo] = useState([])
    console.log(todo)
    
    const getTodo = async() => {
      const data = await axios.get("/api/todo");
      setTodo(data);
    };
  
    useEffect(()=> {
      getTodo();
    },[]);
  
  return (
    
    <div>AddTodo</div>

  )
}

export default AddTodo