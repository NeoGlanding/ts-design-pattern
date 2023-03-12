"use strict";
var SingletonAPI = /** @class */ (function () {
    function SingletonAPI() {
    }
    SingletonAPI.getApiGatewayInstance = function () {
        return this.apiGatewayInstance;
    };
    SingletonAPI.apiGatewayInstance = "https://api-example.id/api/v1";
    return SingletonAPI;
}());
var api = SingletonAPI.getApiGatewayInstance();
var api2 = SingletonAPI.getApiGatewayInstance();
console.log(api === api2);
