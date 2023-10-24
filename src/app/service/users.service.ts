import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../model/users';
import { Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http'

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = `${base_url}/users`
  private listaCambio = new Subject<Users[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Users[]>(this.url);
  }

  insert(u: Users) {
    return this.http.post(this.url, u);
  }

  setList(listaNueva: Users[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
