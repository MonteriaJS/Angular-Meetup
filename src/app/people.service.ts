import { Injectable } from '@angular/core';
import { Person } from './person'

let people : Person[] = [
	{ id: 1, name: 'Dennis Ritchie'},
	{ id: 2, name: 'Richard Stallman' },
	{ id: 3, name: 'Linus Torvalds' },
	{ id: 4, name: 'Steve Jobs' },
	{ id: 5, name: 'Bill Gates' },
	{ id: 6, name: 'Alan Turing' }
];

@Injectable()
export class PeopleService {

  constructor() { }

  getPeople() : Promise<Person[]>{
  		return new Promise<Person[]>( (resolve, reject)=>{
  			resolve(people);
  		} )
  }

}
