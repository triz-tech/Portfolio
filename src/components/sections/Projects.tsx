import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/content';

export default function Projects() {
  const main = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <section className="section-py border-t border-ink-100">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeader
          number="04"
          label="PROJETOS"
          title="Projetos que colocam conhecimento em prática."
          intro="Alguns projetos nasceram de necessidades reais. Outros começaram como perguntas, ideias ou simplesmente vontade de descobrir se alguma coisa poderia funcionar."
        />

        {/* Featured projects */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {main.map((project, i) => (
            <ProjectCard key={project.number} project={project} featured index={i} />
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
