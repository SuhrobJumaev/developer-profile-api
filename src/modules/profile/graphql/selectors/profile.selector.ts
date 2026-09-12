import { FieldsByTypeName, ResolveTree } from 'graphql-parse-resolve-info';

import { Prisma } from '@/database/generated/prisma/client';

export function buildProfileSelect(
  fields: Record<string, ResolveTree>,
): Prisma.ProfileSelect {
  const select: Prisma.ProfileSelect = {};

  if (fields.id) {
    select.id = true;
  }

  if (fields.firstName) {
    select.firstName = true;
  }

  if (fields.lastName) {
    select.lastName = true;
  }

  if (fields.headline) {
    select.headline = true;
  }

  if (fields.bio) {
    select.bio = true;
  }

  if (fields.location) {
    select.location = true;
  }

  if (fields.avatarUrl) {
    select.avatarUrl = true;
  }

  if (fields.skills) {
    select.skills = {
      select: buildSkillSelect(fields.skills),
      orderBy: {
        createdAt: 'asc',
      },
    };
  }

  if (fields.experiences) {
    select.experiences = {
      select: buildExperienceSelect(fields.experiences),
      orderBy: {
        startedAt: 'desc',
      },
    };
  }

  if (fields.projects) {
    select.projects = {
      select: buildProjectSelect(fields.projects),
      orderBy: {
        startedAt: 'desc',
      },
    };
  }

  if (fields.socialLinks) {
    select.socialLinks = {
      select: buildSocialLinksSelect(fields.socialLinks),
    };
  }

  return select;
}

function buildExperienceSelect(field: ResolveTree): Prisma.ExperienceSelect {
  const fields = field.fieldsByTypeName?.Experience ?? {};

  const select: Prisma.ExperienceSelect = {};

  if (fields.id) {
    select.id = true;
  }

  if (fields.company) {
    select.company = true;
  }

  if (fields.position) {
    select.position = true;
  }

  if (fields.description) {
    select.description = true;
  }

  if (fields.startedAt) {
    select.startedAt = true;
  }

  if (fields.endedAt) {
    select.endedAt = true;
  }

  return select;
}

function buildSkillSelect(field: ResolveTree): Prisma.SkillSelect {
  const fields = field.fieldsByTypeName?.Skill ?? {};

  const select: Prisma.SkillSelect = {};

  if (fields.name) {
    select.name = true;
  }

  if (fields.id) {
    select.id = true;
  }

  if (fields.level) {
    select.level = true;
  }

  if (fields.createdAt) {
    select.createdAt = true;
  }

  return select;
}

function buildProjectSelect(field: ResolveTree): Prisma.ProjectSelect {
  const fields = field.fieldsByTypeName?.Project ?? {};

  const select: Prisma.ProjectSelect = {};

  if (fields.id) {
    select.id = true;
  }

  if (fields.name) {
    select.name = true;
  }

  if (fields.description) {
    select.description = true;
  }

  if (fields.repositoryUrl) {
    select.repositoryUrl = true;
  }

  if (fields.liveUrl) {
    select.liveUrl = true;
  }

  if (fields.startedAt) {
    select.startedAt = true;
  }

  if (fields.endedAt) {
    select.endedAt = true;
  }

  return select;
}

function buildSocialLinksSelect(field: ResolveTree): Prisma.SocialLinkSelect {
  const fields = field.fieldsByTypeName?.SocialLink ?? {};
  const select: Prisma.SocialLinkSelect = {};

  if (fields.id) {
    select.id = true;
  }

  if (fields.type) {
    select.type = true;
  }

  if (fields.url) {
    select.url = true;
  }

  return select;
}
