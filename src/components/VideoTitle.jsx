import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 font-semibold">{overview}</p>
      <div className="">
        <button className="bg-slate-500 text-white text-lg  p-2 w-25 px-10 bg-opacity-50 rounded-lg">
          ▶Play
        </button>
        <button className="mx-2 bg-slate-500 text-white text-lg  p-2 w-25 px-10 bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
