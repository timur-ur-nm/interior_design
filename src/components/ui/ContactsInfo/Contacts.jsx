import React from "react";
import ico1 from "@/assets/icons/instIcon.png";
import ico2 from "@/assets/icons/pinterestIcon.png";
import ico3 from "@/assets/icons/telegram.png";
import ico4 from "@/assets/icons/vkIcon.png";
import ico5 from "@/assets/icons/whatsapp.png";

const icons = [
  { id: 1, src: ico1, link: "#" },
  { id: 2, src: ico2, link: "#" },
  { id: 3, src: ico3, link: "#" },
  { id: 4, src: ico4, link: "#" },
  { id: 5, src: ico5, link: "#" },
];

export default function Contacts() {
  return (
    <section className="container mx-auto px-4 flex flex-col gap-12 md:gap-16 mt-20 md:mt-32 mb-20 md:mb-32">
      
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-light">
        Контакты
      </h1>

      <div className="flex flex-col lg:flex-row justify-between gap-12">

        <div className="flex flex-col gap-10 text-base md:text-lg lg:text-2xl">
          <h2 className="text-lg md:text-xl lg:text-3xl font-light">
            Мы находимся в Москве, но работаем по всему миру
          </h2>

          <ul className="flex flex-col gap-4">
            <li>info@ksinterior.ru</li>
            <li>г.Москва, ул.Алабяна, д.10 корп.1</li>
            <li>+7 926 149 14 05</li>
            <li>+7 916 252 84 34</li>
          </ul>
        </div>

        <div className="flex flex-col text-center lg:text-left gap-6">
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium">
            Присоединяйтесь!
          </h2>

          <div className="flex justify-center lg:justify-start gap-4">
            {icons.map((item) => {
              return (
                <a href={item.link} key={item.id}>
                  <img
                    src={item.src}
                    alt="icon"
                    className="w-10 md:w-12 lg:w-14 h-auto"
                  />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
  