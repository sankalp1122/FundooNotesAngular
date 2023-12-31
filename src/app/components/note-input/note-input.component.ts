import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss'],
})
export class NoteInputComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();


  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteserviceService
  ) {}

  cardData!: FormGroup;
  ngOnInit(): void {
    this.cardData = this.formBuilder.group({
      title: [''],
      description: [''],
    });
  }

  iconCheck = 'fa-square-check';
  shownote = false;

  show() {
    this.shownote = !this.shownote;
    console.log(this.shownote);
  }

  addingData() {
    this.noteService.addnote(this.cardData.value).subscribe((data: any) => {
      console.log(data, 'Login // there is  data');
      this.messageEvent.emit(data);
      // localStorage.setItem('token', data.id);
    });
    this.show();
  }

}
