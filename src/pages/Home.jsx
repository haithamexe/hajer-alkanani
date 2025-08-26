import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import motionVariants from "../utils/motionVaraints";

const Home = () => {
  return (
    <div className="bg-green-500 w-[100%] ">
      <section className="flex relative h-[30vh] ">
        <motion.img
          src="/images/seth.png"
          alt="star"
          className="absolute w-43 h-auto bottom-[-40px] right-[-5px] z-10"
          initial={{
            opacity: 0,
            y: 5,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: "easeInOut", delay: 0.4 },
          }}
          exit={{
            opacity: 0,
            y: 5,
            transition: { duration: 0.2, ease: "easeInOut", delay: 0.4 },
          }}
        />
        <div
          className="w-[70%]  border-3 rounded-2xl p-4 border-t-1 border-r-1
        "
        >
          <motion.h1
            className="text-6xl font-bold mb-4 font-arniya w-[20%] 
            md:text-[8rem] md:mb-6
            lg:text-[11rem] lg:mb-8
          "
            variants={motionVariants}
            initial="headingHidden"
            animate="headingVisible"
            exit="headingExit"
          >
            Hajer Alkanani
          </motion.h1>
          <motion.p
            className="text-xl w-[100%]"
            variants={motionVariants}
            initial="smallTextHidden"
            animate="smallTextVisible"
            exit="smallTextExit"
          >
            We are glad to have you here. Explore our services and offerings.
          </motion.p>
        </div>

        <div className="relative w-[30%] border-3  rounded-2xl border-t-1 border-l-1">
          <motion.img
            src="/images/star.png"
            alt="star"
            className="absolute w-10 h-auto top-0 left-0"
            variants={motionVariants}
            initial="bigStarHidden"
            animate="bigStarVisible"
            exit="bigStarHidden"
          />
          <motion.img
            src="/images/star.png"
            alt="star"
            className="absolute w-5 h-auto top-0 left-8"
            variants={motionVariants}
            initial="smallStarHidden"
            animate="smallStarVisible"
            exit="smallStarHidden"
          />
          <motion.img
            src="/images/star.png"
            alt="star"
            className="absolute w-3 h-auto top-[-8px] left-1"
            variants={motionVariants}
            initial="smallStarHidden"
            animate="smallStarVisible"
            exit="smallStarHidden"
          />
          <img
            src="/images/hajer home.png"
            alt="hero image"
            className="object-cover w-[100%] h-auto"
          />
        </div>
      </section>
      <section>
        <div className="w-[100%] h-12 rounded-2xl bg-black px-4 items-center flex ">
          <p className="text-green-500 font-bold">This is a black section</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
