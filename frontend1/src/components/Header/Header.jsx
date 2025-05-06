import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidebar from '../Body/SideBar/Sidebar';
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    // Full-width header that sticks to the top-left
    <header className="fixed top-0 left-0 w-full h-15 z-50 bg-white border-b border-gray-300">
      {/* Inner container centered and limited width */}
      <div className="max-w-[1192px] mx-auto h-full px-2 flex items-center justify-between whitespace-nowrap">

        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-2 flex-shrink-0 ">
          {/* <!-- Menu Icon Button --> */}
          <button
        className="block md:hidden p-2 rounded hover:bg-gray-100 focus:outline-none"
        onClick={() => setIsSidebarOpen(true)}
      >
        <MenuIcon fontSize="medium" />
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-md p-4 transition-transform">
            {/* Close Button */}
            <button
              className="mb-4 p-2 rounded hover:bg-gray-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <CloseIcon fontSize="medium" />
            </button>

            {/* Your Sidebar Content */}
            <aside className="w-[220px] min-w-[200px]  p-4 overflow-y-auto hidden md:block">
                        <Sidebar />
            </aside>
          </div>
        </div>
      )}
          {/* <!-- Logo --> */}
          <div className="w-16 h-16 rounded flex items-center justify-start font-bold text-lg">
            <img className="site-logo__img" src="https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" style={{ aspectRatio: "10 / 8" }} alt="DEV Community" />
          </div>

          {/* <!-- Search Bar (Centered) --> */}
          <div className="flex-1 relative" style={{width: "400px"}}>
            <form method="get" action="/search" className="flex w-full max-w-lg"  role="search">
              <input
                type="text"
                name="q"
                id="search-input"
                placeholder="Search..."
                // autocomplete="off"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search term"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="crayons-icon c-btn__icon" focusable="false">
                  <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
                </svg>
              </button>
            </form>
          </div>

        </div>


        {/* RIGHT: Create Post, Mod, Icons */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="hidden md:flex ml-auto items-center">
            <a
              href="/new"
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mr-2 whitespace-nowrap"
            >
              Create Post
            </a>
          </span>
          <a
            href="/notifications"
            className="p-2 hover:bg-gray-100 rounded relative"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aclpq7zqf32nr7m3h672foa7xignr2iq" className="crayons-icon"><title id="aclpq7zqf32nr7m3h672foa7xignr2iq">Notifications</title>
    <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
</svg>
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full" id="notifications-number"></span>
          </a>

          <button
            className="rounded-full p-1 hover:bg-gray-100 focus:outline-none"
            aria-label="User menu"
          >
            <AccountCircleIcon className="cursor-pointer hover:text-blue-600" width="24" height="24" fontSize="medium" />
          </button>
        </div>

      </div>
      
    </header>
  );
};

export default Header;
