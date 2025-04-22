import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dumbbell1 from "../../../public/equipment1 (1).png";
import dumbbell2 from "../../../public/equipment1 (2).png";
import dumbbell3 from "../../../public/equipment1 (3).png";
import dumbbell4 from "../../../public/equipment1 (4).png";
import dumbbell5 from "../../../public/equipment1 (5).png";
import { Link } from "react-router-dom";

export default function FloatingGymItems() {
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dumbbellImages = [
    dumbbell1,
    dumbbell2,
    dumbbell3,
    dumbbell4,
    dumbbell5,
  ];

  // Floating Dumbbells Animation Variants
  const floatingVariants = {
    initial: { y: "100vh", opacity: 0 }, // Start off-screen
    animate: (i) => ({
      y: ["100vh", "-10vh"], // Move upwards
      opacity: [0, 1, 1, 0], // Fade in, stay visible, then fade out
      transition: {
        duration: 5 + i, // Different speeds for natural effect
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="flex flex-col h-full justify-center w-full items-center mb-4 relative">
      {/* Floating Dumbbells Layer */}
      <div className="h-full w-full absolute left-0 overflow-hidden pointer-events-none top-0">
        {dumbbellImages.map((image, i) => (
          <motion.img
            key={i}
            src={image}
            alt={`Dumbbell ${i + 1}`}
            className="absolute opacity-80"
            style={{
              left: `${10 + i * 15}%`, // Spread across the screen
              width: `${60 + i * 10}px`, // Different sizes
            }}
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            custom={i}
          />
        ))}
      </div>
      {/* Offer Box */}
      <motion.div
        className="bg-gradient-to-r p-4 rounded-xl shadow-lg text-center text-white from-yellow-500 max-w-xl mx-auto my-12 relative to-orange-500 via-red-500 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="flex justify-center text-3xl font-extrabold gap-2 items-center tracking-wide">
          🔥{" "}
          <span className="bg-black rounded-md px-3 py-1">Limited Offer</span>{" "}
          🔥
        </h1>
        <p className="text-lg mt-2">
          Get <span className="text-yellow-300 font-bold">20% Off</span> – Ends
          Soon!
        </p>
      </motion.div>
      {/* Countdown Timer */}
      <div className="grid grid-flow-col text-center auto-cols-max gap-5 mt-6 relative z-10">
        {[
          { label: "days", value: timeLeft.days },
          { label: "hours", value: timeLeft.hours },
          { label: "min", value: timeLeft.minutes },
          { label: "sec", value: timeLeft.seconds },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-neutral bg-white p-3 rounded-lg shadow-lg text-black"
          >
            <span className="text-5xl countdown font-mono">
              {item.value.toString().padStart(2, "0")}
            </span>
            {item.label}
          </div>
        ))}
      </div>

      <Link to="/plans">
      <button
        class="bg-white h-14 rounded-2xl text-black text-center text-xl w-48 font-semibold group mt-6 relative"
        type="button"
      >
        <div class="flex bg-amber-500 h-12 justify-center rounded-xl w-1/4 absolute duration-500 group-hover:w-[184px] items-center left-1 top-[4px] z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="25px"
            width="25px"
          >
            <path
              d="M10 6l6 6-6 6-1.41-1.41L12.17 12H2v-2h10.17L8.59 7.41z"
              fill="#000000"
            ></path>
          </svg>
        </div>
        <p class="translate-x-2">See Offers</p>
      </button>
      </Link>
    </div>
  );
}
