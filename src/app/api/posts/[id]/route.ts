import Posts from "../../../posts/data"


export async function GET(_request: Request, {params}:{params:{id:string}} ){
     const postId = parseInt(params.id);
    const post =  Posts.filter((x)=> x.id === postId );
    
    return  Response.json(post);
 }
 
 export async function DELETE(_request: Request, {params}:{params:{id:string}} ){
    const postId = parseInt(params.id);
   const posts =  Posts.filter((x)=> x.id !== postId );
   
   return  Response.json(posts);
}

 
export async function PATCH(request: Request, {params}:{params:{id:string}} ){
   const body = await request.json();
   const {title} = body;
   const postId = parseInt(params.id);
  const index =  Posts.findIndex((x)=> x.id === postId );
  Posts[index].title = title;
  
  return  Response.json(Posts[index]);
}
