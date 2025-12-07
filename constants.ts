import { Heart, MonitorOff, Puzzle, Users, FileText, School } from 'lucide-react';
import { Benefit, FAQItem, PricingTier, Testimonial } from './types';

export const BENEFITS: Benefit[] = [
  {
    icon: Heart,
    title: "Ensino Bíblico de Forma Divertida",
    description: "Transforme histórias da Bíblia em atividades práticas e criativas que ensinam valores cristãos enquanto as crianças brincam.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: MonitorOff,
    title: "Adeus às Telas Excessivas",
    description: "Substitua o celular e a TV por momentos reais de aprendizado, concentração e imaginação, longe do conteúdo vazio da internet.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Puzzle,
    title: "Brincadeiras com Propósito",
    description: "Cada brinquedo estimula a criatividade, coordenação motora e fé, tornando o aprendizado leve e prazeroso.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Users,
    title: "Momentos em Família com Deus",
    description: "Pais e filhos se unem em torno da Palavra, criando memórias de amor e espiritualidade em cada montagem.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: FileText,
    title: "Material 100% Pronto e Acessível",
    description: "Arquivos digitais organizados por temas e personagens — basta imprimir, recortar e brincar.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: School,
    title: "Apoio para Escolas e Ministérios",
    description: "Perfeito para professores e líderes que desejam aulas dinâmicas e cheias de significado, com pouco tempo de preparo.",
    color: "bg-yellow-100 text-yellow-600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Juliana S.",
    location: "São Paulo, SP",
    avatar: "https://picsum.photos/seed/juliana/100/100",
    rating: 5,
    text: "\"Comprei achando que meu filho nem ia ligar... agora ele pede pra montar um por dia 🙏\""
  },
  {
    name: "Laura P.",
    location: "Belo Horizonte, MG",
    avatar: "https://picsum.photos/seed/laura/100/100",
    rating: 5,
    text: "\"Uso nas aulas da catequese e as crianças amam! Aprendem as histórias brincando, sem nem perceber.\""
  },
  {
    name: "Ana P.",
    location: "Salvador, BA",
    avatar: "https://picsum.photos/seed/ana/100/100",
    rating: 5,
    text: "\"Achei que seria só papel, mas virou nosso momento preferido de domingo em família ❤️\""
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Por quanto tempo vou poder acessar?",
    answer: "O acesso é vitalício! Depois de receber, o material é seu pra sempre. Você pode baixar e salvar no seu computador."
  },
  {
    question: "É seguro comprar por aqui?",
    answer: "Sim! Utilizamos uma plataforma de pagamentos criptografada e 100% segura. Seus dados estão protegidos."
  },
  {
    question: "Por onde recebo o material?",
    answer: "Logo após a confirmação do pagamento, você receberá um e-mail com o link para baixar todos os arquivos em PDF."
  },
  {
    question: "Posso usar em sala de aula?",
    answer: "Com certeza! O material foi pensado tanto para famílias quanto para o ministério infantil e escolas bíblicas."
  }
];

export const PRICING: PricingTier[] = [
  {
    name: "Pacote Básico",
    originalPrice: 97,
    price: 10,
    savings: 87,
    features: [
      "100 Brinquedos Bíblicos de Papel",
      "Garantia de 7 dias",
      "Acesso vitalício"
    ],
    isPremium: false,
    ctaText: "Quero o Plano Básico"
  },
  {
    name: "Pacote Premium",
    originalPrice: 297,
    price: 27,
    savings: 270,
    features: [
      "TUDO DO PACOTE BÁSICO"
    ],
    bonusFeatures: [
      "50 Quebra-Cabeças Bíblicos",
      "50 Atividades Bíblicas",
      "50 Desenhos Bíblicos para colorir",
      "50 Histórias Bíblicas Ilustradas"
    ],
    isPremium: true,
    ctaText: "Acesso Premium Imediato"
  }
];