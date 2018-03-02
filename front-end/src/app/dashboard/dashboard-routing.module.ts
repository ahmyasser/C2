import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { MyitemsComponent } from './myitems/myitems.component';
import {SportsComponent} from "./store/sports/sports.component";

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
    {
      path: '',
      loadChildren : './about/about.module#AboutModule'
    },
    {
      path:'myitems',
      component: MyitemsComponent
    },
    {
      path:'items',
      loadChildren : './items/items.module#ItemsModule'
    },
    { path: 'authe',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    {
      path: 'signup',
      component: SignupComponent
    }
  ]},
    {
      path: 'store',
      children: [

        {
          path: 'sportstore',
          component: SportsComponent,
        },
        // {
        //       path: 'foodstore',
        //       component: FoodComponent,
        //   },
        // {
        //   path: 'fashionstore',
        //   component: FashionComponent,
        // },
        // {
        //   path: 'elecstore',
        //   component: ElectronicComponent,
        // },
      ],

    }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
