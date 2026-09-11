import { Project } from '@app/database/generated/prisma/client';

import { ProjectModel } from '../models/project.model';

export class ProjectMapper {
  static toGraphQL(project: Project): ProjectModel {
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
