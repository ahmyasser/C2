import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {SportService} from './sports.service'
@Component({
    selector: 'app-toys',
    template: '<ng2-smart-table [settings]="settings" [source]="data" (createConfirm)="onCreateCall($event)" (editConfirm)="onEditCall($event)" (deleteConfirm)=onDeleteCall($event) ></ng2-smart-table>',
    providers: [SportService]
})
// <ng2-smart-table [settings]="settings"></ng2-smart-table>
export class SportsComponent implements OnInit {
    settings = {
        add: {
            confirmCreate: true,
        },
        edit: {
            confirmSave: true,
        },
        delete:{
            confirmDelete: true,
        },
        columns: {

            name: {
                title: 'Product Name'
            },
            price: {
                title: 'Price'
            },
            createdAt: {
                title: 'Created At'
            },
            updatedAt: {
                title: 'Updated At'
            },

            component: {
                title: 'Component'
            },

            seller: {
                title: 'Seller Name'
            }
        }
    };

    data = [];

    constructor(private sportService:SportService){
    }

    onCreateCall(event){
        event.confirm.resolve(event.newData);
        this.sportService.createProduct(event.newData.name, event.newData.price, event.newData.createdAt, event.newData.updatedAt, event.newData.component, event.newData.seller).subscribe();
    }

    onEditCall(event){
        event.confirm.resolve(event.newData);
        this.sportService.updateProduct(event.newData._id, event.newData.name, event.newData.price).subscribe();
    }

    onDeleteCall(event){
        event.confirm.resolve(event.data._id);
        console.log(event.data._id);
        this.sportService.deleteProduct(event.data._id).subscribe();
    }
    ngOnInit() {
        this.sportService.getProducts().subscribe(
            (res:any)=>{
                if(res.hasOwnProperty('data')){
                    this.data=res.data;
                }


    }

    );
    }

}
