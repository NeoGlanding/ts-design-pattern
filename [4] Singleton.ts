class SingletonAPI {
  private static apiGatewayInstance: string = "https://api-example.id/api/v1";

  private constructor() {}

  public static getApiGatewayInstance() {
    return this.apiGatewayInstance;
  }
}

const api = SingletonAPI.getApiGatewayInstance();
const api2 = SingletonAPI.getApiGatewayInstance();

console.log(api === api2);
