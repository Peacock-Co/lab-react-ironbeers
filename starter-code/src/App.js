import React, { Component } from "react";
import "./App.css";
import beers from "./images/beers.png";
import random from "./images/random-beer.png";
import newBeer from "./images/new-beer.png";

const pub = [beers];
const wodoo = [random];
const tap = [newBeer];

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar fixed-top navbar-light bg-primary">
          <span className="navbar-brand mb-0 h1">Navbar</span>
        </nav>
        <div className="container_main">
          <a>
            <div className="card" style={{ width: "100%" }}>
              <img src={pub} className="card-img-top" alt="pub" />
              <div className="card-body">
                <h2 className="card-title">All Beers</h2>
                <p className="card-text">
                  A childlike Heineken derives perverse satisfaction from an
                  accidentally geosynchronous beer.
                </p>
              </div>
            </div>
          </a>
          <div className="card" style={{ width: "100%" }}>
            <img src={wodoo} className="card-img-top" alt="wodoo" />
            <div className="card-body">
              <h2 className="card-title">Random Beer</h2>
              <p className="card-text">
                If a Corona Extra related to a blue moon seeks another Stella
                Artois, then a completely financial Hefeweizen self-flagellates.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "100%" }}>
            <img src={tap} className="card-img-top" alt="tap" />
            <div className="card-body">
              <h2 className="card-title">New Beer</h2>
              <p className="card-text">
                Now and then, a Brewers Reserve eats an intoxicatedly sloshed
                Wolverine Beer.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
