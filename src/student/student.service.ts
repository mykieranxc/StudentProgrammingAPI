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
    const students = this.studentRepository.find();
    return students;
  }

  findOne(id: number) {
    const student = this.studentRepository.findOne({
      where: {
        id: id
      }
    });
    return student;
  }

  async update(updateStudentInput: UpdateStudentInput) {
    const  student = await this.studentRepository.findOne({
      where: {
        id: updateStudentInput.id
      }
    });

    student.name = updateStudentInput.name;
    student.age = updateStudentInput.age;
    student.codeExperience = updateStudentInput.codeExperience;
    student.codeLanguage = updateStudentInput.codeLanguage;
    student.reason = updateStudentInput.reason;

    await  this.studentRepository.save(student);

    return student;
  }

  remove(id: number) {
    // @ts-ignore
    this.studentRepository.remove({id});
    return "Student has been deleted";
  }
}
