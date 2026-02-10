import styles from "./Portfolio.module.css";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const images = [
  { src: portfolio1, alt: "portfolio-1", title: "Аппартаменты в ЖК Долина" },
  { src: portfolio2, alt: "portfolio-2", title: "Аппартаменты в ЖК Долина" },
  { src: portfolio3, alt: "portfolio-3", title: "Аппартаменты в ЖК Долина" },
  { src: portfolio4, alt: "portfolio-4", title: "Аппартаменты в ЖК Долина" },
];

export default function Portfolio() {
  return (
    <section className="container mx-auto mt-16" id="portfolio">
      <h1 className="text-center font-light lg:text-[45px] lg:pb-10  ">
        Портфолио
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {images.map((image, index) => (
          <a
            key={index}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="
        group
        aspect-[4/3]
        overflow-hidden
        relative
        rounded
        block
      "
          >
            {/* Overlay */}
            <p
              className="
          absolute inset-0 z-10
          flex items-center justify-center
          text-white text-xl
          bg-black/40
          opacity-100
          md:opacity-0
          md:group-hover:opacity-100
          transition-opacity duration-300
        "
            >
              {image.title}
            </p>

            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="
          w-full h-full object-cover
          transform
          md:group-hover:scale-110
          transition-transform duration-500
        "
            />
          </a>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <a
          href="#"
          className="flex justify-center gap-4 mt-8 items-center border-2 border-white w-fit p-3 hover:bg-white hover:text-black transition-colors duration-300"
        >
          смотреть все проекты
        </a>
      </div>
    </section>
  );
}
