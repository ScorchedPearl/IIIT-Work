"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_1 = require("./AuthControllers/auth");
const post_1 = require("./postControllers/post");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/auth", auth_1.authHandler.authRouter);
app.use("/posts", post_1.PostHandler.postRouter);
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
