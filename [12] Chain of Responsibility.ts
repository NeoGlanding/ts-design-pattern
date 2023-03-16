// The Chain of Responsibility design pattern is a behavioral pattern,
// that allows a series of objects to handle a request one after another until it's successfully processed or rejected.
// This pattern is useful when there are multiple objects that can handle a request, and the responsibility needs to be dynamically assigned.

// In a construction project, there are many different workers and teams involved,
// each responsible for a specific part of the project.
// For example, there may be an excavation team responsible for digging and preparing the site,
// a foundation team responsible for pouring the foundation,
// a framing team responsible for building the structure, and so on.

// Each team is responsible for their part of the project,
// but they also need to work together to ensure that the project is completed successfully.
// If there are any issues or problems that arise during the project,
// each team must communicate with the others to find a solution or pass the problem along to the next team in the chain of responsibility.

// In this analogy, each team is an object in the chain of responsibility,
// responsible for handling a specific part of the project.
// If a problem arises that they cannot handle,
// they pass it along to the next team in the chain until a solution is found or the project is completed.

interface ITeam {
  issue: string;
  setNext: (team: ITeam) => ITeam;
  handleIssue: (issue: string) => any;
}

abstract class ConstructionTeam implements ITeam {
  private nextTeam: ITeam | null = null;

  constructor(public issue: string) {
    this.issue = issue;
  }

  public setNext(team: ITeam) {
    this.nextTeam = team;
    return team;
  }

  public handleIssue(issue: string) {
    if (this.nextTeam) {
      return this.nextTeam.handleIssue(issue);
    }

    console.log(`No one able to handle the issue`);
  }
}

class ExcavationTeam extends ConstructionTeam {
  constructor(public issue: string) {
    super(issue);
  }

  public handleIssue(issue: string) {
    if (issue === "excavationing") {
      console.log("Excavation will do by Excavation team");
    } else {
      super.handleIssue(issue);
    }
  }
}

class FramingTeam extends ConstructionTeam {
  constructor(public issue: string) {
    super(issue);
  }

  public handleIssue(issue: string) {
    if (issue === "framing") {
      console.log("Framing will do by us");
    } else {
      super.handleIssue(issue);
    }
  }
}

class FoundationTeam extends ConstructionTeam {
  constructor(public issue: string) {
    super(issue);
  }

  public handleIssue(issue: string) {
    if (issue === "foundationing") {
      console.log("foundation will do by foundation team");
    } else {
      super.handleIssue(issue);
    }
  }
}

const excavationTeam = new ExcavationTeam("Excavation");
const foundationTeam = new FoundationTeam("Foundation");
const framingTeam = new FramingTeam("Framing");

excavationTeam.setNext(foundationTeam).setNext(framingTeam);

excavationTeam.handleIssue("foundationing");

// In the Chain of Responsibility pattern, a broker chain is a variant in which the chain is dynamic, meaning that the handlers are not fixed and can be added or removed at runtime. In this variant, there is a central broker or manager that is responsible for maintaining the chain of handlers and passing requests to them.

// An analogy for the broker chain in the construction team example could be a project manager who is responsible for managing the different teams and tasks involved in the construction project. The project manager is the broker, who adds and removes teams from the chain as needed and passes issues or requests to the appropriate team.
