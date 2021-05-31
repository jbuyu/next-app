import Head from "next/head";
import { Avatar } from "../components/Avatar";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nexter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      {/* body */}
      <form className="flex flex-col items-center mt-44 flex-grow">
        <Image
          height={100}
          width={200}
          // src="https://cdn.svgporn.com/logos/apostrophe.svg"
          src="https://cdn.svgporn.com/logos/sherlock-icon.svg"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500 " />
          <input type="text" className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 spae-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I'm feeling Lucky</button>
        </div>
      </form>
      <Footer/>
    </div>
  );
}
