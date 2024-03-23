import { Button } from "../ui/button"
import { ModeToggle } from "../ModeToggle"

const Navbar = () => {
  return (
    <nav className="w-screen h-[105px]  flex justify-between items-center px-16
      dark:text-neutral-100 dark:bg-neutral-950 
       bg-neutral-100
      
      ">
      <h4>ECHO BLOG</h4>
      <div>
        <ul className="flex space-x-8">
          <li>Home</li>
          <li>About </li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
        <div className="flex space-x-8">
            <ModeToggle />
            <Button variant={"outline"}>Sign Up</Button>
            <Button>Sign In</Button>
        </div>
    </nav>
  )
}

export default Navbar
