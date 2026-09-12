import { SocialLinkModel } from '../models/social-link.model';
import { SocialLink } from '@/database/generated/prisma/client';

export class SocialLinkMapper {
  static toGraphQL(socialLink: Partial<SocialLink>): Partial<SocialLinkModel> {
    return {
      id: socialLink.id,
      type: socialLink.type,
      url: socialLink.url,
    };
  }
}
