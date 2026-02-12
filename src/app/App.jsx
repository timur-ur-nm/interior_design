import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../components/layouts/MainLayout";
import Service from "../pages/Service";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Projects from "../pages/Projects";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
