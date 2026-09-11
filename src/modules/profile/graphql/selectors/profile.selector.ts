import { Prisma } from '@app/database/generated/prisma/client';
import { ResolveTree } from 'graphql-parse-resolve-info';

export function buildProfileSelect(
  fields: Record<string, ResolveTree>,
): Prisma.ProfileSelect {
  const select: Prisma.ProfileSelect = {
    id: true,
    firstName: true,
    lastName: true,
    headline: true,
    bio: true,
    location: true,
    avatarUrl: true,
  };

  if (fields.skills !== undefined) {
    select.skills = true;
  }

  if (fields.experiences !== undefined) {
    select.experiences = {
      orderBy: {
        startedAt: 'desc',
      },
    };
  }

  if (fields.projects !== undefined) {
    select.projects = {
      orderBy: {
        startedAt: 'desc',
      },
    };
  }

  if (fields.socialLinks !== undefined) {
    select.socialLinks = true;
  }

  return select;
}
