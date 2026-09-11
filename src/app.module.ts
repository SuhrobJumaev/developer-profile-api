import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { DatabaseModule } from './database/database.module';
import { LoggerModule } from './logger/logger.module';

import { rateLimitOptions } from './constants/rate-limit';
import { GraphqlModule } from './graphql/graphql.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [
    /** Logger module */
    LoggerModule,

    /** Database module */
    DatabaseModule,

    /**Graphql module */
    GraphqlModule,

    /** */
    ProfileModule,
    /** Throttler module (Rate limit module) */
    ThrottlerModule.forRoot([rateLimitOptions]),
  ],
})
export class AppModule {}
