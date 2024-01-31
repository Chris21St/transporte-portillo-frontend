import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  url='http://localhost:4000/api/travel/';

  constructor(private http:HttpClient) { }

  getTravels(){
    return this.http.get(this.url);
  }
  getTravelById(id:any){
    return this.http.get(this.url+id);
  }
}
