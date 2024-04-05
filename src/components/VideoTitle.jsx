import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black text-opacity-70">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 font-semibold">{overview}</p>
      <div className="">
        <button className="bg-white text-black text-lg  p-2 w-25 px-10 rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-slate-500 text-white text-lg  p-2 w-25 px-10 bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
