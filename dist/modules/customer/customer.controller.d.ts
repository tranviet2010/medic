import { CustomerService } from './customer.service';
import { Customer } from './schemas/customer.schema';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    findAll(query: string): Promise<any>;
    create(crud: Customer): Promise<void>;
    updateParam(id: string, updateCustomer: Customer): Promise<Customer>;
}
