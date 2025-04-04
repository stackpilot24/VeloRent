import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price",
    icon: <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: "We provide the most affordable rental rates with no hidden charges, ensuring complete transparency and value for your money. Our flexible rental plans suit every budget, making travel cost-effective and convenient.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: "Our hassle-free booking process lets you rent a scooty or bike in just a few clicks. With real-time availability updates, you can quickly find and book your ride without any delays.",
    aosDelay: "500",
  },
  {
    name: "Reliable Service",
    icon: <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />,
    link: "#",
    description: "We are committed to providing a seamless and dependable rental experience. Our 24/7 customer support, well-serviced vehicles, and on-time availability make us a trusted choice for your travel needs. Ride with confidence, knowing you can count on us!.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
            >
              <div>{skill.icon}</div>
              <h1 className="text-xl font-semibold">{skill.name}</h1>
              <p>{skill.description}</p>
              <a href={skill.link} className="text-blue-500 hover:underline">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;