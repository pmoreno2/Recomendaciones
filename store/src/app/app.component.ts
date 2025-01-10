import { Component } from '@angular/core';
import { ArticleService } from './article.service';
import { CommonModule } from '@angular/common';

interface Article {
  name: string;
  description: string;
  categories: string[];
  link: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  title = 'store'; // Add this line
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((data: Article[]) => {
      this.articles = data;
    });
  }
}