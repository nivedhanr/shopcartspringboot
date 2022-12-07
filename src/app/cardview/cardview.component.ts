import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent {
  
  
    
  data:any=[]
  
  
  productname=""


  img=""
  des=""
  category=""
  price=""
  datas:any=[]


  constructor(private api:ApiService){
    api.fetchproduct().subscribe(
      (response)=>{
        this.datas=response;
      }
    )
  }
  
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
