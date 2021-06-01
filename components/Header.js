import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { Avatar } from "./Avatar";
function Header() {
  const router = useRouter();
  const searchInputRef = useRef();
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center" >
        <Image
          src="data:image/png;base64,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"
          height={64}
          width={124}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center flex-grow">
          <input
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125
          "
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button onClick={search} hidden type="submit">
            Search
          </button>

        </form>
          <Avatar className="ml-auto" url="https://images.unsplash.com/photo-1564932436587-c6ea959a4053?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80" />
      </div>
    </header>
  );
}

export default Header;
