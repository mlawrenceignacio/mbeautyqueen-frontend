import React from "react";

const ServicesCard = ({ service }) => {
  return (
    <div className="bg-red-950 text-white rounded-md text-center p-1.5 lg:flex lg:items-center lg:px-2">
      <p>{service.service}</p>
    </div>
  );
};

export default ServicesCard;
