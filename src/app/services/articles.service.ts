import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articles } from './articles.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Articles[]> {
    return this.httpClient.get<Articles[]>(environment.apiUrl);
  }
}
