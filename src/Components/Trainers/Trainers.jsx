import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// Sample trainers data
const trainers = [
  {
    name: "John Doe",
    specialty: "Strength Training",
    img: "/public/Trainer1 (3).jpg",
  },
  {
    name: "Sarah Smith",
    specialty: "Weight Loss Coach",
    img: "/public/Trainer1 (5).jpg",
  },
  {
    name: "Michael Brown",
    specialty: "Cardio & Endurance",
    img: "/public/Trainer1 (4).jpg",
  },
  {
    name: "Emily Johnson",
    specialty: "Yoga & Flexibility",
    img: "/public/Trainer1 (1).jpg",
  },
  {
    name: "David Lee",
    specialty: "Bodybuilding Expert",
    img: "/public/Trainer1 (2).jpg",
  },
  {
    name: "Sophia Martinez",
    specialty: "Nutrition & Wellness",
    img: "/public/Trainer1 (6).jpg",
  },
];

export default function Trainers() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);
  return (
    <section className="bg-gray-900 text-center text-white py-16">
      <h2 className="text-4xl font-extrabold mb-8">Meet Our Expert Trainers</h2>

      <div className="grid grid-cols-1 gap-6 max-w-screen md:grid-cols-3 overflow-hidden px-8 sm:grid-cols-2">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg group overflow-hidden relative"
            data-aos="zoom-in"
            data-aos-delay={index * 200} // Delay effect for each trainer
          >
            <img
              src={trainer.img}
              alt={trainer.name}
              className="h-72 w-full object-cover"
            />

            {/* Hover Effect */}
            <div className="flex flex-col bg-black bg-opacity-60 justify-center absolute duration-500 group-hover:opacity-100 inset-0 items-center opacity-0 transition">
              <h3 className="text-xl font-bold">{trainer.name}</h3>
              <p className="text-sm text-yellow-400">{trainer.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
