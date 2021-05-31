import React from "react";
import { Avatar } from "../components/Avatar";

import { ViewGridIcon } from "@heroicons/react/outline";
export const Header = () => {
  return (
    <header className="flex flex-between p-5 w-full text-xs text-gray-700">
      {/* left */}
      <div className="w-1/2 flex space-x-4 items-center ">
        <p className="link">About</p>
        <p>store</p>
      </div>
      {/* right */}
      <div className="w-1/2 flex justify-end space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer" />
        <Avatar url="https://images.unsplash.com/photo-1564932436587-c6ea959a4053?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80" />
      </div>
    </header>
  );
};
