import { Routes, Route, Redirect, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./components/Home/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import Categories from "./components/Categories/Categories";
import HowItWorks from "./components/HowItWorks";
import News from "./components/News";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RegisterPage from "./components/Register/RegisterPage";
import LoginPage from "./components/Login/LoginPage";
import { AuthContext } from "./contexts/authContext";
import LogoutPage from "./components/Logout/LogoutPage";
import CreateLocation from "./components/Locations/CreateLocation";
import Details from "./components/Details/Details";
import Locations from "./components/Locations/Locations";
import EditLocation from "./components/Locations/EditLocation";
import useLocalStorage from "./hooks/useLocalStorage";
import { NotificationProvider } from "./contexts/NotificationContext";
import Notification from "./components/common/Notification";
import FavouritedLocationsList from "./components/UserProfile/FavouritedLocationsList";
import UserProfile from "./components/UserProfile/UserProfile";
import CreatedLocationsList from "./components/UserProfile/CreatedLocationsList";

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
      <NotificationProvider>
        <div id="box">
          <header>
            <Header />
          </header>
          <main>
            <Notification />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/news" element={<News />} />
              <Route path="/register-page" element={<RegisterPage />} />
              <Route path="/login-page" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/edit/:locationId" element={<EditLocation />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/create-location" element={<CreateLocation />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/details/:locationId" element={<Details />} />
              <Route
                path="/user-profile/favourite-locations"
                element={<FavouritedLocationsList />}
              />
              <Route
                path="/user-profile/created-locations"
                element={<CreatedLocationsList />}
              />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </NotificationProvider>
    </AuthContext.Provider>
  );
}

export default App;
