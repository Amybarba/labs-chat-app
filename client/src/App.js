import React from "react";

import Join from "../src/components/Join/Join";
import Chat from "../src/components/Chat/Chat";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
