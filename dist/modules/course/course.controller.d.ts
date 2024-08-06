import { CourseService } from './course.service';
import { Course } from './schemas/course.schema';
export declare class CourseController {
    private readonly CourseService;
    constructor(CourseService: CourseService);
    findAll(query: Course): Promise<any>;
    create(param: Course): Promise<{
        message: string;
        paramInput: import("./schemas/course.schema").CourseDocument;
    }>;
    updateParam(id: string, updateParam: Course): Promise<Course>;
}
