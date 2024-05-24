// import axios from "axios";

// const TaskList = ({todo, setTodo,input, setInput, setEditID}) => {

//   const deleteHandler = async(id) => {
//     await axios.delete(`/api/todo/${id}`)
//     const deltodo = todo.filter((todos) => todos._id !== id)
//     setTodo(deltodo);
//   }

//   const editHandler = (task) => {
//     setEditID(task._id);
//     setInput({...input, title: task.title, description: task.desc});
//   }
  
//   return (
//     <>
//     <div>
//     <ul>
//         {todo.map((task) => (
//           <li key={task._id} className="flex items-center justify-between border-b py-2">
//             <div>
//               <p className="font-semibold">{task.title}</p>
//               <p className="text-gray-500">{task.desc}</p>
//               <p className="text-gray-500">{task.date}</p>
//             </div>
//             <div>
//               <button className="bg-blue-700 text-white px-3 py-1 rounded-md mr-2" onClick={() => editHandler(task)}>
//                 Edit
//               </button>
//               <button className="bg-red-700 text-white px-3 py-1 rounded-md" onClick={() => deleteHandler(task._id)}>
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>


//     </div>
//     </>
//   )
// }

// export default TaskList