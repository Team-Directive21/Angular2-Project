import { SortPipe } from './../pipes/sort.pipe';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/index';

@Component({
  selector: 'app-top-drivers',
  templateUrl: './top-drivers.component.html',
  styleUrls: ['./top-drivers.component.css']
})
export class TopDriversComponent implements OnInit {

  users: User[];
  constructor() {
    this.users = [
      {id: 4, username: 'kolio', password: 'qwe', firstName: 'Pesho', lastName: 'Petrov', rating: 5},
      {id: 3, username: 'wiki', password: 'gfg', firstName: 'Mario', lastName: 'Kiryazov', rating: 8},
      {id: 2, username: 'popo', password: '234', firstName: 'Glep', lastName: 'Romanich', rating: 4},
      {id: 1, username: 'washdishes', password: 'wqqwww', firstName: 'Ivan', lastName: 'Georgiev', rating: 10}
    ];
  }

  ngOnInit() {
    //console.log(this.users[3].rating);
  }

}
