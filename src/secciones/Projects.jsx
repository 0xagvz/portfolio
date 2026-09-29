import ProjectCard from "../components/ProjectCard";
import { PROJECTS_DATA } from "../data/contenido";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="box projects">
        <h1 className="subtitle">Proyectos</h1>
        <div className="projects-grid">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
