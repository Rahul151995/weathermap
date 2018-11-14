import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private service: ServiceService){
}

  title = 'app';

image:any;
currentWeather:any = {
  sys:{
    country:undefined
  },
  main:{
    humidity:undefined,
    pressure:undefined,
    temp:undefined,
    temp_max:undefined,
    temp_min:undefined
  },
  wind:{
    speed:undefined
  },weather:[{
    description:undefined
  }],visibility:undefined
};
  ngOnInit() {
this.forecast();
this.current();

  }

  forecast()
  {
    this.service.forecast().subscribe(res=>{
console.log("forcast",res);
    },err=>{
console.log("forcast err",err);
    })
  }

  current()
  {
    this.service.current().subscribe(res=>{
      console.log("current",res);
      this.currentWeather = res;
      if(res.weather[0].icon){
        this.image ="http://openweathermap.org/img/w/" + res.weather[0].icon + ".png";
      }
     
    },err=>{
      console.log("current err",err);
    })
  }
}
