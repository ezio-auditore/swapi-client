import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PeopleService } from '../people.service';
import { Person } from '../person';
@Component({
  selector: 'app-person-details',
  templateUrl:'./person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
person :Person;
sub:any;
  constructor(private peopleService :PeopleService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    });
  }
  // ngOnDestroy(){
  //   this.sub.unsubscribe();
  // }
goToPeopleList(){
  let link =['/persons'];
  this.router.navigate(link);
}
}
