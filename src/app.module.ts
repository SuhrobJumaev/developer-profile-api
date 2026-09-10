import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { DatabaseModule } from '@app/database/database.module';
import { LoggerModule } from '@app/logger/logger.module';

import { rateLimitOptions } from './constants/rate-limit';

@Module({
  imports: [
    /** Logger module */
    LoggerModule,

    /** Database module */
    DatabaseModule,


    /** Throttler module (Rate limit module) */
    ThrottlerModule.forRoot([rateLimitOptions]),

  ],
})
export class AppModule {}
