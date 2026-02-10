import portfolioheoimage from "@/assets/portfolioheoimage.png";
import stagesImage from "@/assets/stages.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stagesData = [
  {
    number: "01",
    title: "Заключение договора",
    text: `Составление технического задания
Встречаемся на объекте и выясняем все пожелания к будущему интерьеру. 
Проводим небольшое анкетирование, чтобы собрать воедино все ваши пожелания. Оно также помогает вам определиться с важными мелочами и техническими моментами, о которых вы даже не задумывались, планируя свой интерьер. `,
  },
  {
    number: "02",
    title: "Обмер и фотофиксация помещения",
    text: "Делаем обмеры помещения с учетом расположения коммуникаций. ",
  },
  {
    number: "03",
    title: "Планировочное решение ",

    text: "Разрабатываем варианты планировочных решений (от 3-х и более в зависимости от площади и возможностей помещения) и выбираем наиболее подходящую для вас планировку.  ",
  },
  {
    number: "04",
    title: "Визуализация интерьера  ",
    text: "Подбираем референсы и подходящие стилистические решения для вашего интерьера – обсуждаем их, и на основе полученных данных, создаем визуализацию вашего интерьера. Фотореалистичная 3D визуализация позволит Вам увидеть свой интерьер таким, каким он будет в реальности после завершения строительных работ.",
  },
  {
    number: "05",
    title: "Строительные чертежи  ",
    text: "Разрабатываем строительные чертежи, собираем спецификацию всех отделочных материалов, мебели и света. Во время этого этапа выбираем плитку и напольные покрытия, согласовываем планы по электрике.   ",
  },
  {
    number: "06",
    title: "Альбом  ",
    text: "В конце вручаем полный дизайн-проект в распечатанном и электронном виде.",
  },
];

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25, // ⬅ задержка между элементами
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container mx-auto flex gap-10">
      <img
        src={portfolioheoimage}
        alt="Portfolio Hero"
        className="w-[50%] object-cover opacity-50"
      />

      <div className="mt-32 flex gap-10 items-start">
        <img src={stagesImage} alt="" />
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col"
        >
          {stagesData.map((stage) => (
            <motion.div
              key={stage.number}
              variants={itemVariants}
              className="flex flex-col pr-3"
            >
              <div className="flex items-center gap-5">
                <motion.h1
                  initial={{opacity:0}}
                  animate={{opacity:.1}}
                  className="text-[clamp(48px,8vw,90px)] font-bold text-white"
                >
                  {stage.number}
                </motion.h1>

                <motion.h2
                  variants={itemVariants}
                  className="text-[clamp(18px,2.5vw,25px)] font-semibold mb-2"
                >
                  {stage.title}
                </motion.h2>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-[clamp(14px,2vw,18px)]"
              >
                {stage.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
