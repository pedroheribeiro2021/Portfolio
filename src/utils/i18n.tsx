import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export type Locale = "pt-BR" | "en" | "es";

const translations = {
  "pt-BR": {
    home: "Início", projects: "Projetos", contact: "Contato", social: "Redes sociais",
    greeting: "Olá, meu nome é Pedro :)", intro: "Software Engineer com foco em frontend e aplicações web full stack.",
    passion: "Eu", passionHighlight: "adoro", passionEnd: "criar e", develop: "desenvolver", projectsEnd: "projetos",
    discover: "React, TypeScript, Next.js e soluções web responsivas para produtos reais.",
    viewProjects: "Ver projetos", portfolioCode: "Código do portfólio", about: "Sobre mim",
    aboutText: "Sou um Desenvolvedor com foco em desenvolvimento full stack, apaixonado por transformar problemas reais em aplicações web claras, responsivas e funcionais. Trabalho principalmente com React, TypeScript, Next.js, Node.js, Python, Django, APIs REST e bancos de dados relacionais.",
    aboutText2: "Na prática, construo interfaces com componentes reutilizáveis, implemento layouts do Figma com atenção aos detalhes, integro serviços e participo da entrega de aplicações de ponta a ponta. Também tenho experiência com testes, Git, Docker e automação de CI/CD com GitHub Actions.",
    aboutText3: "Minha experiência inclui projetos profissionais como NexosGestão, AION Integra, Central IT e Conecta Campo, além da experiência como monitor na Kenzie Academy Brasil. Busco oportunidades remotas como profissional Junior avançado / Mid-level, em times nos quais eu possa contribuir tecnicamente, aprender continuamente e ajudar a transformar requisitos em produtos úteis.",
    myProjects: "Meus projetos", projectsDescription: "Projetos selecionados e experiências práticas.",
    primaryLanguage: "Linguagem principal:", languageUnknown: "Linguagem não identificada", githubCode: "Código no GitHub", demo: "Ver demonstração",
    letsTalk: "Vamos conversar e", buildSolutions: "desenvolver soluções para sua empresa", whatsapp: "Meu WhatsApp", availableChat: "Estou disponível para chat e ligação.", talk: "Vamos conversar",
    email: "Meu e-mail", emailDescription: "Envie uma mensagem para conversarmos sobre oportunidades.", sendEmail: "Enviar e-mail", linkedin: "Meu LinkedIn", linkedinDescription: "Vamos construir conexões profissionais.", goLinkedin: "Ir para o LinkedIn",
    thanks: "Muito obrigado!", follow: "Me siga nas minhas redes e vamos conversar", language: "Idioma", themeLight: "Ativar tema claro", themeDark: "Ativar tema escuro",
    loading: "Carregando projetos...", githubError: "Não foi possível carregar os projetos agora.",
  },
  en: {
    home: "Home", projects: "Projects", contact: "Contact", social: "Social media",
    greeting: "Hi, my name is Pedro :)", intro: "Software Engineer focused on frontend and full-stack web applications.",
    passion: "I", passionHighlight: "love", passionEnd: "to create and", develop: "build", projectsEnd: "projects",
    discover: "React, TypeScript, Next.js and responsive web solutions for real products.",
    viewProjects: "View projects", portfolioCode: "Portfolio source code", about: "About me",
    aboutText: "I am a Developer focused on full-stack development, passionate about turning real problems into clear, responsive and functional web applications. I mainly work with React, TypeScript, Next.js, Node.js, Python, Django, REST APIs and relational databases.",
    aboutText2: "In practice, I build reusable component-based interfaces, implement Figma designs with attention to detail, integrate services and contribute to end-to-end delivery. I also have experience with testing, Git, Docker and CI/CD automation with GitHub Actions.",
    aboutText3: "My experience includes professional projects such as NexosGestão, AION Integra, Central IT and Conecta Campo, as well as working as a mentor at Kenzie Academy Brasil. I am looking for remote Junior advanced / Mid-level opportunities where I can contribute technically, keep learning and help turn requirements into useful products.",
    myProjects: "My projects", projectsDescription: "Selected projects and practical experience.",
    primaryLanguage: "Primary language:", languageUnknown: "Language not identified", githubCode: "GitHub code", demo: "View demo",
    letsTalk: "Let's talk and", buildSolutions: "build solutions for your company", whatsapp: "My WhatsApp", availableChat: "I am available for chat and calls.", talk: "Let's talk",
    email: "My email", emailDescription: "Send a message to discuss opportunities.", sendEmail: "Send an email", linkedin: "My LinkedIn", linkedinDescription: "Let's build professional connections.", goLinkedin: "Go to LinkedIn",
    thanks: "Thank you!", follow: "Follow me on social media and let's talk", language: "Language", themeLight: "Enable light theme", themeDark: "Enable dark theme",
    loading: "Loading projects...", githubError: "Projects could not be loaded right now.",
  },
  es: {
    home: "Inicio", projects: "Proyectos", contact: "Contacto", social: "Redes sociales",
    greeting: "Hola, mi nombre es Pedro :)", intro: "Software Engineer enfocado en frontend y aplicaciones web full stack.",
    passion: "Me", passionHighlight: "encanta", passionEnd: "crear y", develop: "desarrollar", projectsEnd: "proyectos",
    discover: "React, TypeScript, Next.js y soluciones web responsivas para productos reales.",
    viewProjects: "Ver proyectos", portfolioCode: "Código del portafolio", about: "Sobre mí",
    aboutText: "Soy Desarrollador enfocado en el desarrollo full stack, apasionado por transformar problemas reales en aplicaciones web claras, responsivas y funcionales. Trabajo principalmente con React, TypeScript, Next.js, Node.js, Python, Django, APIs REST y bases de datos relacionales.",
    aboutText2: "En la práctica, construyo interfaces con componentes reutilizables, implemento diseños de Figma con atención al detalle, integro servicios y participo en entregas de punta a punta. También tengo experiencia con pruebas, Git, Docker y automatización de CI/CD con GitHub Actions.",
    aboutText3: "Mi experiencia incluye proyectos profesionales como NexosGestão, AION Integra, Central IT y Conecta Campo, además de mi experiencia como mentor en Kenzie Academy Brasil. Busco oportunidades remotas como profesional Junior avanzado / Mid-level, donde pueda contribuir técnicamente, seguir aprendiendo y ayudar a convertir requisitos en productos útiles.",
    myProjects: "Mis proyectos", projectsDescription: "Proyectos seleccionados y experiencia práctica.",
    primaryLanguage: "Lenguaje principal:", languageUnknown: "Lenguaje no identificado", githubCode: "Código en GitHub", demo: "Ver demo",
    letsTalk: "Hablemos para", buildSolutions: "desarrollar soluciones para tu empresa", whatsapp: "Mi WhatsApp", availableChat: "Estoy disponible para chat y llamadas.", talk: "Hablemos",
    email: "Mi correo", emailDescription: "Envíame un mensaje para hablar sobre oportunidades.", sendEmail: "Enviar correo", linkedin: "Mi LinkedIn", linkedinDescription: "Construyamos conexiones profesionales.", goLinkedin: "Ir a LinkedIn",
    thanks: "¡Muchas gracias!", follow: "Sígueme en mis redes y hablemos", language: "Idioma", themeLight: "Activar tema claro", themeDark: "Activar tema oscuro",
    loading: "Cargando proyectos...", githubError: "No fue posible cargar los proyectos ahora.",
  },
} as const;

type TranslationKey = keyof typeof translations["pt-BR"];
type I18nContextValue = { locale: Locale; setLocale: (locale: Locale) => void; t: (key: TranslationKey) => string };
const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = window.localStorage.getItem("portfolio-locale");
    return saved === "en" || saved === "es" || saved === "pt-BR" ? saved : "pt-BR";
  });
  const changeLocale = (next: Locale) => {
    setLocale(next);
    window.localStorage.setItem("portfolio-locale", next);
    document.documentElement.lang = next;
  };
  const value = useMemo(() => ({ locale, setLocale: changeLocale, t: (key: TranslationKey) => translations[locale][key] }), [locale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
};
