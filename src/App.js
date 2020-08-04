import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BroswerRouter, Route, Switch, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
