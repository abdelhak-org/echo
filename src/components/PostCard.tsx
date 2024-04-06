import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


interface PostCardProps {
    title: string;
    content: string;
    author?: string;
}

const PostCard= (props:PostCardProps) => {
  return (
     
<Card className="my-4 bg-neutral-100 ">
  <CardHeader>
    <CardTitle>{props.title}</CardTitle>
  </CardHeader>
  <CardContent>
    <p>{props.content}</p>
  </CardContent>
  <CardFooter>
    <p>{props.author}</p>
  </CardFooter>
</Card>

  )
}

export default PostCard
