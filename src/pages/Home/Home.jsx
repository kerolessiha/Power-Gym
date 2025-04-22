/* eslint-disable no-unused-vars */
import background from "../../../public/homebackground.jpg";
import { motion } from "framer-motion";
import FloatingGymItems from "../../Components/FloatingGymItems/FloatingGymItems";
import Trainers from "../../Components/Trainers/Trainers";
import Footer from "../../Components/Footer/Footer";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="h-screen overflow-hidden relative">
        <img
          src={background}
          alt="Background"
          className="h-full w-full absolute left-0 object-cover top-0"
        />
        <div className="flex flex-col justify-center text-center text-white absolute inset-0 items-center">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Unleash Your Strength with Power Gym!
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: -120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Premium fitness programs, expert coaching, and top-tier equipment
          </motion.p>
          <Link to="/plans"> {/* Use Link instead of motion.a */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, delay: 0.4 }}
              className="bg-[#d4af37] rounded-sm text-sm text-white focus:outline-hidden focus:ring-3 font-medium hover:rotate-2 hover:scale-110 inline-block mt-4 px-8 py-3 transition"
            >
              Join Now
            </motion.button>
          </Link>
        </div>
      </div>
      <FloatingGymItems />
      <Trainers />
      <Testimonials />
      <Footer />
    </>
  );
}
