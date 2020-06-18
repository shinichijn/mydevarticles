import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Articles } from '../../services/articles.model';
import { trigger, transition, animate, style, stagger, animateChild, query } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(60, animateChild()))
      ])
    ]),
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('0.350s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class ArticlesComponent implements OnInit {

  types: string[];
  private _selectedType = 'all';

  get selectedType() {
    return this._selectedType;
  }

  set selectedType(newValue: string) {
    if (newValue !== this._selectedType) {
      this._selectedType = newValue;
      this.loadArticles(this._selectedType);
    }
  }

  rooms = ['Room 1', 'Living Room', 'Kitchen', 'Bathroom'];

  articles: Articles[];
  constructor(private articlesSvc: ArticlesService, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {
    const filter = this.route.snapshot.queryParamMap.get('filter');
    if (filter) {
      this._selectedType = filter;
    }

    this.loadArticles(this._selectedType);
  }

  loadArticles(selectedType: string): void {
    this.articlesSvc.get().subscribe(data => {
      this.types = data.map(p => p.type).filter((value, index, self) => self.indexOf(value) === index);
      this.articles = data.filter(p => p.type === selectedType || selectedType === 'all');
    });
  }

  showSnackBar(): void {
    this.snackBar.open("This is a demo function and will not show the actual article", "Dismiss", {
      duration: 2000,
    });

  }

}
