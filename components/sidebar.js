import React from "react";

function sidebar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />
      <div className="min-h-screen flex flex-row fixed bg-gray-100 text-black w-[18.6%]  ">
        <div className="flex flex-col w-[100%] bg-gray-100 rounded-r-3xl overflow-hidden  ">
          <div className="flex items-center justify-center h-20 shadow-md  ">
            <img
              src="https://cdn.discordapp.com/attachments/1063052883559452682/1063105046880981072/vjti-college-logo-707F46CDA8-seeklogo.png"
              class="mr-3 sm:h-20 py-1"
              alt="Flowbite Logo"
            />
            <h1 className="text-3xl uppercase text-indigo-500">VJTI</h1>
          </div>
          <ul className="flex flex-col py-6  ">
            <li>
              <a
                href="/dashboard"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-white hover:bg-green-700 hover:rounded-full"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400">
                  <i className="hover:text-white bx bx-home"></i>
                </span>
                <span className="text-3xl font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-white hover:bg-green-700 hover:rounded-full"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400">
                  <i className="hover:text-white bx bx-chat"></i>
                </span>
                <span className="text-3xl font-medium">Chat</span>
              </a>
            </li>
            <li>
              <a
                href="/myprojects"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-white hover:bg-green-700 hover:rounded-full"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400">
                  <i class=" hover:text-white bx bx-book-add"></i>
                </span>
                <span className="text-3xl font-medium">My Project</span>
              </a>
            </li>
            <li>
              <a
                href="/profilepage"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-white hover:bg-green-700 hover:rounded-full"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400">
                  <i className="hover:text-white bx bx-user"></i>
                </span>
                <span className="text-3xl font-medium">Profile</span>
              </a>
            </li>
            <li>
              <a
                href="/Deadline"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-white hover:bg-green-700 hover:rounded-full"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400">
                  <i className="hover:text-white bx bx-bell"></i>
                </span>
                <span className="text-3xl font-medium">Deadlines</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-4 transition-transform ease-in duration-200 text-gray-500 hover:text-white hover:bg-green-700 hover:rounded-full"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400">
                  <i className="hover:hover:text-white bx bx-log-out"></i>
                </span>
                <span className="text-3xl font-medium">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default sidebar;
