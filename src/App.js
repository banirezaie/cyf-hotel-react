/** @format */

import React from "react";
import Heading from "./components/Heading";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Training from "./comp/Training";

const App = () => {
  return (
    <BrowserRouter>
      <Heading />
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/training" component={Training} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
