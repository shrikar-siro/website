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

export default function Navbar(){
    const navLinks = {

    }
    return(
        // desktop navigation.
        <header className = "bg-transparent text-black">
            <nav className = "flex justify-between items-center w-[85%] mx-auto">
                <div className = "flex items-center gap-[1vw]">
                    {/* <img className = "h-[60px] w-[60px] rounded-full p-1" id = "profileImage" 
                    src ="profile.jpeg" alt = "..."></img> */}
                    <p className = "p-3 text-lg">Shrikar Siro</p>
                </div>
                {/**have one div element for the list containing links. */}
                <div className = "">
                    <ul className = "hidden md:flex items-center gap-[1vw]">
                        <li><a className = "px-4 py-2 rounded-full hover:bg-gray-200" href = "#">About</a></li>
                        <li><a className = "px-4 py-2 rounded-full hover:bg-gray-200" href = "#">Experience</a></li>
                        <li><a className = "px-4 py-2 rounded-full hover:bg-gray-200" href = "#">Projects</a></li>
                        <li><a className = "px-4 py-2 rounded-full hover:bg-gray-200" href = "#">Skills</a></li>
                        <li><a className = "px-4 py-2 rounded-full hover:bg-gray-200" href = "#">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/** mobile navigation:  */}
            <div className = "md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu className = "p-0 text-black w-7 h-7" />
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