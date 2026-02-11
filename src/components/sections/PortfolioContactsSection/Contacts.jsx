import React from "react";
import ico1 from "@/assets/icons/instIcon.png";
import ico2 from "@/assets/icons/pinterestIcon.png";
import ico3 from "@/assets/icons/telegram.png";
import ico4 from "@/assets/icons/vkIcon.png";
import ico5 from "@/assets/icons/whatsapp.png";

const icons = [
  {
    id: 1,
    src: ico1,
    link: '#'
  },
  {
    id: 2,
    src: ico2,
    link: '#'
  },
  {
    id: 3,
    src: ico3,
    link: '#'
  },
  {
    id: 4,
    src: ico4,
    link: '#'
  },
  {
    id: 5,
    src: ico5,
    link: '#'
  },
];

export default function Contacts() {
  return (
    <section className="container mx-auto flex flex-col gap-16 mt-32 mb-32">
      <h1 className="text-center md:text-[24px] lg:text-[45px]">Контакты</h1>
      <div className="flex justify-between ">
        <div className="flex flex-col gap-16 lg:text-[30px] ">
          <h1>Мы находимся в Москве, но работаем по всему миру</h1>
          <ul className="flex flex-col gap-8">
            <li>info@ksinterior.ru</li>
            <li>г.Москва, ул.Алабяна, д.10 корп.1</li>
            <li>+7 926 149 14 05</li>
            <li>+7 916 252 84 34</li>
          </ul>
        </div>
        <div className="flex flex-col text-center gap-8">
          <h1 className="lg:text-[25px]">Присоединяйтесь!</h1>
          <div className="flex gap-3">
            {icons.map((item) => {
              return (
                <a href={item.link}>
                  <img
                    key={item.id}
                    src={item.src}
                    alt="icon"
                    className="w-[60px] h-auto"
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
