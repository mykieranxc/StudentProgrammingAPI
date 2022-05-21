import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@ObjectType()
@Entity({name: "student"})
export class Student {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => Int)
  age: number;

  @Column()
  @Field()
  codeExperience: string;

  @Column()
  @Field()
  codeLanguage: string;

  @Column()
  @Field()
  reason: string; //reason you want to become a proffessional developer

  @CreateDateColumn()
  @Field()
  created_at: Date;

  @UpdateDateColumn()
  @Field()
  updated_at: Date;
}
