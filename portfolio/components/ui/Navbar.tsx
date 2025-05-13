import backgroundImage from "../../app/public/profile.jpeg"
import "../../app/navbar.css"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"


export default function Navbar(){
    const navLinks = {

    }
    return(
        // desktop navigation.
        <header className = "text-white w-full">
            <nav className = "sticky top-0 z-50 bg-transparent flex justify-between items-center max-w-5xl mx-auto">
                <div className = "flex items-center gap-[1vw]">
                    {/* <img className = "h-[60px] w-[60px] rounded-full p-1" id = "profileImage" 
                    src ="profile.jpeg" alt = "..."></img> */}
                    <p className = "p-3 text-lg">Shrikar Siro</p>
                </div>
                {/**have one div element for the list containing links. */}
                <div className = "">
                    <ul className = "hidden md:flex items-center gap-[1vw] font-normal">
                        <li>
                            <Button variant="ghost">
                                <a href = "#about">About</a>
                            </Button>
                        </li>
                        <li>
                            <Button variant="ghost">
                                <a href = "#experience">Experience</a>
                            </Button>
                        </li>
                        <li>
                            <Button variant="ghost">
                                <a href = "#projects">Projects</a>
                            </Button>
                        </li>
                        <li>
                            <Button variant="ghost">
                                <a href = "#skills">Skills</a>
                            </Button>
                        </li>
                        <li>
                            <Button variant="ghost">
                                <a href = "#contact">Contact</a>
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/** mobile navigation:  */}
            <div className = "md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu className = "p-0 text-white w-7 h-7" />
                    </SheetTrigger>
                    <SheetContent side="right" className = "w-64">
                        <SheetHeader>
                            <SheetTitle>Check Out...</SheetTitle>
                        </SheetHeader>
                        <ul className = "flex flex-col gap-y-4">
                            <li><a className = "p-5 transform transition duration-200 hover:underline" href = "#About">About</a></li>
                            <li><a className = "p-5 transform transition duration-200 hover:underline" href = "#Experience">Experience</a></li>
                            <li><a className = "p-5 transform transition duration-200 hover:underline" href = "#Projects">Projects</a></li>
                            <li><a className = "p-5 transform transition duration-200 hover:underline" href = "#Skills">Skills</a></li>
                            <li><a className = "p-5 transform transition duration-200 hover:underline" href = "#Contact">Contact</a></li>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </header>


    );
}