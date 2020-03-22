import { Component, OnInit,Input } from '@angular/core';
import { News } from '../../news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() newsItem: News;
  @Input() index:number;

  constructor() { }

  ngOnInit() {
  }

}
