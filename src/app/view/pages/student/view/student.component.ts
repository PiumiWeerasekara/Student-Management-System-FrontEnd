import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, NgForm} from '@angular/forms';
import {StudentService} from '../../../../services/studentService';
import {Router} from '@angular/router';
import {Student} from '../../../../dtos/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  form = new FormGroup({
    studentID: new FormControl(),
    studentName: new FormControl(),
    studentGender: new FormControl(),
    studentContact: new FormControl(),
    studentAddress: new FormControl()
  });
  selectedStudent: Student = new Student();
  manuallySelected = false;



  // students: Array<Student> = [];
  // selectedStudent: Student = new Student();
  // tempStudent: Student = null;
  // manuallySelected = false;
  // @ViewChild('frmStudents') frmStudents: NgForm;
  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router) {



  }
  get studentID() {
    return this.form.get('studentID');
  }
  get studentName() {
    return this.form.get('studentName');
  }
  get studentGender() {
    return this.form.get('studentGender');
  }
  get studentContact() {
    return this.form.get('studentContact');
  }
  get studentAddress() {
    return this.form.get('studentAddress');
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
    // this.loadAllStudents();
  // loadAllStudents(): void {
  //   this.studentService.getAllStudents().subscribe(
  //     (result) => {
  //       this.students = result;
  //       console.log(this.students);
  //     }
  //   );
  //
  // deleteStudent(student: Student): void {
  //   if (confirm('Are you sure you want to delete this student?')) {
  //     this.studentService.deleteStudent(student.studentID).subscribe(
  //       (result) => {
  //         if (result) {
  //           alert('Student has been deleted successfully');
  //         } else {
  //           alert('Failed to delete the Student');
  //         }
  //         this.loadAllStudents();
  //       }
  //     );
  //   }
  // }
  //
  // selectStudent(student: Student): void {
  //   this.selectedStudent = student;
  //   // this.tempStudent = Object.assign({}, student);
  //   this.manuallySelected = true;
  // }
  //
  // saveStudent(): void {
  //   this.studentService.saveStudent(this.selectedStudent).subscribe(
  //     (result) => {
  //       if (result) {
  //         alert('Student has been saved successfully');
  //         // this.loadAllStudents();
  //       } else {
  //         alert('Failed to save the student');
  //       }
  //     }
  //   );
 // }
 //  clear(): void {
 //    const index = this.students.indexOf(this.selectedStudent);
 //    if (index !== -1) {
 //      this.students[index] = this.tempStudent;
 //      this.tempStudent = null;
 //    }
 //    this.selectedStudent = new Student();
 //    this.manuallySelected = false;
 //  }
  // saveStudent(): void {
  //   this.studentService.saveStudent(this.selectedStudent).subscribe(
  //     (result) => {
  //       if (result) {
  //         alert('Student has been saved successfully');
  //         this.loadAllStudents();
  //       } else {
  //         alert('Failed to save the student');
  //       }
  //     }
  //   );
  // }
}
