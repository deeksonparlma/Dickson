import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-webview',
  templateUrl: './webview.component.html',
  styleUrls: ['./webview.component.css']
})
export class WebviewComponent implements OnInit {
  link:string ="null";
  platform:string="null";
  constructor(private route:ActivatedRoute,private WebService:WebService) { }

  ngOnInit() {
    // this.z = this.route.snapshot.paramMap.get('link');
    this.link =this.route.snapshot.paramMap.get('link');
    this.platform =this.route.snapshot.paramMap.get('platform');

    // this.WebService.checkLink(this.route.snapshot.paramMap.get('link'));
  }
}
