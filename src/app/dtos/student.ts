export class Student {
  // studentID: string;
  // studentName: string;
  // studentGender: string;
  // studentContact: string;
  // studentAddress: string;

  constructor(private studentID?: string, private studentName?: string, private studentGender?: string,
              private studentContact?: string, private studentAddress?: string) {
  }


  get StudentID() {
    return this.studentID;
  }

  set StudentID(studentID: string) {
    this.studentID = studentID;
  }

  get StudentName() {
    return this.studentName;
  }

  set StudentName(studentName: string) {
    this.studentName = studentName;
  }

  get StudentGender() {
    return this.studentGender;
  }

  set StudentGender(studentGender: string) {
    this.studentGender = studentGender;
  }

  get StudentContact() {
    return this.studentContact;
  }

  set StudentContact(studentContact: string) {
    this.studentContact = studentContact;
  }

  get StudentAddress() {
    return this.studentAddress;
  }

  set StudentAddress(studentAddress: string) {
    this.studentAddress = studentAddress;
  }

}
