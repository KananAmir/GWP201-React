import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";
import axios from "axios";
import Table from "./components/table";
import { getAllData } from "./services";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/contact-page";
import NotFound from "./pages/not-found-page";
import UsersPage from "./pages/users-page";
import UserDetailsPage from "./pages/user-details-pages";

//component lifecycle , mounting, unmounting, updated
const BASE_URL = "https://northwind.vercel.app/api/suppliers";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
