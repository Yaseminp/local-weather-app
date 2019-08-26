import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CitySearchComponent } from './city-search/city-search.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from './weather/weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherServiceFake } from './weather/weather.service.fake';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        CitySearchComponent,
        CurrentWeatherComponent
      ],
      providers: [{provide: WeatherService, useclass: WeatherServiceFake}],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'local-weather-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('local-weather-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to local-weather-app!');
  });
});
