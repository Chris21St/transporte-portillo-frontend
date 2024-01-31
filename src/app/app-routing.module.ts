import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { DriverDetailComponent } from './components/driver-detail/driver-detail.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateDriverComponent } from './components/create-driver/create-driver.component';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { TravelsComponent } from './components/travels/travels.component';
import { TravelsDetailComponent } from './components/travels-detail/travels-detail.component';
import { DriverAdminComponent } from './components/driver-admin/driver-admin.component';
import { ConfigComponent } from './components/config/config.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TravelsAdminComponent } from './components/travels-admin/travels-admin.component';

const routes: Routes = [
  {path:"", component:TravelsAdminComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:SingUpComponent},
  {path:"edit-user/:id", component:CreateUserComponent},
  {path:"create-user", component:CreateUserComponent},
  {path:"create-driver", component:CreateDriverComponent},
  {path:"edit-driver/:id", component:CreateDriverComponent},
  {path:"userlist", component:UserListComponent},
  {path:"useradmin", component:UsersAdminComponent},
  {path:"driveradmin", component:DriverAdminComponent},
  {path:"driver-list", component:DriverListComponent},
  {path:"user-detail/:id", component:UserDetailsComponent},
  {path:"driver-detail/:id", component:DriverDetailComponent},
  {path:"travel-list", component:TravelsComponent},
  {path:"travel-detail/:id", component:TravelsDetailComponent},
  {path:"config", component:ConfigComponent},
  {path:"calculator", component:CalculatorComponent},
  //{path:"", redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
