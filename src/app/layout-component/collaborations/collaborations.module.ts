import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaborationsRoutingModule } from './collaborations-routing.module';
import { CollaborationsComponent } from './collaborations.component';


@NgModule({
  declarations: [
    CollaborationsComponent
  ],
  imports: [
    CommonModule,
    CollaborationsRoutingModule
  ]
})
export class CollaborationsModule { }
