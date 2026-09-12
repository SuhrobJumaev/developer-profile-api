import { HttpStatus, Injectable } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql/type';
import { parseResolveInfo, ResolveTree } from 'graphql-parse-resolve-info';

import { ProfileMapper } from '../graphql/mappers/profile.mapper';
import { ProfileModel } from '../graphql/models/profile.model';
import { buildProfileSelect } from '../graphql/selectors/profile.selector';
import { ProfileRepository } from '../repositories/profile.repository';
import { ExceptionLocalCode } from '@/enums/exception-local-code';
import { AppHttpException } from '@/filters/app-http.exception';
import { ExceptionMessage } from '@/enums/exception-message';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async getProfile(info: GraphQLResolveInfo): Promise<ProfileModel> {
    const parsed = parseResolveInfo(info) as ResolveTree;
    const requested = parsed.fieldsByTypeName['Profile'];

    const select = buildProfileSelect(requested);

    const profile = await this.profileRepository.findFirst(select);

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
