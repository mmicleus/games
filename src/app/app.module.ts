import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GameComponent } from './main/game/game.component';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './details/table/table.component';
import { UrlInterceptor } from './interceptor/http.interceptor';

// const routes: Routes = [
//   {
//     path: '',
//     component: MainComponent,
//   },
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameComponent,
    MainComponent,
    DetailsComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
