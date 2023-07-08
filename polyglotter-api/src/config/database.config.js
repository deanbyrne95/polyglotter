import mongoose from "mongoose";
import {env} from "./env.config.js";
import pusher from "./pusher.config.js";

const dbName = env.DB_NAME;
const dbUn = env.DB_USERNAME;
const dbPw = env.DB_PASSWORD;
const dbURL = `mongodb+srv://${dbUn}:${dbPw}@polyglotter.ucnthko.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    mongoose.connection.once('open', databaseOpened);
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error: ', err);
});

mongoose.connection.on('uncaughtException', (err) => {
    console.error('Mongoose connection exception: ', err);
});

mongoose.connection.on('disconnecting', () => {
    console.info('Mongoose disconnecting');
});

const databaseOpened = () => {
    console.log(`Connected to ${dbName}`)
    const msgCollection = mongoose.connection.collection("messages");
    const changeStream = msgCollection.watch();
    changeStream.on('change', change => {
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log('Error triggering Pusher');
        }
    })
}

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close()
        .then(() => {
            console.info(`Mongoose disconnected through ${msg}`);
            callback();
        })
        .catch((error) => {
            console.log(`Error: ${error}`)
        });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

export default mongoose;