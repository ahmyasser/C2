import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class SportService {

    constructor(private httpClient: HttpClient) { }

    createProduct(name:string, price:number, createdAt:number, updatedAt:number, component:string, seller:string) {
        return this.httpClient.post(environment.apiUrl + 'c2/createProduct', {'name':name, 'price':price, 'updatedAt':updatedAt,'component':component,'seller':seller });
    }

    getProducts(){
        return this.httpClient.get(environment.apiUrl + 'c2/getProducts');
    }

    updateProduct(id:object, name:string, price:number) {
        return this.httpClient.patch(environment.apiUrl + 'c2/updateProduct/'+id,{'name':name, 'price':price});
    }

    deleteProduct(id:object){
        return this.httpClient.delete(environment.apiUrl+ 'c2/deleteProduct/'+id);
    }
}
