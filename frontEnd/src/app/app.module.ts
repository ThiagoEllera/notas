import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { TesteComponent } from './pages/teste/teste.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {ProdutoModule} from "./pages/produto/produto.component";






@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,






  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProdutoModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
