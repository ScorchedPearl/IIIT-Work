export interface Post{
 id:number;
 title:string;
 content:string;
 likes:Like;
 username:string;
}

interface Like{
 count:number;
 likedBy:string[];
}
