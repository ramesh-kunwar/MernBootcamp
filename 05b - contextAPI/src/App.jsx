import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const url = "https://api.escuelajs.co/api/v1/products";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <div>App</div>;
};
export default App;
