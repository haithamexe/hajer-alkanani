import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import motionVaraints from "../utils/motionVaraints";

const Home = () => {
  return (
    <div className="bg-green-500 w-[100%]">
      <section className="flex ">
        <div
          className=" border-3 rounded-2xl p-4 border-t-1 border-r-1
        "
        >
          <motion.h1
            className="text-6xl font-bold mb-4 font-arniya w-[20%] 
            md:text-[8rem] md:mb-6
            lg:text-[11rem] lg:mb-8
          "
            variants={motionVaraints}
            initial="headingHidden"
            animate="headingVisible"
            exit="headingExit"
          >
            Hajer Alkanani
          </motion.h1>
          <motion.p
            className="text-xl w-[100%]"
            variants={motionVaraints}
            initial="smallTextHidden"
            animate="smallTextVisible"
            exit="smallTextExit"
          >
            We are glad to have you here. Explore our services and offerings.
          </motion.p>
        </div>
        <div className="w-[40%] border-3 rounded-2xl p-4 border-t-1 border-l-1">
          <img
            src="/path/to/image.jpg"
            alt="Description"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
