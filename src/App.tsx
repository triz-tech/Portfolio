import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Flow from '@/pages/Flow';
import Mona from '@/pages/Mona';
import Projetos from '@/pages/Projetos';
import Sobre from '@/pages/Sobre';
import LabPage from '@/pages/LabPage';
import Contato from '@/pages/Contato';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function EasterEggs() {
  useEffect(() => {
    const messages = [
      '%c❶ Olá, curioso(a). ',
      '%c❶ Você encontrou o console. ',
      '%c❶ Beatriz L. L. Martins — desenvolvedora em formação. ',
      '%c❶ menos, mas melhor. ',
    ];
    const styles = [
      'color:#1c1c1a;font-size:16px;font-family:Georgia,serif;font-weight:500',
      'color:#6f6f67;font-size:13px;font-family:monospace',
      'color:#6f6f67;font-size:13px;font-family:monospace',
      'color:#d97706;font-size:13px;font-family:monospace;font-style:italic',
    ];
    messages.forEach((m, i) => console.log(m, styles[i]));

    let k = '';
    const onKey = (e: KeyboardEvent) => {
      k += e.key.toLowerCase();
      if (k.length > 8) k = k.slice(-8);
      if (k.includes('cinema')) {
        document.body.style.transition = 'filter 0.6s ease';
        document.body.style.filter = 'sepia(0.3) contrast(1.1)';
        setTimeout(() => {
          document.body.style.filter = '';
        }, 2500);
        k = '';
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <EasterEggs />
      <div className="min-h-screen flex flex-col bg-ink-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flow" element={<Flow />} />
            <Route path="/mona" element={<Mona />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/lab" element={<LabPage />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
