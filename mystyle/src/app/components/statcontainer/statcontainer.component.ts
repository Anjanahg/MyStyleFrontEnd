import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-statcontainer',
  templateUrl: './statcontainer.component.html',
  styleUrls: ['./statcontainer.component.css']
})
export class StatcontainerComponent implements OnInit {

  constructor() { }
  response={};
  ngOnInit() {
    axios.post('http://localhost:49703/api/homePage/GetHomePageData')
    .then((response) => {
      this.response = response.data;
      console.log(this.response);
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
