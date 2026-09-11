import { Experience } from '@app/database/generated/prisma/client';

import { ExperienceModel } from '../models/experience.model';

export class ExperienceMapper {
  static toGraphQL(experience: Experience): ExperienceModel {
    return {
      id: experience.id,
      company: experience.company,
      position: experience.position,
      description: experience.description,
      startedAt: experience.startedAt,
      endedAt: experience.endedAt,
    };
  }
}
