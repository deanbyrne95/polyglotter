import MessageModel from "../models/message.model.js";

const listAllMessages = async (request, response) => {
    try {
        const results = await MessageModel.aggregate([
            {
                $limit: 10
            }
        ]);
        return response.status(200).json(results)
    } catch (err) {
        console.error(err);
        return response.status(404).json(err)
    }
}

const listMessagesForUser = async (request, response) => {
    const user = request.params.name;

    await MessageModel.find({name: user})
        .select('-__v')
        .exec()
        .then((data) => {
            if (!data || data.length === 0) {
                throw 404;
            } else {
                return response.status(200).json(data);
            }
        })
        .catch((error) => {
            if (error === 404) {
                return response.status(error).json({'message': 'No messages found!'})
            } else {
                return response.status(500).json(error)
            }
        });
}

const sendMessage = async (request, response) => {
    const newMessage = request.body;
    MessageModel.create(newMessage)
        .then((data) => {
            response.status(201).send(data);
        })
        .catch((error) => {
            response.status(500).send(error);
        })
    /*try {
        const results = await message.aggregate([
            {
                $limit: 10
            }
        ]);
        return response.status(200).json(results)
    } catch (err) {
        console.error(err);
        return response.status(404).json(err)
    }*/
}

export default {
    listAllMessages,
    listMessagesForUser,
    sendMessage
}