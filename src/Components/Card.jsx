import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function Card({ coffee }) {
  // name, image, price, rating, popular(bool),votes, available(bool), id
  return (
    <div className="flex flex-col my-4">
      <div className="relative rounded-xl overflow-clip mb-2">
        <img src={coffee.image} className="object-cover w-full" />
        {coffee.popular && (
          <div className="absolute top-2 left-2 bg-amber-300 text-stone-700 font-bold px-2.5 py-1 rounded-full text-sm">
            Popular
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-lg">{coffee.name}</span>
        <span className="bg-green-200 text-green-900 px-2.5 py-1 rounded-md font-bold text-sm self-center">
          {coffee.price}
        </span>
      </div>
      {coffee.rating ? (
        <div className="font-semibold flex items-center gap-1">
          <FaStar className="mr-0.5 text-xl text-amber-300" />
          <span>{coffee.rating ? coffee.rating : 0}</span>
          <span className="text-stone-600">({coffee.votes} votes)</span>
        </div>
      ) : (
        <div className="font-semibold flex items-center gap-1">
          <FaRegStar className="mr-0.5 text-xl text-stone-400" />
          <span className="text-stone-400 text-sm">No rating</span>
        </div>
      )}
    </div>
  );
}
export default Card;
