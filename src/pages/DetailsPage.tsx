import { motion } from 'motion/react';
import { ShieldCheck, Zap, HelpCircle } from 'lucide-react';

export default function DetailsPage() {
  return (
    <div className="bg-warm-bg min-h-screen pb-24">
      <section className="bg-white py-20 border-b border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">동안눈매매선 상세 정보</h1>
          <p className="text-lg text-warm-text/60 max-w-2xl mx-auto">
            의학적 원리부터 안전성까지, 궁금해하시는 모든 정보를 투명하게 공개합니다.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 space-y-24">
        {/* Component Info */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
              <ShieldCheck className="text-primary" />
              모노매선이란 무엇인가요?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-warm-text/80">
              <p>
                동안눈매매선에 사용되는 <span className="text-primary font-bold">모노매선(Mono-thread)</span>은 
                식약처(KFDA)에서 최고 안전 등급을 받은 의료용 단백질 실입니다.
              </p>
              <p>
                머리카락보다 얇은 미세한 굵기로 시술 시 통증이 거의 없으며, 
                피부 속에서 약 6~8개월에 걸쳐 서서히 녹아 없어지므로 이물감 걱정이 없습니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  PDO(Polydioxanone) 성분으로 생체 적합성 우수
                </li>
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  조직 재생 및 콜라겐 합성 유도 효과 탁월
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
              alt="Medical Thread" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Diagram Placeholder */}
        <section className="bg-white p-12 rounded-3xl shadow-xl border border-primary/10">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">조직 재생 원리 다이어그램</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "매선 삽입", desc: "처진 눈꺼풀 근육층에 정교하게 매선 삽입" },
              { step: "02", title: "반응 유도", desc: "매선 주변으로 미세 혈류량 증가 및 세포 활성화" },
              { step: "03", title: "탄력 완성", desc: "콜라겐 기둥이 형성되어 피부가 탄탄하게 리프팅" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-serif font-bold text-primary/20 mb-4">{item.step}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-warm-text/60">{item.desc}</p>
                {idx < 2 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-primary/20 text-4xl">→</div>}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-serif font-bold mb-12 text-center flex items-center justify-center gap-3">
            <HelpCircle className="text-primary" />
            자주 묻는 질문
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "시술 시 많이 아픈가요?", a: "마취 크림 도포 후 진행하며, 머리카락보다 얇은 실을 사용하기 때문에 따끔한 정도의 통증만 느껴집니다." },
              { q: "효과는 언제부터 나타나나요?", a: "시술 직후에도 약간의 리프팅감을 느끼실 수 있으며, 2~4주가 지나면서 콜라겐이 생성됨에 따라 더욱 뚜렷해집니다." },
              { q: "부작용은 없나요?", a: "단백질 성분의 녹는 실을 사용하므로 매우 안전합니다. 드물게 미세한 멍이나 붓기가 생길 수 있으나 3~5일 내로 사라집니다." },
              { q: "유지 기간은 얼마나 되나요?", a: "개인차가 있으나 보통 1년 내외로 유지됩니다. 5회 패키지 시술 시 더욱 견고한 유지력을 기대할 수 있습니다." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-primary/10 overflow-hidden">
                <summary className="p-6 cursor-pointer font-bold text-lg flex justify-between items-center list-none">
                  {faq.q}
                  <span className="text-primary group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="p-6 pt-0 text-warm-text/70 border-t border-primary/5">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
