import SectionHeader from '@/components/SectionHeader';
import TechnologyCard from '@/components/TechnologyCard';
import { technologies, secondaryTechs } from '@/data/content';

export default function Technologies() {
  return (
    <section className="section-py border-t border-ink-100">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeader
          number="02"
          label="TECNOLOGIAS"
          title="Ferramentas que fazem parte da minha jornada."
          intro="Tecnologias que venho utilizando em projetos, estudos e desenvolvimento prático."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech, i) => (
            <TechnologyCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>

        {/* Secondary techs */}
        <div className="mt-10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 block mb-4">
            também utilizo
          </span>
          <div className="flex flex-wrap gap-2">
            {secondaryTechs.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-ink-500 bg-ink-50 border border-ink-200 px-3 py-1.5 rounded-full transition-colors hover:bg-ink-900 hover:text-ink-50 hover:border-ink-900 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
