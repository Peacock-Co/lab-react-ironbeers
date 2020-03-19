import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import HomeBeer from "./components/HomeBeer";
import BeerList from "./components/BeerList";
import RamdomBeer from "./components/RamdomBeer";
import NewBeer from "./components/NewBeer";
import SingleBeer from "./components/SingleBeer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={() => <HomeBeer />} />
            <Route path="/beers" component={() => <BeerList />} />
            <Route path="/random-beer" component={() => <RamdomBeer />} />
            <Route path="/new-beer" component={() => <NewBeer />} />
            <Route path="/single-beer" component={() => <SingleBeer />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
