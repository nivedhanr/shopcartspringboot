import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addproduct=(datatosend:any)=>
{
  return this.http.post("",datatosend)
}
  fetchproduct=()=>
  {
    return this.http.get("")
}
fetchsearch=(datatosend:any)=>
{
  return this.http.post("",datatosend)
}
}
