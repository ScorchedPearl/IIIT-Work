"use client"
import axios from "axios";
import { createContext,useContext,useState,useCallback } from "react";

interface User{
  id: string;
  username: string;
  email: string;
}

interface UserContextType {
 user:User;
 logout:() => void;
 login:(email:string,password:string) => void;
 signup:(email:string,
  password:string,
  username:string,) => void;
}
const UserContext = createContext({
 user: {} as User,
 logout: () => {},
 login: (email:string,password:string) => {},
 signup: (email:string,
  password:string,
  username:string,) => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
 const [user,setUser]=useState<User>({} as User);

 const login = useCallback(async(email:string,password:string) => {
   const user:User=await axios.post("http://localhost:8000/auth/signin",{
    email,
    password,
   })
   setUser(user);
 }, []);

 const logout = useCallback(() => {
   setUser({} as User);
 }, []);

 const signup = useCallback(async(
  email:string,
  password:string,
  username:string,
 ) => {
  const newUser:User=await axios.post("http://localhost:8000/auth/signup",{
   email,
   password,
   username,
  })
   setUser(newUser);
 }, []);

 return (
   <UserContext.Provider value={{ user, login, logout, signup }}>
     {children}
   </UserContext.Provider>
 );
}

export const useUser=() => useContext(UserContext);