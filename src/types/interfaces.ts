import { ObjectId } from "mongodb";


export interface Post {
    userId?:number | string;
    _id?:any
    id:number | string;  
    title: string;
    description?: string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
    comments?: Comment[];
    likes?: number;
    author:{
        name:string;
        src:string
    }

}
export interface Comment {
    userId?:number | string;
    id?:number | string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
    likes?: number;

}

export type  Posts = Post[];

export interface comments {
    comments: Comment[];
}
export interface User {
    userId:number | string;
    src: string;
    userName: string;
    email: string;
    password?: string;
    image?: string;
}

export type Users  =  User[];


export interface  AuthOptions {
    callbacks: {
        jwt({ token, user }: {
            token: any;
            user: any;
        }): Promise<any>;
        session({ session, token }: {
            session: any;
            token: any;
        }): Promise<any>;
    };
    session: {
        strategy: string;
        maxAge: number;
    };
    providers:any[];
    pages: {
        signIn: string;
    };
}