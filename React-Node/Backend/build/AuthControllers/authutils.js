"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHandler = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const usersFile = path_1.default.join(__dirname, "users.json");
function loadUsers() {
    if (!fs_1.default.existsSync(usersFile)) {
        fs_1.default.writeFileSync(usersFile, JSON.stringify([]));
    }
    const data = fs_1.default.readFileSync(usersFile);
    return JSON.parse(data.toString());
}
function addUser(user) {
    const users = loadUsers();
    const newUser = Object.assign(Object.assign({}, user), { id: users.length + 1 });
    console.log(newUser);
    users.push(newUser);
    fs_1.default.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}
function findUser(email, password) {
    const users = loadUsers();
    return users.find((user) => user.email === email && user.password === password);
}
exports.UserHandler = {
    addUser,
    findUser
};
