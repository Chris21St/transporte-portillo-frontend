import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API='http://localhost:4000/api/auth';

const httpOptions={
  headers: new HttpHeaders({'Content-Type':'aplication/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  /* login(email: string, password: string): Observable<any> {
    return this.http.post(API + '/signin', {
      email,
      password
    }, httpOptions);
  } */
  login(email:string, password:string){
    return this.http.post(API+'/login',{email,password})
  }
  register(email: string, password: string): Observable<any> {
    return this.http.post(API + '/signup', {
      email,
      password
    }, httpOptions);
  }
  logout():Observable<any>{
    return this.http.post(API+'singout',{},httpOptions)
  }
}
