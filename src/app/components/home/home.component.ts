import { Component, OnInit } from '@angular/core';
import { Articles } from '../../services/articles.model';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recentProjects: Articles[];
  constructor(private articlesSvc: ArticlesService) { }

  ngOnInit() {
    this.articlesSvc.get().subscribe(data => {
      this.recentProjects = data.splice(0, 7);
    });
  }

}
