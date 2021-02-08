const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//User Model
const userSchema = new Schema(
    {
        username:{ type: String, required: true, trim: true},
        email: { type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true, trim: true },
        contact: { type: String, required: true, trim: true },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

//Export User
module.exports = User;