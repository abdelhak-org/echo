import Articles from "@/components/articles/Articles";
import HeroSection from "@/components/heroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter";


export default function Home() {

  return (
   <main className="w-full h-full">
   <HeroSection  />
   <Articles />
   <NewsLetter/>
   </main>
  );
}
