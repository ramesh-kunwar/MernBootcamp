import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <h4>No post Found</h4>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.id} className="my-4 ">
              <h3 className="mt-2">{post.title}</h3>
              <p className="text-secondary">
                By <span>{post.author}</span> {post.category}
              </p>
              <p className="fw-bold">Posted on: {post.date}</p>
              <p>{post.content}</p>

              <div className="text-primary">
                {post.tags.map((tag, index) => {
                  return <span key={index}>#{tag} </span>;
                })}
              </div>
            </div>
          );
        })
      )}
    </>
  );
};
export default Blogs;

{
  /* <>
{loading ? (
  <Spinner />
) : posts.length === 0 ? (
  <div>
    <p>No Post Found</p>
  </div>
) : (
  posts.map((post) => {
    // <Card />;
    <div key={post.id}>
      <p>{post.title}</p>
      <p>
        By <span>{post.author}</span> {post.category}
      </p>
      <p>Posted on: {post.date}</p>
      <p>{post.content}</p>

      <div>
        {post.tags.map((tag, index) => {
          return <span key={index}>#{tag}</span>;
        })}
      </div>
    </div>;
  })
)}
</> */
}
