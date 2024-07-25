export declare class SocketEmitter {
    private static instance;
    io: any;
    private logger;
    private constructor();
    static getInstance(): SocketEmitter;
    emitNotifications(notifications: Notification[], userId: number): void;
}
