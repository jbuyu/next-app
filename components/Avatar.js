import React from "react";
import Image from 'next/image'
export const Avatar = ({ url }) => {
  return <img className="rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110" loading="lazy" src={url} alt="profile_piq" height='48' width='48'  />;
};
