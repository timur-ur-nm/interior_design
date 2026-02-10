import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.css";
import aboutImage from "@/assets/about-img.jpg";
import lines from "@/assets/lines.svg";
import linesRotate from "@/assets/lines-rotate.svg";

export default function About() {
  const ref = useRef(null);
  // Проверка, видим ли блок
  const isInView = useInView(ref, { amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const linesVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const linesRotateVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`${styles.about}`} ref={ref}>
      <div className={`${styles.container_about} container mx-auto flex items-center relative`}>
        <motion.img
          src={aboutImage}
          alt="About"
          className={styles.image}
          variants={variants}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <div className={`${styles.text} flex flex-col p-10 relative`}>
          <motion.img
            src={lines}
            alt="lines"
            className={`${styles.lines} absolute top-[25px] left-[25px]`}
            variants={linesVariants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          />

          <motion.img
            src={linesRotate}
            alt="lines"
            className={`${styles.linesRotate} absolute bottom-[25px] right-[25px]`}
            variants={linesRotateVariants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          />

          <motion.h1
            variants={textVariants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Studio_H8 – студия дизайна интерьеров и архитектуры с полным циклом услуг.
          </motion.h1>

          <motion.p
            variants={textVariants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Мы создаем интерьеры, в которые хочется возвращаться, интерьеры, в которых хочется жить! Каждый проект с момента возникновения идеи, до ее полного воплощения — это приятное и увлекательное приключение. Предлагаем вам отправится в него вместе с нами! Вы станете соавтором своего интерьера, а мы поможем вам реализовать вашу мечту!
          </motion.p>
        </div>
      </div>
    </div>
  );
}
