import { Component, OnInit } from '@angular/core';
import { Social } from '../social';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
message:string;
email:string;
name:string;
stat(){
  console.log("message ''"+this.message+" ' Received from "+this.name);
}
links:Social[];
  constructor(private router:Router) { }

goToUrl(link,platform){
  console.log(link +" in "+platform);
  this.router.navigate(['/view',platform,link]);
}
  social:Social[]=[
    new Social('Github','https://www.github.com/deeksonparlma'),
    new Social('LinkedIn','http://bit.ly/2WZmyTc'),
    new Social('Twitter','https://www.twitter.com/code_mogul'),
    new Social('Instagram','https://www.instagram.com/__deekson__'),
  ]
  ngOnInit(): void {
    this.links = this.social;
  }
}
