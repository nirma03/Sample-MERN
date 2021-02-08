const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

//MongoDB Connection
const ATLAS_URI = 'mongodb+srv://sample_user:sample_user@cluster0.q7qra.mongodb.net/AF_MU_2021?retryWrites=true&w=majority'
mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
).then(
    () => {
        console.log("Database is connected");
    },
    (err) => {
        console.log("Can not connect to the database" + err);
    }
);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


//Routes
const usersRouter = require("./routes/user.routes");
app.use("/users", usersRouter);