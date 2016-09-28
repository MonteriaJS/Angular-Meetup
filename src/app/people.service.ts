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

  addPerson(persona:Person) : void {
  		people.push(persona);
  }

  getLasId() : Promise<number> {
  		return new Promise<number>( (resolve, reject)=>{
  			resolve(people[people.length-1].id);
  		} )
  }

  getPerson(id: number) : Promise<Person> {
    return new Promise<Person>( (resolve, reject)=>{
      this.getPeople()
        .then( (array) => {
           resolve( array.find( person => person.id === id ) )
        } )
    } )
  }

  getPeople() : Promise<Person[]>{
  		return new Promise<Person[]>( (resolve, reject)=>{
  			resolve(people);
  		} )
  }

}
