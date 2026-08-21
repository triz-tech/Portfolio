import SectionHeader from '@/components/SectionHeader';
import { profileDetails } from '@/data/content';

export default function About() {
  return (
    <section className="section-py border-t border-ink-100">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeader
          number="01"
          label="SOBRE MIM"
          title="Construindo minha trajetória em tecnologia."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16">
          {/* Story text */}
          <div className="space-y-5 text-ink-600 text-base md:text-lg leading-relaxed text-pretty">
            <p>
              Minha trajetória em tecnologia começou de um lugar um pouco inesperado.
            </p>
            <p>
              Antes de escolher Sistemas de Informação, passei muito tempo imaginando
              que trabalharia com cinema. Fiz curso de audiovisual no SENAC e sempre
              tive interesse por narrativa, imagem e criação.
            </p>
            <p>
              Meu primeiro contato mais próximo com tecnologia mudou um pouco esse
              caminho. Descobri que também gostava de entender sistemas, construir
              coisas e transformar problemas em soluções.
            </p>
            <p>
              Hoje estou construindo minha trajetória em tecnologia, tentando juntar
              esses dois lados: o olhar criativo que veio do audiovisual e o raciocínio
              técnico que venho desenvolvendo na programação.
            </p>
            <p>
              Gosto de aprender fazendo, testar ideias e principalmente entender o
              motivo por trás de uma solução. Estou buscando uma oportunidade em
              tecnologia onde possa continuar aprendendo, trabalhar em equipe e
              transformar conhecimento em experiência real.
            </p>
          </div>

          {/* Profile block */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="p-6 rounded-2xl border border-ink-200 bg-white">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 block mb-5">
                PROFILE
              </span>
              <dl className="space-y-4">
                {profileDetails.map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <dt className="font-mono text-[11px] text-ink-400">{item.label}</dt>
                    <dd className="text-sm text-ink-900 font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
