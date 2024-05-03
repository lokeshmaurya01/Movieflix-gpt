import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black z-50">
      <div className="p-3 animate-spin drop-shadow-3xl bg-gradient-to-bl from-[#675ff3] via-[#0acf03] to-[#d1c4c4] md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
        <div className="rounded-full h-full w-full bg-black dark:bg-black background-blur-md"></div>
      </div>
    </div>
  );
};

export default Loader;
