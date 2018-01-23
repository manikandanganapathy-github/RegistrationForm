import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PersonalDetailModel } from './personaldetail.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisabled = false;
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

 email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  submitPolicy(): void {
    this.isDisabled = true;
    this.personalDetailModel = this.model;
  }
  downloadPolicy(option: string): void {
    if (option === 'JSON') {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.personalDetailModel)));
    element.setAttribute('download', 'Data.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    }
  }

  resetPolicy(): void {
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
  }
  printPolicy(): void {
   let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}

