import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Person } from './person';


@Injectable()
export class PeopleService {
  private baseUrl : string ="http://swapi.co/api"
 PEOPLE : Person[] = [];

constructor(private http : Http) {

 }
getAll() : Observable<Person[]>{
let people$ = this.http
  .get(`${this.baseUrl}/people`,{headers:this.getHeaders()})
  .map(this.mapPersons)
  return people$;
}

get(id:number) : Person{
  return this.PEOPLE.find(p => p.id ===id);
}
private getHeaders(){
  let headers = new Headers();
  headers.append('Accept','application/json');
  return headers;
}

 mapPersons(response:Response): Person[]{
    return response.json().results.map(this.toPerson);
}
   toPerson(r:any): Person{
    let person = <Person>({
      id :this.extractedID(r),
      name: r.name,
      weight:Number.parseInt(r.mass),
      height:Number.parseInt(r.height)
    });
    console.log("Person parsed: "+person);
    return person;
}
  extractedID(personData:any) : number{
    let id = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
    console.log(id);
    return parseInt(id);
}
}
