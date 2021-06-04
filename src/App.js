import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./router";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} path={route.path}>
            {<route.component />}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
