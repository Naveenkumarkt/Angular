import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { model } from '../Model/madel';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnChanges {

  inputformdata={firstname:"",lastname:"",emailid:"",age:"",id:""}
  formdata:model[]=[];
  edit = false

  @Input() inputdata: any; 
  @Input() getEdit:boolean;
  @Input() UpdatedFormData:model[];

  @Output() Submitted = new EventEmitter<model[]>;

  constructor() {
    console.log("hi");
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inputformdata=this.inputdata
    this.edit=this.getEdit
    this.formdata=this.UpdatedFormData
  }

  onSubmit(id:any){
    console.log(id);
    
    this.formdata[id]=({
      firstname: this.inputformdata.firstname,
      lastname: this.inputformdata.lastname,
      age: this.inputformdata.age,
      emailid: this.inputformdata.emailid,
      id:id
    });
    this.Submitted.emit(this.formdata)
    this.inputformdata.firstname="" ;
    this.inputformdata.lastname="" ;
    this.inputformdata.age="" ;
    this.inputformdata.emailid="" ;
    this.inputformdata.id="" ;
    this.edit=false;
  }

  ngOnInit(): void {

    let arr = [3,6,1,4,2]

    console.log(Math.min(...arr));

    let result = arr[0]
    for (let index = 0; index < arr.length; index++) {
      if (arr[index]<result) {
        result = arr[index]
      }
    }

    console.log(result);
    

  }

}
