import { ServiceRepository, Service } from '@/types';
import { serviceData } from '@/data';

export class InMemoryServiceRepository implements ServiceRepository {
  private services: Service[];

  constructor() {
    this.services = serviceData.map(service => ({
      icon: service.icon,
      title: service.title,
      description: service.description,
      image: service.image,
    }));
  }

  getAllServices(): Service[] {
    return [...this.services];
  }

  getServiceByTitle(title: string): Service | undefined {
    return this.services.find(service => service.title === title);
  }

  addService(service: Service): void {
    this.services.push(service);
  }

  updateService(title: string, updatedService: Partial<Service>): boolean {
    const index = this.services.findIndex(service => service.title === title);
    if (index !== -1) {
      this.services[index] = { ...this.services[index], ...updatedService };
      return true;
    }
    return false;
  }

  deleteService(title: string): boolean {
    const index = this.services.findIndex(service => service.title === title);
    if (index !== -1) {
      this.services.splice(index, 1);
      return true;
    }
    return false;
  }
}

