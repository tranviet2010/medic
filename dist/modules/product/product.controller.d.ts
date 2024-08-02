import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
export declare class ProductController {
    private readonly ProductService;
    constructor(ProductService: ProductService);
    findAll(query: Product): Promise<any>;
    create(param: Product): Promise<{
        message: string;
        paramInput: import("./schemas/product.schema").ProductDocument;
    }>;
    updateParam(id: string, updateParam: Product): Promise<Product>;
}
