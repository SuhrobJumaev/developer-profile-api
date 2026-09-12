import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Project')
export class ProjectModel {
  @Field(() => ID)
  id?: string;

  @Field(() => String)
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => String, { nullable: true })
  repositoryUrl?: string | null;

  @Field(() => String, { nullable: true })
  liveUrl?: string | null;

  @Field(() => Date, { nullable: true })
  startedAt?: Date | null;

  @Field(() => Date, { nullable: true })
  endedAt?: Date | null;
}
