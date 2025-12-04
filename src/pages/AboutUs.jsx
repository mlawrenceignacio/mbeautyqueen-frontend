import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import { LuHeart, LuSparkles, LuCrown, LuStar } from "react-icons/lu";

import salonLogo from "../assets/images/logo.jpg";
import owner from "../assets/images/owner.jpeg";
import owner2 from "../assets/images/owner2.png";
import owner3 from "../assets/images/owner3.png";

import gallery1 from "../assets/images/interior.png";
import gallery2 from "../assets/images/interior2.png";

import missionIcon from "../assets/images/mission.png";
import visionIcon from "../assets/images/vision.png";
import aboutIcon from "../assets/images/about.png";

const AboutUs = () => {
  return (
    <div className="min-h-[100dvh] w-full bg-white flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Header />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center flex-1">
        <section className="relative w-full py-14 bg-pink-800 text-center text-white shadow-lg">
          {/* Decorative Icons */}
          <LuSparkles className="absolute top-6 left-6 text-white text-3xl opacity-40" />
          <LuSparkles className="absolute top-6 right-6 text-white text-3xl opacity-40" />

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm flex justify-center items-center gap-2 text-white">
            <LuSparkles className="text-white opacity-60" />
            Our Story
            <LuSparkles className="text-white opacity-60" />
          </h1>

          <p className="text-white mt-2 text-sm md:text-lg opacity-90">
            A story built with passion, growth, and beauty.
          </p>

          <div className="flex gap-4 justify-center mt-10 px-4 flex-wrap">
            {[gallery1, gallery2].map((img, i) => (
              <img
                key={i}
                src={img}
                className={`w-[140px] md:w-[200px] lg:w-[240px] 
                h-[140px] md:h-[200px]
                rounded-xl object-cover shadow-lg hover:scale-105 transition duration-300`}
              />
            ))}
          </div>
        </section>

        <section className="w-full max-w-[1000px] mt-12 px-6 md:px-10">
          <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm mb-12">
            <div className="flex items-center gap-3 mb-4">
              <img src={missionIcon} className="w-7 h-7 opacity-70" />
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 tracking-tight">
                Our Mission
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
              <p className="text-[15px] md:text-lg text-neutral-700 leading-relaxed flex-1 text-justify">
                MbeautyQueen Beauty and Wellness is committed to delivering
                high-quality beauty and wellness services that empower
                confidence and enhance natural beauty. Every treatment is
                performed with precision, care, and genuine passion.
              </p>

              <img
                src={gallery1}
                className="hidden lg:block w-[40%] h-[220px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm mb-12">
            <div className="flex items-center gap-3 mb-4">
              <img src={visionIcon} className="w-7 h-7 opacity-70" />
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 tracking-tight">
                Our Vision
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-10 items-center">
              <p className="text-[15px] md:text-lg text-neutral-700 leading-relaxed flex-1 text-justify">
                Our vision is to grow into a trusted beauty & wellness
                destination, known for innovation, cleanliness, client care, and
                consistent excellence — while staying warm, welcoming, and
                community-centered.
              </p>

              <img
                src={gallery2}
                className="hidden lg:block w-[40%] h-[220px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="mb-14">
            <div className="flex justify-center items-center gap-3 mb-6">
              <img src={aboutIcon} className="w-7 h-7 opacity-70" />
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 tracking-tight">
                About Us
              </h2>
            </div>

            <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm flex flex-col lg:flex-row gap-10 items-center">
              <div className="w-[85%] lg:w-[30%] h-[220px] overflow-hidden rounded-lg shadow-md">
                <img src={salonLogo} className="w-full h-full object-cover" />
              </div>

              <p className="text-[15px] md:text-lg text-justify text-neutral-700 leading-relaxed flex-1">
                MbeautyQueen Beauty and Wellness began as a small home studio in
                2023. Through dedication and passion, it grew into a full salon
                and later expanded through franchise. Our journey is built on
                trust, care, and continuous improvement.
              </p>
            </div>

            <p className="text-[15px] md:text-lg text-neutral-700 leading-relaxed mt-6 text-justify">
              Today, clients from neighboring towns visit the salon — trusting
              our brows, lashes, spa, and aesthetic services. MbeautyQueen is
              now a complete wellness hub built with heart, skill, and a
              commitment to making clients feel beautiful inside and out.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm mb-20">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-neutral-800 mb-6 tracking-tight flex justify-center items-center gap-2">
              Meet the Owner
            </h2>

            <div className="flex justify-center gap-6 flex-wrap mb-6">
              {[owner, owner2, owner3].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-[180px] md:w-[210px] h-[180px] md:h-[220px] object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
                />
              ))}
            </div>

            <p className="text-[15px] md:text-lg text-neutral-700 leading-relaxed md:text-justify px-3 text-justify md:px-16">
              Maricar Moral Dumon is the heart of MbeautyQueen — a dedicated
              professional who continues to train, compete, and refine her
              craft. Her passion and commitment to quality shaped the salon into
              what it is today.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
