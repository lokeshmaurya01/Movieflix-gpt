import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-99vw aspect-video pt-[35%] md:pt-[12%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black text-opacity-70">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3 font-semibold">
        {overview}
      </p>
      <div className="">
        <button className="bg-white text-black text-base p-1 w-auto px-6 md:text-lg md:p-2 md:w-auto md:px-10 rounded-lg bg-opacity-70">
          Trailer
        </button>
        <button className="mx-2 bg-slate-500 text-white text-base p-1 w-auto px-6 md:text-lg md:p-2 md:w-auto md:px-10 rounded-lg bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
