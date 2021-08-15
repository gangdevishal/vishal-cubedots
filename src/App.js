import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import "./App.css";
import Apartment from "./components/apartment/Apartment";
import Building from "./components/Building";
import Floor from "./components/Floor";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Location from "./components/Location";
import NoPageFound from "./components/NoPageFound";
import NavBar from "./navbar/NavBar";
import residantialData from './residantialData/test_unit_data.json';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/residential-property/building"
          data={residantialData}
          component={Building}
        />
        <Route
          exact
          path="/residential-property/building/floor/:id"
          component={Apartment}
        />
        <Route
          exact
          path="/residential-property/building/floor"
          component={Floor}
        />
        <Route
          exact
          path="/residential-property/location"
          component={Location}
        />
        <Route exact path="/residential-property/gallery" component={Gallery} />
      <Route  path="" component={NoPageFound} />
      </Switch>
    </Router>
  );
}

export default App;
