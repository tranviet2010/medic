export declare enum UploadFileTypes {
    IMAGE = "image",
    VIDEO = "video"
}
export declare const SupportedImageMIMETypes: string[];
export declare function getUrl(blobName: string): string;
export declare const getContentType: (fileName: string) => any;
