import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/about");
  };
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Outlet />
            </div>
          }
        >
          <Route path="/signup" element={<h1>Signup Page</h1>} />
          <Route path="/about" element={<h1>about Page</h1>} />
          <Route
            path="/labs"
            element={
              <div>
                <h1>labs Page</h1>
                <p>This is lab page</p>
                <button onClick={clickHandler} className="btn btn-primary">
                  Move To About page
                </button>
              </div>
            }
          />
          <Route path="/support" element={<h1>Support Page</h1>} />
          <Route
            path="*"
            element={<h1 className="text-danger">Not Found</h1>}
          />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
