import Todo from '../model/TodoModel.js'

const getTodo = async(req, res) => {
    const todos = await Todo.find();
    res.json(todos);
}

const addTodo = async(req,res) => {
    console.log(req.body)

    const todo = await Todo.create({
      title: req.body.title,
      desc: req.body.desc,
      date: req.body.date,
    });    
    res.json(todo);
  }

const deleteTodo = async(req, res) => {
    console.log(req.params);
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).send("Deleted");
}

const updateTodo = async(req, res) => {
    const {title, desc, date} = req.body;

    const todo = await Todo.findById(req.params.id);

    todo.title = title || todo.title;
    todo.desc = desc || todo.desc;
    todo.date = date || todo.date;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
}

export {getTodo, addTodo, deleteTodo, updateTodo}