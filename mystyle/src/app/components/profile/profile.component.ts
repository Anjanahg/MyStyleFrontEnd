import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  ProfileDetails = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   
    const UId = this.route.snapshot.paramMap.get('id');
    this.getProfiledetails(UId);
  }




  //profile details function
  public getProfiledetails(UId) {
    axios.post('http://localhost:49703/api/Profile/GetDetails',
    { 
      UserId:UId
    

   })
      .then((response) => {
        this.ProfileDetails = response.data;
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }

 


}