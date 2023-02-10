import React from "react";

function myprojects() {
  return (
    <div className="m-12  ">
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Create New Projects
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
        <a
          href="/newproject"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Add New
        </a>
      </div>
      <div className="mt-[3%]">
        <hr />
      </div>

      <div>
        <div className="mx-[1%] my-[1%]">
          <h1 className="text-3xl">My Projects</h1>
        </div>
        <hr />
        <div className="bg-gray-300 w-[100%] m-auto h-[50%] rounded-full mt-[10px] mb-[10px]">
          <div className="h-full">
            <a>h</a>
          </div>
          <div className="h-full">
            <a>h</a>
          </div>
          <div className="h-full">
            <a>h</a>
          </div>
        </div>
        <div className="bg-gray-300 w-[100%] m-auto h-[50%] rounded-full mt-[10px] mb-[10px]">
          <div className="h-full">
            <a>h</a>
          </div>
          <div className="h-full">
            <a>h</a>
          </div>
          <div className="h-full">
            <a>h</a>
          </div>
        </div>
        <div className="bg-gray-300 w-[100%] m-auto h-[50%] rounded-full mt-[10px] mb-[10px]">
          <div className="h-full">
            <a>h</a>
          </div>
          <div className="h-full">
            <a>h</a>
          </div>
          <div className="h-full">
            <a>h</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default myprojects;
