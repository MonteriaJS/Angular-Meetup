import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [ PeopleService ]
})
export class PeopleComponent implements OnInit {

	title = 'lista de personas';
	person = new Person(1, 'persona1');
	people : Person[];
	selectedPerson : Person;
	newPerson : Person = new Person(0, '');

	constructor( private peopleService: PeopleService, private router:Router ) { }

	ngOnInit() {
		this.peopleService.getPeople()
			.then( arrayPeople => this.people = arrayPeople )
	}

	addPerson(person:Person): void {
		this.peopleService.getLasId()
			.then( (id) => {
				person.id=id
				person.id++
				this.peopleService.addPerson(person)
				this.newPerson = new Person(0, '');
			} )
	}

	getPerson(person: Person) : void {
		let link = ['/people', person.id]
		this.router.navigate(link);
	}

}
