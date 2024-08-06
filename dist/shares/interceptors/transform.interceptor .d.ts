import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface ResponseWrapper<T> {
    data: T;
}
export declare class TransformInterceptor<T> implements NestInterceptor<T, ResponseWrapper<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseWrapper<T>>;
}
