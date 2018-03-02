import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-myitems',
  templateUrl: './myitems.component.html',
  styleUrls: ['./myitems.component.scss']
})
export class MyitemsComponent implements OnInit {

  source : LocalDataSource;

  settings = {
    columns: {
      id: {
        title: 'ID',
        filter:false
      },
      name: {
        title: 'Full Name',
        filter:false
      },
      username: {
        title: 'User Name',
        filter:false
      },
      email: {
        title: 'Email',
        filter:false
      }
    }
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    }]
  constructor() { }

  ngOnInit() {
  }


  onSearch(query: string = '') {
    this.source.setFilter([
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false); 
    
  }

}
