import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GuesthomeService} from  'src/app/services/guesthome/guesthome.service';
@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.css']
})
export class GuestHomeComponent implements OnInit {
  data: Object;
  videos: any={};
 video1:string="./assets/Morning Motivation - Start your day Positively -  Motivational Video in Hindi.mp4"
 
 
 constructor(private httpclient:HttpClient, private guesthomeService: GuesthomeService ) { }
 ngOnInit() {
  this.guesthomeService.getData().subscribe(data=>{
    console.log(data)
   this.videos=data;
   console.log(this.videos);
  });
}




}