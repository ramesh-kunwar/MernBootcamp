import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const CardItem = ({ course, likedCourses, setLikedCourses }) => {
  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((c) => c !== course.id));
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
    }
  };
  return (
    <div className="col-3 card m-4">
      <img src={course.image.url} alt="" />
      <button
        style={{ marginTop: "-50px", marginRight: "-250px" }}
        className="btn fs-2 "
        onClick={clickHandler}
      >
        {likedCourses.includes(course.id) ? <FcLike /> : <FcLikePlaceholder />}
      </button>
      <div className="card-body">
        <h3>{course.title}</h3>
        <p>
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};
export default CardItem;
