import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import realizationSectionImage from "@/assets/realizationsectionimage.jpg";
import styles from './Realization.module.css'
export default function Supervision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 ">
      <div
        ref={ref}
        className="
          container mx-auto
          relative
          flex flex-col lg:flex-row
          items-start lg:items-center
          lg:min-h-[1000px]
        "
      >
        {/* TEXT BLOCK */}
        <div className="w-full xl:w-[60%]  flex flex-col gap-10 pl-4 pr-4">
          <motion.h1
            variants={textVariants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="text-[clamp(32px,4vw,60px)] font-light leading-tight text-center"
          >
            Авторский надзор
          </motion.h1>

          <motion.p
            variants={textVariants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(16px,1.5vw,22px)] leading-relaxed text-gray-300"
          >
            Помимо контроля над тем, чтобы интерьер был воплощен в точном
            соответствии с дизайн-проектом, мы берем на себя все взаимодействие
            со строительными бригадами и поставщиками. Занимаемся закупкой и
            организацией поставок отделочных материалов, сантехники и мебели. 
          </motion.p>
          <motion.p
            variants={textVariants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(16px,1.5vw,22px)] leading-relaxed text-gray-300"
          >
            У нас комплектация входит в стоимость авторского надзора! 
          </motion.p>
          <motion.p
            variants={textVariants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(16px,1.5vw,22px)] leading-relaxed text-gray-300"
          >
            Пока мы занимаемся стройкой, вы экономите самое драгоценное – это
            время для жизни! 
          </motion.p>
          <motion.p
            variants={textVariants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(16px,1.5vw,22px)] leading-relaxed text-gray-300"
          >
            При необходимости мы предоставим надежные и проверенные строительные
            бригады для легкого и спокойного ремонта! А наши проверенные
            поставщики не подведут вас по цене, качеству и срокам. 
          </motion.p>

          <motion.button
            variants={textVariants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="
              self-center
              border border-white
              px-8 py-4
              text-lg
              hover:bg-white hover:text-black
              transition-all duration-300
            "
          >
            Узнать подробнее об авторском надзоре
          </motion.button>
        </div>

        {/* IMAGE BLOCK */}
        <div
          className={`
            ${styles.imgBlock}
            hidden 
            xl:block
            absolute
            right-[-15%]
            top-1/2
            -translate-y-1/2
            w-[800px]
            h-[1000px]
            `}
        >
          <img
            src={realizationSectionImage}
            alt="Author supervision"
            className={` w-full h-full object-cover`}
          />
        </div>
      </div>
    </section>
  );
}
