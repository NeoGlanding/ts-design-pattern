"use strict";
// The Proxy Design Pattern is a behavioral pattern that allows you to create an intermediary object that acts as a substitute for another object,
// called the subject.
// The proxy object controls access to the subject,
// providing additional functionality and security if necessary.
// An analogy for the Proxy Design Pattern would be a personal assistant.
// A personal assistant acts as a proxy for their employer,
// managing access to their time and resources.
// They may provide additional functionality,
// such as managing schedules, handling communication, or screening visitors.
// In TypeScript,
// a common example of the Proxy Design Pattern is the use of a proxy to intercept requests to a remote API.
// The proxy object can be used to add caching, rate limiting, or authentication to the API requests
var RealAPI = /** @class */ (function () {
    function RealAPI() {
    }
    RealAPI.prototype.getData = function () {
        console.log("RESPONSE DATA");
    };
    return RealAPI;
}());
var ProxyAPI = /** @class */ (function () {
    function ProxyAPI(api) {
        this.api = api;
    }
    ProxyAPI.prototype.getData = function () {
        console.log("FROM PROXY");
        this.api.getData();
    };
    return ProxyAPI;
}());
var pokemonAPI = new RealAPI();
var proxyPokemonAPI = new ProxyAPI(pokemonAPI);
proxyPokemonAPI.getData();
