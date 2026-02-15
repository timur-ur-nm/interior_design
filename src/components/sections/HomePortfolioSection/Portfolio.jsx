import styles from "./Portfolio.module.css";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";



export default function Portfolio() {
  return (
    <section className="container mx-auto mt-16" id="portfolio">
      <h1 className="text-center font-light lg:text-[45px] lg:pb-10  ">
        Портфолио
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.slice(0,4).map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
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
              {project.title}
            </p>

            {/* Image */}
            <img
              src={project.heroImage}
              alt={project.title}
              className="
          w-full h-full object-cover
          transform
          md:group-hover:scale-110
          transition-transform duration-500
        "
            />
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link
          to="/projects"
          className="flex items-center gap-4 mt-8 border-2 border-white p-3 w-fit 
             hover:bg-white hover:text-black hover:border-black 
             transition-colors duration-300"
        >
          смотреть все проекты
        </Link>
      </div>
    </section>
  );
}
