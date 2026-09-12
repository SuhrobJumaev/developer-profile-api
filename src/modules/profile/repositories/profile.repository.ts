import { Injectable } from '@nestjs/common';

import { Prisma } from '@/database/generated/prisma/client';
import { PrismaService } from '@/database/prisma-service';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  findFirst<S extends Prisma.ProfileSelect>(
    select: S,
  ): Promise<Prisma.ProfileGetPayload<{ select: S }> | null> {
    return this.prisma.profile.findFirst({ select });
  }
}
