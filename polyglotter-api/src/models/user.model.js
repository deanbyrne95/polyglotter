import mongoose from "mongoose";

const userModel = new mongoose.Schema ({
    name: String,
});

export default mongoose.model('user', userModel);