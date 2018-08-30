import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsComponent } from './actors/actors.component';
import { ActorCardComponent } from './actor-card/actor-card.component';
import { SharedModule } from '../shared/shared.module';
import { ActorSingleComponent } from './actor-single/actor-single.component';
import { ActorCatalogComponent } from './actor-catalog.component';
import { ActorCatalogRoutingModule } from './actor-catalog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ActorCatalogRoutingModule
  ],
  declarations: [
    ActorsComponent,
    ActorCardComponent,
    ActorCatalogComponent,
    ActorSingleComponent
  ]
})
export class ActorCatalogModule { }
