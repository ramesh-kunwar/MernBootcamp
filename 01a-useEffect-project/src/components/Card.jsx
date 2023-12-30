import { useState } from "react";
import CardItem from "./CardItem";
const Card = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCateogry) => {
        courseCateogry.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };

  return (
    <div className="row">
      {getCourses().map((course) => {
        return (
          <CardItem
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};
export default Card;
