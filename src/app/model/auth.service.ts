import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private datasource: RestDataSource) { }

  authenticate(username: string, password: string): Observable<boolean>{
    return this.datasource.authenticate(username,password);
  }

  get authenticated(): boolean{
    return RestDataSource.auth_token != null;
  }

  clear(){
    RestDataSource.auth_token = null;
  }
}
