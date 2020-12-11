import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ AdminhomeComponent],
  imports: [
    CommonModule
   
  ],
  exports:[AdminhomeComponent]
})
export class AdminModule { }
