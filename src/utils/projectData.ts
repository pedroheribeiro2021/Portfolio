export interface ProjectData {
  id: string | number;
  name: string;
  language: string;
  description: string;
  html_url?: string;
  homepage?: string;
}

export const featuredProjects: ProjectData[] = [
  {
    id: "nexos-gestao",
    name: "NexosGestão",
    language: "React / Next.js",
    description: "Aplicação web profissional com interfaces responsivas, componentes reutilizáveis e integrações com APIs.",
  },
  {
    id: "aion-integra",
    name: "AION Integra",
    language: "Next.js / Node.js",
    description: "Integrações entre sistemas com foco em APIs, autenticação, contratos compartilhados e operação confiável.",
  },
  {
    id: "central-it",
    name: "Central IT",
    language: "React / TypeScript",
    description: "Interfaces responsivas implementadas a partir de layouts do Figma com atenção à fidelidade visual.",
  },
  {
    id: "conecta-campo",
    name: "Conecta Campo",
    language: "React / TypeScript",
    description: "Aplicação web com telas responsivas, componentes reutilizáveis e integração com serviços da aplicação.",
  },
];
