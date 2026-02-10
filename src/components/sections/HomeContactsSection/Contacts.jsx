import telegramIco from "@/assets/icons/telegram.png";
import whatsappIco from "@/assets/icons/whatsapp.png";
import instageamIco from "@/assets/icons/instIcon.png";
import vkIco from "@/assets/icons/vkIcon.png";
import pinterestIcon from "@/assets/icons/pinterestIcon.png";
export default function Contacts() {
  return (
    <section className="container mx-auto mt-28">
      <h1 className="text-center font-light lg:text-[45px] lg:pb-10  ">
        Контакты
      </h1>
      <div className="flex justify-around gap-10 items-center">
        <div className="w-1/2 h-[400px] rounded overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12478.135704966324!2d68.775115!3d38.56755079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1770574532585!5m2!1sru!2s"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col gap-10">
          <p className=" text-2xl">
            Мы находимся в Москве, но работаем по всему миру
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <p className=" text-xl">info@ksinterior.ru</p>
            <p className=" text-xl">г.Москва, ул.Алабяна, д.10 корп.1</p>
            <p className=" text-xl">+7 926 149 14 05</p>
            <p className=" text-xl">+7 916 252 84 34</p>
          </div>
          <div className="flex gap-3 items-center">
            <a href="#">
              <img src={whatsappIco} alt="watsapp" />
            </a>
            <a href="#">
              <img src={telegramIco} alt="telegram" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-10">Присоединяйтесь</p>
      <div className="flex justify-center gap-5 mt-5 mb-5">
        <a href="#">
          <img src={instageamIco} alt="instagram" />
        </a>
        <a href="#">
          <img src={vkIco} alt="vk" />
        </a>
        <a href="#">
          <img src={pinterestIcon} alt="pinterest" />
        </a>
      </div>
    </section>
  );
}
