import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import News from "./components/News";
import Locations from "./components/Locations";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="box">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/how-it-works" exact component={HowItWorks} />
          <Route path="/news" exact component={News} />
          <Route path="/locations" exact component={Locations} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
