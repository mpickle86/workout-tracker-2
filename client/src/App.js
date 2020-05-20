import React from 'react';
import './Styles/App.css';
import {Switch, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import History from "./Components/History";
import Weight from "./Components/Weight";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/history"><History /></Route>
        <Route path="/weight"><Weight /></Route>
      </Switch>
    </div>
    
  )
}

export default App;