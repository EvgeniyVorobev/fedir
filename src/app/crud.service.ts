import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_BASE_HREF } from './shared/constants';


@Injectable()
export class CrudService {

  constructor(private http: HttpClient) {
  }

  createComment(str) {
    let body = JSON.stringify(str);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(API_BASE_HREF + '/comments', body, {headers: headers});
  }

  readComment() {
    return this.http.get(API_BASE_HREF + '/comments');
  }

  readIdea() {
    return this.http.get(API_BASE_HREF + '/ideastartuplists');
  }

  updateComment(str) {
    let body = JSON.stringify(str);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(API_BASE_HREF + '/comments', body, {headers: headers});
  }

  deleteComment(id) {
    return this.http.delete(API_BASE_HREF + '/comments' + id);
  }

}
