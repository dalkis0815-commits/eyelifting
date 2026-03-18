import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const programs = [
    {
      title: "동안눈매매선",
      target: "눈꺼풀 처짐, 눈가 주름",
      desc: "눈꺼풀의 탄력을 회복하여 또렷하고 생기 있는 눈매를 완성합니다.",
      img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "심부볼/팔자 리프팅",
      target: "처진 볼살, 깊은 팔자주름",
      desc: "강력한 가시 매선을 사용하여 무너진 턱선과 볼륨을 개선합니다.",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "이마/미간 주름 개선",
      target: "이마 가로주름, 미간 세로주름",
      desc: "근육의 과도한 긴장을 풀고 매선으로 주름 골을 채워 매끈하게 만듭니다.",
      img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "안면 전반 윤곽 리프팅",
      target: "얼굴 전체 탄력 저하",
      desc: "얼굴 전체의 밸런스를 맞추어 입체적이고 젊어 보이는 인상을 만듭니다.",
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      <section className="bg-warm-bg py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">시술 프로그램 안내</h1>
          <p className="text-lg text-warm-text/60 max-w-2xl mx-auto">
            눈매뿐만 아니라 얼굴 전체의 조화로운 아름다움을 위해 다양한 리프팅 프로그램을 제안합니다.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {programs.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-warm-bg rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <div className="text-primary mb-2 font-bold text-sm flex items-center gap-2">
                  <Sparkles size={16} /> {p.target}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{p.title}</h3>
                <p className="text-warm-text/70 mb-6 leading-relaxed">{p.desc}</p>
                <a href="https://naver.me/5apTfmmv" target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-1 hover:gap-3 transition-all">
                  네이버 예약 바로가기 <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-secondary text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">병행 시술 시 시너지 효과</h2>
          <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
            매선 시술과 함께 약침, 정안침 등을 병행하면 피부 톤 개선과 붓기 완화에 더욱 효과적입니다. 
            개개인의 피부 상태에 맞는 맞춤형 결합 프로그램을 추천해 드립니다.
          </p>
          <a href="https://naver.me/5apTfmmv" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-secondary transition-all">
            네이버 예약 바로가기
          </a>
        </div>
      </div>
    </div>
  );
}
