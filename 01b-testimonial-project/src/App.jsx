import Testimonials from "./components/Testimonials";
import reviews from "./data";

const App = () => {
  return (
    <div className="bg-slate-400 min-h-screen flex align-middle justify-center">
      <div>
        <h1 className="text-4xl text-center font-bold my-8">
          Our Testimonials
        </h1>
        <div className="bg-white max-w-3xl mx-auto px-4 py-8 rounded-lg text-center">
          <Testimonials reviews={reviews} />
        </div>
      </div>
    </div>
  );
};
export default App;
