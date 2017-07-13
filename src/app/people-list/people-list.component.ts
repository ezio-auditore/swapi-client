import { Component, OnInit } from '@angular/core';
import {  NgFor } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Person } from '../person';
import { PeopleService } from '../people.service';
import { PersonDetailsComponent } from '../person-details/person-details.component';
@Component({
  selector: 'app-people-list',
  template: `
    <ul >
    <li *ngFor = "let person of people  ">
    <a [routerLink] = "['/persons',person.id]">{{person.name}}</a>
    </li>
    </ul>
  `,
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people : Person[] = [];
  selectedPerson : Person;
  constructor(private peopleService : PeopleService) {

  }

  ngOnInit() {
     this.peopleService.getAll().subscribe(p => this.people =p);
  }
  selectPerson(person :Person){
    this.selectedPerson = person;
  }
}
