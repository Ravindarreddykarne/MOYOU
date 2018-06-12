import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <header class="contaioner"> 
  <nav class="navbar navbar-right navbar-fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/home">MOYOU</a>
      <ul class="nav navbar-nav navbar-right">
          <li>  <a class=""  [routerLink]="['/home']">HOME</a></li>
         <li>  <a class=""  [routerLink]="['/features']">FEATURES</a></li>
          <li> <a class="dropdown" [routerLink]="['/about']">ABOUT</a></li>
        
         <li>  <a class=""   [routerLink]="['/login']">LOGIN</a></li>
         </ul>    
                     
         </div>
         </nav> 
       </header>
                        
                     
  `,
  styles: [
    `
    .navbar-nav[_ngcontent-c1] li[_ngcontent-c1] a[_ngcontent-c1]:hover, .navbar-nav[_ngcontent-c1] li.active[_ngcontent-c1] a[_ngcontent-c1] {
      color: #f4511e !important;
       background-color: none;
  }
    .navbar {
      margin-bottom: 0;
      background-color: transparent;
      z-index: 9999;
      border: 0;
      font-size: 12px !important;
      line-height: 1.42857143 !important;
      letter-spacing: 4px;
      border-radius: 0;
  }
  .navbar-brand {
      float: left;
      height: 50px;
      padding: 15px 15px;
      font-size: 18px;
      line-height: 20px;
      margin-top: 5px;
  }
  
  .navbar li a, .navbar .navbar-brand {
      color: white;
  }
  .navbar-nav>li>a {
      padding-top: 21px;
      padding-bottom: 15px;
  }
  
  .navbar-nav li a:hover, .navbar-nav li.active a {
      color: #f4511e !important;
      background-color: #fff !important;
  }

  
  .navbar-default .navbar-nav > li.dropdown:hover > a, 
  .navbar-default .navbar-nav > li.dropdown:hover > a:hover,
  .navbar-default .navbar-nav > li.dropdown:hover > a:focus {
      background-color: rgb(231, 231, 231);
      color: rgb(85, 85, 85);
  }
  li.dropdown:hover > .dropdown-menu {
      display: block;
  }
    `
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
