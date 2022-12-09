import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addproduct=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/add",datatosend)
}
  fetchproduct=()=>
  {
    return this.http.get("http://localhost:8080/view")
}
fetchsearch=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/search",datatosend)
}
userLogin=(datatosend: any)=>{
  
  return this.http.post("http://localhost:8080/userlogin", datatosend)
}
}
