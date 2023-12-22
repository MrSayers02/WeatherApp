import { Injectable } from '@angular/core';
import { WeatherHourly, WeatherLocally,WeatherDaily, WeatherAPI } from './Weather';
import { WeatherDataFL, WeatherDataFH,WeatherDataFD} from './mock-weather';
import { Observable,forkJoin,of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  
  private apiUrl = "http://api.weatherapi.com/v1/current.json?key=fb2d6ccd6ba44486aa1142428231110&q=London&aqi=no"

  constructor(private http:HttpClient) { }
  
 

 
  getWeatherAPI() {
    
    var sources = [
      this.http.get("http://api.weatherapi.com/v1/forecast.json?key=fb2d6ccd6ba44486aa1142428231110&q=Cape Town&days=7&aqi=no"),
      this.http.get("http://api.weatherapi.com/v1/forecast.json?key=fb2d6ccd6ba44486aa1142428231110&q=Grassy Park, South Africa&days=7&aqi=no"),
      this.http.get("http://api.weatherapi.com/v1/forecast.json?key=fb2d6ccd6ba44486aa1142428231110&q=Durbanville&days=7&aqi=no"),
      this.http.get("http://api.weatherapi.com/v1/forecast.json?key=fb2d6ccd6ba44486aa1142428231110&q=Boston, South Africa&days=7&aqi=no"),
      this.http.get("http://api.weatherapi.com/v1/forecast.json?key=fb2d6ccd6ba44486aa1142428231110&q=Stellenbosch&days=7&aqi=no")
      
    ];
    return forkJoin(sources);
  }

  getWeatherSearch(loc : string){
    
    return this.http.get("http://api.weatherapi.com/v1/forecast.json?key=fb2d6ccd6ba44486aa1142428231110&q="+ loc +"&days=7&aqi=no")
  }

}
