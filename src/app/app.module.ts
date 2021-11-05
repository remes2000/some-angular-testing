import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule} from '@angular/common/http';
import { MathComponent } from './math/math.component';
import { DummyComponentOne, DummyComponentThree, DummyComponentTwo, HideButtonComponent } from './hide-button/hide-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DisplayComponent,
    CardComponent,
    MathComponent,
    HideButtonComponent,
    DummyComponentOne,
    DummyComponentTwo,
    DummyComponentThree
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
