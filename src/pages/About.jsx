import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <>
      {/* Hero */}
      <section className="h-[60vh] flex items-center justify-center bg-[#111] text-white">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-light uppercase text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          О студии
        </motion.h1>
      </section>

      {/* О компании */}
      <motion.section
        {...fadeUp}
        className="container mx-auto px-4 sm:px-6 md:px-8 py-20"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Мы создаём продуманные пространства
          </h2>
          <p className="leading-relaxed text-base sm:text-lg">
            Наша студия занимается проектированием современных интерьеров.
            Мы объединяем эстетику, функциональность и индивидуальный подход,
            чтобы создавать пространства, которые отражают характер клиента.
          </p>
        </div>
      </motion.section>

      {/* Преимущества */}
      <motion.section
        {...fadeUp}
        className="bg-gray-50 py-20 text-black"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              title: "Индивидуальный подход",
              text: "Каждый проект разрабатывается с учётом образа жизни и задач клиента.",
            },
            {
              title: "Фотореалистичная визуализация",
              text: "3D визуализация позволяет увидеть будущий интерьер до начала работ.",
            },
            {
              title: "Полное сопровождение",
              text: "Контроль реализации проекта на всех этапах строительства.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Процесс работы */}
      <motion.section
        {...fadeUp}
        className="container mx-auto px-4 sm:px-6 md:px-8 py-20"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-16">
          Как мы работаем
        </h2>

        <div className="grid md:grid-cols-4 gap-12 text-center">
          {[
            "Брифинг и анализ",
            "Разработка концепции",
            "3D визуализация",
            "Реализация проекта",
          ].map((step, index) => (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="space-y-3"
            >
              <div className="text-3xl font-light text-gray-400">
                0{index + 1}
              </div>
              <p className="font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Команда */}
      <motion.section
        {...fadeUp}
        className="bg-gray-50 py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-16">
            Команда
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
            {[1, 2, 3].map((member, index) => (
              <motion.div
                key={member}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="space-y-4"
              >
                <div className="w-full h-72 bg-gray-300 rounded-lg"></div>
                <div>
                  <p className="font-medium">Имя Фамилия</p>
                  <p className="text-gray-500 text-sm">
                    Архитектор / Дизайнер
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        {...fadeUp}
        className="py-20 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Готовы начать проект?
        </h2>

        <a
          href="/contacts"
          className="
            inline-block px-8 py-3 border border-white
            transition-all duration-300
            hover:bg-white hover:text-black
          "
        >
          Связаться с нами
        </a>
      </motion.section>
    </>
  );
}
