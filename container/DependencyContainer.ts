import { EmailService, ProjectRepository, ServiceRepository } from '@/types';
import { NodemailerEmailService } from '@/services/EmailService';
import { InMemoryProjectRepository } from '@/repositories/ProjectRepository';
import { InMemoryServiceRepository } from '@/repositories/ServiceRepository';
import { ContactService } from '@/services/ContactService';

class DependencyContainer {
  private static instance: DependencyContainer;
  private services: Map<string, any> = new Map();

  private constructor() {
    this.initializeServices();
  }

  public static getInstance(): DependencyContainer {
    if (!DependencyContainer.instance) {
      DependencyContainer.instance = new DependencyContainer();
    }
    return DependencyContainer.instance;
  }

  private initializeServices(): void {
    // Register repositories
    this.services.set('ProjectRepository', new InMemoryProjectRepository());
    this.services.set('ServiceRepository', new InMemoryServiceRepository());
    
    // Only initialize server-side services when needed
    if (typeof window === 'undefined') {
      // Register email service (server-side only)
      this.services.set('EmailService', new NodemailerEmailService());
      
      // Register business services
      this.services.set('ContactService', new ContactService(
        this.services.get('EmailService')
      ));
    }
  }

  public get<T>(serviceName: string): T {
    const service = this.services.get(serviceName);
    if (!service) {
      throw new Error(`Service ${serviceName} not found`);
    }
    return service as T;
  }

  public getProjectRepository(): ProjectRepository {
    return this.get<ProjectRepository>('ProjectRepository');
  }

  public getServiceRepository(): ServiceRepository {
    return this.get<ServiceRepository>('ServiceRepository');
  }

  public getEmailService(): EmailService {
    return this.get<EmailService>('EmailService');
  }

  public getContactService(): ContactService {
    return this.get<ContactService>('ContactService');
  }
}

export default DependencyContainer;

