import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  data: any;
  constructor(private formbuilder: FormBuilder) {}
  emailData!: FormGroup;

  ngOnInit(): void {
    this.emailData = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onsubmit() {
    if (this.emailData.invalid) {
      return;
    } else {
     console.log(this.emailData.value.email);
     
    }
  }
}
