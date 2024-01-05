import { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const url = "https://api.escuelajs.co/api/v1/products";
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap gap-2 justify-content-between">
      {products.map((product, index) => {
        return <Product product={product} key={index} />;
      })}
    </div>
  );
};
export default Home;
