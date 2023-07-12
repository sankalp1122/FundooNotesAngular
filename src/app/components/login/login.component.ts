import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
// LoginData: FormGroup<any>;
constructor(private formBuilder: FormBuilder , private userService: UserService , private router: Router) { }
LoginData!: FormGroup


ngOnInit(): void {

  this.LoginData = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

}
onSubmit() {

  // stop here if form is invalid
  if (this.LoginData.invalid) {
    
    return;
  } else {
    this.userService.LoginService(this.LoginData.value).subscribe((data:any) => { 

    console.log(data, "Login // there is  data");
      localStorage.setItem("token", data.id);
      if(data.id){
        this.router.navigateByUrl('/dashboard/notes');
      }
    })
          
  }

}

}
