
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getPosts } from "@/actions/posts";
const PostsList = async () => {
  const posts = await getPosts()
  if (!posts) return null;

  return (
    <div>
      {posts?.map((post, index) => {
        return (
          <Accordion
            key={index}
            type="single"
            collapsible
            className="bg-white dark:bg-neutral-700 hover:bg-gray-200 px-8 my-2 border rounded-md border-gray-300"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>{post?.title as string} </AccordionTrigger>
              <AccordionContent>{post?.description as string}</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};

export default PostsList;
