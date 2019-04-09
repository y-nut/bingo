import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';

const arr = [
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: arr,
  exports: arr
})
export class MaterialModule { }
