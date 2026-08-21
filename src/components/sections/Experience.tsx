import SectionHeader from '@/components/SectionHeader';
import ExperienceCard from '@/components/ExperienceCard';
import { experienceCards, experienceTags } from '@/data/content';

export default function Experience() {
  return (
    <section className="section-py border-t border-ink-100">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeader
          number="03"
          label="EXPERIÊNCIA"
          title="Experiência que conecta dados, processos e tecnologia."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
          {/* Main experience */}
          <div>
            <h3 className="font-serif text-2xl font-medium text-ink-900 mb-2">
              Bradesco Saúde
            </h3>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-5">
              Dados · Processos · Operações
            </p>
            <p className="text-ink-500 text-base leading-relaxed mb-6 text-pretty">
              Experiência em rotinas administrativas e de processos, com atuação na
              organização, atualização e validação de informações, acompanhamento de
              indicadores e suporte às atividades da área.
            </p>
            <div className="flex flex-wrap gap-2">
              {experienceTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-ink-500 bg-ink-50 border border-ink-100 px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {experienceCards.map((item, i) => (
              <ExperienceCard key={item.number} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Practical experience */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl border border-ink-200 bg-white">
          <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
            <div>
              <h3 className="font-serif text-xl font-medium text-ink-900 mb-1">
                Desenvolvimento de Dashboard
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-400">
                Desenvolvimento Web · Interface · Dados
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-400">
              Projeto privado · experiência prática
            </span>
          </div>
          <p className="text-ink-500 text-base leading-relaxed mb-5 max-w-2xl text-pretty">
            Projeto prático desenvolvido para visualização e gerenciamento de informações,
            com foco em interface, organização de dados, responsividade e operações de CRUD.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'Tailwind CSS', 'shadcn/ui', 'CRUD', 'Responsividade'].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] text-ink-500 bg-ink-50 border border-ink-100 px-2.5 py-1 rounded-md"
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
