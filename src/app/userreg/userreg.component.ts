import { Component } from '@angular/core';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {
  name=""
  address=""
  email=""
  phn=""
  username=""
  password=""
  confirmpass=""

  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"email":this.email,"phn":this.phn,"username":this.username,"password":this.password,"confirmpass":this.confirmpass}
    console.log(data)
    if (this.password==this.confirmpass) {
      alert("successfully registered")
      
    } else {
      alert("check password and confirm password")
    }
  }
}
