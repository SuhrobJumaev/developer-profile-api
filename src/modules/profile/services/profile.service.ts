import { HttpStatus, Injectable } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql/type';
import { parseResolveInfo, ResolveTree } from 'graphql-parse-resolve-info';

import { ExceptionLocalCode } from '../../../enums/exception-local-code';
import { ExceptionMessage } from '../../../enums/exception-message';
import { AppHttpException } from '../../../filters/app-http.exception';
import { ProfileMapper } from '../graphql/mappers/profile.mapper';
import { ProfileModel } from '../graphql/models/profile.model';
import { buildProfileSelect } from '../graphql/selectors/profile.selector';
import { ProfileRepository } from '../repositories/profile.repository';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async getProfile(info: GraphQLResolveInfo): Promise<ProfileModel> {
    const parsed = parseResolveInfo(info) as ResolveTree;
    const requested = parsed.fieldsByTypeName['Profile'];

    console.log('requested', requested);

    const select = buildProfileSelect(requested);

    console.log('select', select);
    const profile = await this.profileRepository.findFirst(select);

    console.log('profile', profile);

    if (!profile) {
      throw new AppHttpException(
        ExceptionMessage.PROFILE_NOT_FOUND,
        HttpStatus.NOT_FOUND,
        ExceptionLocalCode.PROFILE_NOT_FOUND,
      );
    }

    return ProfileMapper.toGraphQL(profile);
  }
}
