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
//     <div className="bg-body w-[100%] ">
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
  const [isMobile, setIsMobile] = useState(false);

  // Adjust these values based on your header height and desired offset
  const headerHeight = 900;
  const stickyOffset = isMobile ? 56 : 65;

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on initial load

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [flippedCards, setFlippedCards] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "We provide comprehensive wellness services including massage therapy, aromatherapy, reflexology, and holistic healing treatments tailored to your individual needs.",
    },
    {
      id: 2,
      question: "How can I book a session?",
      answer:
        "You can easily book a session through our online booking system, call us directly, or visit our location. We offer flexible scheduling to accommodate your busy lifestyle.",
    },
    {
      id: 3,
      question: "What should I expect during my first appointment?",
      answer:
        "Your first visit includes a consultation to understand your needs, a brief health assessment, and a customized treatment plan designed specifically for your wellness goals.",
    },
    {
      id: 4,
      question: "Are there any special packages available?",
      answer:
        "Yes! We offer various wellness packages including monthly memberships, couple's treatments, and seasonal specials. Contact us to learn about current promotions and discounts.",
    },
  ];

  const toggleFlip = (cardId) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(cardId)) {
      newFlippedCards.delete(cardId);
    } else {
      newFlippedCards.add(cardId);
    }
    setFlippedCards(newFlippedCards);
  };

  return (
    <div className="bg-body w-full">
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

        <div className="w-[65%] md:w-[70%] lg:w-[77%] border-4 rounded-2xl p-4 border-y-4 border-r-1">
          <motion.h1
            className="text-[3rem] leading-12 font-bold mb-4 font-arniya w-[20%] 
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

        <div className="relative w-[35%] border-4 rounded-2xl border-l-1 md:h-100 lg:h-130 border-y-4 flex items-start md:w-[30%]">
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
      {/* <section>
        <div className="w-full items-center flex overflow-hidden">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-black font-bold text-md font-runiga border-black
              border-1 border-l-4 rounded-xl p-3 pl-2"
          >
            This is a black
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            className="text-black font-bold text-md font-runiga
              border-1 border-r-4 rounded-xl p-3 pl-2 flex-1"
          >
            Another One here
          </motion.p>
        </div>
      </section> */}

      {/* {break section} */}
      <section className="h-15 relative rounded-xl flex overflow-hidden flex-col justify-center items-center">
        <motion.img
          src="./images/star.png"
          alt="idk"
          className="w-7 h-auto absolute md:w-10"
          variants={motionVariants}
          initial={{
            opacity: 0,
            rotateY: 360,
          }}
          animate={{
            opacity: 1,
            rotateY: 0,
          }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src="./images/tear.png"
          alt="idk"
          className="w-10 h-auto absolute right-0 rotate-180"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.1,
          }}
        />
        <motion.img
          src="./images/tear.png"
          alt="idk"
          className="w-10 h-auto absolute left-0"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.1,
          }}
        />
        <motion.div
          className="bg-accent h-0.5 w-full"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        ></motion.div>
      </section>

      {/* FIXED STICKY SECTION */}
      <section className="relative">
        {/* Sentinel - invisible trigger element */}
        <div
          ref={sentinelRef}
          className="absolute top-0 left-0 w-1 h-1 pointer-events-none"
          style={{ top: `${stickyOffset}px` }}
        />

        {/* Sticky Container */}
        <div
          ref={stickyContainerRef}
          className="" // Ensure enough height for scrolling
        >
          {/* About Section */}
          <div
            className={`bg-purple-300 rounded-2xl border-4 border-y-1  transition-all duration-300 ${
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
              className="text-black font-bold text-[1rem] p-4 pt-1 text-justify break-words hyphens-auto"
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
            className={`bg-purple-400 rounded-2xl border-4 border-y-1 transition-all duration-300 ${
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
              className="text-black font-bold text-[1rem] p-4  pt-1 text-justify break-words hyphens-auto"
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
            className={`bg-purple-500 rounded-2xl border-4 border-y-1  transition-all duration-300 ${
              isSticky ? "sticky" : "relative"
            }`}
            style={isSticky ? { top: `${stickyOffset + 90}px` } : {}}
          >
            <motion.h1
              className="text-black text-lg px-2 py-1 border-1 block rounded-xl
              w-28 font-bold font-arniya"
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
              className="text-black font-bold text-[1rem] p-4 pt-1 text-justify break-words hyphens-auto"
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
      </section>

      {/* {break section} */}
      <section className="h-15 relative rounded-xl flex overflow-hidden flex-col justify-center items-center">
        <motion.img
          src="./images/star.png"
          alt="idk"
          className="w-7 h-auto absolute md:w-10"
          variants={motionVariants}
          initial={{
            opacity: 0,
            rotateY: 360,
          }}
          animate={{
            opacity: 1,
            rotateY: 0,
          }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src="./images/tear.png"
          alt="idk"
          className="w-10 h-auto absolute right-0 rotate-180"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.1,
          }}
        />
        <motion.img
          src="./images/tear.png"
          alt="idk"
          className="w-10 h-auto absolute left-0"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.1,
          }}
        />
        <motion.div
          className="bg-accent h-0.5 w-full"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        ></motion.div>
      </section>

      {/* <section className=" rounded-2xl">
        <h2
          className="text-black text-4xl px-2 py-1 border-4 border-b-0 block rounded-xl
              w-full font-bold font-arniya bg-white"
        >
          FAQ
        </h2>
        <ul className=" flex flex-wrap justify-center items-center relative">
          <img
            src="/images/star.png"
            alt="Star"
            className="w-7 h-auto absolute z-10"
          />
          <img
            src="/images/star.png"
            alt="Star"
            className="w-7 h-auto absolute z-10 top-[-14px]"
          />
          <li className="bg-white w-1/2 p-2 border-1 border-l-4 rounded-xl h-40">
            <h1 className="font-bold text-lg">What services do you offer?</h1>
          </li>
          <li className="bg-white w-1/2 p-2 border-1 border-r-4 rounded-xl h-40">
            <h1 className="font-bold text-lg">How can I book a session?</h1>
          </li>
          <li className="bg-white w-1/2 p-2 border-1 border-l-4 rounded-xl h-40">
            <h1 className="font-bold text-lg">
              What should I expect during my first appointment?
            </h1>
          </li>
          <li className="bg-white  w-1/2 p-2 border-1 border-r-4 rounded-xl h-40">
            <h1 className="font-bold text-lg">
              What should I expect during my first appointment?
            </h1>
          </li>

          {faqData.map((item) => (
            <li
              key={item.id}
              className="bg-white w-1/2 p-2 border-1 border-l-4 rounded-xl h-40 "
            >
              <h1 className="font-bold text-lg">{item.question}</h1>
              <p className="mt-2">{item.answer}</p>
            </li>
          ))}
        </ul>
      </section> */}

      <section className="">
        <h2
          className="text-black text-4xl px-2 py-1 border-4 border-b-0 block rounded-xl
              w-full font-bold font-arniya bg-white"
        >
          FAQ
        </h2>

        <ul className="flex flex-wrap justify-center items-center relative ">
          {/* Decorative stars */}
          <img
            src="/images/star.png"
            alt="Star"
            className="w-7 h-auto absolute z-10"
          />
          <img
            src="/images/star.png"
            alt="Star"
            className="w-7 h-auto absolute z-10 top-[-14px]"
          />
          {faqData.map((faq, index) => (
            <li key={faq.id} className="w-1/2 h-70">
              <div
                className="relative w-full h-full cursor-pointer group perspective-1000"
                onClick={() => toggleFlip(faq.id)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flippedCards.has(faq.id) ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front of card */}
                  <div
                    className={`absolute  w-full h-full backface-hidden bg-white p-4 border-1 ${
                      index % 2 === 0
                        ? "border-l-4 bg-accent"
                        : "border-r-4 bg-accent"
                    } rounded-xl transition-shadow duration-300 `}
                  >
                    <div className="flex flex-col justify-between  h-[100%]">
                      <h1 className="font-bold text-[1rem] text-gray-800">
                        {faq.question}
                      </h1>
                      <div className="text-[0.7rem] text-gray-500 flex items-center justify-center gap-1  ">
                        <span>Click to reveal answer</span>
                        <svg
                          className="w-3 h-3 animate-bounce"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br border-1 border-accent ${
                      index % 3 === 0 ? "bg-purple-200  " : "bg-purple-300 "
                    } p-4 rounded-xl  text-accent flex items-center justify-center`}
                  >
                    <div className="">
                      <p className="text-[1rem] leading-4.5">{faq.answer}</p>
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-purple-400 to-pink-400 pointer-events-none"></div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <style jsx>{`
        .perspective-1000 {
          perspective: 3000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* {break section} */}
      <section className="h-15 relative rounded-xl flex overflow-hidden flex-col justify-center items-center">
        <motion.img
          src="./images/star.png"
          alt="idk"
          className="w-7 h-auto absolute md:w-10"
          variants={motionVariants}
          initial={{
            opacity: 0,
            rotateY: 360,
          }}
          animate={{
            opacity: 1,
            rotateY: 0,
          }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src="./images/tear.png"
          alt="idk"
          className="w-10 h-auto absolute right-0 rotate-180"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.1,
          }}
        />
        <motion.img
          src="./images/tear.png"
          alt="idk"
          className="w-10 h-auto absolute left-0"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.1,
          }}
        />
        <motion.div
          className="bg-accent h-0.5 w-full"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        ></motion.div>
      </section>

      <section className="bg-blue-500 rounded-2xl border-4 border-y-1 p-4 h-[50vh]">
        <h1>Contact</h1>
        <p>If you'd like to get in touch, feel free to reach out!</p>
        <ul>
          <li>Email: example@example.com</li>
          <li>Phone: (123) 456-7890</li>
        </ul>
      </section>

      {/* { weird break section} */}
      {/* <section className="h-30 relative rounded-xl flex overflow-hidden flex-col justify-center items-center">
        <motion.img
          src="./images/star.png"
          alt="idk"
          className="w-25 h-auto absolute md:w-10"
          variants={motionVariants}
          initial={{
            opacity: 0,
            rotateY: 360,
          }}
          animate={{
            opacity: 1,
            rotateY: 0,
          }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src="./images/tear.png"
          alt="idk"
          className="w-10 h-auto absolute right-0 rotate-180"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.1,
          }}
        />
        <motion.img
          src="./images/tear.png"
          alt="idk"
          className="w-10 h-auto absolute left-0"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.1,
          }}
        />

        <motion.img
          src="./images/tear.png"
          alt="idk"
          className="w-10 h-auto absolute right-0 top-22 rotate-[198deg]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.1,
          }}
        />
        <motion.img
          src="./images/tear.png"
          alt="idk"
          className="w-10 h-auto absolute left-0 top-22 rotate-[-19deg]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.1,
          }}
        />
        <motion.img
          src="./images/tear.png"
          alt="idk"
          className="w-10 h-auto absolute left-0 bottom-22 rotate-[19deg]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.1,
          }}
        />
        <motion.img
          src="./images/tear.png"
          alt="idk"
          className="w-10 h-auto absolute right-0 bottom-22 rotate-[-198deg]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.1,
          }}
        />
        <motion.div
          className="bg-accent absolute h-0.5 w-1/2 top-20 right-0 rotate-[15deg]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        ></motion.div>
        <motion.div
          className="bg-accent absolute h-0.5 w-1/2 bottom-20 right-0 rotate-[-15deg]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        ></motion.div>
        <motion.div
          className="bg-accent absolute h-0.5 w-1/2 bottom-20 left-0 rotate-[15deg]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        ></motion.div>
        <motion.div
          className="bg-accent absolute h-0.5 w-1/2 top-20 left-0 rotate-[-15deg]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        ></motion.div>
        <motion.div
          className="bg-accent h-0.5 w-full"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        ></motion.div>
      </section> */}
    </div>
  );
};

export default Home;
