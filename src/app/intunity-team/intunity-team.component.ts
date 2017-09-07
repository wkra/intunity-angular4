import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NgClass } from '@angular/common';

import { IntunityTeamService } from './intunity-team.service';
import { Person } from './models/person';

@Component({
  selector: 'app-intunity-team',
  templateUrl: './intunity-team.component.html',
  styleUrls: ['./intunity-team.component.scss']
})

export class IntunityTeamComponent implements OnInit {

  intunityTeam: Person[] = [];
  currentCity: string;

  private jsonUrl = 'assets/data/intunity-team.json';


    constructor(private http: Http, private intunityTeamService: IntunityTeamService) { }

  ngOnInit() {
    this.loadTeam();
  }

  loadTeam(): void {
    this.intunityTeamService.getTeam()
      .subscribe((team) => {
        this.intunityTeam = team;
        console.log(this.intunityTeam);
      });
  }

  setCurrCity(val): void {
    this.currentCity = val;
  }

}
