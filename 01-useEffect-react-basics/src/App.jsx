import { useEffect, useState } from "react";

export const App = () => {
  const [text, setText] = useState("");

  // - when component(App) is rendered - useEffect hook gets executed

  // // -> variation 1 runs on every render
  // useEffect(() => {
  //   console.log("use useEffect is called");
  // });

  // // -> variation 2 -> First render
  // useEffect(() => {
  //   console.log("use useEffect is called");
  // }, []);

  // -> variation 3 -> First render + whenever dependency changes
  // useEffect(() => {
  //   console.log("use useEffect is called");
  // }, [text]);

  // variation 4 -> to handle unmounting of a component
  // useEffect(() => {
  //   // add event listner

  //   console.log("listner added");

  //   return () => {
  //     console.log("Listner removed - Cleanup function");
  //   };
  // }, [text]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("Window height is " + window.screen.height);
      console.log("Window width is " + window.screen.width);
    });
  });

  return (
    <div className="container my-4">
      <form>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="form-control"
        />
      </form>
    </div>
  );
};
