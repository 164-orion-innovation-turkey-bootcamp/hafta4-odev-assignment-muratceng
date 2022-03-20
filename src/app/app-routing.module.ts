import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './CardDetails/CardDetails.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { ProductDetailsComponent } from './ProductDetails/ProductDetails.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { SignUpComponent } from './SignUp/SignUp.component';

const routes: Routes = [
  {
    path: 'SignIn',
    component: SignInComponent,
  },
  {
    path : 'Product/Details/:id',
    component:ProductDetailsComponent
  },
  {
    path: 'SignUp',
    component: SignUpComponent,
  },
  { path: 'Dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/SignIn', pathMatch: 'full' },
  {path:'CardDetails', component:CardDetailsComponent}
  //{ path: '**', redirectTo: '/SignIn' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
