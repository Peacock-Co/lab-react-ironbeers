import React from "react";
import beers from "../images/beers.png";
import random from "../images/random-beer.png";
import newBeer from "../images/new-beer.png";

import { Link } from "react-router-dom";

const pub = [beers];
const wodoo = [random];
const tap = [newBeer];

const HomeBeer = () => {
  return (
    <div className="container_main">
      <Link to="/beers">
        <div className="card" style={{ width: "100%" }}>
          <img src={beers} className="card-img-top" alt="pub" />
          <div className="card-body">
            <h2 className="card-title">All Beers</h2>
            <p className="card-text">
              A childlike Heineken derives perverse satisfaction from an
              accidentally geosynchronous beer.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/random-beer" style={{ textDecoration: "none" }}>
        <div className="card" style={{ width: "100%" }}>
          <img src={random} className="card-img-top" alt="wodoo" />
          <div className="card-body">
            <h2 className="card-title">Random Beer</h2>
            <p className="card-text">
              If a Corona Extra related to a blue moon seeks another Stella
              Artois, then a completely financial Hefeweizen self-flagellates.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/new-beer" style={{ textDecoration: "none" }}>
        <div className="card" style={{ width: "100%" }}>
          <img src={newBeer} className="card-img-top" alt="tap" />
          <div className="card-body">
            <h2 className="card-title">New Beer</h2>
            <p className="card-text">
              Now and then, a Brewers Reserve eats an intoxicatedly sloshed
              Wolverine Beer.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeBeer;
