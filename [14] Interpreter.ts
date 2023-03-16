// In simple terms,
// the Interpreter pattern provides a way to parse and interpret expressions in a language.
// It involves defining a grammar for the language and using that grammar to build an interpreter that can evaluate expressions written in that language.

interface IQueryInterpreter {
  interpret(key: string, value: string): any;
}

class QueryInterpreter implements IQueryInterpreter {
  private queries: any = {};

  public interpret(key: string, value: any): string {
    return `${key}=${JSON.stringify(value)}`;
  }

  public addQuery(key: string, value: any): any {
    this.queries[key] = value;
    return this.queries;
  }

  public deleteQuery(key: string): any {
    delete this.queries[key];
    return this.queries;
  }

  public toString() {
    const temp: string[] = [];
    for (let prop in this.queries) {
      temp.push(this.interpret(prop, this.queries[prop]));
    }

    return temp.join("&");
  }

  public getQuery() {
    return this.queries;
  }
}

const queryInterpreter = new QueryInterpreter();
queryInterpreter.addQuery("weather", "rainy");
queryInterpreter.addQuery("cities", ["london"]);
console.log(queryInterpreter.toString());
