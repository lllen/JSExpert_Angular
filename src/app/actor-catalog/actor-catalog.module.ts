import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsComponent } from './actors/actors.component';
import { ActorCardComponent } from './actor-card/actor-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ActorsComponent,
    ActorCardComponent,
    ActorCardComponent
  ]
})
export class ActorCatalogModule { }
