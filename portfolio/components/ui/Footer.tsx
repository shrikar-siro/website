import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const linkedinIcon = (
  <FontAwesomeIcon icon={["fab", "linkedin"]} className="text-2xl" />
);
const githubIcon = (
  <FontAwesomeIcon icon={["fab", "github"]} className="text-2xl" />
);
const instagramIcon = (
  <FontAwesomeIcon icon={["fab", "instagram"]} className="text-2xl" />
);
export default function Footer() {
  return (
    <>
      <footer className="border-t border-white/20">
        <div className="flex flex-col justify-center items-center pt-10 pb-5">
          <div className="text-xs">
            <div>
              <ul className="flex items-center justify-center gap-5 mb-5">
                <a
                  href="https://www.linkedin.com/in/shrikarsiro/"
                  target="_blank"
                >
                  <li>
                    <div className="w-12 h-12 flex items-center justify-center border-1 rounded-full p-3 text-gray-400 transform transition duration-200 hover:text-blue-500 hover:bg-black/30">
                      {linkedinIcon}
                    </div>
                  </li>
                </a>
                <a href="https://github.com/shrikar-siro" target="_blank">
                  <li>
                    <div className="w-12 h-12 flex items-center justify-center border-1 rounded-full p-3 text-gray-400 transform transition duration-200 hover:text-white hover:bg-black/30">
                      {githubIcon}
                    </div>
                  </li>
                </a>
                <a
                  href="https://www.instagram.com/shrikar_siro/"
                  target="_blank"
                >
                  <li>
                    <div className="w-12 h-12 flex items-center justify-center border-1 rounded-full p-3 text-gray-400 transform transition duration-200 hover:text-rose-600 hover:bg-black/30">
                      {instagramIcon}
                    </div>
                  </li>
                </a>
              </ul>
            </div>
            <p>Copyright © Shrikar Sirobhushanam 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
