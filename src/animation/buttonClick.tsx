import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
};

export default function ButtonAnimated({ children }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    //   onHoverStart={() => console.log("hover started!")}
    >
      {children}
    </motion.button>
  );
}
