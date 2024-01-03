import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import { AppContext } from "./Context/AppContext";
import { Route, Routes } from "react-router";
import { useSearchParams, useLocation } from "react-router-dom";

const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(searchParams);
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");

      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");

      fetchBlogPosts(Number(page), null, category);
    } else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.searchParams]);

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} /> */}
      </Routes>
      <Header />
      <div className="container">
        <Blogs />
        <Pagination />
      </div>
    </>
  );
};
export default App;
