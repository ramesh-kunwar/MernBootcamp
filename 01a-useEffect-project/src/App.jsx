import { useEffect, useState } from "react";
import Card from "./components/Card";
import { Filter } from "./components/Filter";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";

export const App = () => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("All");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        // save data into a variable
        setCourses(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        <Card courses={courses} category={category} />
      </div>
    </div>
  );
};
