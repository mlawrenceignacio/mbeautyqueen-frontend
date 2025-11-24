import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

import HeroImg from "../assets/images/home.jpeg";
import HeroImg2 from "../assets/images/home.jpg";
import InteriorImg from "../assets/images/interior.png";
import InteriorImg2 from "../assets/images/interior2.png";
import Logo2 from "../assets/images/logo2.png";

import HeroImg3 from "../assets/images/heroimg.jpg";
import HeroImg4 from "../assets/images/heroimg2.jpg";
import HeroImg5 from "../assets/images/heroimg3.jpg";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();

  return (
    <div className="w-[100vw] h-[100dvh] flex flex-col ">
      <div className="border-b-2 border-black">
        <Header />
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col items-center">
        <section
          id="hero"
          className="flex flex-col lg:flex-row lg:justify-evenly p-4 lg:px-4 lg:py-12 w-full items-center gap-3 bg-[url('/src/assets/images/desktopBG.jpg')]
    bg-cover bg-center bg-no-repeat"
        >
          <div className="w-[300px] h-[200px] sm:w-[60%] sm:h-[250px] md:w-[350] md:h-[300px] lg:w-[35%] lg:h-[400px] rounded-lg border border-black lg:border-none">
            <img
              src={HeroImg}
              alt="Home hero image"
              className="w-full h-full object-cover rounded-lg lg:hidden"
            />

            <img
              src={HeroImg2}
              alt="Home hero image large"
              className="w-full h-full object-cover rounded-xl hidden lg:block"
            />
          </div>

          <div className="flex flex-col gap-3 text-center items-center justify-center p-2 lg:w-[40%] ">
            <div className="flex justify-evenly w-full ">
              <img
                src={HeroImg3}
                alt="Hero Image"
                className="object-cover w-[100px] h-[100px] md:w-[130px] md:h-[120px] lg:w-[150px] lg:h-[150px] rounded-lg transition-transform duration-300 hover:scale-[105%]"
              />
              <img
                src={HeroImg4}
                alt="Hero Image"
                className="object-cover w-[100px] h-[100px] md:w-[130px] md:h-[120px] lg:w-[150px] lg:h-[150px] rounded-lg transition-transform duration-300 hover:scale-[105%]"
              />
              <img
                src={HeroImg5}
                alt="Hero Image"
                className="object-cover w-[100px] h-[100px] md:w-[130px] md:h-[120px] lg:w-[150px] lg:h-[150px] rounded-lg transition-transform duration-300 hover:scale-[105%]"
              />
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-xl lg:text-3xl rounded-lg py-2 lg:py-4 px-2">
                “Your beauty, defined and refined — only at MBeautyQueen”{" "}
              </h1>

              <div
                className="bg-red-950 text-pink-100 text-lg py-1.5 px-6 lg:py-2 lg:text-xl rounded-3xl transition-all duration-300 hover:bg-red-700 cursor-pointer hover:shadow-[2px_2px_1px_black]"
                onClick={() => nav("/contact")}
              >
                MESSAGE US
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full">
          <div className="flex w-[100%] justify-evenly md:justify-center md:gap-4 lg:gap-8 py-6 md:py-8 bg-red-950">
            <img
              src={InteriorImg}
              alt="Interior Image"
              className="gallery1 md:w-[210px] md:h-[200px]"
            />
            <img
              src={Logo2}
              alt="MBeautyQueen Logo 2"
              className="gallery1 md:w-[210px] md:h-[200px]"
            />
            <img
              src={InteriorImg2}
              alt="Interior Image"
              className="gallery1 md:w-[210px] md:h-[200px]"
            />
          </div>

          <div className="w-[100%] bg-pink-100">
            <Carousel />
          </div>
        </section>

        <section id="feedbacks" className="w-full">
          <Feedback />
        </section>

        <footer className="w-full ">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
