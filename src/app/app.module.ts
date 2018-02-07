import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { AddFormComponent } from './components/form/form.component';

const appRoutes: Routes = [
  { path: 'form', component: AddFormComponent },
  { path: 'car-list', component: CarListComponent},
  {
    path: 'car-list',
    component: CarListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/car-list',
    pathMatch: 'full'
  },

];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarListComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
