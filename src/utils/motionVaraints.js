const motionVaraints = {
  textHidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  textVisible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  textExit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.4, ease: "easeInOut" },
  },

  headingHidden: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  headingVisible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  headingExit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.4, ease: "easeInOut" },
  },

  smallTextHidden: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.4, delay: 0.1, ease: "easeInOut" },
  },
  smallTextVisible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.1, ease: "easeInOut" },
  },
  smallTextExit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.4, delay: 0.1, ease: "easeInOut" },
  },
};

export default motionVaraints;
