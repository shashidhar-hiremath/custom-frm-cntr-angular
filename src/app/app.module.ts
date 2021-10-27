import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckBoxGrpComponent } from './custom-form-cntrl/check-box-grp/check-box-grp.component';
import { CheckboxComponent } from './custom-form-cntrl/check-box-grp/checkbox.component';
import { CounterComponent } from './custom-form-cntrl/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxGrpComponent,
    CounterComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
