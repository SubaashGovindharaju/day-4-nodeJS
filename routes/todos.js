import express from 'express';

var todos = [
    { id: "1", title: 'dance', isComplete: false, dueDate: '2023-08-30' },
    { id: "2", title: 'run', isComplete: true, dueDate: '2023-08-31' },
    { id: "3", title: 'sleep', isComplete: true, dueDate: '2023-08-30' },
];

const todoRouter = express.Router();

todoRouter.get('/',(req,res)=>{
    res.send(todos);
});

todoRouter.get('/:name',(req,res)=>{
    res.send({path:req.params,query:req.query});
});



todoRouter.post('/', (req, res) => {
    todos.push(req.body);
    res.send(todos);
});



todoRouter.put('/:todoId', (req, res) => {

    const { todoId } = req.params;
    const newTodo = req.body;
    const oldTodo = todos.find(todo => todo.id === todoId);
    todos = todos.filter(todo => todo.id !== oldTodo.id);
    todos.push(newTodo);
    res.send(todos);

});



todoRouter.delete('/:todoId', (req, res) => {

    const { todoId } = req.params;
    todos = todos.filter(todo => todo.id !== todoId);
    res.send(todos);

});

export default todoRouter;