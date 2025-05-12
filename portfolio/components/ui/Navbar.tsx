import backgroundImage from "../../app/public/profile.jpeg"
import "../../app/navbar.css"
export default function Navbar(){
    const navLinks = {

    }
    return(
        <header className = "bg-black text-white">
            <nav className = "flex justify-between items-center w-[85%] mx-auto">
                <div className = "flex items-center gap-[1vw]">
                    <img className = "h-[80px] w-[80px] rounded-full border-gray-300 p-3" id = "profileImage" src ="profile.jpeg" alt = "..."></img>
                    <p>Shrikar Siro</p>
                </div>
                {/**have one div element for the list containing links. */}
                <div className = "">
                    <ul className = "flex items-center gap-[1vw]">
                        <li><a className = "px-4 py-2 rounded-full hover:bg-gray-600" href = "#">About</a></li>
                        <li><a className = "px-4 py-2 rounded-full hover:bg-gray-600" href = "#">Experience</a></li>
                        <li><a className = "px-4 py-2 rounded-full hover:bg-gray-600" href = "#">Projects</a></li>
                        <li><a className = "px-4 py-2 rounded-full hover:bg-gray-600" href = "#">Skills</a></li>
                        <li><a className = "px-4 py-2 rounded-full hover:bg-gray-600" href = "#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}