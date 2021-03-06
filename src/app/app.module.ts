import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmCatalogModule } from './film-catalog/film-catalog.module';
import { ActorCatalogModule } from './actor-catalog/actor-catalog.module';
import { SearchComponent } from './search/search.component';
import { SharedModule } from './shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmService } from '../app/shared/services/film.service';
import { API_CONFIG, apiConfig } from '../app/shared/models/api.config';
import { MainModule } from './main/main.module';
import { ActorService } from '../app/shared/services/actor.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    ActorCatalogModule,
    FilmCatalogModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    FilmService,
    ActorService,
    AuthService,
    AuthGuard,
    { provide: API_CONFIG, useValue: apiConfig }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

