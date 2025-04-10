export interface User{
  id:number,
  username:string,
  email:string,
  password:string,
}

export interface SignUpRequest{
  username:string,
  email:string,
  password:string,
}
export interface SignInRequest{
  email:string,
  password:string,
}