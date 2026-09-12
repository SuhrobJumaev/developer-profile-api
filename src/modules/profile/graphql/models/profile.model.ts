import { Field, ID, ObjectType } from '@nestjs/graphql';

import { ExperienceModel } from './experience.model';
import { ProjectModel } from './project.model';
import { SkillModel } from './skill.model';
import { SocialLinkModel } from './social-link.model';

@ObjectType('Profile')
export class ProfileModel {
  @Field(() => ID)
  id?: string;

  @Field(() => String)
  firstName?: string;

  @Field(() => String,{ nullable: true })
  lastName?: string | null;

  @Field(() => String,{ nullable: true })
  headline?: string | null;

  @Field(() => String,{ nullable: true })
  bio?: string | null;

  @Field(() => String,{ nullable: true })
  location?: string | null;

  @Field(() => String,{ nullable: true })
  avatarUrl?: string | null;

  @Field(() => [SkillModel])
  skills?: Partial<SkillModel>[];

  @Field(() => [ExperienceModel])
  experiences?: Partial<ExperienceModel>[];

  @Field(() => [ProjectModel])
  projects?: Partial<ProjectModel>[];

  @Field(() => [SocialLinkModel])
  socialLinks?: Partial<SocialLinkModel>[];
}
