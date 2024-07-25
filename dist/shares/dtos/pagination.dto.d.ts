export declare class PaginationDto {
    sort?: -1 | 1;
    page?: number;
    limit?: number;
}
export declare class ResPagingDto<T> {
    result: T;
    total: number;
    lastPage: number;
}
