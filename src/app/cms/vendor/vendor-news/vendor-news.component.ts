import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news/news';
import { environment } from 'src/environments/environment';
import { NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'app-vendor-news',
  templateUrl: './vendor-news.component.html',
  styleUrls: ['./vendor-news.component.css']
})
export class VendorNewsComponent implements OnInit {
  _listFilter: string;
  news: News[] = [];
  filteredNews: News[];
  errorMessage: any;
  imageBaseUrl = environment.baseImageUrl;


  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredNews = this.listFilter ? this.performFilter(this.listFilter) : this.news;
  }
  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(
      newsPage => {
        this.news = newsPage.data;
        this.filteredNews = this.news;
      },
      error => this.errorMessage = "An error occurred please try again try again later"
    );
    // cleaar error after 5s
    if(this.errorMessage) {
      setTimeout(()=>this.errorMessage = '', 5000)
    }
  }

  performFilter(listFilter: string): News[] {
    listFilter = listFilter.toLocaleLowerCase();
    return this.news.filter((newsArticle: News) =>
      newsArticle.description.toLocaleLowerCase().indexOf(listFilter) !== -1);
  }

}