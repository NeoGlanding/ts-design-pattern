type TIndonesianSchoolType = "SD" | "SMP" | "SMA";
type TIndonesianSchoolStatus = "National" | "Private";

class SchoolFactory {
  constructor(
    protected schoolName: string,
    protected schoolType: TIndonesianSchoolType,
    protected schoolStatus: TIndonesianSchoolStatus
  ) {
    this.schoolName = schoolName;
    this.schoolType = schoolType;
    this.schoolStatus = schoolStatus;
  }

  public static createNationalSD(schoolName: string) {
    return new this(schoolName, "SD", "National");
  }

  public static createPrivateSD(schoolName: string) {
    return new this(schoolName, "SD", "Private");
  }

  public getInformation(): void {
    console.log(`School Name: ${this.schoolName}
School Type: ${this.schoolType}
School Status: ${this.schoolStatus}
    `);
  }
}

const SD1Cibinong = SchoolFactory.createNationalSD("01 Cibinong");
const SD2Cibinong = SchoolFactory.createNationalSD("02 Cibinong");
const SDMerdeka = SchoolFactory.createPrivateSD("Merdeka School");
SD1Cibinong.getInformation();
SD2Cibinong.getInformation();
SDMerdeka.getInformation();

// const SD1Cibinong = new School("01 Cibinong", "SD", "National");
// const SD2Cibinong = new School("02 Cibinong", "SD", "National");
