import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import { AppContext } from "./Context/AppContext";

const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};
export default App;
