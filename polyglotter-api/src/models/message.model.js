import mongoose from "mongoose";

const messageModel = new mongoose.Schema ({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

export default mongoose.model('message', messageModel);