import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container-fluid">
  <div class="wrap">
  <div class="search">
     <input type="text" class="searchTerm" placeholder="What are you looking for?">
     <button type="submit" class="searchButton">Search
     
    </button>
  </div>
</div>
  </div>
  <div>
  <nav class="navbar navbar-inverse" data-spy="affix" data-offset-top="197">
  <ul class="nav navbar-nav">
   
    <li><a  [routerLink]="['home/workbench']">Workbench</a></li>
    <li><a [routerLink]="['home/upload']">Upload</a></li>

  </ul>
</nav>
  </div>

  <router-outlet></router-outlet>
 
  
  `,
  styles: [
    `
    
.search {
  width: 100%;
  position: relative
}

.searchTerm {
  float: left;
  width: 136%;
  
  padding: 19px;
  height: 20px;
  
  outline: none;
  color: #131111;
  margin-left: -129px;
}

.searchTerm:focus{
  color: #00B4CC;
}

.searchButton {
  position: absolute;
  right: -104px;
  width: 95px;
  height: 42px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}


.wrap{
  width: 30%;
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
}
    .container-fluid{
      background-color: #072544;
      width: 100%;
      height: 400px;
      
  }
  .nav>li>a {
    color: white;
    font-size: 30px;
}

  .affix {
      top: 0;
      width: 100%;
      z-index: 9999 !important;
  }
  
  .affix + .container-fluid {
      padding-top: 70px;
  }
  ul.nav.navbar-nav{
      margin-left: 440px;
  }
  .navbar-inverse {
      background-color:#0b325a;
      border-color:none;
      border: none;

  }

    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
