// src/pages/ContactUs.jsx  (or wherever your ContactUs file is)
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBox from "../components/ChatBox";
function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-pink-50 w-full">
      {/* HEADER MUST BE OUTSIDE SCROLL AND STICKY */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* MAIN CONTENT — NO overflow-y-auto */}
      <main className="flex-1 w-full">
        <div className="flex flex-col items-center p-6 gap-6">
          <div className="w-full max-w-6xl">
            <ChatBox />
          </div>

          <section className="flex flex-col items-center text-center w-[90%] md:w-[70%] lg:w-[55%]">
            <h1 className="text-2xl lg:text-3xl font-bold text-red-950 mb-2">
              MESSAGE US
            </h1>

            <p className="text-sm md:text-lg p-3 border border-red-950 rounded-lg mb-3 w-full bg-white">
              Message us directly through our salon’s built-in messenger. It
              will be handled automatically by our chatbot for quick answers —
              our admins will read and reply once they’re logged in.
            </p>
          </section>
        </div>
      </main>

      {/* FOOTER FIXED AT BOTTOM OF PAGE */}
      <Footer />
    </div>
  );
}

export default ContactUs;
