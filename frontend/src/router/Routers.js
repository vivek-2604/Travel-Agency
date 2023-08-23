import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import TourDetails from "./../pages/TourDetails";
import SearchResult from "./../pages/SearchResult";
import ThankYou from "./../pages/ThankYou";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tour" element={<Tours />} />
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResult />} />
    </Routes>
  );
}

export default Routers;
