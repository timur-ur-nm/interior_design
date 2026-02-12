
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const images = [
  { src: portfolio1, alt: "portfolio-1", title: "Аппартаменты в ЖК Долина" },
  { src: portfolio2, alt: "portfolio-2", title: "Аппартаменты в ЖК Долина" },
  { src: portfolio3, alt: "portfolio-3", title: "Аппартаменты в ЖК Долина" },
  { src: portfolio4, alt: "portfolio-4", title: "Аппартаменты в ЖК Долина" },
  { src: portfolio1, alt: "portfolio-1", title: "Аппартаменты в ЖК Долина" },
  { src: portfolio2, alt: "portfolio-2", title: "Аппартаменты в ЖК Долина" },
  { src: portfolio3, alt: "portfolio-3", title: "Аппартаменты в ЖК Долина" },
  { src: portfolio4, alt: "portfolio-4", title: "Аппартаменты в ЖК Долина" },
];

export default function Projects() {
  return (
    <section className="container mx-auto px-4 mt-20" id="portfolio">
      <h1 className="text-center font-light text-3xl md:text-4xl lg:text-5xl mb-12">
        Проекты
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <a
            key={index}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[4/3] overflow-hidden rounded block"
          >
            {/* Overlay — всегда видимый */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
              <p className="text-white text-lg md:text-xl font-medium text-center px-4">
                {image.title}
              </p>
            </div>

            {/* Image — scale только при hover */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
