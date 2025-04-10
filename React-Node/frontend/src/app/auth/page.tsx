"use client"
import zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "../_provider/userProvider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const authSchema = zod.object({
 email: zod.string().min(1, "email is required"),
 password: zod.string().min(1, "Password is required"),
 username: zod.string().optional(),
});

const signInSchema = authSchema.pick({
 email: true,
 password: true,
});

const signUpSchema = authSchema;

export default function Auth() {
 const { login, signup } = useUser();
 const [isSignIn, setIsSignIn] = useState(true);
 const {
 handleSubmit,
 register,
 formState: { isSubmitting, errors },
 reset,
 } = useForm({
 resolver: isSignIn ? zodResolver(signInSchema) : zodResolver(signUpSchema),
 defaultValues: isSignIn
  ? {
   email: "",
   password: "",
   }
  : {
   email: "",
   password: "",
   username: "",
   },
 });
const toggleForm = () => {
 setIsSignIn((prev) => {
   const newIsSignIn = !prev;
   reset(
     newIsSignIn
       ? { email: "", password: "" }
       : { email: "", password: "", username: "" },
     { keepDefaultValues: true }
   );
   return newIsSignIn;
 });
};
 function handleSignIn(data: zod.infer<typeof signInSchema>) {
 const user = {
  email: data.email,
  password: data.password,
 };
 console.log(user);
 login(user.email, user.password);
 reset();
 }
 function handleSignUp(data: zod.infer<typeof signUpSchema>) {
 signup(data.email, data.password, data.username as string);
 reset();
 }
 return (
 <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
  {isSignIn ? (
   <>
   <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
    Sign In
   </h2>
   <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
    <div>
    <Input
     type="text"
     {...register("email")}
     placeholder="Email"
     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.email && (
     <span className="text-sm text-red-500">{errors.email.message}</span>
    )}
    </div>
    <div>
    <Input
     type="password"
     {...register("password")}
     placeholder="Password"
     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.password && (
     <span className="text-sm text-red-500">{errors.password.message}</span>
    )}
    </div>
    <Button
    type="submit"
    disabled={isSubmitting}
    className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-50"
    >
    {isSubmitting ? "Signing in..." : "Sign In"}
    </Button>
    <Button
    type="button"
    onClick={toggleForm}
    className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-100"
    >
    Don't have an account? Sign Up
    </Button>
   </form>
   </>
  ) : (
   <>
   <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
    Sign Up
   </h2>
   <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
    <div>
    <Input
     type="text"
     {...register("username")}
     placeholder="Username"
     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.username && (
     <span className="text-sm text-red-500">{errors.username.message}</span>
    )}
    </div>
    <div>
    <Input
     type="text"
     {...register("email")}
     placeholder="Email"
     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.email && (
     <span className="text-sm text-red-500">{errors.email.message}</span>
    )}
    </div>
    <div>
    <Input
     type="password"
     {...register("password")}
     placeholder="Password"
     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.password && (
     <span className="text-sm text-red-500">{errors.password.message}</span>
    )}
    </div>
    <Button
    type="submit"
    disabled={isSubmitting}
    className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-50"
    >
    {isSubmitting ? "Signing up..." : "Sign Up"}
    </Button>
    <Button
    type="button"
    onClick={toggleForm}
    className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-100"
    >
    Already have an account? Sign In
    </Button>
   </form>
   </>
  )}
  </div>
 </div>
 );
}