import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from 'header';
import { ItemComponent } from 'item';
import { ButtonComponent } from 'button';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HeaderComponent,
    ItemComponent,
    ItemComponent,
    ButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ListComponent],
})
export class AppModule {}
