import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="container mx-auto px-4 mt-20" id="portfolio">
      <h1 className="text-center font-light text-3xl md:text-4xl lg:text-5xl mb-12">
        Проекты
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            href="#"
            
            rel="noopener noreferrer"
            className="group relative aspect-[4/3] overflow-hidden rounded block"
          >
            {/* Overlay — всегда видимый */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
              <p className="text-white text-lg md:text-xl font-medium text-center px-4">
                {project.title}
              </p>
            </div>

            {/* Image — scale только при hover */}
            <img
              src={project.heroImage}
              alt={project.alt}
              className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
