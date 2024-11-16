"use client";
import { motion } from "motion/react";
const TappingButton = () => {
  return (
    <motion.button
      whileHover={{ translateY: 2 }}
      whileTap={{ translateY: 10 }}
      transition={{ type: "spring", damping: 15 }}
      className="bg- rounded-lg bg-orange-600 px-4 py-5 text-lg font-semibold text-white shadow-lg shadow-orange-500"
    >
      Sign up
    </motion.button>
  );
};
export default TappingButton;
