import { NgModule } from '@angular/core';
import {
  MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule,
  MatFormFieldModule, MatInputModule,MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule,
    MatFormFieldModule, MatInputModule,MatSnackBarModule],
  exports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule,
    MatFormFieldModule, MatInputModule,MatSnackBarModule],
})
export class MaterialModule { }
