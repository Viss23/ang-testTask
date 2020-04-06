import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,pluck,tap, take } from 'rxjs/operators';

import { News } from './news.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class NewsService{

  private news: News[];

  private url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=e3e0624f67364b34b8613b6f9cd5ef4f';
  
  constructor(private http:HttpClient){

  }

  fetchNews(): Observable<News[]>{
    return this.http.get(this.url).pipe(
      pluck('articles')
    )
  }

  getNews(){
    return this.news;
  }
}