
import { ProfileModel } from '../models/profile.model';
import { ExperienceMapper } from './experience.mapper';
import { ProjectMapper } from './project.mapper';
import { SkillMapper } from './skill.mapper';
import { SocialLinkMapper } from './social-link.mapper';
import {
  Experience,
  Profile,
  Project,
  Skill,
  SocialLink,
} from '../../../../database/generated/prisma/client';

type ProfileWithRelations = Profile & {
  skills?: Skill[];
  experiences?: Experience[];
  projects?: Project[];
  socialLinks?: SocialLink[];
};

export class ProfileMapper {
  static toGraphQL(profile: ProfileWithRelations): ProfileModel {
    const result: ProfileModel = {
      id: profile.id,
      firstName: profile.firstName,
      lastName: profile.lastName,
      headline: profile.headline,
      bio: profile.bio,
      location: profile.location,
      avatarUrl: profile.avatarUrl,
    };

    if (profile.skills) {
      result.skills = profile.skills.map(SkillMapper.toGraphQL);
    }

    if (profile.experiences) {
      result.experiences = profile.experiences.map(ExperienceMapper.toGraphQL);
    }

    if (profile.projects) {
      result.projects = profile.projects.map(ProjectMapper.toGraphQL);
    }

    if (profile.socialLinks) {
      result.socialLinks = profile.socialLinks.map(SocialLinkMapper.toGraphQL);
    }

    return result;
  }
}
