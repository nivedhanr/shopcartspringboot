import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  

  productname =""
  img=""
  category=""
  des=""
  price =""
  
  constructor(private api:Apiservice){}
  readValues=()=>
  {
    let data:any={"productname":this.productname,"img":this.img,"category":this.category,"des":this.des,"price":this.price}
    console.log(data)
    this.api.addproduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert(" added successfully")
          
          this.productname=""
          
          this.img=""
          this.category=""
          this.des=""
          this.price=""
          
         
        }else{
          alert("Something went wrong")
        }
        }
    )
}
}
