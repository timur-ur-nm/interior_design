import { motion } from "framer-motion";

export default function Hero({ title, img }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center gap-8 sm:gap-10 h-[80vh] sm:h-[90vh] md:h-screen w-full bg-cover bg-center px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img})`,
      }}
    >
      {/* Title */}
      <motion.h1
        className="text-white font-light text-3xl sm:text-4xl md:text-5xl lg:text-[42px] 
                   uppercase sm:normal-case text-center w-full sm:w-4/5 lg:w-3/5 leading-snug"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>
    </div>
  );
}
