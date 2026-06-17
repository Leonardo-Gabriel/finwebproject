import { FiBarChart2, FiBriefcase, FiCheckCircle, FiCreditCard, FiPieChart, FiShield, FiTarget, FiTrendingUp } from 'react-icons/fi';

export const solutions = [
  {
    icon: FiCreditCard,
    title: 'Controle de gastos',
    text: 'Registre entradas e saídas de forma simples e acompanhe seu saldo em tempo real.',
  },
  {
    icon: FiTarget,
    title: 'Metas financeiras',
    text: 'Crie objetivos, acompanhe sua evolução e mantenha o foco no que realmente importa.',
  },
  {
    icon: FiPieChart,
    title: 'Relatórios inteligentes',
    text: 'Visualize gráficos e dados claros para entender melhor sua vida financeira.',
  },
];

export const valueCards = [
  {
    icon: FiBriefcase,
    title: 'Planejamento financeiro',
    text: 'Organize suas finanças com categorias, metas e alertas personalizados.',
  },
  {
    icon: FiTrendingUp,
    title: 'Análise de mercado',
    text: 'Acompanhe tendências e relatórios para tomar decisões mais inteligentes.',
  },
];

export const testimonials = [
  {
    name: 'Mariana Alves',
    role: 'Empreendedora',
    avatar: 'MA',
    text: 'A FinUp me ajudou a separar meus gastos pessoais dos gastos da empresa. Hoje consigo planejar melhor cada mês.',
  },
  {
    name: 'Rafael Costa',
    role: 'Analista financeiro',
    avatar: 'RC',
    text: 'Os relatórios são simples e objetivos. Consigo entender rapidamente onde estou gastando mais.',
  },
];

export const plans = [
  {
    name: 'Básico',
    price: 'Grátis',
    description: 'Ideal para quem quer começar a organizar suas finanças.',
    button: 'Baixar agora',
    featured: false,
    benefits: ['Controle de receitas e despesas', 'Até 3 metas financeiras', 'Relatório mensal simples'],
  },
  {
    name: 'Premium',
    price: 'R$ 19,90',
    period: '/mês',
    description: 'Para quem deseja uma experiência completa.',
    button: 'Experimente de graça',
    featured: true,
    benefits: ['Metas ilimitadas', 'Relatórios avançados', 'Alertas personalizados', 'Exportação de dados'],
  },
  {
    name: 'Empresarial',
    price: 'R$ 49,90',
    period: '/mês',
    description: 'Para pequenos negócios e equipes.',
    button: 'Baixar agora',
    featured: false,
    benefits: ['Múltiplos usuários', 'Controle por categorias', 'Relatórios empresariais', 'Suporte prioritário'],
  },
];

export const stats = [
  { icon: FiBarChart2, number: 'R$ 2,4M', label: 'organizados por mês' },
  { icon: FiShield, number: '98%', label: 'de segurança nos dados' },
  { icon: FiCheckCircle, number: '12k+', label: 'metas concluídas' },
];
