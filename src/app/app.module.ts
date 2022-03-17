import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Components/Card/Card.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { SignUpComponent } from './SignUp/SignUp.component';
import { ProductDetailsComponent } from './ProductDetails/ProductDetails.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { FooterComponent } from './Components/Footer/Footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    CardComponent,
    ProductDetailsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
