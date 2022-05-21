import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field()
  name: string;
  @Field()
  age: number;
  @Field()
  codeExperience: string;
  @Field()
  codeLanguage: string;
  @Field()
  reason: string;


}
