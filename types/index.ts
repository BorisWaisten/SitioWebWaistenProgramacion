// Core types for the application
export interface Project {
  id: number;
  title: string;
  image: string;
  urlGithub: string;
  urlDemo: string;
  description?: string;
  technologies?: string[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export interface SocialNetwork {
  id: number;
  logo: React.ReactNode;
  src: string;
}

export interface NavItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  project: string;
  message: string;
}

export interface EmailService {
  sendEmail(data: ContactFormData): Promise<void>;
}

export interface ProjectRepository {
  getAllProjects(): Project[];
  getProjectById(id: number): Project | undefined;
}

export interface ServiceRepository {
  getAllServices(): Service[];
}

export interface AnimationConfig {
  initial: any;
  animate: any;
  transition: any;
  viewport?: any;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  gradients: {
    primary: string;
    secondary: string;
  };
}
