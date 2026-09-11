import { Injectable } from '@nestjs/common';

import { PrismaService } from '@app/database/prisma-service';
import { Prisma } from '@app/database/generated/prisma/client';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  findFirst<S extends Prisma.ProfileSelect>(
    select: S,
  ): Promise<Prisma.ProfileGetPayload<{ select: S }> | null> {
    return this.prisma.profile.findFirst({ select });
  }
}
