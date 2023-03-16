"use strict";
// The Chain of Responsibility design pattern is a behavioral pattern,
// that allows a series of objects to handle a request one after another until it's successfully processed or rejected.
// This pattern is useful when there are multiple objects that can handle a request, and the responsibility needs to be dynamically assigned.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConstructionTeam = /** @class */ (function () {
    function ConstructionTeam(issue) {
        this.issue = issue;
        this.nextTeam = null;
        this.issue = issue;
    }
    ConstructionTeam.prototype.setNext = function (team) {
        this.nextTeam = team;
        return team;
    };
    ConstructionTeam.prototype.handleIssue = function (issue) {
        if (this.nextTeam) {
            return this.nextTeam.handleIssue(issue);
        }
        console.log("No one able to handle the issue");
    };
    return ConstructionTeam;
}());
var ExcavationTeam = /** @class */ (function (_super) {
    __extends(ExcavationTeam, _super);
    function ExcavationTeam(issue) {
        var _this = _super.call(this, issue) || this;
        _this.issue = issue;
        return _this;
    }
    ExcavationTeam.prototype.handleIssue = function (issue) {
        if (issue === "excavationing") {
            console.log("Excavation will do by Excavation team");
        }
        else {
            _super.prototype.handleIssue.call(this, issue);
        }
    };
    return ExcavationTeam;
}(ConstructionTeam));
var FramingTeam = /** @class */ (function (_super) {
    __extends(FramingTeam, _super);
    function FramingTeam(issue) {
        var _this = _super.call(this, issue) || this;
        _this.issue = issue;
        return _this;
    }
    FramingTeam.prototype.handleIssue = function (issue) {
        if (issue === "framing") {
            console.log("Framing will do by us");
        }
        else {
            _super.prototype.handleIssue.call(this, issue);
        }
    };
    return FramingTeam;
}(ConstructionTeam));
var FoundationTeam = /** @class */ (function (_super) {
    __extends(FoundationTeam, _super);
    function FoundationTeam(issue) {
        var _this = _super.call(this, issue) || this;
        _this.issue = issue;
        return _this;
    }
    FoundationTeam.prototype.handleIssue = function (issue) {
        if (issue === "foundationing") {
            console.log("foundation will do by foundation team");
        }
        else {
            _super.prototype.handleIssue.call(this, issue);
        }
    };
    return FoundationTeam;
}(ConstructionTeam));
var excavationTeam = new ExcavationTeam("Excavation");
var foundationTeam = new FoundationTeam("Foundation");
var framingTeam = new FramingTeam("Framing");
excavationTeam.setNext(foundationTeam).setNext(framingTeam);
excavationTeam.handleIssue("foundationing");
// In the Chain of Responsibility pattern, a broker chain is a variant in which the chain is dynamic, meaning that the handlers are not fixed and can be added or removed at runtime. In this variant, there is a central broker or manager that is responsible for maintaining the chain of handlers and passing requests to them.
// An analogy for the broker chain in the construction team example could be a project manager who is responsible for managing the different teams and tasks involved in the construction project. The project manager is the broker, who adds and removes teams from the chain as needed and passes issues or requests to the appropriate team.
