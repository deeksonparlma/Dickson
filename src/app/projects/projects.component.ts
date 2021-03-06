import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

openlink(link,project){
    this.router.navigate(['/view',project,link]);
}
  constructor(private router:Router) { }
  projects:Project[] = [
    {id:0,title:'Ajeidy',link:'https://play.google.com/store/apps/details?id=com.deekson.ajeidy',desc:'This is an Android application for a cologne store that allows users to view and purchase colognes of their liking ',date:'8/09/2020'},
    {id:0,title:'Wallpaper App',link:'https://play.google.com/store/apps/details?id=com.wallpapers_8k_Anime_Lofi.app',desc:'This is an Android application that enables users to view and set wallpapers from a collection made available to them ',date:'7/08/2020'},
    {id:0,title:'Visha',link:'https://play.google.com/store/apps/details?id=com.visha.app',desc:'Android Application that helps users select outfits before hand to ease the process of selecting future clads ',date:'18/07/2020'},
    {id:0,title:'Karibu Kenya',link:'https://karibukenya.herokuapp.com/',desc:'Web Application that informs potential tourists alot about Kenya before visisting ',date:'4/06/2020'},
    {id:0,title:'Meme Flix',link:'https://play.google.com/store/apps/details?id=com.deekson.memeflix',desc:'A mobile application that enables peoople to share memes',date:'01/03/2020'},
    {id:0,title:'E-learning',link:'https://digi-school-elearning.herokuapp.com',desc:'An App that makes learning materials available to students',date:'20/05/2020'},
    {id:0,title:'Covid19 Tracker',link:'https://github.com/deeksonparlma/APKs/raw/master/Covid19Tracker.apk',desc:'A mobile application that users can view Covid!9 updates for their country',date:'13/05/2020'},
    {id:0,title:'Music-Hub',link:'https://music-hub-app.herokuapp.com/',desc:'Web application that gives you access to playlists of different artists',date:'2/05/2020'},
    {id:0,title:'CountDown',link:'https://play.google.com/store/apps/details?id=com.deekson.countdown',desc:'Android application that counts down to a specific date from a user',date:'4/16/2020'},
    {id:0,title:'Movies Hub',link:'https://deeksonparlma.github.io/movies',desc:'Website design for hosting movies',date:'12/07/2019'},
  ];
  ngOnInit(): void {
  }

}
