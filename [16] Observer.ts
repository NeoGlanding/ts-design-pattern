// The Observer design pattern is a behavioral pattern that defines a one-to-many dependency between objects.
// When the state of one object (the subject) changes, all of its dependents (the observers) are notified and updated automatically.
// This pattern is useful when you need to decouple the logic that triggers a change from the logic that reacts to the change.

// An analogy for the Observer pattern could be a news agency that sends news updates to its subscribers.
// The news agency is the subject, and the subscribers are the observers.
// Whenever there is breaking news, the news agency sends the news update to all of its subscribers automatically.

class NewsAgency {
  private subscribers: Subscriber[] = [];

  public subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  public sendMessage(message: string) {
    this.subscribers.forEach((el) => {
      el.receiveMessage(message);
    });
  }
}
class Subscriber {
  constructor(private name: string) {
    this.name = name;
  }

  receiveMessage(message: string): void {
    console.log(`${this.name} receive a message = ${message}`);
  }
}

const detik = new NewsAgency();

const james = new Subscriber("James");
const noah = new Subscriber("Noah");

detik.subscribe(james);
detik.subscribe(noah);

detik.sendMessage("BREAKING NEWS: Kami membuat kartu member versi terbaru");
