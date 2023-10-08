import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollToTop from "./layout/RouteScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { useEffect } from "react";
import { preToast } from "./helpers/SessionHelper";
import Dashboard from "./pages/Dashboard";
import HomePageEditPage from "./pages/HomePageEditPage";

function App() {
  let switchDark = localStorage.getItem("switchDark");
  useEffect(() => {
    if (switchDark === null) {
      preToast();
    }
  }, [switchDark]);
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/projects-details" element={<ProjectDetails />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/testimonial" element={<Testimonial />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Error />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/home-page-edit" element={<HomePageEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
