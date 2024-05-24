
const TaskList = ({todo}) => {

  
  return (
    <>
    <div>
       <ul>
        {todo.map((task) => (
          <li key={Math.random()*1000} className="flex items-center justify-between border-b py-2">
            <div>
              <p className="font-semibold">{task.title}</p>
              <p className="text-gray-500">{task.description}</p>
            </div>
            <div>
              <button className="bg-blue-700 text-white px-3 py-1 rounded-md mr-2">
                Edit
              </button>
              <button className="bg-red-700 text-white px-3 py-1 rounded-md">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>


    </div>
    </>
  )
}

export default TaskList