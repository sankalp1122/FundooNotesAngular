import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}
  SignupData!: FormGroup;

  ngOnInit(): void {
    this.SignupData = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service: 'advance',
    });
  }
  onSubmit() {
    // stop here if form is invalid
    if (this.SignupData.invalid) {
      return;
    } else {
      console.log(this.SignupData);

      this.userService
        .signUpService(this.SignupData.value)
        .subscribe((data: any) => {
          console.log(data, 'Login // there is  response');
          this.router.navigateByUrl('/login');
        });

      // console.log(this.SignupData.value, "sankalp there is  data");
    }
  }
}



// let rqstData = {
//   firstName: this.SignupData.value.firstName,
//   lastName: this.SignupData.value.lastName,
//   email: this.SignupData.value.email,
//   password: this.SignupData.value.password,
//   service:'advance',
// }
