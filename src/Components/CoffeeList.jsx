import React, { useState, useEffect } from "react";
import Card from "./Card";

function CoffeeList({filter}) {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        // Use the data here
        setCoffeeData(data);
        console.log(data)
        // name, image, price, rating, popular(bool),votes, available(bool), id
      })
      .catch((error) => {
        // Handle any errors here
        console.log(error);
      });
  }, []);
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
    {coffeeData.map((coffee)=>(
        filter == "available" ? coffee.available && <Card key={coffee.id} coffee={coffee}/> : <Card key={coffee.id} coffee={coffee}/>
    ))}

  </div>
  );
}
export default CoffeeList;
