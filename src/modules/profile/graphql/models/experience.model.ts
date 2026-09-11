import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Experience')
export class ExperienceModel {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  company!: string;

  @Field(() => String)
  position!: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => Date)
  startedAt!: Date;

  @Field(() => Date,{ nullable: true })
  endedAt?: Date | null;
}
