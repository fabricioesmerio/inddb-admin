import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderbarComponent } from './siderbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SiderbarComponent],
  exports: [SiderbarComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SiderbarModule { }
