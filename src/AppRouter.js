import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
