import { Component, OnInit } from '@angular/core';
import { CreatevideoService } from 'src/app/services/craetevideo/createvideo.service';
import { FormsModule, ReactiveFormsModule , FormGroup ,NgForm} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newgenrs:any={};
  subgenrs:any={};
  providers:any={};
  languages:any={};
  categories:any={};
  constructor(private createvideoService: CreatevideoService) { }

  ngOnInit() {
    this.createvideoService.getData().subscribe(data=>{
      console.log(data)
     this.newgenrs=data;
     console.log(this.newgenrs);
    });
    this.createvideoService.getgenresData().subscribe(data=>{
      console.log(data)
     this.subgenrs=data;
     console.log(this.subgenrs);
    });
    this.createvideoService.getprovidersData().subscribe(data=>{
      console.log(data)
     this.providers=data;
     console.log(this.providers);
    });
    this.createvideoService.getlanguagesData().subscribe(data=>{
      console.log(data)
     this.languages=data;
     console.log(this.languages);
    });
    this.createvideoService.getcategoryData().subscribe(data=>{
      console.log(data)
     this.categories=data;
     console.log(this.categories);
    });
  }
  createVideo(loginForm: NgForm): void {
  }
}
