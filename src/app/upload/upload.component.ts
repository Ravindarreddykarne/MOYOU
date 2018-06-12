import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  template: `
    <h1>VIDEOS</h1>
    <div>
    <nav class="navbar" data-spy="affix" data-offset-top="197">
    <ul class="nav navbar-nav">
     
      <li><a  [routerLink]="['workbench']">Add New Content</a></li>
      <li><a [routerLink]="['search']">Search</a></li>
  
    </ul>
  </nav>
    </div>
  `,
  styles: [
    `
    h1{
      
      text-align: center;
      font-size: 327%;
      margin-top: 57px;
      color: #8a7070;
      font-family: "Times New Roman", Times, serif;
  }
  
    `
  ]
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
