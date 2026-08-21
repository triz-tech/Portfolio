import SectionHeader from '@/components/SectionHeader';

export default function Seeking() {
  return (
    <section className="section-py border-t border-ink-100">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeader
          number="06"
          label="O QUE ESTOU BUSCANDO"
          title="Uma oportunidade para transformar aprendizado em experiência real."
        />

        <div className="mt-10 max-w-2xl space-y-5 text-ink-600 text-base md:text-lg leading-relaxed text-pretty">
          <p>
            Estou buscando uma oportunidade em tecnologia onde possa aprender com
            profissionais, contribuir com projetos reais e continuar desenvolvendo
            minhas habilidades técnicas.
          </p>
          <p>Não espero saber tudo.</p>
          <p>
            Quero estar em um ambiente onde possa fazer perguntas, receber feedback,
            assumir responsabilidades e evoluir.
          </p>
          <p className="font-serif text-xl md:text-2xl text-ink-900 font-medium">
            Quero transformar o que venho estudando em experiência real.
          </p>
        </div>
      </div>
    </section>
  );
}
