import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule, MatToolbarModule,
     MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule } from '@angular/material';

@NgModule({
    imports: [ MatButtonModule, MatToolbarModule, MatInputModule,
         MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatFormFieldModule],
    exports: [ MatButtonModule, MatToolbarModule,
         MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatFormFieldModule ]
})
export class MaterialModule { }
