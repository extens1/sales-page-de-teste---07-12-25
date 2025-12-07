import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Check, 
  Gift,
  Lock,
  Printer,
  Scissors,
  Smile,
  Download,
  Users
} from 'lucide-react';
import { BENEFITS, TESTIMONIALS, FAQS, PRICING } from './constants';
import CountdownTimer from './components/CountdownTimer';
import ToyCarousel from './components/ToyCarousel';

const App: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm md:text-base font-bold sticky top-0 z-50 shadow-md">
        Desconto Especial de Blackfriday só em Novembro
      </div>

      {/* Hero Section */}
      <header className="pt-8 pb-16 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full text-xs md:text-sm font-semibold text-gray-600 mb-6 border border-gray-200">
            <ShieldCheck size={16} className="text-green-500" />
            Compra Segura e Protegida
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            100 Brinquedos de Papel Bíblicos <br className="hidden md:block"/>
            para <span className="text-green-600">ensinar</span> e divertir seu filho <br className="hidden md:block"/>
            <span className="text-yellow-500">longe das telas</span>
          </h1>
        </div>

        {/* Hero Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
            {/* Mockup Image Area */}
            <div className="relative order-1 md:order-2">
                 {/* Decorative Elements behind image */}
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50"></div>
                 <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-50"></div>
                 
                 <div className="relative">
                    <img 
                        src="https://picsum.photos/id/119/800/600" 
                        alt="Product Mockup Laptop and Phone" 
                        className="rounded-xl shadow-2xl border-4 border-white w-full transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
                    />
                    
                    {/* Floating Price Badge */}
                    <div className="absolute -right-4 bottom-10 bg-yellow-400 text-gray-900 font-bold p-4 rounded-full shadow-lg border-4 border-white transform rotate-12 flex flex-col items-center justify-center w-24 h-24">
                        <span className="text-xs">Apenas</span>
                        <span className="text-2xl">R$10</span>
                    </div>

                    {/* Instruction visual */}
                    <div className="absolute -left-4 top-10 bg-white p-2 rounded-lg shadow-lg hidden md:flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                            <Printer size={14} className="text-gray-400" /> Imprimir
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                            <Scissors size={14} className="text-gray-400" /> Recortar
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                            <Smile size={14} className="text-gray-400" /> Brincar
                        </div>
                    </div>
                 </div>
            </div>

            {/* CTA Content */}
            <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                    Transforme histórias da Bíblia em <strong className="text-gray-900">atividades criativas</strong>: 
                    personagens, cenários e aventuras para fortalecer a <strong className="text-gray-900">fé</strong> e 
                    estimular a <strong className="text-gray-900">imaginação</strong>.
                </p>

                <button 
                    onClick={scrollToPricing}
                    className="bg-orange-600 hover:bg-orange-700 text-white text-xl font-bold py-4 px-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all w-full md:w-auto"
                >
                    Baixar Agora por Apenas R$10
                </button>
                <p className="text-sm text-gray-400 mt-4 flex items-center gap-1">
                    <Lock size={14} /> Pagamento Único • Acesso Vitalício
                </p>
            </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900">
                Benefícios que Vão Além da <br/> Brincadeira
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BENEFITS.map((benefit, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 hover:border-orange-200 transition-colors flex flex-col items-center text-center">
                        <div className={`p-4 rounded-full mb-6 ${benefit.color}`}>
                            <benefit.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-900">
                Veja alguns dos Brinquedos que <br/> você vai receber:
            </h2>
            <ToyCarousel />
            <div className="mt-8">
                 <p className="text-lg font-semibold text-gray-900">Menino Jesus</p>
            </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-12 bg-white">
          <CountdownTimer />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {PRICING.map((tier, index) => (
                    <div 
                        key={index}
                        className={`relative rounded-3xl bg-white transition-all duration-300 ${
                            tier.isPremium 
                            ? 'border-4 border-green-500 shadow-2xl scale-100 md:scale-105 z-10' 
                            : 'border border-gray-200 shadow-xl opacity-90 hover:opacity-100'
                        }`}
                    >
                        {tier.isPremium && (
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-1 rounded-full font-bold text-sm uppercase tracking-wide shadow-md">
                                Mais Vendido
                            </div>
                        )}

                        <div className="p-8 text-center border-b border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                            <div className="flex flex-col gap-1 mb-4">
                                <span className="text-gray-400 text-sm line-through">de R${tier.originalPrice} por</span>
                                <span className="text-6xl font-black text-gray-900">R${tier.price}</span>
                            </div>
                            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                                Você economiza R${tier.savings},00
                            </span>
                            
                            {tier.isPremium && (
                                <div className="mt-4 bg-green-50 text-green-700 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                                    <Users size={16} /> +3500 Compraram este pacote
                                </div>
                            )}
                        </div>

                        <div className="p-8">
                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="text-green-500 shrink-0" size={20} />
                                        <span className={`text-sm md:text-base ${tier.isPremium ? 'font-bold text-gray-800' : 'text-gray-600'}`}>{feature}</span>
                                    </li>
                                ))}
                                
                                {tier.bonusFeatures && (
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        {tier.bonusFeatures.map((bonus, idx) => (
                                            <li key={idx} className="flex items-start gap-3 mb-3">
                                                <Gift className="text-green-600 shrink-0" size={20} />
                                                <span className="text-sm md:text-base font-semibold text-gray-700">{bonus}</span>
                                            </li>
                                        ))}
                                    </div>
                                )}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold text-lg transition-transform transform active:scale-95 shadow-lg ${
                                tier.isPremium 
                                ? 'bg-green-500 hover:bg-green-600 text-white' 
                                : 'bg-white border-2 border-gray-200 text-gray-800 hover:border-gray-400'
                            }`}>
                                {tier.ctaText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900">
                O Que Nossos Clientes Dizem
            </h2>
            <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                {[1,2,3,4,5].map(s => <Star key={s} fill="currentColor" size={24} />)}
            </div>
            <p className="text-center text-gray-500 mb-12">4.9/5 - 2.500+ avaliações</p>

            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                            <div>
                                <h4 className="font-bold text-gray-900">{t.name}</h4>
                                <p className="text-xs text-gray-500">{t.location}</p>
                            </div>
                        </div>
                        <div className="flex gap-1 text-yellow-400 mb-4">
                            {[...Array(t.rating)].map((_, idx) => (
                                <Star key={idx} fill="currentColor" size={16} />
                            ))}
                        </div>
                        <p className="text-gray-600 italic leading-relaxed">{t.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-4 text-gray-900">Perguntas Frequentes</h2>
        <p className="text-center text-gray-500 mb-10">Confira as respostas para as perguntas mais comuns.</p>

        <div className="space-y-4">
            {FAQS.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button 
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                    >
                        <span className="font-bold text-gray-800">{faq.question}</span>
                        {openFaqIndex === index ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </button>
                    {openFaqIndex === index && (
                        <div className="p-5 bg-gray-50 text-gray-600 border-t border-gray-100 text-sm leading-relaxed">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
      </section>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden z-40">
        <button 
            onClick={scrollToPricing}
            className="w-full bg-red-500 text-white font-bold py-3 rounded-lg shadow-lg flex items-center justify-center gap-2"
        >
            <Download size={20} /> Quero Minha Coleção Agora!
        </button>
      </div>

      {/* Final CTA Desktop */}
      <section className="py-16 text-center px-4 mb-20 md:mb-0">
         <button 
            onClick={scrollToPricing}
            className="bg-red-500 hover:bg-red-600 text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-full shadow-xl transform hover:-translate-y-1 transition-all"
        >
            Quero Minha Coleção Agora!
         </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 text-center text-gray-500 text-sm mb-20 md:mb-0">
        <p>&copy; 2025 Violin Sheet Music Collection. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;