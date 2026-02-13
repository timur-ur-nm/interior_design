import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <>
      {/* Hero */}
      <section className="h-[50vh] flex items-center justify-center bg-[#111] text-white">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-light uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Контакты
        </motion.h1>
      </section>

      {/* Контактная информация */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-16 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Свяжитесь с нами</h2>

          <div>
            <p className="font-medium">Телефон</p>
            <p className="opacity-70">+7 (999) 123-45-67</p>
          </div>

          <div>
            <p className="font-medium">Email</p>
            <p className="opacity-70">info@studio.ru</p>
          </div>

          <div>
            <p className="font-medium">Адрес</p>
            <p className="opacity-70">г. Москва, ул. Примерная, 10</p>
          </div>
        </div>

        {/* Форма */}
        <form className="space-y-8 ">
          {/* Имя */}
          <div className="relative text-black">
            <input
              type="text"
              id="name"
              placeholder=" "
              className=" w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 
                 focus:border-black focus:ring-0 outline-none transition-all duration-300"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-sm text-gray-500 
                 transition-all duration-300 
                 peer-placeholder-shown:top-4 
                 peer-placeholder-shown:text-base 
                 peer-placeholder-shown:text-gray-400
                 peer-focus:top-2 
                 peer-focus:text-sm 
                 peer-focus:text-black"
            >
              Ваше имя
            </label>
          </div>

          {/* Email */}
          <div className="relative text-black">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 
                 focus:border-black focus:ring-0 outline-none transition-all duration-300"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-sm text-gray-500 
                 transition-all duration-300 
                 peer-placeholder-shown:top-4 
                 peer-placeholder-shown:text-base 
                 peer-placeholder-shown:text-gray-400
                 peer-focus:top-2 
                 peer-focus:text-sm 
                 peer-focus:text-black"
            >
              Email
            </label>
          </div>

          {/* Сообщение */}
          <div className="relative text-black">
            <textarea
              id="message"
              rows="4"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 
                 focus:border-black focus:ring-0 outline-none transition-all duration-300 resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-sm text-gray-500 
                 transition-all duration-300 
                 peer-placeholder-shown:top-4 
                 peer-placeholder-shown:text-base 
                 peer-placeholder-shown:text-gray-400
                 peer-focus:top-2 
                 peer-focus:text-sm 
                 peer-focus:text-black"
            >
              Сообщение
            </label>
          </div>

          <button
            type="submit"
            className="border bg- border-white px-8 py-3 rounded-lg 
               hover:bg-white hover:text-black 
               transition-all duration-300"
          >
            Отправить
          </button>
        </form>
      </section>

      {/* Карта */}
      <section className="w-full h-[400px]">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Moscow&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full grayscale"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
