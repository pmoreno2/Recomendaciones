import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Article {
  name: string;
  description: string;
  categories: string[];
  link: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private jsonUrl = 'assets/articles.json';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.jsonUrl);
  }
}