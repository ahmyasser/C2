import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SportsComponent } from './sports.component';
import { SportsRoutingModule } from './sports-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SportService} from './sports.service';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule,SportsRoutingModule, Ng2SmartTableModule, FormsModule],
    declarations: [SportsComponent],
    providers: [SportService]
})
export class SportsModule { }
