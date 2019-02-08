import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {Registration} from '../../../../dtos/registration';
import {RegistrationService} from '../../../../services/registrationService';
import {Student} from '../../../../dtos/student';
import {StudentService} from '../../../../services/studentService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form = new FormGroup({
    rid: new FormControl(),
    regDate: new FormControl(),
    regFee: new FormControl(),
    courseId: new FormControl(),
    studentId: new FormControl()
  });
  // manuallySelected = false;



  // students: Array<Student> = [];
  // selectedStudent: Student = new Student();
  // tempStudent: Student = null;
  // manuallySelected = false;
  // @ViewChild('frmStudents') frmStudents: NgForm;
  constructor(private fb: FormBuilder, private registrationService: RegistrationService, private router: Router) {



  }
  get rid() {
    return this.form.get('rid');
  }
  get regDate() {
    return this.form.get('regDate');
  }
  get regFee() {
    return this.form.get('regFee');
  }
  get courseId() {
    return this.form.get('courseId');
  }
  get studentId() {
    return this.form.get('studentId');
  }
  //
  ngOnInit() {
  }
  save() {
    if (this.form) {
      console.log(this.form.value);
      alert('Student has been saved successfully');
    } else {
      alert('Student has been saved successfully');
    }
  }

  // registrations: Array<Registration> = [];
  // selectedRegistration: Registration = new Registration();
  // tempRegistration: Registration = null;
  // manuallySelected = false;
  // @ViewChild('frmRegistrations') frmRegistrations: NgForm;
  // constructor(private registrationService: RegistrationService) { }
  //
  // ngOnInit() {
  // }
  // selectRegistration(registration: Registration): void {
  //   this.selectedRegistration = registration;
  //   this.tempRegistration = Object.assign({}, registration);
  //   this.manuallySelected = true;
  // }
  //
  // saveRegistration(): void {
  //   this.registrationService.saveRegistration(this.selectedRegistration).subscribe(
  //     (result) => {
  //       if (result) {
  //         alert('Registration has been saved successfully');
  //         // this.loadAllStudents();
  //       } else {
  //         alert('Failed to save the Registration');
  //       }
  //     }
  //   );
  // }
  // clear(): void {
  //   const index = this.registrations.indexOf(this.selectedRegistration);
  //   if (index !== -1) {
  //     this.registrations[index] = this.tempRegistration;
  //     this.tempRegistration = null;
  //   }
  //   this.selectedRegistration = new Registration();
  //   this.manuallySelected = false;
  // }
}
