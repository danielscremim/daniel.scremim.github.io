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
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
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
    href: "/work/building-once-ui-a-customizable-design-system",
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
        Daniel é um desenvolvedor full stack brasileiro com paixão por transformar desafios complexos
        em soluções elegantes e funcionais. Seu trabalho abrange desenvolvimento web, aplicações mobile,
        e a criação de experiências digitais que fazem a diferença.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência Profissional",
    experiences: [
      {
        company: "Freelancer",
        timeframe: "2022 - Presente",
        role: "Desenvolvedor Full Stack",
        achievements: [
          <>
            Desenvolvimento de aplicações web modernas usando React, Next.js e TypeScript,
            entregando soluções de alta qualidade para clientes diversos.
          </>,
          <>
            Implementação de APIs RESTful e integração com serviços de terceiros,
            melhorando a eficiência e escalabilidade dos projetos.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Projeto",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Projetos Pessoais",
        timeframe: "2020 - Presente",
        role: "Desenvolvedor",
        achievements: [
          <>
            Criação de portfólios, landing pages e aplicações web completas,
            utilizando as melhores práticas de desenvolvimento.
          </>,
          <>
            Exploração de novas tecnologias e frameworks para manter-se atualizado
            com as tendências do mercado.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formação",
    institutions: [
      {
        name: "Formação em Desenvolvimento Web",
        description: <>Estudos focados em desenvolvimento full stack, incluindo React, Node.js e bancos de dados.</>,
      },
      {
        name: "Cursos e Certificações",
        description: <>Aprendizado contínuo através de plataformas online e certificações em tecnologias modernas.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "React & Next.js",
        description: (
          <>Desenvolvimento de aplicações web modernas e performáticas usando React e Next.js.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Node.js & APIs",
        description: (
          <>Criação de APIs RESTful robustas e integração com diversos serviços e bancos de dados.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
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
  description: `Projetos de desenvolvimento por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
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
