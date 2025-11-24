import Header from "../components/Header";
import Footer from "../components/Footer";

import phoneIcon from "../assets/images/call.png";
import messageIcon from "../assets/images/send.png";

function ContactUs() {
  return (
    <div className="flex flex-col w-full h-[100dvh]">
      <Header />

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex flex-col items-center p-3">
          <div className="bg-black text-white px-2">
            DITO YUNG CHATBOX OKIDOKIE.
          </div>

          <div className="flex flex-col items-center text-center w-[90%] md:w-[60%] lg:w-[50%]">
            <h1 className="text-2xl lg:text-3xl font-bold text-red-950 mb-2">
              MESSAGE US
            </h1>

            <p className="text-sm md:text-lg p-3 border border-red-950 rounded-lg mb-3 w-full">
              Message us directly through our salon’s built-in messenger. It
              will be handled automatically by our chatbot, but our admins can
              read your messages once we log in. Please wait for our reply!
            </p>

            <div className="flex flex-col bg-pink-200 p-3 rounded-lg w-full md:text-lg ">
              <div className="flex gap-2 items-center justify-center">
                <img
                  src={messageIcon}
                  alt="Message Icon"
                  className="w-[20px] h-[20px] lg:w-[15px] lg:h-[15px]"
                />{" "}
                <p className="text-red-950">mbeautyqueen@gmail.com</p>
              </div>

              <div className="flex gap-2 items-center justify-center">
                <img
                  src={phoneIcon}
                  alt="Phone Icon"
                  className="w-[20px] h-[20px] lg:w-[15px] lg:h-[15px]"
                />{" "}
                <p className="text-red-950">+639374629162</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
