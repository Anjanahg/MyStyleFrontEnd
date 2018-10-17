import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-top-rated-freelancers',
  templateUrl: './top-rated-freelancers.component.html',
  styleUrls: ['./top-rated-freelancers.component.css']
})
export class TopRatedFreelancersComponent implements OnInit {

  constructor(private router:Router) { }
    list=[];
    rate=4;

  ngOnInit() {
    axios.post('http://localhost:49703/api/HomePage/TopRatedFreelancers')
    .then((response) => {
      this.list =response.data;
      console.log(this.list);
      })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  }


    // profile view function
  toProfile(FreelancerId){
    this.router.navigate(['/profile/' + FreelancerId]);
   console.log(FreelancerId);

}
}