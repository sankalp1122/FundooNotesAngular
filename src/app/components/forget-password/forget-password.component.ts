import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent  implements OnInit {

  constructor(private formbuilder: FormBuilder, private userService : UserService, ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  forgetpasswordData! : FormGroup

  
onsubmit(){
  console.log(this.forgetpasswordData.value)
}
}