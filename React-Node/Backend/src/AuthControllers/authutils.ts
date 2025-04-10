import fs from "fs";
import path from "path";
import { SignUpRequest, User } from "./types";

const usersFile = path.join(__dirname, "users.json");

function loadUsers(){
 if(!fs.existsSync(usersFile)){
  fs.writeFileSync(usersFile, JSON.stringify([]));
 }
 const data= fs.readFileSync(usersFile);
 return JSON.parse(data.toString());
}

function addUser(user:SignUpRequest){
 const users = loadUsers();
 const newUser={
  ...user,
  id:users.length + 1
 }
 console.log(newUser);
 users.push(newUser);
 fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

function findUser(email:string,password:string){
 const users = loadUsers();
 return users.find((user:User) => user.email === email&& user.password === password);
}


export const UserHandler={
 addUser,
 findUser
}