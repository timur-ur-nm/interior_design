import styles from "./Hero.module.css";
import { delay, motion } from "framer-motion";

import heroImage from "@/assets/logo.png";
import ico1 from "@/assets/icons/vkIcon.png";
import ico2 from "@/assets/icons/instIcon.png";
import ico3 from "@/assets/icons/pinterestIcon.png";
import watsAppIcon from "@/assets/icons/whatsapp.png";

export default function Hero() {
  const iconsContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const iconsVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      className={`${styles.hero} flex flex-col items-center justify-center relative `}
    >
      <motion.img
        src={heroImage}
        alt="Hero"
        className={styles.hero_image}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }} // срабатывает один раз, когда 30% блока видны
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <div className={styles.hero_text}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.hero_title}
        >
          Welcome to Our Interior Design
        </motion.h1>
      </div>

      <motion.ul
        variants={iconsContainerVariants}
        initial="hidden"
        animate="show"
        className={styles.icons_list}
      >
        <motion.li variants={iconsVariants}>
          <a href="#">
            <img src={ico1} alt="VK" className={styles.icon} />
          </a>
        </motion.li>
        <motion.li variants={iconsVariants}>
          <a href="#">
            <img src={ico2} alt="Instagram" className={styles.icon} />
          </a>
        </motion.li>
        <motion.li variants={iconsVariants}>
          <a href="#">
            <img src={ico3} alt="Pinterest" className={styles.icon} />
          </a>
        </motion.li>
      </motion.ul>
      <a href="" className={styles.whatsapp_btn}>
        <img src={watsAppIcon} alt="WhatsApp" />
      </a>
    </div>
  );
}
