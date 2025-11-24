import { useEffect, useState } from "react";

import ServicesCard from "./ServicesCard";
import Loading from "../components/Loading.jsx";

import axios from "../api/axiosInstance.js";

import catImage from "../assets/images/hairServices.jpg";
import catImage2 from "../assets/images/nailsServices.jpg";
import catImage3 from "../assets/images/facialServices.jpg";
import catImage4 from "../assets/images/massageServices.jpg";
import catImage5 from "../assets/images/makeupServices.jpg";

const serviceCategories = [
  {
    name: "Hair",
    description: "Professional haircuts, coloring, and styling services.",
    image: catImage,
  },
  {
    name: "Nails",
    description:
      "Complete nail care including manicure, pedicure, and nail art.",
    image: catImage2,
  },
  {
    name: "Facial & Skin Care",
    description: "Premium skin care treatments and relaxing facials.",
    image: catImage3,
  },
  {
    name: "Massage & Body",
    description: "Therapeutic and relaxing body massage services.",
    image: catImage4,
  },
  {
    name: "Makeup",
    description: "Makeup services for any occasion.",
    image: catImage5,
  },
];

const Services = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState([]);

  const [category, setCategory] = useState("Hair");
  const [showList, setShowList] = useState(false);

  const getServices = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/services");

      setServices(res.data.services);
      console.log(res.data.services);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  const filteredServices = services.filter((s) => s.category === category);
  const activeCategory = serviceCategories.find((c) => c.name === category);

  return (
    <div className="flex flex-col w-full bg-pink-100 p-4 items-center">
      {isLoading && <Loading />}

      <ul className="flex gap-2 lg:gap-3 flex-wrap items-center justify-center mt-2 lg:mt-3">
        {serviceCategories.map((cat, i) => (
          <li
            key={i}
            onClick={() => {
              setCategory(cat.name);
              setShowList(false);
            }}
            className={`bg-pink-300 px-2.5 py-1 rounded-md cursor-pointer transition-all duration-200 hover:bg-red-500 hover:text-white shadow-[1px_1px_1px_black] lg:text-lg ${
              cat.name === category && "bg-pink-800 text-white"
            }`}
          >
            {cat.name.toUpperCase()}
          </li>
        ))}
      </ul>

      {category && (
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-evenly lg:items-start lg:gap-5 w-full mt-6 bg-white py-5 px-3 rounded-md md:w-[80%] lg:w-[55%] lg:px-4">
          <div className="text-center lg:text-start lg:w-[40%]">
            <h2 className="text-xl font-bold text-red-950 lg:text-2xl">
              {category}
            </h2>
            <p className="text-sm lg:text-lg">{activeCategory?.description}</p>

            {!showList && (
              <button
                onClick={() => setShowList(true)}
                className="mt-4 bg-red-800 text-white px-2 py-1 rounded-md"
              >
                View Service List
              </button>
            )}
          </div>

          <div className="lg:w-[50%]">
            {!showList && (
              <img
                src={activeCategory?.image}
                alt={category}
                className="w-[300px] h-[300px] rounded-lg object-cover transition-transform duration-300 hover:scale-[105%]"
              />
            )}

            {showList && (
              <div className="flex flex-wrap gap-2 justify-center items-center bg-pink-300 rounded-md py-3 px-1.5">
                {filteredServices.map((service, i) => (
                  <ServicesCard key={i} service={service} />
                ))}
              </div>
            )}

            {showList && filteredServices.length === 0 && (
              <p>No services available for this category</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
