import React from "react";
import { motion } from "framer-motion";

const TransitionPage = ({ children }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionPage;
