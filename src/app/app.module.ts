import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { routing, appRoutingProviders } from './app.routing';
import { ApirestComponent } from './components/apirest/apirest.component';
import { GraphqlComponent } from './components/graphql/graphql.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    ApirestComponent,
    GraphqlComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
