import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as moment from 'moment';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  list = [];
  cityList = [];
  skillList = [];
  selectedCity = null;
  selectedSkill = null;
  selectedSession = null;
  selectedDate = null;

  constructor(private router: Router) {

  }



  ngOnInit() {

    this.cityView();
    this.skillView();

    //setting default values
    this.selectedSession = "0";
    this.selectedSkill = "5";
    this.selectedCity = "5";
    //this.selectedDate = new Date();
  }



  //Search function with parameters
  public search() {


    axios.post('http://localhost:49703/api/Search/SearchData',
      {

        CityId: this.selectedCity,
        UnavailableDates: moment(this.selectedDate).format('LL'),
        Session: this.selectedSession,
        SkillId: this.selectedSkill
      })
      .then((response) => {

        this.list = response.data;
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


  //city view function
  public cityView() {
    axios.post('http://localhost:49703/api/City/GetCity')
      .then((response) => {
        this.cityList = response.data;

        console.log(this.cityList);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }

  //skill view function
  public skillView() {
    axios.post('http://localhost:49703/api/Skill/GetSkill')
      .then((response) => {
        this.skillList = response.data;

        console.log(this.skillList);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }



  toProfile(FreelancerId) {
    this.router.navigate(['/profile/' + FreelancerId]);
    console.log(FreelancerId);



  }
}
