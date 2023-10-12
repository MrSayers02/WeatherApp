import { Component, OnInit,Input } from '@angular/core';
import { WeatherHourly, WeatherLocally,WeatherDaily, WeatherAPI } from '../Weather';
import { WeatherDataFL, WeatherDataFH,WeatherDataFD} from '../mock-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  weatherLocally: WeatherLocally[] = [];
  weatherHourly : WeatherHourly[] = [];
  weatherDaily : WeatherDaily[] = [];
  weatherAPI : WeatherLocally[] = [];

  constructor(private weatherService: WeatherService){}
  ngOnInit(): void {
    var weatherLocalData = {};
    this.weatherService.getWeatherL().subscribe((weatherLocally) => this.weatherLocally = weatherLocally);
    this.weatherService.getWeatherD().subscribe((weatherDaily) => this.weatherDaily = weatherDaily);
    this.weatherService.getWeatherH().subscribe((weatherHourly) => this.weatherHourly = weatherHourly);
    //this.weatherService.getWeatherAPI().subscribe((weatherAPI) => this.weatherAPI = weatherAPI);
    for (let index = 0; index < 3; index++) {
      
      this.weatherService.getWeatherAPI()[index].subscribe({
        next: (response: any) => {
          weatherLocalData[index] = {name : response.location.name};

          this.weatherAPI = [,response.current.temp_c,response.current.condition.icon];
        },
      });
      
      
    }
  
    
    

    

  }

}
