import { useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Camera,
  Heart,
  Image,
  MessageCircle,
  MoreHorizontal,
  Music2,
  Search,
  Send,
  Star,
  UserRound,
  Users,
} from 'lucide-react';

export type MonaScreenKind =
  | 'music'
  | 'feed'
  | 'profile'
  | 'recommendation'
  | 'review'
  | 'memory'
  | 'home'
  | 'daily';

interface MonaScreenProps {
  kind: MonaScreenKind;
  compact?: boolean;
  interactive?: boolean;
  selectedRating?: number;
  onRatingChange?: (rating: number) => void;
}

const albumArt = {
  sky: 'linear-gradient(145deg, #59453c 0%, #b76d4e 48%, #e3ab7b 100%)',
  night: 'linear-gradient(145deg, #0f1720 0%, #25384a 48%, #a78b70 100%)',
  violet: 'linear-gradient(145deg, #2e2b3c 0%, #82758b 52%, #d7ad92 100%)',
};

function MiniStars({ rating = 5 }: { rating?: number }) {
  return (
    <span className="flex items-center gap-0.5 text-accent-500">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} size={8} fill={star <= rating ? 'currentColor' : 'none'} />
      ))}
    </span>
  );
}

function Avatar({ label = 'bia', large = false }: { label?: string; large?: boolean }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-ink-200 text-ink-600 font-mono ${
        large ? 'h-9 w-9 text-[10px]' : 'h-5 w-5 text-[7px]'
      }`}
      aria-label={label}
    >
      {label.slice(0, 2)}
    </span>
  );
}

function ScreenHeader({ title, back = false }: { title: string; back?: boolean }) {
  return (
    <div className="flex items-center justify-between px-3 pt-3 pb-2 text-ink-700">
      <div className="flex items-center gap-2">
        {back && <ArrowLeft size={11} />}
        <span className="font-serif text-[14px] font-medium">{title}</span>
      </div>
      <div className="flex items-center gap-2 text-ink-400">
        <Search size={11} />
        <MoreHorizontal size={12} />
      </div>
    </div>
  );
}

function MusicScreen({ selectedRating, onRatingChange }: MonaScreenProps) {
  const rating = selectedRating ?? 5;

  return (
    <div className="h-full bg-ink-50 text-ink-900">
      <ScreenHeader title="mona" back />
      <div className="px-3 pt-2">
        <div className="h-32 rounded-lg" style={{ background: albumArt.sky }}>
          <div className="flex h-full items-end p-2.5">
            <span className="font-mono text-[8px] uppercase tracking-widest text-white/80">
              now remembering
            </span>
          </div>
        </div>
        <div className="pt-3">
          <p className="font-serif text-[18px] leading-none">Space Song</p>
          <p className="mt-1 text-[9px] text-ink-500">Beach House</p>
        </div>
        <div className="mt-3 flex items-center justify-between border-b border-ink-200 pb-3">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                aria-label={`Avaliar com ${star} estrelas`}
                onClick={() => onRatingChange?.(star)}
                className="text-accent-500 transition-transform hover:scale-125"
              >
                <Star size={12} fill={star <= rating ? 'currentColor' : 'none'} />
              </button>
            ))}
          </div>
          <span className="font-mono text-[9px] text-ink-500">{rating}.0</span>
        </div>
        <div className="mt-3 flex items-start gap-2">
          <Avatar label="bia" />
          <div>
            <p className="text-[9px] font-medium text-ink-800">bia</p>
            <p className="mt-1 text-[9px] leading-relaxed text-ink-500">
              ouvi essa música numa noite que parecia que nada fazia sentido.
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-ink-400">
          <div className="flex gap-3">
            <Heart size={11} />
            <MessageCircle size={11} />
          </div>
          <Bookmark size={11} />
        </div>
      </div>
      <div className="absolute bottom-2 left-3 right-3 flex justify-around border-t border-ink-200 pt-2 text-ink-400">
        <Music2 size={11} />
        <Users size={11} />
        <UserRound size={11} />
      </div>
    </div>
  );
}

function FeedScreen() {
  return (
    <div className="h-full bg-ink-50 text-ink-900">
      <ScreenHeader title="feed" />
      <div className="flex gap-2 overflow-hidden px-3 pb-3 pt-2 border-b border-ink-200">
        {['bia', 'mari', 'lucas', 'leo'].map((name) => (
          <div key={name} className="flex min-w-[32px] flex-col items-center gap-1">
            <Avatar label={name} />
            <span className="text-[7px] text-ink-500">{name}</span>
          </div>
        ))}
      </div>
      <div className="p-3">
        <div className="flex items-center gap-2">
          <Avatar label="bia" />
          <p className="text-[9px] text-ink-700"><strong>bia</strong> avaliou 505</p>
          <MoreHorizontal size={11} className="ml-auto text-ink-400" />
        </div>
        <div className="mt-2 rounded-lg border border-ink-200 bg-white p-2">
          <div className="h-24 rounded-md" style={{ background: albumArt.night }} />
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-medium">505</p>
              <p className="text-[8px] text-ink-500">Arctic Monkeys</p>
            </div>
            <MiniStars rating={4} />
          </div>
          <p className="mt-2 text-[8px] leading-relaxed text-ink-500">essa tem um negócio que eu não sei explicar.</p>
        </div>
        <div className="mt-4 flex items-center justify-between text-[8px] text-ink-400">
          <button className="flex items-center gap-1 hover:text-ink-900"><Heart size={10} /> 23</button>
          <button className="flex items-center gap-1 hover:text-ink-900"><MessageCircle size={10} /> 4</button>
          <button className="flex items-center gap-1 hover:text-ink-900"><Send size={10} /> recomendar</button>
        </div>
        <div className="mt-5 rounded-lg border border-ink-200 bg-white p-2">
          <div className="flex items-center gap-2">
            <Avatar label="mari" />
            <p className="text-[8px] text-ink-500"><strong className="text-ink-700">marina</strong> recomendou uma música</p>
          </div>
          <div className="mt-2 flex gap-2 items-center">
            <div className="h-9 w-9 rounded-md" style={{ background: albumArt.sky }} />
            <div><p className="text-[9px] font-medium">Space Song</p><p className="text-[8px] text-ink-500">Beach House</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileScreen() {
  const [tab, setTab] = useState('reviews');
  const tabContent = {
    reviews: ['505 · Arctic Monkeys', 'Space Song · Beach House'],
    memórias: ['aquela viagem de carro', 'domingo na casa da vó'],
    recomendações: ['para ouvir quando chover', 'músicas que lembram verão'],
  };

  return (
    <div className="h-full bg-ink-50 text-ink-900">
      <ScreenHeader title="beatriz" />
      <div className="px-3 pt-2">
        <div className="flex items-center gap-3">
          <Avatar label="beatriz" large />
          <div><p className="font-serif text-[16px]">beatriz</p><p className="text-[8px] text-ink-500">Rio de Janeiro, RJ</p></div>
        </div>
        <div className="mt-3 grid grid-cols-4 border-y border-ink-200 py-2 text-center">
          {[['142', 'músicas'], ['28', 'álbuns'], ['76', 'reviews'], ['56', 'amigos']].map(([value, label]) => (
            <div key={label}><p className="font-serif text-[13px]">{value}</p><p className="text-[7px] text-ink-400">{label}</p></div>
          ))}
        </div>
        <p className="mt-4 text-[8px] uppercase tracking-widest text-ink-400">músicas que definem você</p>
        <div className="mt-2 grid grid-cols-4 gap-1">
          {[albumArt.sky, albumArt.night, albumArt.violet, albumArt.sky].map((art, i) => <div key={i} className="h-11 rounded" style={{ background: art }} />)}
        </div>
        <div className="mt-4 flex gap-3 border-b border-ink-200">
          {Object.keys(tabContent).map((item) => (
            <button key={item} onClick={() => setTab(item)} className={`pb-2 text-[8px] capitalize transition-colors ${tab === item ? 'border-b border-ink-900 text-ink-900' : 'text-ink-400'}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {tabContent[tab as keyof typeof tabContent].map((item) => (
            <div key={item} className="flex items-center justify-between rounded border border-ink-200 bg-white p-2">
              <span className="text-[8px] text-ink-600">{item}</span><MiniStars rating={4} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecommendationScreen() {
  return (
    <div className="h-full bg-ink-50 text-ink-900">
      <ScreenHeader title="para você" />
      <div className="px-3 pt-4">
        <div className="flex items-center gap-2"><Avatar label="mari" /><p className="text-[9px] text-ink-500"><strong className="text-ink-800">marina</strong> recomendou uma música</p></div>
        <p className="mt-4 font-serif text-[19px] leading-tight">Space Song</p>
        <p className="mt-1 text-[9px] text-ink-500">Beach House</p>
        <div className="mt-4 h-28 rounded-lg" style={{ background: albumArt.sky }} />
        <p className="mt-4 text-[9px] leading-relaxed text-ink-600">ouvi e achei MUITO sua cara.</p>
        <div className="mt-5 flex gap-2"><span className="rounded-full bg-ink-900 px-3 py-1 text-[8px] text-ink-50">adicionar</span><span className="rounded-full border border-ink-200 px-3 py-1 text-[8px] text-ink-500">guardar</span></div>
      </div>
    </div>
  );
}

function ReviewScreen() {
  return (
    <div className="h-full bg-ink-50 text-ink-900">
      <ScreenHeader title="nova review" back />
      <div className="px-3 pt-4">
        <div className="flex gap-3 items-center"><div className="h-12 w-12 rounded" style={{ background: albumArt.night }} /><div><p className="text-[11px] font-medium">505</p><p className="text-[8px] text-ink-500">Arctic Monkeys</p></div></div>
        <div className="mt-5 flex justify-between px-2 text-accent-500">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={15} fill="currentColor" />)}</div>
        <div className="mt-5 rounded-lg border border-ink-200 bg-white p-3 text-[9px] leading-relaxed text-ink-400">essa música me lembra...</div>
        <div className="mt-3 flex gap-2 text-ink-400"><Camera size={12} /><Image size={12} /><Bookmark size={12} /></div>
        <button className="mt-6 w-full rounded-lg bg-ink-900 py-2 text-[9px] text-ink-50">publicar review</button>
      </div>
    </div>
  );
}

function MemoryScreen() {
  return (
    <div className="h-full bg-ink-50 text-ink-900">
      <ScreenHeader title="nova memória" back />
      <div className="px-3 pt-3"><div className="h-28 rounded-lg" style={{ background: albumArt.violet }} /><p className="mt-3 font-serif text-[16px]">aquela viagem de carro</p><p className="mt-2 text-[9px] leading-relaxed text-ink-500">essa tocou umas 15 vezes naquela viagem de carro com a minha família.</p><div className="mt-4 flex gap-1"><span className="rounded-full bg-ink-100 px-2 py-1 text-[8px] text-ink-500">viagem</span><span className="rounded-full bg-ink-100 px-2 py-1 text-[8px] text-ink-500">família</span></div></div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="h-full bg-ink-50 text-ink-900"><div className="px-3 pt-4"><p className="font-serif text-[19px]">mona</p><p className="mt-6 max-w-[120px] font-serif text-[15px] leading-tight">descubra músicas através de histórias reais.</p><button className="mt-5 rounded bg-ink-900 px-3 py-1.5 text-[8px] text-ink-50">começar</button><p className="mt-7 text-[8px] uppercase tracking-widest text-ink-400">em alta</p><div className="mt-2 rounded-lg border border-ink-200 bg-white p-2"><div className="h-20 rounded" style={{ background: albumArt.night }} /><p className="mt-2 text-[9px]">505</p><p className="text-[8px] text-ink-400">Arctic Monkeys</p></div></div></div>
  );
}

function DailyScreen() {
  return (
    <div className="h-full bg-ink-50 text-ink-900"><ScreenHeader title="música do dia" /><div className="px-3 pt-5 text-center"><p className="font-mono text-[8px] uppercase tracking-widest text-ink-400">quinta, 21 de agosto</p><div className="mx-auto mt-4 h-28 w-28 rounded-full" style={{ background: albumArt.sky }} /><p className="mt-4 font-serif text-[18px]">Space Song</p><p className="mt-1 text-[9px] text-ink-500">Beach House</p><p className="mx-auto mt-5 max-w-[145px] text-[9px] leading-relaxed text-ink-500">que música combina com o seu dia?</p></div></div>
  );
}

export default function MonaScreen(props: MonaScreenProps) {
  const { kind } = props;
  const screens: Record<MonaScreenKind, JSX.Element> = {
    music: <MusicScreen {...props} />,
    feed: <FeedScreen />,
    profile: <ProfileScreen />,
    recommendation: <RecommendationScreen />,
    review: <ReviewScreen />,
    memory: <MemoryScreen />,
    home: <HomeScreen />,
    daily: <DailyScreen />,
  };

  return (
    <div className={`relative overflow-hidden rounded-[1.35rem] border-[5px] border-ink-900 bg-ink-900 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.4)] ${props.compact ? 'w-[142px] sm:w-[160px]' : 'w-[220px] sm:w-[250px]'}`}>
      <div className={`relative aspect-[9/19] overflow-hidden rounded-[1rem] ${props.compact ? 'max-h-[300px]' : ''}`}>
        <div className="absolute left-1/2 top-0 z-10 h-3 w-16 -translate-x-1/2 rounded-b-lg bg-ink-900" />
        {screens[kind]}
      </div>
    </div>
  );
}
