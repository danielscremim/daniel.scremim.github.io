import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Daniel",
  lastName: "Scremim",
  name: `Daniel Scremim`,
  role: "Desenvolvedor Full Stack",
  avatar: "/images/avatar.jpg",
  email: "danielsouzascremim@hotmail.com",
  location: "America/Sao_Paulo", 
  languages: ["Português", "Inglês"], 
};

const newsletter: Newsletter = {
  display: false,
  title: <>Assine a Newsletter de {person.firstName}</>,
  description: <>Conteúdos semanais sobre desenvolvimento, tecnologia e carreira.</>,
};

const social: Social = [

  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/danielscremim",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/danielscremim/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/danielscremim/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@danielscremim",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transformando ideias em código</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Projetos</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Trabalhos em destaque
        </Text>
      </Row>
    ),
    href: "/work/ecommerce-dashboard-react",
  },
  subline: (
    <>
    Sou Daniel, desenvolvedor full stack especializado em <Text as="span" size="xl" weight="strong">React, Next.js e Node.js</Text>. <br /> Apaixonado por criar soluções digitais inovadoras e eficientes.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Daniel é um desenvolvedor full stack brasileiro com sólida experiência em React, Next.js,
        Node.js e NestJS. Apaixonado por arquitetura de software e boas práticas de engenharia,
        transforma requisitos complexos em soluções escaláveis, performáticas e bem documentadas.
        Já atuou em projetos de e-commerce, sistemas SaaS, APIs de alta disponibilidade e integrações
        com serviços de terceiros, sempre priorizando qualidade de código e experiência do usuário.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiência Profissional",
    experiences: [
      {
        company: "Freelancer & Projetos Próprios",
        timeframe: "2022 - Presente",
        role: "Desenvolvedor Full Stack",
        achievements: [
          <>
            Desenvolvimento e entrega de aplicações web completas — desde o design de banco de dados
            até interfaces responsivas — utilizando React, Next.js, TypeScript e TailwindCSS.
          </>,
          <>
            Construção de APIs RESTful e GraphQL com Node.js, NestJS e Prisma,
            integrando autenticação JWT, Redis para cache e deploy em ambientes Docker.
          </>,
          <>
            Implantação de pipelines CI/CD com GitHub Actions e hospedagem em Vercel, Railway e VPS,
            garantindo entregas contínuas com zero downtime.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Dashboard de E-commerce",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Desenvolvimento Open Source",
        timeframe: "2021 - Presente",
        role: "Contribuidor & Mantenedor",
        achievements: [
          <>
            Contribuições em projetos open source relacionados a ferramentas de produtividade,
            bibliotecas de componentes e utilidades para desenvolvedores Node.js.
          </>,
          <>
            Publicação de pacotes NPM reutilizáveis e templates de projetos usados por
            outros desenvolvedores da comunidade.
          </>,
        ],
        images: [],
      },
      {
        company: "Estágio em Desenvolvimento Web",
        timeframe: "2020 - 2022",
        role: "Desenvolvedor Junior",
        achievements: [
          <>
            Participação no desenvolvimento de sistemas internos em React e Node.js,
            colaborando com equipes ágeis utilizando Scrum e Jira.
          </>,
          <>
            Criação e manutenção de componentes reutilizáveis, aumentando em 40% a velocidade
            de entrega de novas funcionalidades no time.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formação",
    institutions: [
      {
        name: "Análise e Desenvolvimento de Sistemas",
        description: <>Graduação com foco em engenharia de software, estruturas de dados, banco de dados relacionais e desenvolvimento web. Trabalho de conclusão sobre arquitetura de microsserviços com Node.js.</>,
      },
      {
        name: "Rocketseat — Ignite Full Stack",
        description: <>Trilha avançada de desenvolvimento cobrindo React, Next.js, Node.js, NestJS, Prisma, Docker e boas práticas de clean code e SOLID.</>,
      },
      {
        name: "Alura — Formação TypeScript",
        description: <>Certificação em TypeScript avançado, cobrindo generics, decorators, utility types e integração com frameworks modernos.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Frontend — React, Next.js & TypeScript",
        description: (
          <>Construção de interfaces modernas, responsivas e acessíveis com React 18, Next.js 14 (App Router),
          TypeScript, TailwindCSS e bibliotecas de componentes como Shadcn/UI e Radix UI.
          Experiência com gerenciamento de estado (Zustand, React Query) e testes com Vitest e Testing Library.</>
        ),
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Next.js", icon: "nextjs" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Interface do Dashboard",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Componentes UI",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend — Node.js, NestJS & APIs",
        description: (
          <>Design e implementação de APIs RESTful e GraphQL com Node.js, Express e NestJS.
          Bancos de dados relacionais (PostgreSQL, MySQL) e NoSQL (MongoDB, Redis) com Prisma ORM.
          Autenticação com JWT/OAuth2, filas com BullMQ, containers com Docker e orquestração com Docker Compose.</>
        ),
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "Supabase", icon: "supabase" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Arquitetura de API",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "DevOps & Infraestrutura",
        description: (
          <>Configuração de pipelines CI/CD com GitHub Actions, deploy em Vercel, Railway e VPS (DigitalOcean/Hetzner).
          Containerização com Docker, monitoramento com Grafana/Prometheus e gestão de variáveis de ambiente seguras.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escrevendo sobre desenvolvimento e tecnologia...",
  description: `Acompanhe as novidades de ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projetos",
  title: `Projetos – ${person.name}`,
  description: `Projetos de desenvolvimento full stack por ${person.name} — frontend, backend e arquitetura de sistemas.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Galeria – ${person.name}`,
  description: `Coleção de fotos por ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
