import express from 'express'
import connectDb from './config/db.js'
import todoRoutes from './routes/todoRoutes.js'

connectDb();
const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is Running')
})

app.use("/api/todo", todoRoutes);

// app.get('/difa', (req, res) => {
//     res.json({name:"Difa", age:22})
// })

// app.post('/api/todo', async(req,res) => {
//   console.log(req.body)
//   const todo = await Todo.create({
//     title: "The Book",
//     desc: "About Woman",
//   });
//   res.json(todo);
// });

// app.get("/api/todo", async(req, res) => {
//   const todos = await Todo.find();
//   res.json(todos);
// });

app.listen(port, () => {
  console.log(`server running on port ${port}`)
});