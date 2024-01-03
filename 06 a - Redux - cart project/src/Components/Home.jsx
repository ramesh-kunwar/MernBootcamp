import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Product from "./Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div>
      <div>{loading && <Spinner />}</div>
      <div>{products.length <= 0 && <p>No Data found</p>}</div>
      <div>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
