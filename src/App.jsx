import "./App.css";
import React, { useState } from "react";
import FilterSwitch from "./Components/FilterSwitch";
import CoffeeList from "./Components/CoffeeList";
function App() {
  const [filter, setFilter] = useState("all");

  return (
    // This is the home Page
    <div className="relative flex">
      {/* Background Image */}
      <div className="absolute top-0 left-0 right-0 bg-red-400 flex z-[-1]">
        <img src="coffeefront.jpg" className="object-cover h-80 w-full " />
      </div>

      <section className="px-10 md:px-16 lg:px-20">
        <div className="flex flex-col items-center justify-center p-8 space-y-6 col-span-3">
          <h1 className="text-3xl md:text-4xl">Our Collection</h1>
          <p className="text-center justify-center text-stone-400 max-w-lg ">
            Introducing out coffee collection, a selection of unique coffees
            from different roast types, and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          {/* Filter Switch */}
          <FilterSwitch filter={filter} setFilter={setFilter} />
          {/* Coffee Listings */}
          <CoffeeList filter={filter} />
        </div>
      </section>
    </div>
  );
}

export default App;
