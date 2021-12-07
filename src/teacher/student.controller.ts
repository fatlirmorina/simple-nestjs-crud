import { Controller, Get, Put, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { FindStudentResponseDto, StudentResponseDto } from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents(@Param('teacherId', ParseUUIDPipe) teacherId: string): FindStudentResponseDto[] {
        return this.studentService.getStudentsByTeacherId(teacherId);
    }

    @Put('/:studentId')
    updateStudentTeacher(
            @Body() body, 
            @Param('teacherId', ParseUUIDPipe) teacherId: string,
            @Param('studentId', ParseUUIDPipe) studentId: string
        ): StudentResponseDto {
        return this.studentService.updateStudentTeacher(teacherId, studentId);
    }
}
