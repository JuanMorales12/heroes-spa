import React from "react";
import { Navbar } from "../../ui";
import { Routes, Route } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:heroId" element={<HeroPage />} />
        <Route path="/" element={<MarvelPage />} />
      </Routes>
    </>
  );
};
