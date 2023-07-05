import mongoose from "mongoose";

const dbName = '';
const dbUn = '';
const dbPw = '';
const dbURL = `mongodb+srv://${dbUn}:${dbPw}@polyglotter.ucnthko.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(dbURL, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.info(`Mongoose connected to ${dbUn}`);
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
    console.info('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.info(`Mongoose disconnected through ${msg}`);
        callback();
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