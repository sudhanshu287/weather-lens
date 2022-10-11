import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import {Helmet} from 'react-helmet';
const App = () => {
  return (
    <BrowserRouter>
    <Helmet>
      <title>Weather Lens</title>
    </Helmet>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
