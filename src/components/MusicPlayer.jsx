import React, { useEffect, useRef, useState } from "react";
import { Next, Pause, Play, Previous } from "./IconButtons.jsx";
import { TRACKS } from "../data/tracks.js";
import RangeSlider from "./RangeSlider.jsx";
import SoundSlider from "./SoundSlider.jsx";

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isIconClicked, setIsIconClicked] = useState(false);

  const audioRef = useRef(null);


useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = volume/100;
  }
   setTimeout(() => {
    setIsIconClicked(false)
  }, 5000);
}, [volume]);





  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [currentTrack, isPlaying]);

  const handleplaypause = () => {
    setIsPlaying(!isPlaying);
  };
  const handleNext = () => {
    setCurrentTrack((currentTrack + 1) % TRACKS.length);
  };
  const handlePrev = () => {
    setCurrentTrack(currentTrack == 0 ? TRACKS.length - 1 : currentTrack - 1);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  }

  const handleVolumeChange = (e) => {
  setVolume(Number(e.target.value));

};

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2,'0');
    const seconds = Math.floor(time % 60).toString().padStart(2,'0');
    return `${minutes}:${seconds}`
  }


  const { title, artist, cover, src } = TRACKS[currentTrack];

  return (
    <div className="music-player-container  text-gray-100 min-h-screen flex flex-col items-center lg:items-start  lg:ml-40 justify-center ">
      {/* <h1 className="font-bold text-xl ml-32 ">Music Player 🎼</h1>  */}
      <div className="music-player-wrapper w-full max-w-[400px] p-6 bg-cover">
        <div className="music-player-content flex flex-col items-center border border-solid border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.01)] backdrop-blur-[2px] py-8 px-4 rounded-[20px]  shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
          <img
            src={cover}
            alt="cover"
            className="music-cover w-40 h-40 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] object-cover mb-4"
          />

          <div className="title-wrapper w-full  overflow-hidden ">
            <h2 className="track-title text-2xl font-semibold my-2 mx-0 whitespace-nowrap animate-scroll">
              {title}
            </h2>
          </div>
          <p className="track-artist text-base text-gray-100 mb-8">{artist}</p>

          <div className="timeline flex justify-center items-center gap-3 w-full mb-5">
            <p className="text-xs">{formatTime(currentTime)}</p>
            <RangeSlider max={duration} value={currentTime} onChange={handleSeek} />
            <p  className="text-xs">{formatTime(duration)}</p>
          </div>

          <div className="controls flex  gap-8">
            <Previous onClick={handlePrev} />
            {isPlaying ? (
              <Pause onClick={handleplaypause} />
            ) : (
              <Play onClick={handleplaypause} />
            )}
            <Next onClick={handleNext} />
           
          </div>
         <SoundSlider value={volume} onChange={handleVolumeChange} isIconClicked = {isIconClicked} setIsIconClicked={setIsIconClicked}/>

          

          <audio ref={audioRef} src={src} preload="metadata" onLoadedMetadata={(e)=>setDuration(e.target.duration)} onTimeUpdate={(e)=>{setCurrentTime(e.target.currentTime)} }  onEnded={handleNext}   onError={(e) => console.error("AUDIO LOAD ERROR", e.target.src)}
/>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
