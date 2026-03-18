import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-warm-bg/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-primary tracking-tight">튼튼한한의원</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="tel:053-325-3375" className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-secondary transition-all shadow-md flex items-center gap-2">
              <Phone size={16} />
              전화 상담
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-warm-bg border-b border-primary/10 px-4 py-8 flex flex-col gap-6 shadow-xl"
            >
              <a href="tel:053-325-3375" className="bg-primary text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2">
                <Phone size={20} />
                전화 상담
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-secondary text-white/90 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">튼튼한한의원</h3>
            <p className="text-sm leading-relaxed opacity-80 mb-8">
              수술 없이 자연스러운 아름다움을 추구합니다.<br />
              개개인의 피부 자생력을 높여 건강한 젊음을 되찾아 드립니다.
            </p>
            <div className="flex gap-4">
              <a href="tel:053-325-3375" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                <Phone size={18} />
                <span className="font-bold">053-325-3375</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 text-sm">
            <div>
              <h4 className="font-bold mb-4 opacity-100">진료 안내</h4>
              <ul className="space-y-2 opacity-70">
                <li>월, 수: 09:30 - 20:30 (야간진료)</li>
                <li>화, 목, 금: 09:30 - 19:00</li>
                <li>토요일: 09:30 - 13:00</li>
                <li>일요일 휴진</li>
                <li>점심시간: 13:00 - 14:00</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-xs opacity-50 text-center">
          © 2026 튼튼한한의원. All rights reserved. | 의료법 준수 광고
        </div>
      </footer>
    </div>
  );
}
