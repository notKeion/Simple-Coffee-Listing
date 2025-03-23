import React from "react";


const FilterSwitch = ({ filter, setFilter }) => {  

  return (
    <div className="flex flex-row gap-2">

      <button
        className={'py-1.5 px-3 rounded-lg text-sm font-semibold text-white ' + (filter === "all" ? "bg-stone-400" : "")}
        onClick={() => setFilter("all")}
      >
        All Products
      </button>
      <button
        className={'py-1.5 px-3 rounded-lg text-sm font-semibold text-white '+ (filter === "available" ? "bg-stone-400" : "")}
        onClick={() => setFilter("available")}
      >
        Available Now
      </button>
    </div>
  );
}
export default FilterSwitch;