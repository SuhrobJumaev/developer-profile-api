import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Skill')
export class SkillModel {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => Int, { nullable: true })
  level?: number | null;

  @Field(() => Date)
  createdAt!: Date;
}
