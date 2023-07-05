import express from "express";

import messageController from "../controllers/message.controller.js";
import userController from "../controllers/user.controller.js";

const router = express.Router();
// Root '/' for Homepage
router
    .route('/')
    .get(function (req, res, next) {
        res.status(200).send('homepage');
    });

router
    .route('/messages')
    .get(messageController.listAllMessages)

router
    .route('/messages/:name')
    .get(messageController.listMessagesForUser)

router
    .route('/message')
    .post(messageController.sendMessage)

router
    .route('/users')
    .get(userController.listUsers)

router
    .route('/user')
    .post(userController.createUser)

export default router;