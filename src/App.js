import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home.js";
import Blog from "./containers/Blog.js";
import BlogCategory from "./containers/BlogCategory.js";
import NotFound from "./components/NotFound.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:category" element={<BlogCategory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
