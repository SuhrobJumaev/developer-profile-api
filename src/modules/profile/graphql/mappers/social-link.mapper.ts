import { SocialLink } from '@app/database/generated/prisma/client';

import { SocialLinkModel } from '../models/social-link.model';

export class SocialLinkMapper {
  static toGraphQL(socialLink: SocialLink): SocialLinkModel {
    return {
      id: socialLink.id,
      type: socialLink.type,
      url: socialLink.url,
    };
  }
}
