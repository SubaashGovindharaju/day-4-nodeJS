import express from 'express';
import { user as userModel } from '../db-utils/models.js';

const userRouter = express.Router();

userRouter.get('/',async (req,res)=>{
    try{
    const users= await userModel.find({},{id:1,name:1,dob:1,_id:0});
    res.send(users);
}catch(err)
{
    console.log(err);
    res.status(500).send({msg:'Error occuerred while fetching users'});
}
});

userRouter.get('/:name',(req,res)=>{
    // res.send({path:req.params,query:req.query});
    res.send({ms:'Api comming Soon'});

});



userRouter.post('/', async(req, res) => {
    // users.push(req.body);
    // res.send(users);
try{
const user = new  userModel(req.body);
await user.save();
    res.send({msg:'user created '});
}catch(err){
    console.log(err);
    res.status(500).send({msg:'Error in creating'})
}
});



userRouter.put('/:userId', async(req, res) => {
    const {userId}=req.params;
    try{
        new  userModel(req.body);
        await userModel.updateOne({id:userId},{'$set':req.body});
            res.send({msg:'user updated '});
        }catch(err){
            console.log(err);
            res.status(500).send({msg:'Error in updating'})
        }
    // const { userId } = req.params;
    // const newUser = req.body;
    // const oldUser = users.find(user => user.id === userId);
    // users = users.filter(user => user.id !== oldUser.id);
    // users.push(newUser);
    // res.send(users);



});



userRouter.delete('/:userId',async (req, res) => {
    const {userId}=req.params;
    try{
        await userModel.deleteOne({id:userId});
            res.send({msg:'user deleted '});
        }catch(err){
            console.log(err);
            res.status(500).send({msg:'Error in deleti'})
        }
    // const { userId } = req.params;
    // users = users.filter(user => user.id !== userId);
    // res.send(users);

});

export default userRouter;




// import express from 'express';

// import { user as userModel } from '../db-utils/models.js';

// import { v4 } from 'uuid';

// const userRouter = express.Router();

// userRouter.get('/', async (req, res) => {
//     try {
//         const users = await userModel.find({}, { id: 1, name: 1, dob: 1, imageUrl: 1, _id: 0 });
//         res.send(users);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ msg: 'Error occuerred while fetching users' });
//     }
// });


// userRouter.post('/', async (req, res) => {
//     try {
//         const user = new userModel({ ...req.body, id: v4() });
//         await user.save();
//         res.send({ msg: 'User Created Successfully' });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ msg: 'Error in creating' });
//     }
// });


// userRouter.put('/:userId', async (req, res) => {
//     const { userId } = req.params;
//     try {
//         new userModel(req.body);
//         await userModel.updateOne({ id: userId }, { '$set': req.body });
//         res.send({ msg: 'User updated Successfully' });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ msg: 'Error in updating' });
//     }
// });


// userRouter.delete('/:userId', async (req, res) => {
//     const { userId } = req.params;
//     try {
//         await userModel.deleteOne({ id: userId });
//         res.send({ msg: 'User Deleted Successfully' });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ msg: 'Error in Deleting' });
//     }
// });

// export default userRouter;