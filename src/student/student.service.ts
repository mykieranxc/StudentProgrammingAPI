import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import {InjectRepository} from "@nestjs/typeorm";
import {Student} from "./entities/student.entity";
import {Repository} from "typeorm";

@Injectable()
export class StudentService {
  constructor(
      @InjectRepository(Student)
      private readonly studentRepository: Repository<Student>
  ) {
  }

  async create(createStudentInput: CreateStudentInput) {
    const student = this.studentRepository.create();
    student.name = createStudentInput.name;
    student.age = createStudentInput.age;
    student.codeExperience = createStudentInput.codeExperience;
    student.codeLanguage = createStudentInput.codeLanguage;
    student.reason = createStudentInput.reason;

    await  this.studentRepository.save(student);

    return student;
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
