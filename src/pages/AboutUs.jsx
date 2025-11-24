import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import salonLogo from "../assets/images/logo.jpg";
import owner from "../assets/images/owner.jpeg";
import owner2 from "../assets/images/owner2.png";
import owner3 from "../assets/images/owner3.png";
import gallery1 from "../assets/images/interior.png";
import gallery2 from "../assets/images/interior2.png";
import gallery3 from "../assets/images/logo2.png";
import bg from "../assets/images/desktopBG3.jpg";
import missionIcon from "../assets/images/mission.png";
import visionIcon from "../assets/images/vision.png";
import aboutIcon from "../assets/images/about.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col h-[100dvh] w-full">
      <Header />

      <div className="flex-1 flex flex-col items-center  overflow-y-auto">
        <div className="py-8 w-full bg-[url('src/assets/images/desktopBG.jpg')] bg-cover flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-3xl text-red-950 text-center font-bold  pt-1.5">
            OUR STORY
          </h1>

          <p className="text-center text-red-950 text-sm md:text-lg">
            A story the our eyes witnessed.
          </p>

          <div className="flex items-center justify-center gap-3 md:gap-4 h-[130px] md:h-[200px]  px-2 py-1.5 mt-2 md:mt-4">
            <img
              src={gallery1}
              alt="Salon Image"
              className="w-[130px] md:w-[170px] lg:w-[200px] h-full object-cover rounded-xl transition-transform duration-300 hover:scale-[105%]"
            />
            <img
              src={gallery3}
              alt="Salon Image"
              className="w-[130px] md:w-[170px] lg:w-[200px] h-full object-cover rounded-xl transition-transform duration-300 hover:scale-[105%]"
            />
            <img
              src={gallery2}
              alt="Salon Image"
              className="w-[130px] md:w-[170px] lg:w-[200px] h-full object-cover rounded-xl transition-transform duration-300 hover:scale-[105%]"
            />
          </div>
        </div>

        <section className="flex flex-col items-center text-center py-5 gap-3 bg-pink-100/50 md:px-20  lg:px-1 ">
          <div className="lg:flex lg:flex-row lg:items-center lg:w-[80%] lg:gap-3">
            <div className="flex flex-col gap-2 lg:w-[50%] lg:flex-1">
              <div className="flex w-full items-center lg:justify-start lg:pl-4 justify-center gap-2">
                <img
                  src={missionIcon}
                  alt="Mission Icon"
                  className="w-[25px] h-[25px]"
                />
                <h2 className="text-xl font-bold text-red-950 md:text-2xl">
                  Our Mission
                </h2>
              </div>
              <p className="text-justify text-sm px-5  md:text-lg">
                MbeautyQueen Beauty and Wellness is committed to delivering
                high-quality, client-centered beauty and wellness services that
                enhance confidence, comfort, and natural beauty. We provide
                expertly crafted treatments, from brows and lashes to full
                aesthetic and spa services, using proper training, advanced
                techniques, and professional-grade equipment. Guided by genuine
                care and dedication, we aim to create a warm, welcoming
                environment where every client feels valued, pampered, and
                empowered.
              </p>
            </div>

            <img
              src={bg}
              alt="Background Image"
              className="h-[310px] w-[50%] object-cover my-4 hidden lg:block rounded-lg shadow-[2px_1px_4px_black]"
            />
          </div>

          <img
            src={bg}
            alt="Background Image"
            className="w-[90%] md:w-[95%] h-[250px] md:h-[400px] lg:w-[55%] object-cover my-4 lg:hidden"
          />

          <div className="flex flex-col gap-2 lg:w-[80%]">
            <div className="flex w-full items-center justify-center gap-2 lg:justify-start lg:pl-4">
              <img
                src={visionIcon}
                alt="Vision Icon"
                className="w-[25px] h-[25px]"
              />
              <h2 className="text-xl  md:text-2xl font-bold text-red-950">
                Our Vision
              </h2>
            </div>
            <p className="text-justify text-sm px-4 md:text-lg">
              Our vision is to become a leading beauty and wellness destination
              recognized for excellence, innovation, and heartfelt service. We
              aspire to expand our reach across more communities, offering a
              complete and continually evolving range of treatments that meet
              the highest standards of safety and quality. By nurturing a
              culture of learning, professionalism, and passion, MbeautyQueen
              Beauty and Wellness aims to inspire trust, set industry
              benchmarks, and uplift lives through transformative beauty
              experiences.
            </p>
          </div>
        </section>

        <section
          id="about-salon"
          className="flex flex-col items-center lg:mt-6 mt-4 lg:w-[90%] "
        >
          <div className="flex w-full justify-center items-center gap-2 mb-2 mt-3">
            <img
              src={aboutIcon}
              alt="Vision Icon"
              className="w-[25px] h-[25px]"
            />
            <h2 className="text-lg font-bold text-red-950  md:text-2xl">
              ABOUT US
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row w-full items-center lg:justify-center lg:gap-10 ">
            <div className="w-[90%] h-[200px] md:w-[80%] md:h-[220px] lg:h-[220px] lg:w-[30%] mt-2 mb-4 rounded-lg border border-black">
              <img
                src={salonLogo}
                alt="Salon Logo"
                className="w-full h-full object-contain rounded-lg border-y border-black"
              />
            </div>

            <p className="text-justify px-6 py-1 text-sm md:text-lg md:px-20 lg:w-[55%] lg:px-1">
              MbeautyQueen Beauty and Wellness began as a humble studio inside
              the owner’s home back in 2023. With only her training, a few
              tools, and a deep passion for beauty services, she slowly built
              her skills by studying different treatments and investing in
              proper equipment. She first worked inside another salon to gain
              experience, and after three months, she took the courageous step
              of renting her own space. This small studio marked a turning
              point, after a year of hard work, the business expanded into a
              full salon. Its growth continued, eventually opening a branch in
              Antipolo through franchise partnership, showing just how far
              determination and quality service can go.
            </p>
          </div>

          <div className="flex flex-col text-justify lg:px-0 px-6 py-1 text-sm md:text-lg md:px-20 lg:mt-4 lg:w-[85%]">
            <p>
              As the salon grew, so did its reputation. Clients began coming
              from nearby towns like Binangonan and Antipolo, many discovering
              the salon through social media and staying because of its reliable
              results. The business continued to evolve, adding new services
              such as spa massage and various aesthetic treatments. From brows
              and lashes, the salon gradually expanded into a complete wellness
              hub, always improving and upgrading its offerings. Through
              consistent quality and genuine care for clients, MbeautyQueen
              earned its place as a trusted beauty destination in the community.
            </p>
          </div>
        </section>

        <section
          id="about-owner"
          className="w-full flex flex-col items-center mt-2 lg:mt-8 bg-pink-100/50 pt-6 lg:w-[90%] lg:mb-8 lg:rounded-lg"
        >
          <div className="w-[90%] flex gap-2 mb-2 md:w-[80%] items-center justify-center lg:mt-4">
            <img
              src={owner}
              alt="Owner Image"
              className="w-[100px] md:w-[200px] h-[110px] md:h-[190px] object-cover rounded-lg transition-transform duration-300 hover:scale-[105%]"
            />
            <img
              src={owner3}
              alt="Owner Image"
              className="w-[100px] md:w-[200px] h-[110px] md:h-[190px] object-cover rounded-lg transition-transform duration-300 hover:scale-[105%]"
            />
            <img
              src={owner2}
              alt="Owner Image"
              className="w-[100px] md:w-[200px] h-[110px] md:h-[190px] object-cover rounded-lg transition-transform duration-300 hover:scale-[105%]"
            />
          </div>

          <p className="text-sm text-justify p-6 md:px-20 md:text-lg lg:w-[98%]">
            The owner, Maricar Moral Dumon, is a testament to passion,
            perseverance, and continuous learning. She started with simple brow
            and lash services, dedicating herself to training and upgrading her
            knowledge until she eventually ventured into advanced aesthetic
            treatments. Her commitment to excellence even led her to compete
            internationally in Thailand and attend numerous seminars in the
            Philippines. With every step, she poured her heart into improving
            her craft, which became the foundation of the salon’s success and
            the trust she now enjoys from her clients.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
