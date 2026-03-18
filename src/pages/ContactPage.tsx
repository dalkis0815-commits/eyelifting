import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, Send, Calendar } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-warm-bg min-h-screen pb-24">
      <section className="bg-white py-20 border-b border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">문의 및 예약</h1>
          <p className="text-lg text-warm-text/60 max-w-2xl mx-auto">
            궁금하신 점이 있다면 언제든 편하게 문의해 주세요. 
            전문 상담 실장이 친절하게 안내해 드립니다.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8">오시는 길</h2>
              <div className="bg-white p-4 rounded-3xl shadow-lg border border-primary/10 h-80 overflow-hidden relative">
                {/* Map Placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-2xl border border-primary/20 text-center">
                    <MapPin className="text-primary mx-auto mb-2" size={32} />
                    <p className="font-bold">대구광역시 북구 동천로23길 2 2층</p>
                    <p className="text-sm text-warm-text/60">튼튼한한의원</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <a href="tel:053-325-3375" className="bg-white p-6 rounded-3xl shadow-sm border border-primary/5 flex flex-col items-center text-center hover:shadow-md transition-all">
                <Phone className="text-primary mb-3" size={28} />
                <h4 className="font-bold mb-1 text-sm">전화 상담</h4>
                <p className="text-primary font-bold">053-325-3375</p>
              </a>
              <a href="https://naver.me/5apTfmmv" target="_blank" rel="noopener noreferrer" className="bg-primary p-6 rounded-3xl shadow-sm flex flex-col items-center text-center hover:bg-secondary transition-all text-white">
                <Calendar className="mb-3" size={28} />
                <h4 className="font-bold mb-1 text-sm">네이버 예약</h4>
                <p className="font-bold">바로가기</p>
              </a>
              <a href="#" className="bg-[#FEE500] p-6 rounded-3xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all">
                <MessageCircle className="text-[#3C1E1E] mb-3" size={28} />
                <h4 className="font-bold mb-1 text-sm text-[#3C1E1E]">카카오톡</h4>
                <p className="text-[#3C1E1E] font-bold">@튼튼한한의원</p>
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5">
              <h4 className="font-bold mb-6 flex items-center gap-2">
                <Clock className="text-primary" size={20} /> 진료 시간 안내
              </h4>
              <ul className="space-y-4 text-warm-text/70">
                <li className="flex justify-between border-b border-primary/5 pb-2">
                  <span>월, 수 (야간진료)</span>
                  <span className="font-bold text-warm-text">09:30 - 20:30</span>
                </li>
                <li className="flex justify-between border-b border-primary/5 pb-2">
                  <span>화, 목, 금</span>
                  <span className="font-bold text-warm-text">09:30 - 19:00</span>
                </li>
                <li className="flex justify-between border-b border-primary/5 pb-2">
                  <span>토요일</span>
                  <span className="font-bold text-warm-text">09:30 - 13:00</span>
                </li>
                <li className="flex justify-between border-b border-primary/5 pb-2">
                  <span>점심시간</span>
                  <span className="font-bold text-warm-text">13:00 - 14:00</span>
                </li>
                <li className="flex justify-between text-red-400">
                  <span>일요일</span>
                  <span className="font-bold">휴진</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phone Consultation Section */}
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-primary/10 text-center flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold mb-8">전화 상담</h2>
            <p className="text-warm-text/60 mb-10">
              궁금하신 점이 있다면 언제든 편하게 전화로 문의해 주세요. <br />
              전문 상담 실장이 친절하게 안내해 드립니다.
            </p>

            <a 
              href="tel:053-325-3375" 
              className="inline-flex items-center justify-center gap-4 w-full bg-primary text-white py-8 rounded-2xl text-3xl font-bold shadow-xl hover:bg-secondary transition-all"
            >
              <Phone size={32} />
              053-325-3375
            </a>
            
            <p className="mt-8 text-warm-text/40 text-sm">
              * 진료 시간 외에는 연결이 어려울 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
