import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponentComponent } from './layout-component/aside-component/aside-component.component';
import { ContainerComponentComponent } from './layout-component/container-component/container-component.component';
import { ContentComponentComponent } from './layout-component/content-component/content-component.component';
import { FooterComponentComponent } from './layout-component/footer-component/footer-component.component';
import { HeaderComponentComponent } from './layout-component/header-component/header-component.component';
import { ContentContainerComponentComponent } from './layout-component/content-container-component/content-container-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './layout-component/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    AsideComponentComponent,
    ContainerComponentComponent,
    ContentComponentComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    ContentContainerComponentComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
