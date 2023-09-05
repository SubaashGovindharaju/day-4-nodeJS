import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: 'string',
        require: true,
    },
    name: {
        type: 'string',
        require: true,
    },
    dob: {
        type: 'string',
        require: true,
    }
});
export const user = mongoose.model('users ',userSchema);

