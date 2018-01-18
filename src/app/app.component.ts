import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Registration';
  titles= [{
    value: 'mr', viewValue: 'Mr'
  }, {
    value: 'miss', viewValue: 'Miss'
  }, {
    value: 'mrs', viewValue: 'Mrs'
  }];
  nations= [{
    value: 'indian', viewValue: 'Indian'
  }, {
  value: 'nri', viewValue: 'NRI'
  }
];

}
