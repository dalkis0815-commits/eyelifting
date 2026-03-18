import { motion } from 'motion/react';
import { Award, Heart, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600" 
          alt="Clinic Interior" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-bg/80 to-white" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">튼튼한한의원 소개</h1>
          <p className="text-xl text-warm-text/60">자연스러운 아름다움, 그 이상의 가치를 전합니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Doctor Intro */}
        <section className="py-24 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]"
          >
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=800" 
              alt="Doctor" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div>
            <span className="text-primary font-bold mb-4 block">대표원장 인사말</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight">
              "당신의 시간이 가장 아름답게<br />
              흐를 수 있도록 돕겠습니다."
            </h2>
            <div className="space-y-6 text-lg text-warm-text/70 leading-relaxed">
              <p>
                안녕하세요, 튼튼한한의원 대표원장입니다. 
                저희 한의원은 단순히 겉모습을 바꾸는 것이 아니라, 
                피부 스스로의 재생력을 깨워 가장 자연스러운 젊음을 되찾아 드리는 것을 목표로 합니다.
              </p>
              <p>
                특히 4060 여성분들의 고민인 눈꺼풀 처짐은 단순한 미용 문제를 넘어 
                자신감과 일상의 활력에 큰 영향을 미칩니다. 
                수술에 대한 두려움 없이, 안전하고 편안한 매선 시술로 
                다시 또렷해진 눈매와 함께 밝은 미소를 되찾아 드리겠습니다.
              </p>
              <p className="font-serif font-bold text-warm-text italic">
                - 튼튼한한의원 대표원장 올림
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-warm-bg rounded-[3rem] px-8 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">튼튼의 3대 진료 철학</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Heart />, title: "정직한 진료", desc: "과잉 진료 없이 꼭 필요한 시술만을 권장합니다." },
              { icon: <Award />, title: "검증된 안전성", desc: "KFDA 승인 정품 매선과 멸균 시스템을 준수합니다." },
              { icon: <Users />, title: "1:1 맞춤 케어", desc: "개개인의 피부 두께와 근육 상태를 정밀 분석합니다." }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-primary mb-6 flex justify-center scale-150">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-warm-text/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">한의원 둘러보기</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400"
            ].map((url, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden h-48 md:h-64 shadow-md">
                <img src={url} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
