import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    const policyData = {
     };
  }
}

