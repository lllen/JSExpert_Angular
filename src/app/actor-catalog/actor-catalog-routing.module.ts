import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorCatalogComponent } from './actor-catalog.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { ActorsComponent } from './actors/actors.component';
import { ActorSingleComponent } from './actor-single/actor-single.component';

const routes: Routes = [
    { path: 'actors', component: ActorCatalogComponent,
      canActivate: [AuthGuard],
      children: [
       { 
          path: '',
          component: ActorsComponent 
       },
       {
          path: ':id',
          component: ActorSingleComponent
        }
    ]}
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

  export class ActorCatalogRoutingModule {
  }