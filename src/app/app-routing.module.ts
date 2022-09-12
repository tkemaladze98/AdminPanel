import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './shared-components/authorization/authorization.component';
import { ReactiveFormComponent } from './shared-components/reactive-form/reactive-form.component';
import { RegistrationComponent } from './shared-components/registration/registration.component';
import { SalesFormComponent } from './shared-components/sales-form/sales-form.component';
import { TemplateDrivenFormComponent } from './shared-components/template-driven-form/template-driven-form.component';
import { MainPgComponent } from './views/main-pg/main-pg.component';
import { ReservationComponent } from './views/reservation/reservation.component';
import { DashboardComponent } from './views/side-nav-bar/dashboard/dashboard.component';
import { HotelsComponent } from './views/side-nav-bar/hotels/hotels.component';
import { RoomsComponent } from './views/side-nav-bar/rooms/rooms.component';
import { SalesComponent } from './views/side-nav-bar/sales/sales.component';
import { UsersComponent } from './views/side-nav-bar/users/users.component';
import { SignInUpPgComponent } from './views/sign-in-up-pg/sign-in-up-pg.component';
import { UpdateHotelComponent } from './views/update-hotel/update-hotel.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPgComponent,
    children: [
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'Hotels', component: HotelsComponent },
      { path: 'Users', component: UsersComponent },
      { path: 'Sales', component: SalesComponent },
      { path: 'templateDrivenForm', component: TemplateDrivenFormComponent },
      { path: 'update/:key', component: UpdateHotelComponent },
      { path: 'Rooms/:key', component: RoomsComponent },
      { path: 'reactive/:key/:index', component: ReactiveFormComponent },
      { path: 'reserve/:key/:index', component: ReservationComponent },
      { path: 'salesForm', component: SalesFormComponent },
    ],
  },

  { path: 'registration', component: RegistrationComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'signInUp', component: SignInUpPgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
