"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hiHandler = void 0;
const express_1 = require("express");
const hiRouter = (0, express_1.Router)();
hiRouter.post("/signin", (req, res, next) => {
    const token = req.headers.authorization;
    console.log("Received token:", token);
    if (token === "123") {
        next();
    }
    else {
        res.status(401).send("Unauthorized");
    }
});
exports.hiHandler = {
    hiRouter
};
