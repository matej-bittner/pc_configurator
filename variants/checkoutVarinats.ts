export const checkoutLeftVariants = {
  initial: { opacity: 0, x: -200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, staggerChildren: 0.1, when: "beforeChildren" },
  },
};

export const checkoutMultipleVariants = {
  initial: { opacity: 0, x: -90 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, staggerChildren: 0.1, when: "beforeChildren" },
  },
};

export const checkoutArticleSectionChildrenVariants = {
  initial: { opacity: 0, y: 90 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, staggerChildren: 0.1, when: "beforeChildren" },
  },
};

export const checkoutArticleTextVariants = {
  initial: { opacity: 0, x: 10 },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const checkoutRightVariants = {
  initial: { opacity: 0, x: 200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, staggerChildren: 0.1, when: "beforeChildren" },
  },
};

export const checkoutRightChildVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    // transition: {
    //   // duration: 0.2,
    //   staggerChildren: 0.05,
    //
    //   when: "beforeChildren",
    // },
  },
};

export const checkoutComponentsVariants = {
  initial: { opacity: 0, x: 40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: 0.1 },
  },
};
