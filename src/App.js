import { Routes, Route, Redirect, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import News from "./components/News";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterPage from "./components/Register/RegisterPage";
import LoginPage from "./components/Login/LoginPage";
import { AuthContext } from "./contexts/authContext";
import LogoutPage from "./components/LogoutPage";
import CreateLocation from "./components/CreateLocation";
import Details from "./components/Details";
import Locations from "./components/Locations";
import Comment from "./components/Comment";
import useLocalStorage from "./hooks/useLocalStorage";

const initialAuthState = {
  _id: "",
  email: "",
  accessToken: "",
};

function App() {
  const [user, setUser] = useLocalStorage("user", initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const logout = () => {
    setUser(initialAuthState);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div id="box">
        <main>
          <header>
            <Header />
          </header>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/news" element={<News />} />
            <Route path="/register-page" element={<RegisterPage />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />

            <Route path="/create-location" element={<CreateLocation />} />
            <Route path="/locations" element={<Locations />} />

            <Route
              path="/details/:locationId"
              element={
                <>
                  <Details />
                </>
              }
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
