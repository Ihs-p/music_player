import React from "react";
import { IoPlaySharp,IoPlaySkipForward,IoPlaySkipBackSharp   } from "react-icons/io5";
import { MdPause } from "react-icons/md";


const IconButtons = ({ icon:Icon, onClick }) => {
  return (
    <button className="flex bg-[rgba(255,255,255,0.05)] border border-solid border-[rgba(255,255,255,0.25)] p-3 rounded-full cursor-pointer backdrop-blur-[2px]
    hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.35)] " onClick={onClick}>
      <Icon  size={24}/>
    </button>
  );
};

export default IconButtons;

const Play = ({ onClick }) => {
  return <IconButtons icon={IoPlaySharp} onClick={onClick} />;
};

const Pause = ({ onClick }) => {
  return <IconButtons icon={MdPause 
} onClick={onClick} />;
};

const Next = ({ onClick }) => {
  return <IconButtons icon={IoPlaySkipForward} onClick={onClick} />;
};

const Previous = ({ onClick }) => {
  return <IconButtons icon={IoPlaySkipBackSharp} onClick={onClick} />;
};

export { Play, Pause, Next, Previous };
