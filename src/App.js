import Testimonial from "./Components/Testimonial";
import reviews from "./Components/data"

function App() {
  return (
    <div className="flex flex-col bg-[linear-gradient(90deg,rgba(66,74,85,1)_3%,rgba(27,65,98,1)_27%,rgba(85,53,133,1)_73%,rgba(74,68,84,1)_100%)] justify-center items-center w-[100vw] h-[100vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#ae8bab]">Our Testimonials</h1>
        <div className="bg-violet-500 h-[4px] w-1/5 mx-auto mt-2"></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
