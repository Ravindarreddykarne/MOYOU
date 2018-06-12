import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.css']
})
export class GuestHomeComponent implements OnInit {
 video1:string="./assets/Morning Motivation - Start your day Positively -  Motivational Video in Hindi.mp4"
  constructor() { }

  ngOnInit() {
  }

}
