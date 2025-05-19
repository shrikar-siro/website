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
        <>
        <div id = "overlay"></div>
        <header className = "sticky top-0 z-50 backdrop-blur-md transform transition duration-200 hover:bg-black/30 p-4 border-b border-white/20">
            <nav className = "bg-transparent flex justify-between items-center mx-auto">
                <div className = "flex items-center">
                    <p className = "text-lg">Shrikar Siro</p>
                </div>
                {/**have one div element for the list containing links. */}
                <div className = "">
                    <ul className = "hidden md:flex items-center gap-auto font-normal">
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

                {/** mobile navigation:  
                 * need to have hamburger menu inside the nav tags, otherwise it won't be on same plane.
                */}
                <div className = "md:hidden">
                    <Sheet>
                        <SheetTrigger className = "flex items-center justify-center">
                            <Menu className = "p-0 text-white w-8 h-8" />
                        </SheetTrigger>
                        <SheetContent side="right" className = "w-64">
                            <SheetHeader>
                                <SheetTitle>Check Out...</SheetTitle>
                            </SheetHeader>
                            <ul className = "flex flex-col gap-y-4">
                                <li><a className = "p-5 transform transition duration-200 hover:underline" href = "#about">About</a></li>
                                <li><a className = "p-5 transform transition duration-200 hover:underline" href = "#experience">Experience</a></li>
                                <li><a className = "p-5 transform transition duration-200 hover:underline" href = "#projects">Projects</a></li>
                                <li><a className = "p-5 transform transition duration-200 hover:underline" href = "#skills">Skills</a></li>
                                <li><a className = "p-5 transform transition duration-200 hover:underline" href = "#contact">Contact</a></li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
        </>
    );
}