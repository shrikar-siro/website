export default function Footer() {
  return (
    <>
      <footer className="border-t border-white/20">
        <div className="flex flex-col justify-center items-center pt-20 pb-5">
          <div className="text-sm">
            <div>
              <ul className="flex items-center justify-center gap-10 mb-5">
                <li>
                  <div className="w-12 h-12 flex items-center justify-center border-1 rounded-full p-3 text-gray-400 transform transition duration-200 hover:text-rose-500 hover:bg-black/30 hover:border-2">
                    <i className="fa-brands fa-instagram text-2xl"></i>
                  </div>
                </li>
                <li>
                  <div className="w-12 h-12 flex items-center justify-center border-1 rounded-full p-3 text-gray-400 transform transition duration-200 hover:text-white hover:bg-black/30 hover:border-2">
                    <i className="fa-brands fa-x-twitter text-2xl"></i>
                  </div>
                </li>
                <li>
                  <div className="w-12 h-12 flex items-center justify-center border-1 rounded-full p-3 text-gray-400 transform transition-colors duration-200 hover:text-indigo-600 hover:bg-black/30 hover:border-2">
                    <i className="fa-brands fa-tiktok text-2xl"></i>
                  </div>
                </li>
                <li>
                  <div className="w-12 h-12 flex items-center justify-center border-1 rounded-full p-3 text-gray-400 transform transition duration-200 hover:text-yellow-500 hover:bg-black/30 hover:border-2">
                    <i className="fa-brands fa-snapchat text-2xl"></i>
                  </div>
                </li>
              </ul>
            </div>
            <p>Copyright © Shrikar Sirobhushanam 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
