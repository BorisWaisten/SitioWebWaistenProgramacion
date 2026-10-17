import { ProjectRepository, Project } from '@/types';
import { dataPortfolio } from '@/data';

export class InMemoryProjectRepository implements ProjectRepository {
  private projects: Project[];

  constructor() {
    this.projects = dataPortfolio.map(project => ({
      id: project.id,
      title: project.title,
      image: project.image,
      urlGithub: project.urlGithub,
      urlDemo: project.urlDemo,
      category: project.category,
      featured: project.featured,
      description: project.description,
      device: project.device === 'mobile' ? 'mobile' : 'desktop',
    }));
  }

  getAllProjects(): Project[] {
    return [...this.projects];
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  getCategories(): string[] {
    return Array.from(new Set(this.projects.map(project => project.category).filter(Boolean))) as string[];
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  addProject(project: Project): void {
    this.projects.push(project);
  }

  updateProject(id: number, updatedProject: Partial<Project>): boolean {
    const index = this.projects.findIndex(project => project.id === id);
    if (index !== -1) {
      this.projects[index] = { ...this.projects[index], ...updatedProject };
      return true;
    }
    return false;
  }

  deleteProject(id: number): boolean {
    const index = this.projects.findIndex(project => project.id === id);
    if (index !== -1) {
      this.projects.splice(index, 1);
      return true;
    }
    return false;
  }
}

