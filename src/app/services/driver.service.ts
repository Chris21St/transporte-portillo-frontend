import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  url='http://localhost:4000/api/driver/';

  constructor(private http:HttpClient) { }

  createDriver(datos:any){
    return this.http.post(this.url,datos);
  }
  getDrivers(){
    return this.http.get(this.url);
  }
  editDriver(id:any,data:any){
    return this.http.put(this.url+id,data);
  }
  getDriverById(id:any){
    return this.http.get(this.url+id);
  }
  deleteDriver(id:any){
    return this.http.delete(this.url+id);
  }
  searchDriver(search:string){
    return this.http.get(this.url+'search?search='+search)
  }
}
