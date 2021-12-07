import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {

    constructor(private readonly teacherService: TeacherService) {}

    @Get()
    getTeachers(): FindTeacherResponseDto[] {
        return this.teacherService.getTeachers();
    }

    @Post()
    createTeacher(@Body() body) {
        return 'Create a teacher';
    }

    @Get('/:teacherId')
    getTeacherById(@Param('teacherId') teacherId: string): FindTeacherResponseDto {
        return this.teacherService.getTeacherById(teacherId);
    }
}
