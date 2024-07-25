import { PaginationDto } from 'src/shares/dtos/pagination.dto';
export declare class GetClientsDto extends PaginationDto {
    readonly id?: string;
    readonly name?: string;
    readonly phone?: string;
    readonly code?: string;
    readonly pancake?: string;
    readonly email?: string;
}
export declare class GetClientByPhoneOrderDto extends PaginationDto {
    phone: string;
}
