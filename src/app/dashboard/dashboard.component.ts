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
  weatherLocally:any = [];

  weatherAPI : any = [];
  public activeLocationH: any[] = [];
  public activeLocationD: any[] = [];


  constructor(private weatherService: WeatherService){}
  ngOnInit(): void {
   
 
       this.weatherService.getWeatherAPI().subscribe({
        next:(response)=>{
          this.weatherLocally = response
        },
        error:(error)=>{
          throw new Error("ERROR weather")
        }
       })
      
    
  
    
    

    

  }
  onClickMe(weatherLocally: any) {
    // const evtMsg = event ?  (event.target as HTMLElement).attributes : '';
    console.log( weatherLocally);
    this.activeLocationH = weatherLocally.forecast.forecastday[0].hour;
    this.activeLocationD = weatherLocally.forecast.forecastday;


     
   
  }
  getDayOfWeek(dateString: string): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return daysOfWeek[dayOfWeek];
  }


}
