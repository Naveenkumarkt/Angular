import { Component, EventEmitter, Input, Output } from '@angular/core';
import { model } from '../Model/madel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() formdata: model[] = [];inputformdata:any
  @Output() Editted = new EventEmitter<{inputdata:model[],edit:boolean}>
  @Output() Deleted = new EventEmitter<model[]>;

  id: any;
  edit=false;

  
  deleteData (id:number) {
    this.formdata.splice(id,1);
    this.Deleted.emit(this.formdata)
  }

  editData(id:any) {
    this.inputformdata = this.formdata[id]
    this.edit=true
    this.Editted.emit({inputdata:this.inputformdata,edit:this.edit})
  }

  saveData(id:number,firstname:string,lastname:string,age:string,emailid:string){
    this.formdata[id].firstname=firstname
    this.formdata[id].lastname=lastname
    this.formdata[id].age=age
    this.formdata[id].emailid=emailid
  }


}
