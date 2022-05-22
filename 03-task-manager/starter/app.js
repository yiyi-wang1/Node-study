const express = require('express');
const app = express();
const tasks = require('./routers/tasks');
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`The server is listening on ${port}...`));
    } catch (err) {
        console.error(err);
    }
}
start();



