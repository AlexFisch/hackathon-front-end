import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountModule} from "./account/account.module";
import {LoginComponent} from "./account/login.component";
const routes: Routes = [
  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: () => AccountModule },

  // otherwise redirect to home
 // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
