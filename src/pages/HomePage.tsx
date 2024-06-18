import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import SwipeCarousel from "../components/SwipeCarousel";

const HomePage = () => {
  return (
    <div className="">
      <div className="bg-hero mobile:bg-cover bg-center bg-no-repeat mobile:h-[450px] tablet:h-[900px] relative">
        <Navbar />
        <div className="absolute tablet:left-[40%] bottom-[20%]   text-white text-center font-extrabold tablet:w-[350px]">
          An experience like no other, to live yours with us dail{" "}
          <span className="text-[#C8BA00]">*713*33*307#</span> on your phone and
          get yourself a discount ticket now!
        </div>
      </div>
      <div className="bg-black ">
        <Hero />
        <Image />
        <Footer />
      </div>
    </div>
  ); 
};

export default HomePage;
