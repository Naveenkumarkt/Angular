import { Component } from '@angular/core';
import { model } from './componets/Model/madel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curdopp';
  formdata:model[]=[];
  inputdata={firstname:"",lastname:"",emailid:"",age:"",id:""}
  edit=false;

  getValues(fdata:model[]){
    this.formdata=fdata
    console.log(fdata);
    
  }

  getEdit(data: any){
    console.log(data);
    this.inputdata=data.inputdata,
    this.edit=data.edit
  }

  updateData(data:any){
    this.formdata=data
  }

}
