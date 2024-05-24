import axios from "axios";
import { useState } from "react";

const Task = ({todo, setTodo}) => {

  // const date = new Date();
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

  const deleteHandler = async(id) => {
    await axios.delete(`/api/todo/${id}`)
    const deltodo = todo.filter((todos) => todos._id !== id)
    setTodo(deltodo);
  }

  const editHandler = (task) => {
    setEditID(task._id);
    setInput({...input, title: task.title, description: task.desc});
  }

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

     <ul>
        {todo.map((task) => (
          <li key={task._id} className="flex items-center justify-between border-b py-2">
            <div>
              <p className="font-semibold">{task.title}</p>
              <p className="text-gray-500">{task.desc}</p>
              <p className="text-gray-500">{task.date}</p>
            </div>
            <div>
              <button className="bg-blue-700 text-white px-3 py-1 rounded-md mr-2" onClick={() => editHandler(task)}>
                Edit
              </button>
              <button className="bg-red-700 text-white px-3 py-1 rounded-md" onClick={() => deleteHandler(task._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
     </div>

    </>
  );
};

export default Task;
