import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { EventEmitter } from '@angular/core';
import { Person } from './models/person';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IntunityTeamService {

  private jsonUrl = 'assets/data/intunity-team.json';

  constructor(private http: Http) { }

  getTeam(): Observable<Person[]> {
    return this.http.get(this.jsonUrl)
    .map((res) => res.json());
  }


}
