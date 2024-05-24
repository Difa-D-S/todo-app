import express from "express"
// import Todo from "../model/TodoModel.js";
import { addTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todoControllers.js";

const router = express.Router();

router.route("/").get(getTodo).post(addTodo);
router.route("/:id").delete(deleteTodo).patch(updateTodo);

// this lines also given in one line
    // router.get("/", getTodo);
    // router.post("/",  addTodo);


// --------routes separated-----------//

// router.get("/", async(req, res) => {
//     const todos = await Todo.find();
//     res.json(todos);
// });

// router.post("/",  async(req,res) => {
//     console.log(req.body)
//     const todo = await Todo.create({
//       title: "The Book",
//       desc: "About Woman",
//     });
//     res.json(todo);
//   });

export default router;