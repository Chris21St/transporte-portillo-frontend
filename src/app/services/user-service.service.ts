import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url='http://localhost:4000/api/user/';
  constructor(private http:HttpClient) { }
  createUser(datos:any){
    return this.http.post(this.url,datos);
  }
  getUsers(){
    return this.http.get(this.url);
  }
  editUser(id:any,data:any){
    return this.http.put(this.url+id,data);
  }
  getUserById(id:any){
    return this.http.get(this.url+id);
  }
  deleteUser(id:any){
    return this.http.delete(this.url+id);
  }
  searchUser(search:string){
    return this.http.get(this.url+'search?search='+search)
  }
}
