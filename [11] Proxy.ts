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

class RealAPI {
  getData() {
    console.log("RESPONSE DATA");
  }
}

class ProxyAPI {
  constructor(private api: RealAPI) {}

  getData() {
    console.log("FROM PROXY");
    this.api.getData();
  }
}

const pokemonAPI = new RealAPI();
const proxyPokemonAPI = new ProxyAPI(pokemonAPI);

proxyPokemonAPI.getData();
