import { Info, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql/type';

import { ProfileService } from '../services/profile.service';
import { ProfileModel } from './models/profile.model';

@Resolver(() => ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileModel, {
    name: 'profile',
  })
  getProfile(@Info() info: GraphQLResolveInfo): Promise<ProfileModel> {
    return this.profileService.getProfile(info);
  }
}
