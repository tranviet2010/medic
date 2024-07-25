import { CourseService } from './course.service';
import { Course } from './schemas/course.schema';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    findAll(query: string): Promise<any>;
    create(crud: Course): Promise<void>;
    updateParam(id: string, updateNation: Course): Promise<Course>;
}
