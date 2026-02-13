import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import Hero from "../components/sections/~ProjectHeroSection/Hero";
import Contacts from '@/components/ui/ContactsInfo/Contacts'
export default function ProjectPage() {
  const { id } = useParams(); // получаем id из URL
  const project = projects.find((p) => p.id === id);

  if (!project)
    return <div className="text-center py-20">Проект не найден</div>;

  return (
    <>
      {/* Hero */}
      <Hero title={project.title} img={project.heroImage} />

      {/* Описание */}
      <section className="container mx-auto mt-16 mb-16 px-4 sm:px-6 md:px-8 flex justify-center">
        <p className="w-full sm:w-4/5 lg:w-2/3 text-base sm:text-lg lg:text-xl text-center sm:text-left leading-relaxed">
          {project.description}
        </p>
      </section>

      <section className="container mx-auto mb-16 px-4 sm:px-6 md:px-8 ">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-80">
          {/* Первые две картинки */}
          {project.gallery.slice(0, 2).map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 sm:h-80 md:h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}

          {/* Третья картинка на всю ширину */}
          <div className="overflow-hidden rounded-lg sm:col-span-2">
            <img
              src={project.gallery[2]}
              alt="Gallery 3"
              className="w-full h-64 sm:h-80 md:h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Четвёртая и пятая */}
          {project.gallery.slice(3, 5).map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={img}
                alt={`Gallery ${index + 4}`}
                className="w-full h-64 sm:h-80 md:h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <Contacts/>
    </>
  );
}
