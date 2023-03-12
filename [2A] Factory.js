"use strict";
var SchoolFactory = /** @class */ (function () {
    function SchoolFactory(schoolName, schoolType, schoolStatus) {
        this.schoolName = schoolName;
        this.schoolType = schoolType;
        this.schoolStatus = schoolStatus;
        this.schoolName = schoolName;
        this.schoolType = schoolType;
        this.schoolStatus = schoolStatus;
    }
    SchoolFactory.createNationalSD = function (schoolName) {
        return new this(schoolName, "SD", "National");
    };
    SchoolFactory.createPrivateSD = function (schoolName) {
        return new this(schoolName, "SD", "Private");
    };
    SchoolFactory.prototype.getInformation = function () {
        console.log("School Name: ".concat(this.schoolName, "\nSchool Type: ").concat(this.schoolType, "\nSchool Status: ").concat(this.schoolStatus, "\n    "));
    };
    return SchoolFactory;
}());
var SD1Cibinong = SchoolFactory.createNationalSD("01 Cibinong");
var SD2Cibinong = SchoolFactory.createNationalSD("02 Cibinong");
var SDMerdeka = SchoolFactory.createPrivateSD("Merdeka School");
SD1Cibinong.getInformation();
SD2Cibinong.getInformation();
SDMerdeka.getInformation();
// const SD1Cibinong = new School("01 Cibinong", "SD", "National");
// const SD2Cibinong = new School("02 Cibinong", "SD", "National");
