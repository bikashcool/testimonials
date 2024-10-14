import React, { useState } from "react";
import Cards from "./Cards";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    if(index-1 < 0){
        setIndex(reviews.length - 1);
    }else{
        setIndex(index-1);
    }
  };

  const rightShiftHandler = () => {
    if(index + 1 >= reviews.length){
        setIndex(0);
    }else{
        setIndex(index + 1);
    }
  };

  const surpriseHandler = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };
  return (
    <div className="w-[85vw] md:w-[700px] rounded-md bg-[#5547a76d] flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl">
      <Cards review={reviews[index]} />
      <div className="flex text-3xl mt-5 mb-4 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-white"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-white"
        >
          <FaChevronRight />
        </button>
      </div>
      <div>
        <button
          onClick={surpriseHandler}
          className="bg-violet-500 hover:bg-[#8b58ac9b] shadow-lg transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-lg text-white"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
