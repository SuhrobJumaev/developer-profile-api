import { Skill } from '@app/database/generated/prisma/client';

import { SkillModel } from '../models/skill.model';

export class SkillMapper {
  static toGraphQL(skill: Skill): SkillModel {
    return {
      id: skill.id,
      name: skill.name,
      level: skill.level,
      createdAt: skill.createdAt,
    };
  }
}
