import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  childData:any;
  dataTest:any = "ssankalp"
  
  constructor() { }

  ngOnInit(): void {

  }
  
  showdata(e:any){
    this.childData =e.value;
    console.log(this.childData);
      
  }
}
