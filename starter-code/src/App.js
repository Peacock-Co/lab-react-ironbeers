import React, { Component } from "react";
import "./App.css";
import images from "../public/images";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-light bg-primary">
          <span class="navbar-brand mb-0 h1">Navbar</span>
        </nav>
        <div className="container_main">
          <div className="card" style={{ width: "100%" }}>
            <img src="" class="card-img-top" alt="beers" />
            <div className="card-body">
              <h2 className="card-title">All Beers</h2>
              <p className="card-text">
                A childlike Heineken derives perverse satisfaction from an
                accidentally geosynchronous beer.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "100%" }}>
            <img src="" class="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">Random Beer</h2>
              <p className="card-text">
                If a Corona Extra related to a blue moon seeks another Stella
                Artois, then a completely financial Hefeweizen self-flagellates.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "100%" }}>
            <img src="" class="card-img-top" alt="..." />
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
