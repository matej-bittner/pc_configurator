export const topLeftVariants = {
  initial: { opacity: 0, x: -200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, staggerChildren: 0.1, when: "beforeChildren" },
  },
};
export const topLeftChildVariants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      staggerChildren: 0.1,
      delayChildren: 0.1,
      when: "beforeChildren",
    },
  },
};
export const gamesImagesVariants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
  },
};
export const topRightVariants = {
  initial: { opacity: 0, x: 200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
};
export const topRightChildVariants = {
  initial: { opacity: 0, x: 10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      staggerChildren: 0.6,
      delayChildren: 0.05,
      when: "beforeChildren",
    },
  },
};
export const componentsVariants = {
  initial: { opacity: 0, x: 10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
      when: "beforeChildren",
    },
  },
};
export const componentsChildVariants = {
  initial: { opacity: 0, x: 10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.05,
      staggerChildren: 0.05,
    },
  },
};
export const componentsButtonsVariants = {
  initial: { opacity: 0, x: 10 },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const bottomLeftVariants = {
  initial: { opacity: 0, x: -200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, staggerChildren: 0.2, when: "beforeChildren" },
  },
};
export const bottomLeftChildVariants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, staggerChildren: 0.1, when: "beforeChildren" },
  },
};
export const bottomRightVariants = {
  initial: { opacity: 0, x: 200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2,
      when: "beforeChildren",
      delayChildren: 1.3,
    },
  },
};
export const bottomChildVariants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
  },
};
export const fpsOverlay = {
  initial: { opacity: 0, x: 15 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.1, delay: 0.2 },
  },
};
export const chosenComponent = {
  initial: { opacity: 0, x: 150 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.1 },
  },
  exit: {
    opacity: 0,
    x: -150,
    transition: { duration: 0.1 },
  },
};
