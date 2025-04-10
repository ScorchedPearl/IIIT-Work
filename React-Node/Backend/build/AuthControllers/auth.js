"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authHandler = void 0;
const express_1 = require("express");
const authutils_1 = require("./authutils");
const authRouter = (0, express_1.Router)();
authRouter.post("/signin", (req, res) => {
    const { email, password } = req.body;
    const user = authutils_1.UserHandler.findUser(email, password);
    if (!user) {
        res.status(401).send({
            message: "Invalid email or password",
        });
    }
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
    };
    res.status(200).send({
        message: "User signed in successfully",
        user: payload,
    });
});
authRouter.post("/signup", (req, res) => {
    const { username, email, password } = req.body;
    const payload = {
        username: username,
        email: email,
        password: password,
    };
    const user = authutils_1.UserHandler.addUser(payload);
    res.status(200).send({
        message: "User signed up successfully",
        user: user,
    });
});
exports.authHandler = { authRouter };
