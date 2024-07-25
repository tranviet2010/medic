"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTrigger = exports.OrderTimeInForce = exports.OrderStopType = exports.OrderStatus = exports.OrderWifiTemporarily = exports.OrderPaymentMethod = exports.OrderType = exports.OrderSide = void 0;
var OrderSide;
(function (OrderSide) {
    OrderSide["BUY"] = "BUY";
    OrderSide["SELL"] = "SELL";
})(OrderSide = exports.OrderSide || (exports.OrderSide = {}));
var OrderType;
(function (OrderType) {
    OrderType["EXTEND"] = "EXTEND";
    OrderType["NEW_ORDER"] = "NEW_ORDER";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var OrderPaymentMethod;
(function (OrderPaymentMethod) {
    OrderPaymentMethod["DAIBIKI"] = "DAIBIKI";
    OrderPaymentMethod["VISA_MASTER_CARD"] = "VISA_MASTER_CARD";
    OrderPaymentMethod["QR_CODE"] = "QR_CODE";
    OrderPaymentMethod["DIRECT"] = "DIRECT";
})(OrderPaymentMethod = exports.OrderPaymentMethod || (exports.OrderPaymentMethod = {}));
var OrderWifiTemporarily;
(function (OrderWifiTemporarily) {
    OrderWifiTemporarily["NOT_RECEIVED"] = "NOT_RECEIVED";
    OrderWifiTemporarily["RECEIVED"] = "RECEIVED";
})(OrderWifiTemporarily = exports.OrderWifiTemporarily || (exports.OrderWifiTemporarily = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["ACTIVE"] = "ACTIVE";
    OrderStatus["FILLED"] = "FILLED";
    OrderStatus["CANCELED"] = "CANCELED";
    OrderStatus["UNTRIGGERED"] = "UNTRIGGERED";
    OrderStatus["REJECTED"] = "REJECTED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var OrderStopType;
(function (OrderStopType) {
    OrderStopType["STOP_LIMIT"] = "STOP_LIMIT";
    OrderStopType["STOP_MARKET"] = "STOP_MARKET";
    OrderStopType["TRAILING_STOP"] = "TRAILING_STOP";
    OrderStopType["TAKE_PROFIT_LIMIT"] = "TAKE_PROFIT_LIMIT";
    OrderStopType["TAKE_PROFIT_MARKET"] = "TAKE_PROFIT_MARKET";
})(OrderStopType = exports.OrderStopType || (exports.OrderStopType = {}));
var OrderTimeInForce;
(function (OrderTimeInForce) {
    OrderTimeInForce["GTC"] = "GTC";
    OrderTimeInForce["IOC"] = "IOC";
    OrderTimeInForce["FOK"] = "FOK";
})(OrderTimeInForce = exports.OrderTimeInForce || (exports.OrderTimeInForce = {}));
var OrderTrigger;
(function (OrderTrigger) {
    OrderTrigger["LAST"] = "LAST";
    OrderTrigger["INDEX"] = "INDEX";
    OrderTrigger["ORACLE"] = "ORACLE";
})(OrderTrigger = exports.OrderTrigger || (exports.OrderTrigger = {}));
//# sourceMappingURL=order.enum.js.map