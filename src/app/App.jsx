import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../components/layouts/MainLayout";
import Service from "../pages/Service";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Projects from "../pages/Projects";
import ProjectPage from '../pages/ProjectPage'

// Мини-компонент прямо в этом файле
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* вставляем один раз */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}
