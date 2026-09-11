import { SkillModel } from '../models/skill.model';
import { Skill } from '../../../../database/generated/prisma/client';


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
