import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  })
export class NavbarComponent implements OnInit {
home:string ='home';
skills:string ='skills';
projects:string='projects';
contact:string='contact';
  constructor(){

  }
  goToUrl(route){
       // this.SpinnerService.show();
       console.log('currently in '+route)
    }
  ngOnInit() {

  }
}
