import React from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

const Cards = ({ review }) => {
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-10 mx-auto">
        <img
          alt="id-photo"
          className="w-[140px] h-[140px] aspect-square rounded-full z-2"
          src={review.image}
        />
        <div className="absolute w-[140px] h-[140px] bg-violet-400 rounded-full top-[-6px] z-[-10] left-[10px]"></div>
      </div>
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize text-[#d49999] tracking-wider">
          {review.name}
        </p>
        <p className="uppercase text-sm text-[#88beea]">{review.job}</p>
      </div>
      <div className="text-violet-700 mx-auto mt-5">
        <FaQuoteLeft />
      </div>
      <div className="text-center mt-4 text-[#67a4d0]">{review.text}</div>
      <div className="text-violet-700 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Cards;
