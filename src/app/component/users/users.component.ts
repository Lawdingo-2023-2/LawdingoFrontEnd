import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/model/users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataSource: MatTableDataSource<Users> = new MatTableDataSource();
  displayedColumns: string[] = ['idUser', 'name', 'email', 'password', 'numberPhone', 'DNI', 'birthday', 'lawyer', 'username', 'enabled'];

  constructor(private uS: UsersService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.uS.list().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

}