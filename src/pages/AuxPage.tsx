import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Database,
  Github,
  Headphones,
  Heart,
  Image as ImageIcon,
  Link2,
  MessageCircle,
  Music2,
  Repeat2,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import SectionHeader from "@/components/SectionHeader";

const LIVE_URL = "https://aux-nine.vercel.app";
const GITHUB_URL = "https://github.com/triz-tech/aux-social";

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.45 },
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-xs text-ink-400 whitespace-nowrap pt-1">
      {children}
    </span>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-ink-200 bg-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-ink-500">
      {children}
    </span>
  );
}

function FeatureCard({
  icon,
  eyebrow,
  title,
  children,
  dark = false,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <motion.article
      {...reveal}
      className={[
        "rounded-[28px] border p-6 md:p-8 min-h-[250px] flex flex-col",
        dark
          ? "border-ink-900 bg-ink-950 text-ink-50"
          : "border-ink-200 bg-white text-ink-900",
      ].join(" ")}
    >
      <div
        className={[
          "w-11 h-11 rounded-2xl grid place-items-center mb-10",
          dark ? "bg-white/10 text-white" : "bg-ink-100 text-ink-700",
        ].join(" ")}
      >
        {icon}
      </div>

      <span
        className={[
          "font-mono text-[9px] uppercase tracking-[0.18em] mb-2",
          dark ? "text-ink-500" : "text-ink-400",
        ].join(" ")}
      >
        {eyebrow}
      </span>

      <h3 className="font-serif text-2xl font-medium leading-tight mb-3">
        {title}
      </h3>

      <p
        className={[
          "text-sm leading-relaxed max-w-sm",
          dark ? "text-ink-400" : "text-ink-500",
        ].join(" ")}
      >
        {children}
      </p>
    </motion.article>
  );
}

function MiniPost() {
  return (
    <div className="rounded-[28px] bg-white border border-ink-200 shadow-sm overflow-hidden">
      <div className="p-4 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-ink-900 text-white grid place-items-center text-[10px] font-mono">
          BM
        </div>
        <div className="min-w-0">
          <strong className="block text-xs text-ink-900">Beatriz Martins</strong>
          <span className="block text-[10px] text-ink-400">@triz · agora</span>
        </div>
        <span className="ml-auto font-mono text-[9px] uppercase tracking-widest text-ink-400">
          review
        </span>
      </div>

      <div className="aspect-square bg-ink-950 p-7 flex items-end">
        <div className="w-full aspect-square rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#d6c2aa] via-[#6f6256] to-[#171717]">
          <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-black/25 backdrop-blur-md border border-white/15 p-4 text-white">
            <span className="text-[9px] uppercase tracking-[0.18em] opacity-60">
              ouvindo agora
            </span>
            <strong className="block mt-1 text-lg">música vira memória.</strong>
            <span className="text-xs opacity-65">aux.</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <span className="font-mono text-[9px] uppercase tracking-widest text-ink-400">
          música
        </span>
        <h4 className="font-serif text-2xl text-ink-900 mt-1">Pink + White</h4>
        <p className="text-xs text-ink-400 mt-0.5">Frank Ocean</p>

        <div className="flex items-center gap-0.5 mt-3 text-ink-900">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={13} fill="currentColor" />
          ))}
        </div>

        <p className="text-sm text-ink-600 leading-relaxed mt-4">
          “tem música que a gente não escuta. a gente volta pra ela.”
        </p>

        <div className="flex items-center gap-5 mt-5 pt-4 border-t border-ink-100 text-ink-400">
          <Heart size={16} />
          <MessageCircle size={16} />
          <Repeat2 size={16} />
          <Share2 size={16} className="ml-auto" />
        </div>
      </div>
    </div>
  );
}

function ProfilePreview() {
  const covers = [
    "from-[#1b1714] to-[#b49778]",
    "from-[#dad1c4] to-[#584d44]",
    "from-[#252127] to-[#9a7888]",
    "from-[#b6c2c0] to-[#313b3c]",
    "from-[#8b715d] to-[#171515]",
  ];

  return (
    <div className="rounded-[30px] border border-white/10 bg-[#181816] p-5 text-white shadow-2xl">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-white/10 grid place-items-center font-mono text-xs">
          BM
        </div>

        <div>
          <strong className="font-serif text-xl font-medium">Beatriz</strong>
          <span className="block text-[10px] text-white/45">@triz</span>
        </div>

        <div className="ml-auto rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-white/65">
          editar perfil
        </div>
      </div>

      <p className="text-xs leading-relaxed text-white/65 mt-4 max-w-xs">
        infelizmente toda música vira memória.
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
          top 5
        </span>
        <span className="text-[9px] text-white/30">identidade musical</span>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-3">
        <div className={`aspect-square rounded-2xl bg-gradient-to-br ${covers[0]} p-3 flex items-end`}>
          <span className="font-serif text-4xl text-white/90">1</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {covers.slice(1).map((cover, index) => (
            <div
              key={cover}
              className={`aspect-square rounded-xl bg-gradient-to-br ${cover} p-2 flex items-end`}
            >
              <span className="font-serif text-sm text-white/80">{index + 2}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-5">
        {["reviews", "memórias", "reposts"].map((tab, index) => (
          <div
            key={tab}
            className={[
              "rounded-full py-2 text-center text-[9px]",
              index === 0 ? "bg-white text-black" : "bg-white/5 text-white/50",
            ].join(" ")}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
}

function ResolverPreview() {
  return (
    <div className="rounded-[30px] border border-ink-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-400">
        <Link2 size={13} />
        compartilhar música
      </div>

      <div className="mt-5 rounded-2xl border border-ink-200 bg-ink-50 p-3 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d6c2aa] to-[#302821]" />
        <div className="min-w-0">
          <strong className="block text-xs text-ink-900 truncate">Pink + White</strong>
          <span className="block text-[10px] text-ink-400">Frank Ocean</span>
        </div>
        <Check size={15} className="ml-auto text-ink-500" />
      </div>

      <div className="grid grid-cols-2 gap-2 mt-3">
        <div className="rounded-2xl bg-ink-950 text-white p-4">
          <Star size={15} />
          <strong className="block text-xs mt-5">Review</strong>
          <span className="block text-[9px] text-white/45 mt-1">avaliar + escrever</span>
        </div>

        <div className="rounded-2xl bg-ink-100 text-ink-900 p-4">
          <ImageIcon size={15} />
          <strong className="block text-xs mt-5">Memory</strong>
          <span className="block text-[9px] text-ink-400 mt-1">música + momento</span>
        </div>
      </div>

      <p className="font-mono text-[8px] uppercase tracking-wider text-ink-300 mt-4 text-center">
        Spotify · Apple Music · Deezer
      </p>
    </div>
  );
}

function TechItem({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 py-5 border-b border-ink-200 last:border-b-0">
      <span className="w-9 h-9 rounded-xl bg-ink-100 grid place-items-center text-ink-600 flex-none">
        {icon}
      </span>
      <div>
        <strong className="text-sm text-ink-900">{title}</strong>
        <p className="text-xs leading-relaxed text-ink-400 mt-1">{text}</p>
      </div>
    </div>
  );
}

export default function Aux() {
  return (
    <div className="pt-20 bg-white text-ink-900">
      {/* HERO */}
      <section className="section-py border-b border-ink-100 overflow-hidden">
        <div className="container-px max-w-6xl mx-auto">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm text-ink-400 hover:text-ink-900 transition-colors mb-12"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            voltar
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  live product
                </span>
                <Tag>full stack</Tag>
                <Tag>ux/ui</Tag>
              </div>

              <h1 className="font-serif text-[72px] sm:text-[92px] md:text-[118px] font-medium text-ink-950 leading-[0.78] tracking-[-0.07em]">
                aux<span className="text-ink-300">.</span>
              </h1>

              <p className="mt-9 text-xl md:text-2xl text-ink-600 max-w-xl leading-[1.35] text-pretty">
                Uma rede social para transformar música em
                <span className="text-ink-950"> review, memória e conversa.</span>
              </p>

              <p className="mt-5 text-sm md:text-base text-ink-400 max-w-xl leading-relaxed text-pretty">
                Do conceito ao produto publicado: identidade visual, experiência,
                arquitetura, banco de dados, integrações musicais e funcionalidades sociais
                desenvolvidas de ponta a ponta.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink-950 text-white px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
                >
                  abrir o AUX
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white text-ink-700 px-5 py-3 text-sm font-medium hover:border-ink-300 transition-colors"
                >
                  <Github size={15} />
                  GitHub
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[9px] uppercase tracking-widest text-ink-400">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Supabase</span>
                <span>PostgreSQL</span>
                <span>Vercel</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, rotate: 1.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="relative max-w-[430px] mx-auto w-full"
            >
              <div className="absolute -inset-10 rounded-full bg-ink-100 blur-3xl opacity-80" />
              <div className="relative">
                <MiniPost />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IDEA */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-8 md:gap-14">
            <SectionLabel>01 / A IDEIA</SectionLabel>

            <motion.div {...reveal} className="max-w-3xl">
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.02] tracking-[-0.035em] text-ink-950">
                E se música pudesse guardar o contexto da vida?
              </h2>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-ink-500">
                <p>
                  A ideia começou pequena: <strong className="text-ink-800">avaliar músicas
                  entre amigas</strong>. A gente já mandava links, comentava lançamentos e
                  associava músicas a momentos, só que tudo ficava espalhado entre
                  conversas, Stories e plataformas diferentes.
                </p>

                <p>
                  Streaming resolve muito bem “o que eu quero ouvir?”. O AUX parte de outra
                  pergunta: <strong className="text-ink-800">o que essa música significa
                  para mim e o que ela diz sobre quem eu sou?</strong>
                </p>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-ink-500 max-w-2xl">
                Delimitar faz parte da proposta: o AUX não tenta ser uma rede social para
                tudo, nem substituir Spotify, Apple Music ou Deezer. Aqui o assunto começa
                e termina em música: review, memória, descoberta e conversa.
              </p>

              <blockquote className="mt-10 border-l-2 border-ink-900 pl-6 py-2 font-serif text-2xl md:text-3xl leading-snug text-ink-900">
                “música + momento + fotografia + memória.”
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY AUX */}
      <section className="section-py border-b border-ink-100 bg-ink-50">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="02"
            label="POR QUE UM ESPAÇO PRÓPRIO?"
            title="Mas por que não compartilhar só no Spotify, Instagram ou WhatsApp?"
            intro="Porque compartilhar uma música e construir um lugar em torno dela são experiências diferentes. O AUX organiza algo que hoje acontece de forma fragmentada: ouvir, opinar, lembrar, mostrar e conversar."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              icon={<Headphones size={19} />}
              eyebrow="streaming"
              title="A música está lá. A conversa, nem sempre."
            >
              Spotify, Apple Music e Deezer são ótimos para ouvir e descobrir. O AUX não
              compete com isso: usa a música como ponto de partida para opinião, memória e
              identidade.
            </FeatureCard>

            <FeatureCard
              icon={<MessageCircle size={19} />}
              eyebrow="social"
              title="No feed e no chat, o contexto se perde."
              dark
            >
              Instagram e WhatsApp funcionam muito bem para compartilhar, mas música divide
              espaço com todo o resto. Uma review some entre Stories; uma memória vira mais
              uma mensagem na conversa.
            </FeatureCard>

            <FeatureCard
              icon={<Music2 size={19} />}
              eyebrow="aux"
              title="Delimitar também é uma decisão de produto."
            >
              No AUX, tudo nasce da música. Reviews, memórias, perfis e interações formam um
              arquivo social que continua encontrável depois que o post deixa de ser novidade.
            </FeatureCard>
          </div>

          <motion.div
            {...reveal}
            className="mt-5 rounded-[28px] border border-ink-200 bg-white p-7 md:p-9 grid grid-cols-1 md:grid-cols-[.75fr_1.25fr] gap-6 md:gap-12 items-center"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-400">
              e tem a parte performática
            </span>

            <p className="font-serif text-2xl md:text-3xl leading-snug text-ink-900">
              A internet virou um grande “olha o que eu gosto”. A gente monta dump,
              retrospectiva, Top 5, perfil de filme. Gosto também virou linguagem. O AUX
              assume essa vontade de se mostrar, mas faz da música o centro da performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="section-py border-b border-ink-100 bg-ink-50">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="03"
            label="O PRODUTO"
            title="Não é um protótipo. Dá para entrar e usar."
            intro="O AUX virou uma aplicação full stack com autenticação, publicações reais, perfis, descoberta, interações sociais e integrações com serviços de música."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            <FeatureCard
              icon={<Star size={19} />}
              eyebrow="review"
              title="Avalie músicas e álbuns."
            >
              Notas, texto e contexto em uma publicação pensada para falar de música sem
              transformar a experiência em um catálogo frio.
            </FeatureCard>

            <FeatureCard
              icon={<ImageIcon size={19} />}
              eyebrow="memory"
              title="Guarde a música junto do momento."
              dark
            >
              Fotos pessoais, texto e música se encontram no mesmo post. A memória vira
              protagonista, não o streaming.
            </FeatureCard>

            <FeatureCard
              icon={<Users size={19} />}
              eyebrow="social"
              title="Descubra através de pessoas."
              dark
            >
              Feed, seguir, comentários, respostas, curtidas e reposts transformam gosto
              musical em conversa e descoberta.
            </FeatureCard>

            <FeatureCard
              icon={<Share2 size={19} />}
              eyebrow="share"
              title="Feito para sair do aplicativo."
            >
              Cada publicação pode gerar uma peça 9:16 para Story, além de oferecer
              compartilhamento nativo e link direto para o post.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="04"
            label="EXPERIÊNCIA"
            title="Do link da música à memória."
            intro="A entrada foi desenhada para reduzir atrito: encontrar a música primeiro, decidir o tipo de publicação depois."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-8 lg:gap-14 items-center">
            <motion.div {...reveal}>
              <ResolverPreview />
            </motion.div>

            <div className="space-y-0">
              {[
                ["01", "Encontre", "Busque no AUX ou cole um link do Spotify, Apple Music ou Deezer."],
                ["02", "Escolha", "Transforme a música em uma Review ou em uma Memory."],
                ["03", "Publique", "A publicação entra no feed com interações sociais e link próprio."],
                ["04", "Compartilhe", "Leve a publicação para fora do AUX com Story e compartilhamento nativo."],
              ].map(([number, title, text], index) => (
                <motion.div
                  key={number}
                  {...reveal}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="grid grid-cols-[48px_1fr] gap-5 py-6 border-b border-ink-200 last:border-b-0"
                >
                  <span className="font-mono text-[10px] text-ink-300">{number}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-ink-900">{title}</h3>
                    <p className="mt-2 text-sm text-ink-500 leading-relaxed max-w-lg">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="section-py border-b border-ink-100 bg-ink-950 text-white overflow-hidden">
        <div className="container-px max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-14 items-center">
            <motion.div {...reveal}>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                05 / IDENTIDADE
              </span>

              <h2 className="font-serif text-4xl md:text-6xl leading-[1.02] tracking-[-0.035em] mt-5 max-w-xl">
                O perfil não é um dashboard. É gosto musical.
              </h2>

              <p className="text-sm md:text-base leading-relaxed text-white/50 mt-7 max-w-xl">
                O Top 5 é escolhido pela própria pessoa. Reviews, memórias e reposts
                constroem uma identidade que pode ser explorada, mostrada e compartilhada.
                Se gosto virou parte da nossa persona online, o perfil transforma esse gesto
                performático em uma curadoria musical pessoal, e não só em mais um post que
                desaparece no feed.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Top 5", "reviews", "memórias", "reposts", "dark mode"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...reveal}
              className="max-w-[500px] w-full mx-auto"
            >
              <ProfilePreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="06"
            label="ENGENHARIA"
            title="Construído de ponta a ponta."
            intro="Além da interface, o projeto exigiu modelagem de dados, autenticação, segurança, integrações externas, tratamento de mídia e deploy."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <motion.div {...reveal}>
              <TechItem
                icon={<Sparkles size={17} />}
                title="Next.js 16 + React + TypeScript"
                text="App Router, componentes reutilizáveis, rotas dinâmicas, API routes e tipagem estrita."
              />
              <TechItem
                icon={<Database size={17} />}
                title="Supabase + PostgreSQL"
                text="Auth, banco relacional, Storage, funções e políticas RLS para dados de usuários e conteúdo social."
              />
              <TechItem
                icon={<Headphones size={17} />}
                title="Integrações musicais"
                text="Resolução e busca de metadata com Spotify, Apple Music e fallbacks para diferentes fontes."
              />
              <TechItem
                icon={<ShieldCheck size={17} />}
                title="Segurança e regras de acesso"
                text="Secrets mantidos no servidor, validações de autoria e políticas de acesso no banco."
              />
            </motion.div>

            <motion.div
              {...reveal}
              className="rounded-[30px] border border-ink-200 bg-ink-50 p-7 md:p-9"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-400">
                stack
              </span>

              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Supabase",
                  "PostgreSQL",
                  "Auth",
                  "Storage",
                  "RLS",
                  "Spotify API",
                  "Apple Music",
                  "PWA",
                  "Vercel",
                  "CSS",
                  "Lucide",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white border border-ink-200 px-3 py-2 text-xs text-ink-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 pt-7 border-t border-ink-200">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-400">
                  produto
                </span>

                <div className="grid grid-cols-2 gap-x-5 gap-y-5 mt-5">
                  {[
                    ["Auth", "cadastro + login"],
                    ["Social", "follow + interações"],
                    ["Media", "foto + artwork"],
                    ["Share", "link + Story"],
                    ["Responsive", "mobile + desktop"],
                    ["Theme", "light + dark"],
                  ].map(([title, text]) => (
                    <div key={title}>
                      <strong className="text-xs text-ink-900">{title}</strong>
                      <span className="block text-[10px] text-ink-400 mt-1">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CASE */}
      <section className="section-py border-b border-ink-100 bg-ink-50">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="07"
            label="CASE STUDY"
            title="O que mudou entre ter a ideia e publicar o produto."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: "01 / PRODUTO",
                title: "Delimitar também é projetar.",
                text: "Em vez de tentar ser uma rede social sobre tudo, o AUX mantém música como regra de entrada. Review e Memory viraram os dois formatos principais para preservar foco e identidade.",
              },
              {
                label: "02 / UX",
                title: "Menos atrito, mais contexto.",
                text: "Busca, links copiados e resolução automática de metadata reduzem o trabalho necessário antes de a pessoa começar a escrever.",
              },
              {
                label: "03 / ENGENHARIA",
                title: "Interface e regra precisam conversar.",
                text: "Autoria, expiração, relações sociais, RLS e estados de publicação exigiram pensar UX e banco de dados como partes do mesmo sistema.",
              },
            ].map((item, index) => (
              <motion.article
                key={item.label}
                {...reveal}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="rounded-[26px] border border-ink-200 bg-white p-6 md:p-7"
              >
                <span className="font-mono text-[9px] uppercase tracking-widest text-ink-400">
                  {item.label}
                </span>
                <h3 className="font-serif text-2xl text-ink-900 mt-7 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed mt-4">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ADAPTABLE SYSTEM */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="08"
            label="SISTEMA ADAPTÁVEL"
            title="O AUX é uma rede social hoje. A ideia não precisa terminar aí."
            intro="Mais do que um aplicativo isolado, o projeto testa um sistema de interação em torno da música: review + memória + identidade + conversa. Essa lógica pode existir em formatos diferentes."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              icon={<Music2 size={19} />}
              eyebrow="produto"
              title="Como experiência independente."
            >
              O formato atual permite testar a ideia inteira: perfis, feed, reviews,
              memórias, descoberta e relações sociais em um mesmo ambiente.
            </FeatureCard>

            <FeatureCard
              icon={<Share2 size={19} />}
              eyebrow="social layer"
              title="Como recurso dentro de outra rede."
              dark
            >
              Reviews musicais, Top 5 e Memories poderiam funcionar como uma camada ou
              formato de publicação dentro de uma plataforma social maior.
            </FeatureCard>

            <FeatureCard
              icon={<Headphones size={19} />}
              eyebrow="streaming layer"
              title="Ou dentro de onde a música já vive."
            >
              A mesma lógica poderia aparecer dentro de uma plataforma de streaming,
              conectando catálogo e reprodução a contexto pessoal, memória e conversa.
            </FeatureCard>
          </div>

          <motion.div
            {...reveal}
            className="mt-10 border-l-2 border-ink-900 pl-6 py-2 max-w-3xl"
          >
            <p className="font-serif text-2xl md:text-3xl leading-snug text-ink-900">
              O produto atual é uma forma de testar a hipótese. O sistema por trás dele é a
              parte que pode viajar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LIVE CTA */}
      <section className="section-py">
        <div className="container-px max-w-6xl mx-auto">
          <motion.div
            {...reveal}
            className="rounded-[34px] bg-ink-950 text-white p-8 md:p-12 overflow-hidden relative"
          >
            <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-white/5 blur-3xl translate-x-1/3 -translate-y-1/3" />

            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                publicado
              </span>

              <h2 className="font-serif text-4xl md:text-6xl leading-[1] mt-6">
                O case termina.
                <br />
                O produto não.
              </h2>

              <p className="text-sm md:text-base text-white/50 leading-relaxed mt-6 max-w-xl">
                O AUX está online e pode ser usado como uma aplicação real. A versão atual
                testa a experiência completa, mas a ideia é maior que a interface: uma
                camada social adaptável para transformar música em opinião, memória,
                identidade e conversa.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white text-ink-950 px-5 py-3 text-sm font-medium"
                >
                  acessar aux.
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 text-white px-5 py-3 text-sm font-medium"
                >
                  <Github size={15} />
                  ver código
                </a>
              </div>
            </div>
          </motion.div>

          <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors"
            >
              <ArrowLeft size={14} />
              voltar ao portfólio
            </Link>

            <span className="font-mono text-[9px] uppercase tracking-widest text-ink-300">
              designed & developed by Beatriz Martins
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
