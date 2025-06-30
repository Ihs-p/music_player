import React, { useState } from "react";

const SoundSlider = ({ value, onChange , isIconClicked, setIsIconClicked,  }) => {

  return (
    <div className="relative flex items-center justify-center  gap-1  w-full ">
        <div className="flex flex-col absolute -right-1 -top-8 ">

      {/* Toggle Volume Icon */}
      <button onClick={() => setIsIconClicked(!isIconClicked)}>
        <span className="text-lg ">
          {value === 0 ? "🔇" : value < 30 ? "🔈" : value < 70 ? "🔉" : "🔊"}
        </span>
      </button>

      {/* Volume Slider (vertical, floating beside the icon) */}
      {isIconClicked && (
        <input
          type="range"
          value={value}
          onChange={onChange}
          style={{
            background: `linear-gradient(to right, #fafafa ${value}%, #0220374d ${value}%)`,
          }}
          className="slider w-20 rotate-[-90deg] absolute   -top-[50px] -right-[27px]   cursor-pointer appearance-none h-1  rounded-[50px]  "
        />
      )}
        </div>


    </div>
  );
};

export default SoundSlider;
