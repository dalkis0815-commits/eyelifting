import { motion } from 'motion/react';
import { ChevronRight, CheckCircle2, Clock, Sparkles, Calendar } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-12 bg-warm-bg">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8 text-warm-text">
              처진 눈꺼풀 때문에<br />
              <span className="text-primary">눈이 답답해 보이시나요?</span>
            </h1>
            <p className="text-lg md:text-xl text-warm-text/70 mb-10 leading-relaxed">
              수술의 두려움 없이, 내 피부의 자생력으로<br />
              다시 또렷해지는 눈매를 경험하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://naver.me/5apTfmmv" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:bg-secondary transition-all flex items-center justify-center gap-2">
                네이버 예약 바로가기
                <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">혹시 이런 고민을 하고 계신가요?</h2>
            <p className="text-warm-text/60">나이가 들면서 자연스럽게 찾아오는 변화, 이제는 해결할 수 있습니다.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://raw.githubusercontent.com/dalkis0815-commits/lfting/main/beautiful-eye-senior-woman.jpg" 
                alt="Beautiful Eye Senior Woman" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <div className="space-y-6">
              {[
                "눈꺼풀이 처져서 시야가 답답하고 눈이 작아 보여요",
                "눈을 뜰 때 자꾸 이마 근육을 써서 주름이 깊어져요",
                "쌍꺼풀 수술은 부담스럽고 인위적일까 봐 걱정돼요",
                "피곤해 보인다는 말을 자주 들어서 스트레스예요"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-warm-bg rounded-2xl border border-primary/5"
                >
                  <CheckCircle2 className="text-primary shrink-0 mt-1" />
                  <p className="text-lg font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cause Section */}
      <section className="py-24 bg-warm-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">눈꺼풀 처짐의 진짜 원인</h2>
            <p className="text-lg leading-relaxed text-warm-text/70">
              단순히 피부만 처지는 것이 아닙니다. 눈을 뜨는 근육의 힘이 약해지면서 
              <span className="text-primary font-bold"> 이마 근육을 과도하게 사용</span>하게 되고, 
              이로 인해 이마 주름은 깊어지고 눈꺼풀은 더 무거워지는 악순환이 반복됩니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "근육 약화", desc: "상안검거근의 탄력 저하" },
              { title: "피부 이완", desc: "콜라겐 감소로 인한 피부 처짐" },
              { title: "이마 주름", desc: "보상 작용으로 인한 2차 노화" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-primary/10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-warm-text/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principle Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                당겨 올리는 것이 아닌,<br />
                <span className="text-primary">자생력으로 올라붙는 원리</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">미세 매선 삽입</h4>
                    <p className="text-warm-text/60">머리카락보다 얇은 단백질 실(매선)을 처진 부위에 정교하게 삽입합니다.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">조직 재생 유도</h4>
                    <p className="text-warm-text/60">매선이 서서히 녹으면서 주변 조직의 콜라겐과 엘라스틴 생성을 촉진합니다.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">자연스러운 리프팅</h4>
                    <p className="text-warm-text/60">피부 자체가 탄탄해지며 눈꺼풀이 가볍게 위로 밀착되어 또렷해집니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-warm-bg"
              >
                <img 
                  src="https://raw.githubusercontent.com/dalkis0815-commits/lfting/main/%EB%A7%A4%EC%84%A0.jpg" 
                  alt="매선 시술 원리" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Advantages */}
      <section className="py-24 bg-warm-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Sparkles />, title: "자연스러움", desc: "인위적인 당김 없이 내 눈매 그대로" },
              { icon: <Clock />, title: "빠른 회복", desc: "시술 당일 세안 및 메이크업 가능" },
              { icon: <CheckCircle2 />, title: "안전성", desc: "의료기기 인증 정품 매선 사용" },
              { icon: <Calendar />, title: "일상 유지", desc: "별도의 회복 기간이 필요 없음" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-primary/5 text-center"
              >
                <div className="text-primary mb-6 flex justify-center scale-150">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-warm-text/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">실제 시술 후기</h2>
            <p className="text-warm-text/60">튼튼한한의원에서 또렷한 눈매를 되찾으신 분들의 이야기입니다.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-primary/10"
            >
              <img 
                src="https://raw.githubusercontent.com/dalkis0815-commits/lfting/main/%EB%88%88%EA%BA%BC%ED%92%80%20%EB%A7%A4%EC%84%A0.jpg" 
                alt="시술 후기" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-warm-bg p-8 rounded-2xl">
                <p className="italic text-lg mb-4">"나이가 들 수록 눈꺼풀 뜨기가 힘들어지고 눈물이 나왔는데, 매선 시술 후 눈이 훨씬 가벼워져서 너무 좋아요."</p>
                <p className="font-bold text-primary">- 60대 여성 고객님</p>
              </div>
              <div className="bg-warm-bg p-8 rounded-2xl">
                <p className="italic text-lg mb-4">"체질적으로 눈꺼풀이 얇아서 점점 쳐지는 것 같았는데 매선 받고나니 확실히 눈이 커진 느낌이에요. 자연스럽게 눈매가 또렷해져서 대만족입니다."</p>
                <p className="font-bold text-primary">- 40대 여성 고객님</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-12">
            <p className="text-xl text-warm-text/60 mb-2">쌍꺼풀 처짐, 비수술로 자연스럽게 개선</p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">눈꺼풀UP 매선</h2>
          </div>
          
          <div className="bg-warm-bg rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-8 border-b border-primary/10">
              <div className="text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-primary">눈꺼풀 UP매선</h3>
                <p className="text-warm-text/60">매선 실 20개</p>
                <p className="mt-4 text-xs text-warm-text/40 font-medium">* 부가세 포함</p>
              </div>
              <div className="space-y-6 w-full md:w-auto">
                <div className="flex justify-between items-center gap-8">
                  <span className="text-xl font-bold">1회</span>
                  <span className="text-2xl font-serif font-bold">180,000원</span>
                </div>
                <div className="flex justify-between items-center gap-8">
                  <span className="text-xl font-bold">3회</span>
                  <div className="text-right">
                    <span className="text-sm text-warm-text/40 line-through mr-2">54만원</span>
                    <span className="text-2xl font-serif font-bold text-primary">500,000원</span>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-8">
                  <div className="text-left">
                    <span className="text-xl font-bold">5회</span>
                    <p className="text-xs text-primary font-bold">1회당 15만원</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-warm-text/40 line-through mr-2">90만원</span>
                    <span className="text-3xl font-serif font-bold text-primary">750,000원</span>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href="https://naver.me/5apTfmmv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full bg-primary text-white py-5 rounded-xl text-xl font-bold hover:bg-secondary transition-all shadow-lg text-center"
            >
              네이버 예약 바로가기
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              더 늦기 전에,<br />
              다시 또렷한 눈매를 되찾으세요.
            </h2>
            <a 
              href="https://naver.me/5apTfmmv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white text-secondary px-12 py-5 rounded-full text-xl font-bold hover:bg-warm-bg transition-all shadow-2xl"
            >
              네이버 예약 바로가기
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
