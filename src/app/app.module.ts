import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { MatButtonModule, MatMenuModule, MatSidenavModule,MatNativeDateModule,MatFormFieldModule ,MatDatepickerModule,MatIconModule,MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './NewAccount/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewMemberComponent } from './NewAccount/new-member/new-member.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrowingComponent } from './drowing/drowing.component';
import { DialogAllModule } from '@syncfusion/ej2-angular-popups';

import { DiagramAllModule, SymbolPaletteAllModule, OverviewAllModule } from '@syncfusion/ej2-angular-diagrams';

import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';

import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { NumericTextBoxModule, ColorPickerModule, UploaderModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

import { ButtonModule, CheckBoxModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';

import { HttpModule } from '@angular/http';



import { CommonModule } from '@angular/common';

import { ResultComponent } from './result/result.component';
import { ProjectOptionsComponent } from './project-options/project-options.component';
import { ShowshapeComponent } from './showshape/showshape.component';



const appRoutes: Routes = [
  {path: 'main-page', component:  MainPageComponent},
  {path: 'first-page', component:  FirstPageComponent},
  {path: 'new-member', component:  NewMemberComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'welcome-page', component: WelcomePageComponent },
  {path: 'drowing', component:DrowingComponent},
  {path: '', redirectTo: 'welcome-page', pathMatch: 'full'}
];
// const material=[ 
//   MatDatepickerModule ,
//   MatNativeDateModule
// ]
@NgModule({
  imports: [
     MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatSidenavModule,
    HttpClientModule  ,
    AppRoutingModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DiagramAllModule,
    DialogAllModule,
    SymbolPaletteAllModule, 
    OverviewAllModule,
    ListViewAllModule,
    CommonModule,
    CircularGaugeModule,
    DropDownListAllModule,
    MultiSelectModule,
    ToolbarModule,
    NumericTextBoxModule,
    ColorPickerModule,
    UploaderModule,
    TextBoxModule,
    DropDownButtonModule,
    ButtonModule,
    CheckBoxModule,
    HttpModule,
    RadioButtonModule,
  ],
  declarations: [
    AppComponent,
    TitleComponent,
    WelcomePageComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    NewMemberComponent,
    FirstPageComponent,
    MainPageComponent,
    DrowingComponent,
   
    ResultComponent,
   
    ProjectOptionsComponent,
   
    ShowshapeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
