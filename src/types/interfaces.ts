export interface Post {
    userId?:number | string;
    id?:number | string;
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
export interface Posts {
    posts: Post[];
}
export interface comments {
    comments: Comment[];
}
export interface User {
    id?:number | string;
    username: string;
    email: string;
    password: number | string;
}