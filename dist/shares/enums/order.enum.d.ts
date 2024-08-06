export declare enum OrderSide {
    BUY = "BUY",
    SELL = "SELL"
}
export declare enum OrderType {
    EXTEND = "EXTEND",
    NEW_ORDER = "NEW_ORDER"
}
export declare enum OrderPaymentMethod {
    DAIBIKI = "DAIBIKI",
    VISA_MASTER_CARD = "VISA_MASTER_CARD",
    QR_CODE = "QR_CODE",
    DIRECT = "DIRECT"
}
export declare enum OrderWifiTemporarily {
    NOT_RECEIVED = "NOT_RECEIVED",
    RECEIVED = "RECEIVED"
}
export declare enum OrderStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    FILLED = "FILLED",
    CANCELED = "CANCELED",
    UNTRIGGERED = "UNTRIGGERED",
    REJECTED = "REJECTED"
}
export declare enum OrderStopType {
    STOP_LIMIT = "STOP_LIMIT",
    STOP_MARKET = "STOP_MARKET",
    TRAILING_STOP = "TRAILING_STOP",
    TAKE_PROFIT_LIMIT = "TAKE_PROFIT_LIMIT",
    TAKE_PROFIT_MARKET = "TAKE_PROFIT_MARKET"
}
export declare enum OrderTimeInForce {
    GTC = "GTC",
    IOC = "IOC",
    FOK = "FOK"
}
export declare enum OrderTrigger {
    LAST = "LAST",
    INDEX = "INDEX",
    ORACLE = "ORACLE"
}
