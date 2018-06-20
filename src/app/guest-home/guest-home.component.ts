import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GuesthomeService} from  'src/app/services/guesthome/guesthome.service';
import { CreatevideoService } from 'src/app/services/craetevideo/createvideo.service';
import { YoutubePlayerModule } from 'ng2-youtube-player';

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.css']
})
export class GuestHomeComponent implements OnInit {
  
  data: any={};
  videos: any={};
  // getvideos: any={};
  // subgenrs: any={};
  
 constructor(private httpclient:HttpClient, private guesthomeService: GuesthomeService ,private createvideoService: CreatevideoService) { }
 ngOnInit() {
  this.guesthomeService.getData().subscribe(data=>{
    console.log(data)
   this.videos=data;
   console.log(this.videos);
  });
}
// getgenrs(){
//   this.createvideoService.getData().subscribe(data=>{
//     console.log(data)
//     this.getvideos=data;
//     console.log(this.getvideos);

//   })
// }
// getsubgenrs(){
//   this.createvideoService.getData().subscribe(data=>{
//     console.log(data)
//     this.subgenrs=data;
//     console.log(this.subgenrs);

//   })
// }




}