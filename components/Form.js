import React, { useRef } from "react";
import Image from "next/image";
import { Avatar } from "../components/Avatar";

import { ViewGridIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
export const Form = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <>
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
      <form className="flex flex-col items-center mt-44 flex-grow w-5/6 min-h-screen">
        <Image
          height={100}
          width={200}
          // src="https://cdn.svgporn.com/logos/apostrophe.svg"
          src="https://cdn.svgporn.com/logos/sherlock-icon.svg"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500 " />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 spae-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn">I'm feeling Lucky</button>
        </div>
      </form>
    </>
  );
};
