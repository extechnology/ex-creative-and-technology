import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import ScrollToTop from "./shared/ScrollToTop";
import Loader from "./feedback/Loader";

const Company = lazy(() => import("./pages/Company"));
const Contact = lazy(() => import("./pages/Contact"));
const Exbot = lazy(() => import("./pages/Exbot"));
const Exedu = lazy(() => import("./pages/Exedu"));
const Exmedia = lazy(() => import("./pages/Exmedia"));
const Extechnology = lazy(() => import("./pages/Extechnology"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exbot" element={<Exbot />} />
          <Route path="/exedu" element={<Exedu />} />
          <Route path="/" element={<Exmedia />} />
          <Route path="/extechnology" element={<Extechnology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
