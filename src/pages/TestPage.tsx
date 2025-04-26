import Footer from "../component/basic/Footer";
import Navbar from "../component/basic/Navbar";
import Slider from "../component/basic/Slider";
import Slider1 from "../component/basic/Slider1";
import "flowbite";

function TestPage() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid mx-auto h-15">
        <Slider />
        <Slider1 />
      </div>
      <Footer />
    </div>
  );
}

export default TestPage;
