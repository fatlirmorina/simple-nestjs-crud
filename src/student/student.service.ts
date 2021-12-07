import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { v4 as uuid } from 'uuid'; 
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { FindTeacherResponseDto } from 'src/teacher/dto/teacher.dto';

@Injectable()
export class StudentService {
    private students = students;
    getStudents() {
        return this.students;
    }

    getStudentById(studentId: string): FindTeacherResponseDto[] {
        return this.students.filter(student => {
            return student.id === studentId;
        });
    }

    createStudent(payload: CreateStudentDto): StudentResponseDto {
        let newstudent = {
            id: uuid(),
            ...payload
        }

        this.students.push(newstudent);

        return newstudent;
    }

    updateStudent(payload: UpdateStudentDto, studentId: string) {
        let updatedStudent: StudentResponseDto;

        const updatedStudentList = this.students.map(student => {
            if(student.id === studentId) {
                updatedStudent = {
                    id: studentId,
                    ...payload
                }
                return updatedStudent;
            } else return student
        });

        this.students = updatedStudentList;

        return updatedStudent;
    }

    getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[] {
        return this.students.filter(student => {
            return student.teacher === teacherId
        });
    }

    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto {
        let updatedStudent: StudentResponseDto;

        const updatedStudentList = this.students.map(student => {
            if(student.id === studentId) {
                updatedStudent = {
                    ...student,
                    teacher: teacherId
                }
                return updatedStudent;
            } else return student;
        });

        this.students = updatedStudentList;

        return updatedStudent;
    }
}
