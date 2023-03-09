import React from "react";
import Hero from "../components/hero";
import ItemsList from "../components/items-list";
import Latest from "../components/latest";
import Occasions from "../components/occasions";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Occasions />
      <Latest />
    </div>
  );
};

export default HomePage;
