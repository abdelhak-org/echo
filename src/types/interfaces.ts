import { ObjectId } from "mongodb";
export interface Post {
    userId?:number | string;
    _id?:any
    title: string;
    description?: string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
    comments?: Comment[];
    likes?: number;
    dislikes?: number;

}
export interface Comment {
    userId?:number | string;
    id?:number | string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
    likes?: number;
    dislikes?: number;
}
export type  Posts = Post[];

export interface comments {
    comments: Comment[];
}
export interface User {
    id?:number | string;
    username?: string;
    email: string;
    password: number | string;
}

export type Users  =  User[];
