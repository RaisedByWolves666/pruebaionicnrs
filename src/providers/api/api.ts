import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
	console.log('Hello ApiProvider Provider');
  }

  getFilms() {
    return this.http.get('https://swapi.co/api/films');
}

getStarships() {
    return this.http.get('https://swapi.co/api/starships');
}

getVehicles() {
    return this.http.get('https://swapi.co/api/vehicles');
}

}