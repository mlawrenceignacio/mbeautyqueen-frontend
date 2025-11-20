import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

import HeroImg from "../assets/images/home.jpeg";
import InteriorImg from "../assets/images/interior.png";
import InteriorImg2 from "../assets/images/interior2.png";
import Logo2 from "../assets/images/logo2.png";
import backgroundImage from "../assets/images/desktopBG.jpg";

const HomePage = () => {
  return (
    <div className="w-[100vw] h-[100dvh] flex flex-col ">
      <div className="border-b-2 border-black">
        <Header />
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col items-center">
        <section
          id="hero"
          className="flex flex-col lg:flex-row lg:justify-evenly p-4 lg:px-4 lg:py-12 w-full items-center gap-3"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-[300px] h-[200px] sm:w-[60%] sm:h-[250px] md:w-[350] md:h-[300px] lg:w-[35%] lg:h-[350px] border border-black rounded-lg">
            <img
              src={HeroImg}
              alt="Home hero image."
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-5 text-center items-center p-2 lg:w-[40%]">
            <h1 className="text-xl lg:text-3xl">
              “Your beauty, defined and refined — only at MBeautyQueen”{" "}
            </h1>

            <div className="bg-red-950 text-pink-100 text-lg py-1.5 px-6 lg:py-2 lg:text-xl rounded-3xl transition-all duration-300 hover:bg-red-700 cursor-pointer shadow">
              MESSAGE US
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
