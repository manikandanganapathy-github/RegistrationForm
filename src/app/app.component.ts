import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PersonalDetailModel } from './personaldetail.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    this.personalDetailModel = this.model;
  }
  downloadPolicy(option: string): void {
    console.log('option ', option);
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
}

