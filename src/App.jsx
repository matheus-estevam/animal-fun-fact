import React from "react";
import { animals } from "./animals";

const App = () => {
  const title = "";
  const showBackground = true;

  function displayFact(e) {
    const fact = animals[e.target.alt].facts;
    const randomNum = Math.floor(Math.random() * fact.length);
    const facts = fact[randomNum];

    return (document.getElementById("fact").innerHTML = facts);
  }

  const background = (
    <img
      className="background"
      alt="ocean"
      src="/images/ocean.jpg"
      width="750px"
    />
  );

  const images = [];
  for (const animal in animals) {
    images.push(
      <img
        key={animal}
        className="animal"
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role="button"
        onClick={displayFact}
      />
    );
  }
  const animalFacts = (
    <div>
      <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
      {showBackground && background}
      <div className="animals">{images}</div>
      <p id="fact"></p>
    </div>
  );

  return <div>{animalFacts}</div>;
};

export default App;
