import type * as React from 'react';

// Aricle
type Article = {
  title: string;
  thumbnail: string;
  link: string;
  publishedAt: Date;
  description: string;
  categories: string[];
};

// Github
type GithubProject = {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: string;
  forks_count: string;
  language: string;
};

// Profile
type Profile = {
  avatar: string;
  name: string;
  bio?: string;
  location?: string;
  company?: string;
};

type AvatarCardProps = {
  profile: Profile | null;
  loading: boolean;
  avatarRing: boolean;
  resumeFileUrl?: string;
};

// Config
type SanitizedGithub = {
  username: string;
};

type SanitizedGitHubProjects = {
  display: boolean;
  header: string;
  mode: string;
  automatic: {
    sortBy: string;
    limit: number;
    exclude: {
      forks: boolean;
      projects: string[];
    };
  };
  manual: {
    projects: string[];
  };
};

type SanitizedExternalProject = {
  title: string;
  description?: string;
  imageUrl?: string;
  link: string;
};

type SanitizedExternalProjects = {
  header: string;
  projects: SanitizedExternalProject[];
};

type SanitizedProjects = {
  github: SanitizedGitHubProjects;
  external: SanitizedExternalProjects;
};

type SanitizedSEO = {
  title?: string;
  description?: string;
  imageURL?: string;
};

type SanitizedSocial = {
  linkedin?: string;
  x?: string;
  mastodon?: string;
  researchGate?: string;
  facebook?: string;
  instagram?: string;
  reddit?: string;
  threads?: string;
  youtube?: string;
  udemy?: string;
  dribbble?: string;
  behance?: string;
  medium?: string;
  dev?: string;
  stackoverflow?: string;
  website?: string;
  skype?: string;
  telegram?: string;
  phone?: string;
  email?: string;
};

type SanitizedResume = {
  fileUrl?: string;
};

type SanitizedExperience = {
  company?: string;
  position?: string;
  from: string;
  to: string;
  companyLink?: string;
};

type SanitizedCertification = {
  body?: string;
  name?: string;
  year?: string;
  link?: string;
};

type SanitizedEducation = {
  institution?: string;
  degree?: string;
  from: string;
  to: string;
};

type SanitizedPublication = {
  title: string;
  conferenceName?: string;
  journalName?: string;
  authors?: string;
  link?: string;
  description?: string;
};

type SanitizedGoogleAnalytics = {
  id?: string;
};

type SanitizedHotjar = {
  id?: string;
  snippetVersion: number;
};

type SanitizedBlog = {
  display: boolean;
  source: string;
  username: string;
  limit: number;
};

type SanitizedCustomTheme = {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  'base-100': string;
  '--rounded-box': string;
  '--rounded-btn': string;
};

type SanitizedThemeConfig = {
  defaultTheme: string;
  disableSwitch: boolean;
  respectPrefersColorScheme: boolean;
  displayAvatarRing: boolean;
  themes: string[];
  customTheme: SanitizedCustomTheme;
};

type SanitizedConfig = {
  github: SanitizedGithub;
  projects: SanitizedProjects;
  seo: SanitizedSEO;
  social: SanitizedSocial;
  resume: SanitizedResume;
  skills: string[];
  experiences: SanitizedExperience[];
  educations: SanitizedEducation[];
  certifications: SanitizedCertification[];
  publications: SanitizedPublication[];
  googleAnalytics: SanitizedGoogleAnalytics;
  hotjar: SanitizedHotjar;
  blog: SanitizedBlog;
  themeConfig: SanitizedThemeConfig;
  footer?: string;
  enablePWA: boolean;
};

type CustomError = {
  status: number;
  title: string;
  subTitle: React.ReactNode;
};

type EventParams = {
  [key: string]: string;
};

type Colors = {
  [key: string]: { color: string | null; url: string };
};

export type {
  Article,
  GithubProject,
  Profile,
  SanitizedGithub,
  SanitizedGitHubProjects,
  SanitizedExternalProject,
  SanitizedExternalProjects,
  SanitizedProjects,
  SanitizedSEO,
  SanitizedSocial,
  SanitizedResume,
  SanitizedExperience,
  SanitizedCertification,
  SanitizedEducation,
  SanitizedPublication,
  SanitizedGoogleAnalytics,
  SanitizedHotjar,
  SanitizedBlog,
  SanitizedCustomTheme,
  SanitizedThemeConfig,
  SanitizedConfig,
  CustomError,
  AvatarCardProps,
  EventParams,
  Colors,
};
