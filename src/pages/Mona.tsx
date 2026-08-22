import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Heart, Send, Star } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import MonaScreen from '@/components/mona/MonaScreen';
import type { MonaScreenKind } from '@/components/mona/MonaScreen';

const albumArt = {
  sky: 'linear-gradient(145deg, #59453c 0%, #b76d4e 48%, #e3ab7b 100%)',
  night: 'linear-gradient(145deg, #0f1720 0%, #25384a 48%, #a78b70 100%)',
  violet: 'linear-gradient(145deg, #2e2b3c 0%, #82758b 52%, #d7ad92 100%)',
};

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs text-ink-400 whitespace-nowrap pt-1">
      {children}
    </span>
  );
}

function CaseBlock({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-2xl border border-ink-200 bg-white">
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 block mb-3">
        {label}
      </span>
      <h3 className="font-serif text-lg md:text-xl font-medium text-ink-900 mb-3">
        {title}
      </h3>
      <p className="text-ink-500 text-sm leading-relaxed text-pretty">{children}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  children,
  screen,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  screen: MonaScreenKind;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-1">
        <span className="font-mono text-xs text-ink-400 block mb-3">{number}</span>
        <h3 className="font-serif text-xl md:text-2xl font-medium text-ink-900 mb-3">
          {title}
        </h3>
        <p className="text-ink-500 text-sm leading-relaxed text-pretty max-w-sm">
          {children}
        </p>
      </div>
      <div className="flex-shrink-0">
        <MonaScreen kind={screen} compact />
      </div>
    </div>
  );
}

function InteractiveRatingDemo() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="p-6 md:p-8 rounded-2xl border border-ink-200 bg-white">
      <div className="flex items-start gap-4 mb-6">
        <div className="h-16 w-16 rounded-lg flex-shrink-0" style={{ background: albumArt.sky }} />
        <div>
          <h3 className="font-serif text-xl font-medium text-ink-900">Space Song</h3>
          <p className="text-sm text-ink-500">Beach House</p>
        </div>
      </div>
      <p className="text-sm text-ink-500 mb-4">Toque nas estrelas para avaliar.</p>
      <div className="flex items-center gap-1.5 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            aria-label={`Avaliar com ${star} estrela${star > 1 ? 's' : ''}`}
            className="transition-transform hover:scale-110"
          >
            <Star
              size={28}
              className={
                (hover || rating) >= star
                  ? 'text-accent-500'
                  : 'text-ink-200'
              }
              fill={(hover || rating) >= star ? 'currentColor' : 'none'}
            />
          </button>
        ))}
      </div>
      {rating > 0 && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-ink-600"
        >
          {rating === 5 && 'Essa música é tudo pra mim.'}
          {rating === 4 && 'Muito boa, mas algo ficou faltando.'}
          {rating === 3 && 'Gostei, mas não vou voltar tanto.'}
          {rating === 2 && 'Não é do meu mundo.'}
          {rating === 1 && 'Prefiro não comentar.'}
        </motion.p>
      )}
    </div>
  );
}

function InteractiveFeedDemo() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(23);
  const [recommended, setRecommended] = useState(false);

  return (
    <div className="p-6 md:p-8 rounded-2xl border border-ink-200 bg-white">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center rounded-full bg-ink-200 text-ink-600 font-mono text-xs h-9 w-9">
          bia
        </span>
        <div>
          <p className="text-sm font-medium text-ink-900">bia</p>
          <p className="text-xs text-ink-400">avaliou 505 — Arctic Monkeys</p>
        </div>
      </div>
      <div className="rounded-lg border border-ink-200 overflow-hidden mb-4">
        <div className="h-32" style={{ background: albumArt.night }} />
        <div className="p-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">505</p>
            <p className="text-xs text-ink-500">Arctic Monkeys</p>
          </div>
          <div className="flex items-center gap-0.5 text-accent-500">
            {[1, 2, 3, 4].map((s) => (
              <Star key={s} size={12} fill="currentColor" />
            ))}
            <Star size={12} className="text-ink-200" />
          </div>
        </div>
      </div>
      <p className="text-sm text-ink-500 mb-5 text-pretty">
        essa tem um negócio que eu não sei explicar.
      </p>
      <div className="flex items-center gap-4 text-sm">
        <button
          onClick={() => {
            setLiked(!liked);
            setLikes(liked ? likes - 1 : likes + 1);
          }}
          className={`inline-flex items-center gap-1.5 transition-colors ${
            liked ? 'text-accent-600' : 'text-ink-400 hover:text-ink-900'
          }`}
        >
          <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
          {likes}
        </button>
        <button
          onClick={() => setRecommended(!recommended)}
          className={`inline-flex items-center gap-1.5 transition-colors ${
            recommended ? 'text-ink-900' : 'text-ink-400 hover:text-ink-900'
          }`}
        >
          <Send size={16} />
          {recommended ? 'recomendado' : 'recomendar'}
        </button>
      </div>
    </div>
  );
}

function InteractiveProfileDemo() {
  const [tab, setTab] = useState<'reviews' | 'memorias' | 'recomendacoes'>('reviews');

  const content: Record<typeof tab, { title: string; subtitle: string; rating: number }[]> = {
    reviews: [
      { title: '505', subtitle: 'Arctic Monkeys', rating: 4 },
      { title: 'Space Song', subtitle: 'Beach House', rating: 5 },
      { title: 'Walcott', subtitle: 'Vampire Weekend', rating: 4 },
    ],
    memorias: [
      { title: 'aquela viagem de carro', subtitle: 'Space Song · Beach House', rating: 5 },
      { title: 'domingo na casa da vó', subtitle: '505 · Arctic Monkeys', rating: 5 },
    ],
    recomendacoes: [
      { title: 'para ouvir quando chover', subtitle: 'recomendado por marina', rating: 0 },
      { title: 'músicas que lembram verão', subtitle: 'recomendado por lucas', rating: 0 },
    ],
  };

  return (
    <div className="p-6 md:p-8 rounded-2xl border border-ink-200 bg-white">
      <div className="flex items-center gap-4 mb-6">
        <span className="inline-flex items-center justify-center rounded-full bg-ink-200 text-ink-600 font-mono text-sm h-12 w-12">
          beatriz
        </span>
        <div>
          <h3 className="font-serif text-xl font-medium text-ink-900">beatriz</h3>
          <p className="text-sm text-ink-500">Rio de Janeiro, RJ</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 border-y border-ink-200 py-4 mb-6 text-center">
        {[
          ['142', 'músicas'],
          ['28', 'álbuns'],
          ['76', 'reviews'],
          ['56', 'amigos'],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="font-serif text-xl font-medium text-ink-900">{value}</p>
            <p className="text-xs text-ink-400">{label}</p>
          </div>
        ))}
      </div>
<div className="flex items-center justify-between gap-1 mb-5 w-full">
  {([
    ['reviews', 'Reviews'],
    ['memorias', 'Memórias'],
    ['recomendacoes', 'Recomendações'],
  ] as const).map(([key, label]) => (
    <button
      key={key}
      onClick={() => setTab(key)}
      className={`px-2 py-2 rounded-full text-[9px] font-medium transition-all duration-300 ${
        tab === key
          ? 'bg-ink-900 text-ink-50'
          : 'text-ink-500 hover:text-ink-900 hover:bg-ink-100'
      }`}
    >
      {label}
    </button>
  ))}
</div>
      <div className="space-y-3">
        {content[tab].map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between p-3 rounded-lg border border-ink-200 bg-ink-50"
          >
            <div>
              <p className="text-sm font-medium text-ink-900">{item.title}</p>
              <p className="text-xs text-ink-400">{item.subtitle}</p>
            </div>
            {item.rating > 0 && (
              <div className="flex items-center gap-0.5 text-accent-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < item.rating ? 'currentColor' : 'none'}
                    className={i < item.rating ? '' : 'text-ink-200'}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Mona() {
  const [heroRating, setHeroRating] = useState(5);

  return (
    <div className="pt-20">
      {/* Hero — mantido */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm text-ink-400 hover:text-ink-900 transition-colors mb-10"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
            voltar
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 block mb-6">
              PRODUCT CONCEPT · UX/UI · PROTOTYPE
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-medium text-ink-900 mb-6 leading-[0.95]">
              Mona
            </h1>
            <p className="text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed text-pretty">
              Um conceito de produto social para transformar música em memória,
              descoberta e histórias compartilhadas.
            </p>

            <div className="mt-8">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-500 bg-ink-100 px-3 py-1.5 rounded-full">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink-400" />
                CONCEPT / PROTOTYPE
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 border-b border-ink-100 bg-ink-50">
        <div className="container-px max-w-4xl mx-auto">
          <div className="flex items-start gap-3 p-5 rounded-xl border border-ink-200 bg-white">
            <span className="font-mono text-xs text-ink-400 mt-0.5">⚠</span>
            <p className="text-sm text-ink-500 leading-relaxed">
              <strong className="text-ink-700">Importante:</strong> O Mona é um projeto
              conceitual e prototipado. Não é um aplicativo publicado, não está disponível
              para uso e não possui usuários reais. Os números e telas abaixo são fictícios
              e servem apenas para demonstrar a interface e a experiência planejada.
            </p>
          </div>
        </div>
      </section>

      {/* Apresentação visual — mockups */}
      <section className="section-py border-b border-ink-100 bg-ink-50">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="01"
            label="O PRODUTO"
            title="Uma ideia que cabe na palma da mão."
            intro="Telas pensadas para registrar o que cada música significa — não apenas o que você ouviu."
          />

          <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <MonaScreen
                kind="music"
                selectedRating={heroRating}
                onRatingChange={setHeroRating}
              />
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                Tela de música
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center gap-3 md:mt-12"
            >
              <MonaScreen kind="feed" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                Feed
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-3"
            >
              <MonaScreen kind="profile" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                Perfil
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A ideia */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12">
            <SectionLabel>02 — A IDEIA</SectionLabel>
            <div className="space-y-5 text-ink-600 text-base md:text-lg leading-relaxed text-pretty max-w-2xl">
              <p>
                O Mona é um conceito de rede social musical inspirado na lógica do
                Letterboxd. Não é um aplicativo de streaming. É um espaço para registrar,
                avaliar, descobrir e compartilhar histórias relacionadas às músicas que
                fazem parte da vida das pessoas.
              </p>
              <blockquote className="border-l-2 border-ink-300 pl-6 py-2 font-serif text-xl md:text-2xl text-ink-900 italic">
                "Música não é só o que você escuta. É o que você viveu enquanto escutava."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section-py border-b border-ink-100 bg-ink-50">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="03"
            label="COMO FUNCIONA"
            title="Do ouvir ao descobrir."
            intro="Cinco etapas simples que transformam escuta em experiência compartilhada."
          />

          <div className="mt-14 space-y-12">
            <StepCard number="01" title="Ouça" screen="home">
              Você continua usando sua plataforma de streaming favorita. O Mona não
              substitui nada — ele adiciona uma camada.
            </StepCard>
            <StepCard number="02" title="Registre" screen="review">
              Encontre uma música, dê uma nota e escreva uma review. O que essa música
              significa para você?
            </StepCard>
            <StepCard number="03" title="Contextualize" screen="memory">
              Adicione uma foto, legenda ou memória. Associe a música a um momento, lugar
              ou pessoa.
            </StepCard>
            <StepCard number="04" title="Compartilhe" screen="feed">
              Sua publicação aparece para seus amigos. Eles podem curtir, comentar e
              recomendar.
            </StepCard>
            <StepCard number="05" title="Descubra" screen="recommendation">
              Encontre músicas novas através das pessoas — não de um algoritmo.
            </StepCard>
          </div>
        </div>
      </section>

      {/* Mostrar o produto funcionando — interações */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="04"
            label="PRODUTO FUNCIONANDO"
            title="Interaja com o conceito."
            intro="Estas interações funcionam localmente, apenas para demonstrar a interface."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4 }}
            >
              <InteractiveRatingDemo />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.08 }}
            >
              <InteractiveFeedDemo />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.16 }}
            >
              <InteractiveProfileDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* O que torna o Mona diferente */}
      <section className="section-py border-b border-ink-100 bg-ink-50">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="05"
            label="DIFERENCIAIS"
            title="O que torna o Mona diferente."
          />

          <div className="mt-12 max-w-2xl mb-10">
            <p className="text-ink-600 text-base md:text-lg leading-relaxed text-pretty">
              Não é outro Spotify. O Mona não pretende substituir serviços de streaming.
              Ele funciona como uma camada social e pessoal sobre a experiência musical.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Foco na experiência',
                desc: 'Registrar o que uma música significa — não apenas o que você ouviu.',
              },
              {
                title: 'Descoberta através de pessoas',
                desc: 'Recomendações feitas por pessoas, não por algoritmos opacos.',
              },
              {
                title: 'Memórias',
                desc: 'Associar músicas a momentos, lugares, pessoas e fases da vida.',
              },
              {
                title: 'Simplicidade',
                desc: 'Poucas funcionalidades, mas com propósito. Menos, mas melhor.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-5 rounded-xl border border-ink-200 bg-white transition-all duration-300 hover:border-ink-300"
              >
                <h3 className="font-medium text-ink-900 text-sm mb-2">{item.title}</h3>
                <p className="text-ink-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de telas */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="06"
            label="GALERIA DE TELAS"
            title="O conceito em várias telas."
            intro="Cada tela mostra uma parte diferente da experiência planejada."
          />

          <div className="mt-14 flex flex-wrap justify-center gap-6 md:gap-8">
            {([
              ['home', 'Home'],
              ['feed', 'Feed'],
              ['music', 'Música'],
              ['review', 'Review'],
              ['memory', 'Memória'],
              ['profile', 'Perfil'],
              ['recommendation', 'Recomendações'],
              ['daily', 'Música do dia'],
            ] as [MonaScreenKind, string][]).map(([kind, label], i) => (
              <motion.div
                key={kind}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="flex flex-col items-center gap-3"
              >
                <MonaScreen kind={kind} compact />
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="section-py border-b border-ink-100 bg-ink-50">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="07"
            label="CASE STUDY"
            title="O raciocínio por trás do projeto."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <CaseBlock label="PROBLEMA" title="Streaming não guarda significado.">
              Plataformas de streaming são excelentes para ouvir música, mas não são
              necessariamente espaços para registrar o significado pessoal das músicas.
            </CaseBlock>
            <CaseBlock label="HIPÓTESE" title="E se existisse um lugar para as histórias?">
              E se existisse um lugar para guardar as histórias relacionadas às músicas?
              Um espaço onde o que importa não é só o que você ouviu, mas o que você viveu.
            </CaseBlock>
            <CaseBlock label="SOLUÇÃO CONCEITUAL" title="Uma camada social sobre a música.">
              Uma experiência social para registrar, avaliar, recomendar e transformar
              músicas em memórias — sem substituir o streaming, mas complementando-o.
            </CaseBlock>
            <div className="p-6 rounded-2xl border border-ink-200 bg-ink-950 text-ink-50">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-500 block mb-3">
                STATUS
              </span>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-ink-500" />
                <span className="font-mono text-xs uppercase tracking-widest text-ink-300">
                  CONCEPT / PROTOTYPE
                </span>
              </div>
              <p className="text-ink-400 text-sm leading-relaxed text-pretty">
                O Mona é um conceito e um protótipo. Não é um aplicativo publicado, não
                possui usuários reais e os dados mostrados são fictícios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 pt-16">
        <div className="container-px max-w-4xl mx-auto">
          <Link
            to="/projetos"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-900 hover:text-ink-700 transition-colors"
          >
            ver outros projetos
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
