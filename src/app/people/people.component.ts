import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service'

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

	constructor( private peopleService: PeopleService ) { }

	ngOnInit() {
		this.peopleService.getPeople()
			.then( arrayPeople => this.people = arrayPeople )
	}

}
