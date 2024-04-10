import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black bg-opacity-40 rounded-md grid grid-cols-12"
        action=""
      >
        <input
          className=" col-span-9 p-4 m-4 rounded-md"
          type="text"
          placeholder="What do you wanna watch today"
        />
        <button className=" col-span-3 m-5 py-2 px-4 bg-red-500 text-white rounded-mg text-xl rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
