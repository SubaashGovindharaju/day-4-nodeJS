import express from 'express';
import { logSomething } from './utils.js';
import todoRouter from './routes/todos.js';
import userRouter from './routes/users.js';
import connectToDb from './db-utils/mongoos-connection.js';
var todos = [
    { id: "1", title: 'dance', isComplete: false, dueDate: '2023-08-30' },
    { id: "2", title: 'run', isComplete: true, dueDate: '2023-08-31' },
    { id: "3", title: 'sleep', isComplete: true, dueDate: '2023-08-30' },
]
const app = express();
const PORT =process.env.PORT || 6000;
await connectToDb();

app.use(express.static('public'));
app.use(express.json());
app.use('/api/todos',todoRouter,);
app.use('/api/users',userRouter);

app.get('/api', (req, res) => {
    res.send({ name: 'subaash', student: 25 });
});


app.listen(PORT, () => {
    console.log('started');
    logSomething();
});