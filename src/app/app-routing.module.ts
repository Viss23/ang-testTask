import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from "./home/home.component"
import { LoginComponent } from "./login/login.component";
import { NewsComponent } from "./news/news.component";
import { ProfileComponent } from "./profile/profile.component" 
import { AuthguardService } from './auth-guard.service';


const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'login',component: LoginComponent},
  { path: 'news',component: NewsComponent},
  { path: 'profile',component: ProfileComponent , canActivate: [AuthguardService]},
  { path: "**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
