import UserModel from "../models/user.model.js";

const listUsers = async (request, response) => {
    return response.status(200).send(`Hey! You just clicked the '${request.url}' endpoint`);
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

const createUser = async (request, response) => {
    const newUser = request.body;
    UserModel.create(newUser)
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
    listUsers,
    createUser
}