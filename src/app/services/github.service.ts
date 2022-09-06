import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// https://api.github.com/users/reetesh818

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUserDetails(username: string) {
    return this.http.get(`https://api.github.com/users/${username}`);
  }

  getRepos(repourl:string){
    return this.http.get(repourl)
  }
}
