import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatToolbarModule,
     MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatNativeDateModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
    imports: [ MatButtonModule, MatToolbarModule, MatInputModule, MatRadioModule,
         MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatFormFieldModule,
         MatDatepickerModule, MatNativeDateModule, MatMenuModule
          ],
    exports: [ MatButtonModule, MatToolbarModule, MatRadioModule,
         MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule,
          MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule
            ]
})
export class MaterialModule { }
