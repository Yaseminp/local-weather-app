import {IWeatherService} from './weather.service';
import {ICurrentWeather} from '../icurrent-weather';
import {of} from 'rxjs';

export class WeatherServiceFake implements IWeatherService {
  getCurrentWeather(search: string | number, country?: string): import("rxjs").Observable<ICurrentWeather> {
    throw new Error("Method not implemented.");
  }
  private fakeWeather: ICurrentWeather = { city:'Bursa', country:'TR', date: 1487589060, image: '', temperature: 280.32, description: 'light intensity drizzle'}

  public gerCurrentWeather (search: string | number ,country?:string){
    return of(this.fakeWeather);
  }
}