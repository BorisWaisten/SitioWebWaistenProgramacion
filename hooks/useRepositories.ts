import { useMemo } from 'react';
import { InMemoryProjectRepository } from '@/repositories/ProjectRepository';
import { InMemoryServiceRepository } from '@/repositories/ServiceRepository';

export function useRepositories() {
  const projectRepository = useMemo(() => new InMemoryProjectRepository(), []);
  const serviceRepository = useMemo(() => new InMemoryServiceRepository(), []);

  return {
    projectRepository,
    serviceRepository,
  };
}

