import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { DriverDetailComponent } from './components/driver-detail/driver-detail.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateDriverComponent } from './components/create-driver/create-driver.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { DriverAdminComponent } from './components/driver-admin/driver-admin.component';
import { TravelsComponent } from './components/travels/travels.component';
import { TravelsDetailComponent } from './components/travels-detail/travels-detail.component';
import { ConfigComponent } from './components/config/config.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TravelsAdminComponent } from './components/travels-admin/travels-admin.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingUpComponent,
    UserListComponent,
    HeaderComponent,
    UserDetailsComponent,
    DriverListComponent,
    DriverDetailComponent,
    CreateUserComponent,
    CreateDriverComponent,
    UsersAdminComponent,
    DriverAdminComponent,
    TravelsComponent,
    TravelsDetailComponent,
    ConfigComponent,
    CalculatorComponent,
    TravelsAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
