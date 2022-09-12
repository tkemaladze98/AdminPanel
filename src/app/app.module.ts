import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPgComponent } from './views/main-pg/main-pg.component';
import { SideNavBarComponent } from './views/side-nav-bar/side-nav-bar.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { AuthorizationComponent } from './shared-components/authorization/authorization.component';
import { ReactiveFormComponent } from './shared-components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './shared-components/template-driven-form/template-driven-form.component';
import { RegistrationComponent } from './shared-components/registration/registration.component';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './views/side-nav-bar/dashboard/dashboard.component';
import { HotelsComponent } from './views/side-nav-bar/hotels/hotels.component';
import { RoomsComponent } from './views/side-nav-bar/rooms/rooms.component';
import { SalesComponent } from './views/side-nav-bar/sales/sales.component';
import { UsersComponent } from './views/side-nav-bar/users/users.component';
import { SignInUpPgComponent } from './views/sign-in-up-pg/sign-in-up-pg.component';
import { UpdateHotelComponent } from './views/update-hotel/update-hotel.component';
import { CarouselComponent } from './shared-components/carousel/carousel.component';
import { ReservationComponent } from './views/reservation/reservation.component';
import { SalesFormComponent } from './shared-components/sales-form/sales-form.component';
import { SpinnerComponent } from './shared-components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPgComponent,
    SideNavBarComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    AuthorizationComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    DashboardComponent,
    HotelsComponent,
    SpinnerComponent,
    RoomsComponent,
    SalesComponent,
    UsersComponent,
    SignInUpPgComponent,
    UpdateHotelComponent,
    CarouselComponent,
    ReservationComponent,
    SalesFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatIconModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
