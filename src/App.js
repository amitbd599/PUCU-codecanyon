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
import AboutPageEditPage from "./pages/AboutPageEditPage";
import ServicePageEdit from "./pages/ServicePageEdit";
import ProjectPageEdit from "./pages/ProjectPageEdit";
import BlogPageEdit from "./pages/BlogPageEdit";
import TestimonialPageEdit from "./pages/TestimonialPageEdit";
import ContactPageEdit from "./pages/ContactPageEdit";
import ErrorPageEdit from "./pages/ErrorPageEdit";
import AddNewImagePage from "./pages/AddNewImagePage";
import AllImagePage from "./pages/AllImagePage";
import AllBlogPage from "./pages/AllBlogPage";
import AddNewBlogPage from "./pages/AddNewBlogPage";
import AllServicePage from "./pages/AllServicePage";
import AddNewServicePage from "./pages/AddNewServicePage";
import AllTestimonialsPage from "./pages/AllTestimonialsPage";
import AddNewTestimonialPage from "./pages/AddNewTestimonialPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import AddNewProjectPage from "./pages/AddNewProjectPage";

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
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/home-page-edit" element={<HomePageEditPage />} />
        <Route exact path="/about-page-edit" element={<AboutPageEditPage />} />
        <Route exact path="/service-page-edit" element={<ServicePageEdit />} />
        <Route exact path="/project-page-edit" element={<ProjectPageEdit />} />
        <Route exact path="/blog-page-edit" element={<BlogPageEdit />} />
        <Route
          exact
          path="/testimonial-page-edit"
          element={<TestimonialPageEdit />}
        />
        <Route exact path="/contact-page-edit" element={<ContactPageEdit />} />
        <Route exact path="/error-page-edit" element={<ErrorPageEdit />} />
        <Route exact path="/add-image" element={<AddNewImagePage />} />
        <Route exact path="/all-image" element={<AllImagePage />} />
        <Route exact path="/all-blogs" element={<AllBlogPage />} />
        <Route exact path="/add-new-blog" element={<AddNewBlogPage />} />
        <Route exact path="/all-services" element={<AllServicePage />} />
        <Route exact path="/add-new-service" element={<AddNewServicePage />} />
        <Route
          exact
          path="/all-testimonials"
          element={<AllTestimonialsPage />}
        />
        <Route
          exact
          path="/add-new-testimonial"
          element={<AddNewTestimonialPage />}
        />
        <Route exact path="/all-projects" element={<AllProjectsPage />} />
        <Route exact path="/add-new-project" element={<AddNewProjectPage />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
