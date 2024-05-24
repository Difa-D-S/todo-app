import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";
import Task from "./components/Task";

function App() {

  const [todo, setTodo] = useState([]);
  // console.log(todo)
  
  const getTodo = async () =>{
      const response = await axios.get("/api/todo");
      setTodo(response.data);
  };

  useEffect(()=> {
    getTodo();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Task todo={todo} setTodo={setTodo}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
