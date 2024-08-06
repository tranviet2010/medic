import { MongooseModuleOptions, SchemaOptions } from '@nestjs/mongoose';
export interface DatabaseConfig {
    uri: string;
    options: MongooseModuleOptions;
}
export declare const mongodb: {
    uri: string;
    options: {
        directConnection: boolean;
        connectionFactory: (connection: any) => any;
    };
};
export declare const Options: SchemaOptions;
export declare const formatDecimal: (ret: any) => any;
