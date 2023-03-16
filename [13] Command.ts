// Command basically just encapsulate the actual logic into a method

interface IRequestCommand {
  execute(body: any): any;
}

class CreateCardCommand implements IRequestCommand {
  execute(body: any) {
    console.log("Creating a card");
  }
}

const createCard = new CreateCardCommand();
createCard.execute({});
