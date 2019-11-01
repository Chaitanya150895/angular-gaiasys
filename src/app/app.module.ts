//@angular
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

//AdminLte
import { MainHeaderComponent } from './home/main/main-header/main-header.component';
import { MainSidebarComponent } from './home/main/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './home/main/main-footer/main-footer.component';
import { ContentWrapperComponent } from './home/main/content-wrapper/content-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './home/main/main.component';

//users
import { LoginPageComponent } from './login-page/login-page.component';

//pipes
import { PipeTransformPipe } from './pipe-transform.pipe';
import { NeedAuthGuard } from './auth.guard';
import { AddDetailsComponent } from './details/add-details/add-details.component';
import { EditDetailsComponent } from './details/edit-details/edit-details.component';
import { DetailListComponent } from './details/detail-list/detail-list.component';

@NgModule({
  declarations: [
    //App
    AppComponent,

    //AdminLte
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    DashboardComponent,
    MainComponent,
    ContentWrapperComponent,
    
    //Users
    LoginPageComponent,
    
    //pipes
    PipeTransformPipe,

    //details
    AddDetailsComponent,
    EditDetailsComponent,
    DetailListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DropDownListModule,
    DateTimePickerModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
