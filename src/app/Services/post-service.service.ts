import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.httpClient.get<any>(environment.endpoint + '/posts');
  }

  getPostDetails(id): Observable<any> {
    return this.httpClient.get<any>(environment.endpoint + '/posts/' + id);
  }

  getPostComments(id): Observable<any> {
    return this.httpClient.get<any>(environment.endpoint + '/posts/' + id+'/comments');
  }
}
