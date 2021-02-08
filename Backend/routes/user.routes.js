const router = require("express").Router();
let User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



//@route POST
//Validate Login
router.route("/").post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ username }).then((user) => {
        if (!user) return res.status(400).json({ msg: "Invalid User" });

        //decrypt password using bycrypt
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });
            jwt.sign(
                { id: user.id },
                process.env.jwtSecret,
                { expiresIn: 36000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            username: user.username,
                            email: user.email,
                            contact: user.contact,
                        },
                    });
                }
            );
        });
    });
});

//@route POST
//@desc Add new User
router.route("/add").post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const contact = req.body.contact;


    const newUser = new User({
        username,
        email,
        password,
        contact,

    });

    //password encryption using bcrypt
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
                .save()
                .then(() => res.json("User added!"))
                .catch((err) => res.status(400).json("Error: " + err));
        });
    });
});

//@route POST
//@desc Update specific User using ID
router.route("/update/:id").post((req, res) => {
    User.findById(req.params.id).then((users) => {
        users.username = req.body.username;
        users.email = req.body.email;
        users.password = req.body.password;
        users.contact = req.body.contact;

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(users.password, salt, (err, hash) => {
                if (err) throw err;
                users.password = hash;
                users
                    .save()
                    .then(() => res.json("User Updated!"))
                    .catch((err) => res.status(400).json("Error: " + err));
            });
        });
    });
});

//@route DELETE
//@desc Delete specific user using ID
router.route("/delete/:id").delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json("User deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

//@route GET
//@desc Get Specific User Using ID
router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));
});

//@route GET
//@desc Get all users data (Password is encrypted)
router.route("/").get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));
});

//Export User Route
module.exports = router;