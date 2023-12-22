import { Component, OnInit,Input } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  constructor(private weatherService: WeatherService){}
  
  public loc :string = '';
  public locationVal : string = 'Stellenbosch';
  data: any;
  public activeLocationH: any[] = [];
  public activeLocationD: any[] = [];


  fetchData(location: string) {
    this.loc = location;
  
    // Create a Promise wrapper around the observable
    const fetchDataPromise = new Promise<void>((resolve, reject) => {
      this.weatherService.getWeatherSearch(this.loc).subscribe({
        next: (response) => {
          this.data = response;
          console.log(this.data);
          this.activeLocationH = this.data.forecast.forecastday[0].hour;
          this.activeLocationD = this.data.forecast.forecastday;
          resolve(); // Resolve the Promise when data is received

        },
        error: (error) => {
          console.error("ERROR weather", error);
          reject(error); // Reject the Promise when an error occurs
        }
      });
    });
  
    // Use async/await to wait for the Promise to complete
    (async () => {
      try {
        await fetchDataPromise;
      } catch (error) {
        // Handle the error gracefully
        // For example, you can display an error message to the user
        // or perform other error handling actions
        console.error("An error occurred while fetching data:", error);
      }
    })();
  }
  getDayOfWeek(dateString: string): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return daysOfWeek[dayOfWeek];
  }
  

}