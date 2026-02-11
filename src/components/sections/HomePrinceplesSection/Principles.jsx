import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PrinciplesImg from "@/assets/principles-img.png";
import styles from "./Principles.module.css";

const principlesData = [
  {
    number: "01",
    title: "Дизайн и ремонт — это быстро и легко!",
    text: "Меняем ваше представление об ужасах ремонта. Делаем всё за вас и экономим ваше время и бюджет для настоящей жизни.",
  },
  {
    number: "02",
    title: "Детализированный дизайн-проект",
    text: "Вы получаете проект, который включает в себя все этапы и продумывает детали каждого элемента.",
  },
  {
    number: "03",
    title: "Индивидуальность",
    text: "Каждый проект уникален и требует особого внимания к деталям.",
  },
  {
    number: "04",
    title: "Эстетика и функциональность",
    text: "Настоящая эстетика – в сочетании красоты и функциональности.",
  },
];

export default function Principles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const variants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const imgVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x: "50%",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: "50%",
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      className={`relative overflow-hidden ${styles.principles_section}`}
    >
      <div
        ref={ref}
        className="container mx-auto relative flex flex-col lg:flex-row items-start lg:items-stretch"
      >
        {/* Текст */}
        <div
          className={`${styles.principles_text} flex-1 z-10 lg:p-6 sm:p-0  flex flex-col  md:items-center md: gap-5 lg:p-10`}
        >
          <motion.h1
            variants={textVariants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[clamp(32px,4vw,45px)] font-light mb-8"
          >
            Наши принципы
          </motion.h1>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {principlesData.map((item) => (
              <motion.div key={item.number} className="flex flex-col">
                <motion.h1
                  variants={textVariants}
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[clamp(48px,8vw,90px)] text-white opacity-10"
                >
                  {item.number}
                </motion.h1>
                <motion.h2
                  variants={textVariants}
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[clamp(18px,2.5vw,25px)] font-semibold mb-2"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  variants={textVariants}
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-[clamp(14px,2vw,18px)]"
                >
                  {item.text}
                </motion.p>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={variants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className={`${styles.principles_stats} bg-[#262D30] mt-5 pl-6 pr-6 pt-10 pb-10 flex  flex-col sm:flex-row max-w-2xl self-center justify-between text-center gap-4 sm:gap-0  md:gap-5 `}
            >
              <div className="flex items-center gap-2">
                <h1 className="text-2xl  md:text-4xl lg:text-6xl">7</h1>
                <p className="text-sm md:text-lg lg:text-2xl max-w-[300px] leading-snug">
                  лет успешной работы студии
                </p>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl lg:text-6xl">55</h1>
                <p className="text-sm md:text-lg lg:text-2xl max-w-[250px] leading-snug">
                  реализованных проекта
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Картинка справа, выходит за контейнер */}
        <motion.img
          variants={imgVariants}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={PrinciplesImg}
          alt="Principles"
          className={`${styles.principles_img} absolute top-0 left-0 w-full object-cover`}
        />  
      </div>
    </section>
  );
}
