import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
const router = useRouter();
export const Form = () => {
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <form className="flex flex-col items-center mt-44 flex-grow w-5/6">
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
  );
};
