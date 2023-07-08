import express from "express";
import mongoose from "./config/database.config.js";
import routes from "./routes/main.router.js";
import http from "http";
import createError from "http-errors";
import Cors from 'cors'
import {env} from "./config/env.config.js";

// App Config
const app = express();
const port = normalizePort(env.PORT || 3000);

// Middleware
// TODO: Insert Middleware
if (mongoose.connection.db) {
    console.log(mongoose.connection.db.databaseName);
}

app.use(express.json())
app.use(Cors())

// API Endpoints
app.use(routes)

// error handlers
// Catch unauthorised errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ 'message': err.name + ': ' + err.message });
    }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// Listener
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    const port = parseInt(val, 10);
    // named pipe
    if (isNaN(port)) return val;
    // port number
    if (port >= 0) return port;

    return false;
}

function onError(error) {
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    console.error(error)

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr.port}`;
    console.debug(`Listening on ${bind}`);
}