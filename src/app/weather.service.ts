import { Injectable } from '@angular/core';
import { WeatherHourly, WeatherLocally,WeatherDaily, WeatherAPI } from './Weather';
import { WeatherDataFL, WeatherDataFH,WeatherDataFD} from './mock-weather';
import { Observable,of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  
  private apiUrl = "http://api.weatherapi.com/v1/current.json?key=fb2d6ccd6ba44486aa1142428231110&q=London&aqi=no"

  constructor(private http:HttpClient) { }
  getWeatherL(): Observable<WeatherLocally[]>{
    const weatherLocally = of(WeatherDataFL);
    return weatherLocally
  }
  getWeatherH(): Observable<WeatherHourly[]>{
    const weatherHourly= of(WeatherDataFH);
    return weatherHourly
  }
  getWeatherD(): Observable<WeatherDaily[]>{
    const weatherDaily = of(WeatherDataFD);
    return weatherDaily
  }

 
  getWeatherAPI() {
    var localLoc = ["Cape Town","Durbanville"];
    var localData = [];
    for (let index = 0; index < localLoc.length; index++) {

      localData[index] = this.http.get("http://api.weatherapi.com/v1/current.json?key=fb2d6ccd6ba44486aa1142428231110&q="+ localLoc+"&aqi=no")
      
    }
    return localData
  }
}
