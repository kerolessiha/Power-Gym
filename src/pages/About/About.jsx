import man1 from "../../../public/man1.jpg";
import man2 from "../../../public/man2.jpg";
import { motion } from "framer-motion";
export default function About() {
  return (
    <>
      <section class="py-24 relative">
        <div class="w-full lg:px-5 max-w-7xl md:px-5 mx-auto px-4">
          <div class="grid grid-cols-1 justify-start w-full gap-12 items-center lg:grid-cols-2">
            <div class="grid grid-cols-1 order-last justify-center w-full gap-6 items-start lg:order-first sm:grid-cols-2">
              <div class="flex justify-start gap-2.5 items-start lg:justify-center pt-24 sm:justify-end">
                <motion.img
                  initial={{ y: -20 }}
                  animate={{ y: [0, -100, 0] }} // Move up and down }}}}
                  transition={{
                    duration: 2, // Duration of the animation
                    ease: "easeInOut",
                    repeat: Infinity, // Repeat infinitely
                    repeatType: "loop",
                  }} // Loop the animation }}
                  class="rounded-xl object-cover"
                  src={man1}
                  alt="about Us image"
                />
              </div>
              <motion.img
                initial={{ y: 20 }}
                animate={{ y: [0, 70, 0] }} // Move up and down }}}}
                transition={{
                  duration: 2, // Duration of the animation
                  ease: "easeInOut",
                  repeat: Infinity, // Repeat infinitely
                  repeatType: "loop",
                }} // Loop the animation }}
                class="rounded-xl ml-auto object-cover sm:ml-0"
                src={man2}
                alt="about Us image"
              />
            </div>
            <div class="flex-col justify-center w-full gap-10 inline-flex items-center lg:items-start">
              <div class="flex flex-col justify-center w-full gap-8 items-start">
                <div class="flex flex-col justify-start w-full gap-3 items-center lg:items-start">
                  <h2 class="text-4xl text-center text-cyan-400 font-bold font-manrope leading-normal lg:text-start">
                    Fueling Strength, Building Community
                  </h2>
                  <p class="text-amber-400-500 text-base text-center font-normal leading-relaxed lg:text-start">
                    Every project we've undertaken has been a collaborative
                    effort, where every person involved has left their mark.
                    Together, we've not only constructed buildings but also
                    built enduring connections that define our success story.At
                    our gym, every workout is a team effort—where dedication,
                    support, and hard work shape more than just muscles.
                    Together, we've not only transformed bodies but also built a
                    thriving fitness family that drives each other toward
                    success.
                  </p>
                </div>
                <div class="justify-center w-full gap-5 inline-flex items-center lg:justify-start sm:gap-10">
                  <div class="flex-col justify-start inline-flex items-start">
                    <h3 class="text-4xl font-bold font-manrope leading-normal">
                      🏋️10+
                    </h3>
                    <h6 class="text-base font-normal leading-relaxed">
                      Years of Experience
                    </h6>
                  </div>
                  <div class="flex-col justify-start inline-flex items-start">
                    <h4 class="text-4xl font-bold font-manrope leading-normal">
                      🔥500+
                    </h4>
                    <h6 class="text-base font-normal leading-relaxed">
                      Successful Transformations
                    </h6>
                  </div>
                  <div class="flex-col justify-start inline-flex items-start">
                    <h4 class="text-4xl font-bold font-manrope leading-normal">
                      💪1000+
                    </h4>
                    <h6 class="text-base font-normal leading-relaxed">
                      Motivated Members
                    </h6>
                  </div>
                </div>
              </div>
              <button class="flex bg-indigo-600 justify-center rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] w-full duration-700 ease-in-out hover:bg-indigo-800 items-center px-3.5 py-2 sm:w-fit transition-all">
                <span class="text-sm text-white font-medium leading-6 px-1.5">
                  Read More
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
