import axios from "axios";
import { useState } from "react";
import TaskList from "./TaskList";

const AddTodo = ({todo, setTodo}) => {
  const [input, setInput] = useState({title: "", description: ""});
  const [editID, setEditID] = useState(0);

  const addHandler = async() => {
    if(input.title.trim() && input.description.trim() !== '') {
      
      const arrtodo = {
        title: input.title,
        desc: input.description,
        date: new Date().toLocaleString()
      };

      const add = await axios.post("/api/todo", arrtodo)
      console.log(add.data)
      setTodo([...todo, add.data]);
      setInput({title: '', description: ''})
    }
    else{
      alert('Enter the Value')
    } 
  };

  const saveHandler = async() => {
    const edit = await axios.patch(`/api/todo/${editID}`, {title: input.title, desc: input.description, date: new Date().toLocaleString()})
    // console.log(edit);
    const save = todo.map ( (todo) => editID === todo._id ? 
          {...todo, title: edit.data.title, desc: edit.data.desc, date: edit.data.date} 
                : todo)
    setEditID(0);
    setTodo(save);
    setInput({title: '', description: ''})
  //   console.log(save);
  }


  
  return (
    
    <>
     <div className="max-w-xl mx-auto py-8">
    <div className="mb-4">
        <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Title"
          value={input.title} onChange={(e) => setInput({ ...input, title: e.target.value })} />

        <input type="text" className="w-full mt-2 px-3 py-2 border rounded-md" placeholder="Description"
          value={input.description} onChange={(e) => setInput({ ...input, description: e.target.value })} />

        {editID ? (
          <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded-md" onClick={saveHandler}>
            Save
          </button>
        ) : (
          <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded-md" onClick={addHandler}>
            Add
          </button>
        )}
      </div>

      <TaskList todo={todo} setTodo={setTodo} input={input} setInput={setInput} setEditID={setEditID}/>

      </div>
    </>

  )
}

export default AddTodo