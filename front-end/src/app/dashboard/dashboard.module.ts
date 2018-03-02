import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './auth/login/login.component';

import { SportsComponent } from './store/sports/sports.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MyitemsComponent } from './myitems/myitems.component';
// import { StoreComponent } from './store/store.component';

@NgModule({
  imports: [ThemeModule,
            DashboardRoutingModule,
            FormsModule],
  declarations: [DashboardComponent,LoginComponent,SignupComponent,MyitemsComponent,SportsComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
