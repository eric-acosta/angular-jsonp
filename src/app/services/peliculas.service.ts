import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx'; //map


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "u453452345432654632543";
  private urlMoviedb:string = "http://api.themoviedb.org/3"

  constructor( private jsonp:Jsonp, private http:Http) { }



  getPopulares(){
    let url = `${ this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey}&language=es &callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(res=> res.json());
  }
  
}

