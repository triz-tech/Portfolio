import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Lock,
  MapPin,
  Bus,
  Users,
  DollarSign,
  Database,
  HelpCircle,
  Lightbulb,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import BarMeter from '@/components/flow/BarMeter';
import TimelineStep from '@/components/flow/TimelineStep';
import DemandSimulator from '@/components/flow/DemandSimulator';
import ImpactSimulator from '@/components/flow/ImpactSimulator';
import FinanceSimulator from '@/components/flow/FinanceSimulator';

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs text-ink-400 whitespace-nowrap pt-1">
      {children}
    </span>
  );
}

function InfoCard({
  icon: Icon,
  label,
  tag,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 rounded-xl border border-ink-200 bg-white transition-all duration-300 hover:border-ink-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-ink-50 border border-ink-100 flex items-center justify-center text-ink-600">
          <Icon size={16} />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
          {tag}
        </span>
      </div>
      <h3 className="font-medium text-ink-900 text-sm mb-2">{label}</h3>
      <p className="text-ink-400 text-xs leading-relaxed">{children}</p>
    </div>
  );
}

export default function Flow() {
  return (
    <div className="pt-20">
      {/* Hero */}
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
              FLOW / TRANSPORTE + DADOS
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-medium text-ink-900 mb-6 leading-[0.95]">
              Começou dentro de um ônibus.
            </h1>
            <p className="text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed text-pretty">
              Uma observação sobre a lotação do transporte público me levou a investigar
              dados, operação, demanda e tomada de decisão.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-500 bg-ink-100 px-3 py-1.5 rounded-full">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400" />
                EM PESQUISA / MVP EM DESENVOLVIMENTO
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-400">
                <Lock size={11} />
                Projeto privado · experiência prática
              </span>
            </div>
          </motion.div>

          {/* Question block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 max-w-2xl"
          >
            <span className="font-mono text-xs text-ink-400 block mb-3">01</span>
            <blockquote className="border-l-2 border-ink-300 pl-6 py-2 font-serif text-xl md:text-2xl text-ink-900 italic leading-relaxed text-pretty">
              Se existem tantos dados sobre o transporte, por que ainda encontramos
              situações recorrentes de superlotação?
            </blockquote>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center gap-2 text-sm text-ink-400"
          >
            <span className="font-mono text-xs">scroll para acompanhar a ideia</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} />
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* 02 — A Jornada */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="02"
            label="A JORNADA"
            title="Uma ideia também pode mudar de rota."
            intro="O Flow não nasceu pronto. Ele foi mudando conforme eu pesquisava, questionava e descobria novas informações."
          />

          <div className="mt-14 max-w-3xl">
            <TimelineStep number="01" title="E se a gente previsse a demanda?">
              <p className="mb-4">
                A primeira coisa que pensei foi simples: se as mesmas pessoas utilizam os
                mesmos ônibus nos mesmos horários, talvez fosse possível prever essa
                demanda.
              </p>
              <div className="inline-block p-3 rounded-lg border border-ink-200 bg-ink-50 font-mono text-xs text-ink-500">
                hypothesis.v1
                <br />
                <span className="text-ink-700">passenger_routine</span> →{' '}
                <span className="text-ink-700">demand</span>
              </div>
            </TimelineStep>

            <TimelineStep number="02" title="Mas será que o passageiro faria isso?">
              <p className="mb-4">
                A ideia dependia das pessoas cadastrarem suas rotinas constantemente. E
                isso começou a parecer uma solução pouco realista.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-ink-200 bg-white">
                <HelpCircle size={18} className="text-ink-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-ink-600 leading-relaxed">
                  Por que pedir para o passageiro criar um dado que talvez já exista?
                </p>
              </div>
            </TimelineStep>

            <TimelineStep number="03" title="A primeira hipótese não era suficiente.">
              <p className="mb-5">
                A pesquisa mudou a direção do projeto. Descobri que o sistema de transporte
                já trabalha com diferentes fontes de informação sobre operação, frota,
                passageiros e localização dos veículos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard icon={MapPin} label="GPS" tag="localização">
                  Acompanhamento da operação dos veículos.
                </InfoCard>
                <InfoCard icon={Bus} label="Operação" tag="frota">
                  Veículos operando e oferta planejada.
                </InfoCard>
                <InfoCard icon={Users} label="Passageiros" tag="demanda">
                  Informações sobre passageiros transportados.
                </InfoCard>
                <InfoCard icon={DollarSign} label="Recursos" tag="operação financeira">
                  Informações financeiras relacionadas ao sistema.
                </InfoCard>
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-ink-400">
                FONTE DA PESQUISA · Informações públicas disponibilizadas pela Secretaria
                Municipal de Transportes do Rio de Janeiro.
              </p>
            </TimelineStep>

            <TimelineStep number="04" title="A virada." isLast>
              <p className="mb-6">
                A hipótese mudou. Em vez de pedir para o passageiro cadastrar rotina, a
                pergunta passou a ser outra.
              </p>
              <div className="space-y-4">
                {/* Old hypothesis */}
                <div className="flex items-center gap-3 p-4 rounded-xl border border-ink-200 bg-ink-50">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-ink-400 flex-shrink-0">
                    HIPÓTESE INICIAL
                  </span>
                  <div className="flex items-center gap-2 font-mono text-xs text-ink-500">
                    <span className="text-ink-700">passageiro</span>
                    <ArrowRight size={12} className="text-ink-400" />
                    <span className="text-ink-700">cadastra rotina</span>
                  </div>
                </div>
                {/* Arrow down */}
                <div className="flex justify-center">
                  <ArrowDown size={16} className="text-ink-300" />
                </div>
                {/* New hypothesis */}
                <div className="flex items-center gap-3 p-4 rounded-xl border border-ink-900 bg-ink-900 text-ink-50">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-ink-400 flex-shrink-0">
                    NOVA HIPÓTESE
                  </span>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-ink-50">dados existentes</span>
                    <ArrowRight size={12} className="text-ink-400" />
                    <span className="text-ink-50">decisão</span>
                  </div>
                </div>
              </div>
              <blockquote className="mt-6 border-l-2 border-ink-300 pl-6 py-2 font-serif text-xl md:text-2xl text-ink-900 italic leading-relaxed text-pretty">
                Se os dados já existem, como podemos transformá-los em decisões melhores?
              </blockquote>
            </TimelineStep>
          </div>
        </div>
      </section>

      {/* 03 — O que eu encontrei */}
      <section className="section-py border-b border-ink-100 bg-ink-50">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="03"
            label="O QUE EU ENCONTREI"
            title="A primeira hipótese não era suficiente."
            intro="A pesquisa mostrou que o sistema de transporte já produz e disponibiliza diferentes tipos de dados."
          />

          {/* Central composition */}
          <div className="mt-14 flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
              <InfoCard icon={MapPin} label="GPS" tag="Operação">
                Localização e acompanhamento dos veículos.
              </InfoCard>
              <InfoCard icon={Bus} label="Frota" tag="F">
                Veículos em operação e oferta planejada.
              </InfoCard>
              <InfoCard icon={Users} label="Passageiros" tag="P">
                Demanda e passageiros transportados.
              </InfoCard>
              <InfoCard icon={DollarSign} label="Recursos" tag="$">
                Viagens, quilômetros e subsídios.
              </InfoCard>
            </div>

            {/* Connecting arrows down */}
            <div className="my-6 flex justify-center">
              <ArrowDown size={20} className="text-ink-300" />
            </div>

            {/* Central node */}
            <div className="px-8 py-6 rounded-2xl border border-ink-900 bg-ink-900 text-ink-50 text-center">
              <p className="font-serif text-2xl md:text-3xl font-medium mb-1">FLOW</p>
              <p className="font-mono text-xs text-ink-400 uppercase tracking-widest">
                transformar dados em decisão
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Da informação à decisão */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="04"
            label="DESCOBERTA"
            title="O problema não é simplesmente ter dados."
            intro="Existem informações sobre diferentes partes da operação. A oportunidade está em conectar esses dados para enxergar padrões e apoiar decisões antes que o problema aconteça."
          />

          {/* Flow sequence */}
          <div className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 items-center gap-3 md:gap-2">
            {[
              { num: '01', label: 'Dados', icon: Database },
              { num: '02', label: 'Padrões', icon: TrendingUp },
              { num: '03', label: 'Previsão', icon: Lightbulb },
              { num: '04', label: 'Decisão', icon: ArrowRight },
            ].map((step, i) => (
              <div key={step.num} className="contents">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-ink-200 bg-white"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                    {step.num}
                  </span>
                  <step.icon size={20} className="text-ink-600" />
                  <span className="font-medium text-ink-900 text-sm">{step.label}</span>
                </motion.div>
                {i < 3 && (
                  <div className="hidden lg:flex justify-center">
                    <ArrowRight size={16} className="text-ink-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>

          {/* Highlight question */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mt-12 max-w-2xl"
          >
            <p className="font-serif text-2xl md:text-3xl font-medium text-ink-900 leading-relaxed text-pretty">
              E se os dados não servissem apenas para registrar o que aconteceu?
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* 05 — Fontes e Transparência */}
      <section className="py-16 border-b border-ink-100 bg-ink-50">
        <div className="container-px max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl border border-ink-200 bg-white">
            <div className="flex items-start gap-3 mb-5">
              <span className="font-mono text-xs text-ink-400 mt-0.5">// importante</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-medium text-ink-900 mb-4">
              Transparência
            </h3>
            <p className="text-ink-500 text-sm md:text-base leading-relaxed mb-6 text-pretty">
              Esta etapa utiliza informações públicas sobre o sistema de transporte do Rio
              de Janeiro. Os dados apresentados aqui são usados para explicar o conceito e
              não representam dados pessoais de passageiros.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://transportes.prefeitura.rio/teste/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-ink-300 text-ink-700 hover:bg-ink-100 px-4 py-2 text-sm font-medium transition-all duration-300"
              >
                SMTR / Operação
                <ExternalLink size={13} className="text-ink-400" />
              </a>
              <a
                href="https://transportes.prefeitura.rio/subsidio/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-ink-300 text-ink-700 hover:bg-ink-100 px-4 py-2 text-sm font-medium transition-all duration-300"
              >
                SMTR / Dados
                <ExternalLink size={13} className="text-ink-400" />
              </a>
              <a
                href="https://www.data.rio/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-ink-300 text-ink-700 hover:bg-ink-100 px-4 py-2 text-sm font-medium transition-all duration-300"
              >
                DATA.RIO
                <ExternalLink size={13} className="text-ink-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — O Flow em funcionamento */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="06"
            label="O FLOW EM FUNCIONAMENTO"
            title="E se os dados pudessem antecipar a decisão?"
            intro="Esta é uma simulação conceitual de como o Flow poderia transformar padrões de demanda em cenários para apoiar decisões operacionais."
          />

          <div className="mt-12">
            <DemandSimulator />
          </div>
        </div>
      </section>

      {/* 07 — Impacto */}
      <section className="section-py border-b border-ink-100 bg-ink-50">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="07"
            label="IMPACTO"
            title="O que muda quando o dado vira decisão?"
            intro="O objetivo do Flow não é simplesmente prever quantas pessoas utilizarão um ônibus. É transformar padrões de demanda em informações que possam apoiar diferentes tipos de decisão."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: '01',
                label: 'PASSAGEIRO',
                title: 'Uma viagem mais previsível.',
                desc: 'Se determinados padrões de demanda são identificados com antecedência, a operação pode ter informações para agir antes que a lotação aconteça.',
              },
              {
                num: '02',
                label: 'OPERAÇÃO',
                title: 'Melhor visualização dos desequilíbrios.',
                desc: 'Comparar demanda e capacidade em diferentes intervalos, linhas e horários para identificar onde existe gap.',
              },
              {
                num: '03',
                label: 'GESTÃO',
                title: 'Comparação de cenários.',
                desc: 'Informações para apoiar decisões sobre oferta, horários e alocação de recursos com base em padrões observados.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-ink-200 bg-white transition-all duration-300 hover:border-ink-300"
              >
                <span className="font-mono text-xs text-ink-400 block mb-4">{card.num}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-500 block mb-3">
                  {card.label}
                </span>
                <h3 className="font-serif text-lg font-medium text-ink-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-ink-400 text-sm leading-relaxed text-pretty">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Simulação de Impacto */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="08"
            label="SIMULAÇÃO DE IMPACTO"
            title="Simulação de impacto."
            intro="Ajuste os valores e observe como o Flow poderia identificar um desequilíbrio entre demanda e capacidade."
          />

          <div className="mt-12">
            <ImpactSimulator />
          </div>
        </div>
      </section>

      {/* 09 — Simulação Financeira */}
      <section className="section-py border-b border-ink-100 bg-ink-50">
        <div className="container-px max-w-6xl mx-auto">
          <SectionHeader
            number="09"
            label="SIMULAÇÃO FINANCEIRA"
            title="E se eficiência também pudesse ser medida?"
            intro="Uma operação mais eficiente não significa simplesmente reduzir recursos. A ideia é comparar diferentes cenários e entender onde existe espaço para otimização."
          />

          <div className="mt-12">
            <FinanceSimulator />
          </div>
        </div>
      </section>

      {/* 10 — A pergunta que fica */}
      <section className="py-24 md:py-36 border-b border-ink-100">
        <div className="container-px max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 block mb-6">
              A PERGUNTA QUE FICA
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-ink-900 leading-[1.1] text-balance mb-8">
              Se existem dados, tecnologia e recursos, como transformamos tudo isso em
              serviço melhor?
            </h2>
            <div className="space-y-5 text-ink-500 text-base md:text-lg leading-relaxed text-pretty max-w-2xl">
              <p>
                Eu não conheço os sistemas internos, contratos ou critérios operacionais de
                cada empresa ou concessão. Por isso, não parto da premissa de que esses
                dados simplesmente não são utilizados.
              </p>
              <p>
                A proposta do Flow é investigar outra possibilidade: como conectar
                informações existentes, identificar padrões e criar uma camada de apoio à
                decisão que torne os desequilíbrios mais visíveis.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 11 — Próxima parada */}
      <section className="section-py">
        <div className="container-px max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs text-ink-400 block mb-6">05 — PRÓXIMA PARADA</span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-ink-900 leading-[1.1] text-balance mb-6">
              E foi aí que nasceu o Flow.
            </h2>
            <p className="text-ink-500 text-lg leading-relaxed text-pretty max-w-xl mb-8">
              Agora a investigação deixa de ser apenas sobre coletar informações e passa a
              ser sobre conectar, analisar, prever e questionar.
            </p>
            <div className="mb-10">
              <ArrowDown size={20} className="text-ink-300" />
            </div>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink-900 hover:text-ink-700 transition-colors"
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
              voltar ao portfólio
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
