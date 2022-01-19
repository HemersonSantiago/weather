import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Weather } from "../pages/Weather";
import { NotFound } from "../pages/NotFound/intex";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
