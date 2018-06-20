import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsComponent } from './actors/actors.component';
import { ActorCardComponent } from './actor-card/actor-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatGridListModule, MatSelectModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  declarations: [
    ActorsComponent,
    ActorCardComponent,
    ActorCardComponent
  ]
})
export class ActorCatalogModule { }
