import { Routes, Route, Redirect, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import News from "./components/News";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterPage from "./components/Register/RegisterPage";
import LoginPage from "./components/Login/LoginPage";
import * as authService from "./services/authService";
import LogoutPage from "./components/LogoutPage";
import CreateCountry from "./components/CreateCountry";
import CreateLocation from "./components/CreateLocation";

import Locations from "./components/Locations";

function App() {
  const [userInfo, setUserInfo] = useState({
    isAuthenticated: false,
    username: "",
  });

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user,
    });
  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username,
    });
  };
  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: null,
    });
  };
  return (
    <div id="box">
      <main>
        <header>
          <Header {...userInfo} />
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/news" element={<News />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/login-page" element={<LoginPage onLogin={onLogin} />} />
          <Route path="/logout" element={<LogoutPage onLogout={onLogout} />} />
          <Route path="/create-country" element={<CreateCountry />} />
          <Route path="/create-location" element={<CreateLocation />} />
          <Route path="/countries/:country" element={<Locations />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
