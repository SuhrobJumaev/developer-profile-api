import { ProjectModel } from '../models/project.model';
import { Project } from '@/database/generated/prisma/client';

export class ProjectMapper {
  static toGraphQL(project: Partial<Project>): Partial<ProjectModel> {
    return {
      id: project.id,
      name: project.name,
      description: project.description,
      repositoryUrl: project.repositoryUrl,
      liveUrl: project.liveUrl,
      startedAt: project.startedAt,
      endedAt: project.endedAt,
    };
  }
}
