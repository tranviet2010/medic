/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
/// <reference types="multer" />
import ShortUniqueId from 'short-unique-id';
export declare const sleep: (time: number) => Promise<void>;
export declare const uid: ShortUniqueId;
export declare const getTimeStampSecond: (time: number) => number;
export declare const randomCodeNumber: (number?: number) => string;
export declare const decimalToString: (data: any) => any;
export declare const convertDataExcel: (file: Express.Multer.File) => Promise<any>;
export declare const sortArrayByCreatedAt: (array: any, sortOrder: any) => any;
export declare const checkElementsExist: (sourceArray: number[], targetArray: number[]) => boolean;
export declare const sortHistories: (histories: any) => any[];
