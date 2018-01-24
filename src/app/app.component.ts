import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PersonalDetailModel } from './personaldetail.model';
declare var jquery: any;
declare var $: any;
declare var jsPDF: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isReadOnlyField = false;
  isSubmitDisabled = false;
  isDownloadDisabled = true;
   model: any = {};
   personalDetailModel: PersonalDetailModel;
  title= 'Policy Registration';
  titles= [{
    value: 'mr', viewValue: 'Mr'
  }, {
    value: 'miss', viewValue: 'Miss'
  }, {
    value: 'mrs', viewValue: 'Mrs'
  }];
  nations = [{
    value: 'indian', viewValue: 'Indian'
  }, {
  value: 'nri', viewValue: 'NRI'
  }
  ];
  residentOption= [
    'Yes' , 'No'
  ] ;
  genderOption= [{
  value: 'female', viewValue: 'Female'
}, {
    value: 'male', viewValue: 'Male'
  },
 {
  value: 'other', viewValue: 'Other'
}];
 email = new FormControl('', [Validators.email]);
  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  submitPolicy(): void {
    this.isReadOnlyField = true;
    this.isSubmitDisabled = true;
    this.isDownloadDisabled = false;
    this.personalDetailModel = this.model;
  }
 getColumns(paramData): any {
const header = [];
$.each(paramData[0], function (key, value) {
const obj = { };
obj['headertext'] = key;
obj['datatype'] = 'string';
obj['datafield'] = key;
header.push(obj);
});
return header;
}
  downloadPolicy(option: string): void {
    if (option === 'JSON') {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.personalDetailModel)));
    element.setAttribute('download', this.personalDetailModel.firstName + '-' + this.personalDetailModel.phoneNumber + '.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    }
    if (option === 'Excel') {
       $('#dwnExcel').excelexportjs({
          containerid: 'dwnExcel',
          datatype: 'json',
          dataset: [this.personalDetailModel],
          columns: this.getColumns([this.personalDetailModel]),
          worksheetName: this.personalDetailModel.firstName + '-' + this.personalDetailModel.phoneNumber
        });
    }
  }
  resetPolicy(): void {
     this.isReadOnlyField = false;
    this.model.title = '';
    this.model.firstName = '';
    this.model.lastName = '';
    this.model.address = '';
    this.model.city = '';
    this.model.state = '';
    this.model.nationality = '';
    this.model.isResidentIND = '';
    this.model.fatherName = '';
    this.model.doB = '';
    this.model.phoneNumber = '';
    this.model.email = '';
    this.isSubmitDisabled = false;
    this.isDownloadDisabled = true;
  }
  affectGender(): void {
    if (this.model.title === 'miss' || this.model.title === 'mrs' ){
      this.model.gender = 'female';
    }
    if (this.model.title === 'mr') {
      this.model.gender = 'male';
    }
  }
  printPolicy(): void {
     const item = this.personalDetailModel;
    const doc = new jsPDF();
    const col = ['Details', 'Values'];
    const rows = [];

    for (const key of Object.keys(item)) {
        const temp = [key, item[key]];
        rows.push(temp);
    }
    doc.autoTable(col, rows);
    doc.autoPrint();
    doc.save(this.personalDetailModel.firstName + '-' + this.personalDetailModel.phoneNumber + '.pdf');
  }
}

