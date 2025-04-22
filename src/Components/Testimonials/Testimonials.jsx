import React from "react";
import Marquee from "react-fast-marquee";
import face1 from "../../../public/face (1).jpg";
import face2 from "../../../public/face (2).jpg";
import face3 from "../../../public/face (3).jpg";
import face4 from "../../../public/face (4).jpg";
import face5 from "../../../public/face (5).jpg";
import HealthyMeals from "../../pages/HealthyMeals/HealthyMeals";

const testimonials = [
  {
    name: "Jake Thompson",
    quote:
      "The trainers here are top-notch! I've gained strength and confidence like never before.",
    image: face1,
  },
  {
    name: "Sophia Martinez",
    quote:
      "This gym changed my life! The community is so supportive, and the equipment is world-class.",
    image: face2,
  },
  {
    name: "David Johnson",
    quote:
      "The best fitness experience! The personalized workout plans have helped me stay on track.",
    image: face3,
  },
  {
    name: "Emma Wilson",
    quote:
      "Love the energy in this place! Every workout session pushes me to my limits.",
    image: face4,
  },
  {
    name: "Chris Evans",
    quote:
      "The trainers and nutrition guidance have been a game-changer for my fitness journey.",
    image: face5,
  },
];

export default function Testimonials() {
  return (
    <>
      <h2 className="text-4xl text-center text-white font-extrabold mb-8 mt-8">
        What Our Members Say 💪
      </h2>
      <div className="flex justify-center items-center my-8">
        <Marquee gradient={false} speed={50} className="w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-gray-300 h-72 justify-between p-5 rounded-lg shadow-xl w-80 mx-4"
            >
              <div>
                {/* ⭐ Star Ratings */}
                <div className="flex text-yellow-500 gap-1 mb-3">
                  <i className="h-5 w-5 fa-solid fa-star"></i>
                  <i className="h-5 w-5 fa-solid fa-star"></i>
                  <i className="h-5 w-5 fa-solid fa-star"></i>
                  <i className="h-5 w-5 fa-solid fa-star"></i>
                  <i className="h-5 w-5 fa-solid fa-star"></i>
                </div>

                {/* Image */}
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s testimonial`}
                  className="h-28 rounded-lg w-full mb-3 object-cover"
                />

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-6 mb-1">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Name */}
              <h4 className="text-center text-gray-800 text-lg font-bold">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </Marquee>
      </div>
    
    </>
  );
}
