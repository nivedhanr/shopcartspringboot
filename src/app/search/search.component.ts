import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api:ApiService){}
  productname=""
  fetchsearch:any=[]
  readValue=()=>{
    let data={"productname":this.productname}
    console.log(data)
    this.api.fetchsearch(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("invalid course")
          
        } else {
          this.fetchsearch=response
          
        }
      }
    )
  }
  
}
