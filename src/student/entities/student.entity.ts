import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity({name: "student"})
export class Student {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  fname: string;

  @Column()
  @Field()
  lname: string;

  @Column()
  @Field(() => Int)
  age: number;

  @Column()
  @Field()
  CodingExperience: string;

  @Column()
  @Field()
  codeLanguage: string;

  @Column()
  @Field()
  Reason: string; //reason you want to become a proffessional developer

  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
