import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { AddFormComponent } from './components/form/form.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LoginComponent } from './components/login/login.component';

import { CommService} from './services/communication.service';
import { MessageService } from './services/messages.service';
import { FakeLoginService } from './services/fake-login.service';

const appRoutes: Routes = [
  { path: 'form', component: AddFormComponent },
  { path: 'car-list', component: CarListComponent},
  {
    path: 'car-list',
    component: CarListComponent,
    data: { title: 'Car List' }
  },
  { path: '',
    redirectTo: '/car-list',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarDetailComponent,
    AddFormComponent,
    MessagesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [CommService, MessageService, FakeLoginService],
  bootstrap: [
    AppComponent,
    MessagesComponent,
  ]
})
export class AppModule { }
