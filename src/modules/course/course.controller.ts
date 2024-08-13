/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClientAuth, UserAuth } from 'src/shares/decorators/http.decorators';
import { UserRole } from 'src/shares/enums/user.enum';
import { CourseService } from './course.service';
import { Course } from './schemas/course.schema';

@ApiTags('Course')
@Controller('course')
export class CourseController {
    constructor(private readonly CourseService: CourseService) { }

    @Get()
    async findAll(@Query() query: Course): Promise<any> {
        return this.CourseService.findAll(query)
    }

    @Post()
    async create(@Body() param: Course) {
        const paramInput = await this.CourseService.createParam(param)
        return { message: 'Params created successfully', paramInput }
    }
    @Put(':id')
    async updateParam(@Param('id') id: string, @Body() updateParam: Course) {
        return this.CourseService.updateParam(id, updateParam)
    }

    @Delete('/:id')
    // @ApiBearerAuth()
    // @UserAuth([UserRole.admin])
    @ApiOperation({ summary: '[ ADMIN ] delete param' })
    async deleteParam(@Param() id: string): Promise<void> {
        await this.CourseService.deleteCourse(id)
    }

}
