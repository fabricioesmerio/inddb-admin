import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule { }
