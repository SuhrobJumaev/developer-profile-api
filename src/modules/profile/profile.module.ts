import { Module } from '@nestjs/common';

import { ProfileResolver } from './graphql/profile.resolver';
import { ProfileRepository } from './repositories/profile.repository';
import { ProfileService } from './services/profile.service';

@Module({
  providers: [ProfileResolver, ProfileService, ProfileRepository],
})
export class ProfileModule {}
