// import React, { useRef, useState, useEffect } from "react";
// // eslint-disable-next-line no-unused-vars
// import { motion } from "motion/react";
// import motionVariants from "../utils/motionVaraints";

// const Home = () => {
//   const offset = 57;
//   const [isSticky, setIsSticky] = useState(false);
//   const sentinelRef = useRef(null);
//   const sectionRef = useRef(null);
//   const headerHeight = 100;

//   useEffect(() => {
//     const sentinl = sentinelRef.current;
//     if (!sentinl) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsSticky(!entry.isIntersecting);
//       },
//       {
//         rootMargin: `-${offset + headerHeight}px 0px 0px 0px`,
//         threshold: 0,
//       }
//     );
//     observer.observe(sentinl);
//     return () => {
//       observer.disconnect();
//     };
//   }, [offset, headerHeight]);

//   return (
//     <div className="bg-green-500 w-[100%] ">
//       <section className="flex relative">
//         <motion.img
//           src="/images/seth.png"
//           alt="star"
//           className="absolute w-[40vw] h-auto bottom-[-30px] right-[-5px] z-10
//             md:w-75 md:bottom-[-55px]
//             lg:w-100
//             lg:right-[1.2vw]
//             lg:bottom-[-80px]
//           "
//           initial={{
//             opacity: 0,
//             y: 5,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.2, ease: "easeInOut", delay: 0.4 },
//           }}
//           exit={{
//             opacity: 0,
//             y: 5,
//             transition: { duration: 0.2, ease: "easeInOut", delay: 0.4 },
//           }}
//         />
//         <div
//           className="w-[65%] md:w-[70%] lg:w-[77%]
//             border-4 rounded-2xl p-4 border-y-1 border-r-1
//         "
//         >
//           <motion.h1
//             className="text-[3.2rem] leading-12 font-bold mb-4 font-arniya w-[20%]
//             md:text-[8rem] md:mb-6 md:leading-none
//             lg:text-[11rem] lg:mb-8 lg:leading-none
//             z-10
//             relative
//           "
//             variants={motionVariants}
//             initial="headingHidden"
//             animate="headingVisible"
//             exit="headingExit"
//           >
//             Hajer Alkanani
//           </motion.h1>
//           <motion.p
//             className="text-xl w-[100%]"
//             variants={motionVariants}
//             initial="smallTextHidden"
//             animate="smallTextVisible"
//             exit="smallTextExit"
//           >
//             We are glad to have you here. Explore our services and offerings.
//           </motion.p>
//         </div>

//         <div
//           className="relative w-[35%] border-4 rounded-2xl  border-l-1 md:h-100 lg:h-130 border-y-1 flex items-start
//           md:w-[30%]
//         "
//         >
//           <motion.img
//             src="/images/star.png"
//             alt="star"
//             className="absolute w-10 h-auto top-3 left-1
//               md:w-20 md:top-6 md:left-3
//               lg:w-30 lg:top-7 lg:left-1
//             "
//             variants={motionVariants}
//             initial="bigStarHidden"
//             animate="bigStarVisible"
//             exit="bigStarHidden"
//           />
//           <motion.img
//             src="/images/star.png"
//             alt="star"
//             className="absolute w-5 h-auto top-1 left-8
//               md:w-7 md:top-3 md:left-16
//               lg:w-10 lg:top-4 lg:left-20
//             "
//             variants={motionVariants}
//             initial="smallStarHidden"
//             animate="smallStarVisible"
//             exit="smallStarHidden"
//           />
//           <motion.img
//             src="/images/star.png"
//             alt="star"
//             className="absolute w-3 h-auto top-0 left-2
//               md:w-4 md:top-2 md:left-7
//               lg:w-6 lg:top-3 lg:left-7
//             "
//             variants={motionVariants}
//             initial="smallStarHidden"
//             animate="smallStarVisible"
//             exit="smallStarHidden"
//           />
//           <img
//             src="/images/hajer home.png"
//             alt="hero image"
//             className="object-cover w-full h-full md:object-contain"
//           />
//         </div>
//       </section>
//       <section>
//         <div className="w-[100%]  items-center flex overflow-hidden">
//           <motion.p
//             initial={{
//               opacity: 0,
//               x: -10,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="text-black font-bold text-1xl font-runiga  border-black
//               border-1 border-l-4  rounded-xl  p-3 pl-4
//             "
//           >
//             This is a black
//           </motion.p>
//           <motion.p
//             initial={{
//               opacity: 0,
//               x: 20,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
//             className="text-black font-bold text-1xl font-runiga
//               border-1 border-r-4  rounded-xl  p-3 pl-4 flex-1
//             "
//           >
//             Another One here lol
//           </motion.p>
//         </div>
//       </section>
//       <section
//         ref={sectionRef}
//         className="w-[100%] h-[170vh] rounded-2xl relative"
//       >
//         <div
//           ref={sentinelRef}
//           className="sticky top-0 bg-red-100 rounded-2xl border-4 border-y-1 "
//           style={isSticky ? { top: `${offset}px` } : { top: "0px" }}
//         >
//           <motion.h1
//             className="text-black text-lg px-2 py-1 border-1 block rounded-xl
//             w-17 font-bold font-arniya
//           "
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
//           >
//             About
//           </motion.h1>
//           <motion.h1
//             variants={motionVariants}
//             initial="smallTextHidden"
//             animate="smallTextVisible"
//             exit="smallTextExit"
//             className="text-black font-bold text-[1rem] p-4 text-justify break-all hyphens-auto"
//           >
//             I'm a certified Fitness Trainer with a strong academic background in
//             Physiotherapy and Rehabilitation, and advanced studies in Nutrition
//             & Diet from Warsaw University of Life Sciences. With a passion for
//             helping people transform their health, I combine movement, recovery,
//             and nutrition to create customized, science-backed programs.
//           </motion.h1>
//         </div>
//         <div className="sticky top-11 bg-red-200 rounded-2xl border-4 border-y-1  ">
//           <motion.h1
//             className="text-black text-lg px-2 py-1 border-1 block rounded-xl
//             w-25 font-bold font-arniya
//           "
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
//           >
//             Education
//           </motion.h1>
//           <motion.h1
//             variants={motionVariants}
//             initial="smallTextHidden"
//             animate="smallTextVisible"
//             exit="smallTextExit"
//             className="text-black  font-bold text-[1rem] p-4 text-justify break-all hyphens-auto"
//           >
//             I'm a certified Fitness Trainer with a strong academic background in
//             Physiotherapy and Rehabilitation, and advanced studies in Nutrition
//             & Diet from Warsaw University of Life Sciences. With a passion for
//             helping people transform their health, I combine movement, recovery,
//             and nutrition to create customized, science-backed programs.
//           </motion.h1>
//         </div>
//         <div className="sticky top-22 bg-red-300 rounded-2xl border-4 border-y-1  ">
//           <motion.h1
//             className="text-black text-lg px-2 py-1 border-1 block rounded-xl
//             w-30 font-bold font-arniya
//           "
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
//           >
//             Expierences
//           </motion.h1>
//           <motion.h1
//             variants={motionVariants}
//             initial="smallTextHidden"
//             animate="smallTextVisible"
//             exit="smallTextExit"
//             className="text-black font-bold text-[1rem] p-4 text-justify break-all hyphens-auto"
//           >
//             I'm a certified Fitness Trainer with a strong academic background in
//             Physiotherapy and Rehabilitation, and advanced studies in Nutrition
//             & Diet from Warsaw University of Life Sciences. With a passion for
//             helping people transform their health, I combine movement, recovery,
//             and nutrition to create customized, science-backed programs.
//           </motion.h1>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import motionVariants from "../utils/motionVaraints";

const Home = () => {
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef(null);
  const stickyContainerRef = useRef(null);

  // Adjust these values based on your header height and desired offset
  const headerHeight = 900;
  const stickyOffset = 59;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel goes out of view (scrolled past), make content sticky
        setIsSticky(!entry.isIntersecting);
      },
      {
        // Trigger when sentinel crosses the sticky position
        rootMargin: `-${headerHeight + stickyOffset}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [headerHeight, stickyOffset]);

  return (
    <div className="bg-green-500 w-full">
      {/* Your existing hero section */}
      <section className="flex relative">
        <motion.img
          src="/images/seth.png"
          alt="star"
          className="absolute w-[40vw] h-auto bottom-[-30px] right-[-5px] z-10
            md:w-75 md:bottom-[-55px] 
            lg:w-100
            lg:right-[1.2vw]  
            lg:bottom-[-80px]
          "
          initial={{ opacity: 0, y: 5 }}
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

        <div className="w-[65%] md:w-[70%] lg:w-[77%] border-4 rounded-2xl p-4 border-y-1 border-r-1">
          <motion.h1
            className="text-[3.2rem] leading-12 font-bold mb-4 font-arniya w-[20%] 
            md:text-[8rem] md:mb-6 md:leading-none
            lg:text-[11rem] lg:mb-8 lg:leading-none
            z-10 relative"
            variants={motionVariants}
            initial="headingHidden"
            animate="headingVisible"
            exit="headingExit"
          >
            Hajer Alkanani
          </motion.h1>
          <motion.p
            className="text-xl w-full"
            variants={motionVariants}
            initial="smallTextHidden"
            animate="smallTextVisible"
            exit="smallTextExit"
          >
            We are glad to have you here. Explore our services and offerings.
          </motion.p>
        </div>

        <div className="relative w-[35%] border-4 rounded-2xl border-l-1 md:h-100 lg:h-130 border-y-1 flex items-start md:w-[30%]">
          <motion.img
            src="/images/star.png"
            alt="star"
            className="absolute w-10 h-auto top-3 left-1
              md:w-20 md:top-6 md:left-3
              lg:w-30 lg:top-7 lg:left-1"
            variants={motionVariants}
            initial="bigStarHidden"
            animate="bigStarVisible"
            exit="bigStarHidden"
          />
          <motion.img
            src="/images/star.png"
            alt="star"
            className="absolute w-5 h-auto top-1 left-8
              md:w-7 md:top-3 md:left-16
              lg:w-10 lg:top-4 lg:left-20"
            variants={motionVariants}
            initial="smallStarHidden"
            animate="smallStarVisible"
            exit="smallStarHidden"
          />
          <motion.img
            src="/images/star.png"
            alt="star"
            className="absolute w-3 h-auto top-0 left-2
              md:w-4 md:top-2 md:left-7
              lg:w-6 lg:top-3 lg:left-7"
            variants={motionVariants}
            initial="smallStarHidden"
            animate="smallStarVisible"
            exit="smallStarHidden"
          />
          <img
            src="/images/hajer home.png"
            alt="hero image"
            className="object-cover w-full h-full md:object-contain"
          />
        </div>
      </section>

      {/* Your existing text section */}
      <section>
        <div className="w-full items-center flex overflow-hidden">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-black font-bold text-1xl font-runiga border-black
              border-1 border-l-4 rounded-xl p-3 pl-4"
          >
            This is a black
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            className="text-black font-bold text-1xl font-runiga
              border-1 border-r-4 rounded-xl p-3 pl-4 flex-1"
          >
            Another One here lol
          </motion.p>
        </div>
      </section>

      {/* FIXED STICKY SECTION */}
      <div className="relative">
        {/* Sentinel - invisible trigger element */}
        <div
          ref={sentinelRef}
          className="absolute top-0 left-0 w-1 h-1 pointer-events-none"
          style={{ top: `${stickyOffset}px` }}
        />

        {/* Sticky Container */}
        <div
          ref={stickyContainerRef}
          className="min-h-[200vh]" // Ensure enough height for scrolling
        >
          {/* About Section */}
          <div
            className={`bg-red-100 rounded-2xl border-4 border-y-1  transition-all duration-300 ${
              isSticky ? "sticky" : "relative"
            }`}
            style={isSticky ? { top: `${stickyOffset}px` } : {}}
          >
            <motion.h1
              className="text-black text-lg px-2 py-1 border-1 block rounded-xl
              w-17 font-bold font-arniya"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
            >
              About
            </motion.h1>
            <motion.p
              variants={motionVariants}
              initial="smallTextHidden"
              animate="smallTextVisible"
              exit="smallTextExit"
              className="text-black font-bold text-[1rem] p-4 text-justify break-words hyphens-auto"
            >
              I'm a certified Fitness Trainer with a strong academic background
              in Physiotherapy and Rehabilitation, and advanced studies in
              Nutrition & Diet from Warsaw University of Life Sciences. With a
              passion for helping people transform their health, I combine
              movement, recovery, and nutrition to create customized,
              science-backed programs.
            </motion.p>
          </div>

          {/* Education Section */}
          <div
            className={`bg-red-200 rounded-2xl border-4 border-y-1 transition-all duration-300 ${
              isSticky ? "sticky" : "relative"
            }`}
            style={isSticky ? { top: `${stickyOffset + 45}px` } : {}}
          >
            <motion.h1
              className="text-black text-lg px-2 py-1 border-1 block rounded-xl
              w-25 font-bold font-arniya"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
            >
              Education
            </motion.h1>
            <motion.p
              variants={motionVariants}
              initial="smallTextHidden"
              animate="smallTextVisible"
              exit="smallTextExit"
              className="text-black font-bold text-[1rem] p-4 text-justify break-words hyphens-auto"
            >
              I'm a certified Fitness Trainer with a strong academic background
              in Physiotherapy and Rehabilitation, and advanced studies in
              Nutrition & Diet from Warsaw University of Life Sciences. With a
              passion for helping people transform their health, I combine
              movement, recovery, and nutrition to create customized,
              science-backed programs.
            </motion.p>
          </div>

          {/* Experience Section */}
          <div
            className={`bg-red-300 rounded-2xl border-4 border-y-1 mb-4 transition-all duration-300 ${
              isSticky ? "sticky" : "relative"
            }`}
            style={isSticky ? { top: `${stickyOffset + 90}px` } : {}}
          >
            <motion.h1
              className="text-black text-lg px-2 py-1 border-1 block rounded-xl
              w-30 font-bold font-arniya"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
            >
              Experience
            </motion.h1>
            <motion.p
              variants={motionVariants}
              initial="smallTextHidden"
              animate="smallTextVisible"
              exit="smallTextExit"
              className="text-black font-bold text-[1rem] p-4 text-justify break-words hyphens-auto"
            >
              I'm a certified Fitness Trainer with a strong academic background
              in Physiotherapy and Rehabilitation, and advanced studies in
              Nutrition & Diet from Warsaw University of Life Sciences. With a
              passion for helping people transform their health, I combine
              movement, recovery, and nutrition to create customized,
              science-backed programs.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
