import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto, FindStudentResponseDto, StudentResponseDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
    
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getStudents() {
        return this.studentService.getStudents();
    }
    
    @Post()
    createStudent(@Body() body: CreateStudentDto): FindStudentResponseDto {
        return this.studentService.createStudent(body);
    }

    @Get('/:studentId')
    getStudentById(@Param('studentId', ParseUUIDPipe) studentId: string): FindStudentResponseDto[] {
        console.log(studentId);
        return this.studentService.getStudentById(studentId);
    }

    @Put('/:studentId')
    updateStudent(@Body() body: UpdateStudentDto, @Param('studentId', ParseUUIDPipe) studentId: string): StudentResponseDto {
        return this.studentService.updateStudent(body, studentId);
    }

}