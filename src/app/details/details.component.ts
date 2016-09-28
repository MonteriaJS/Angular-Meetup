import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute, Params } from '@angular/router';
import { PeopleService } from '../people.service'; 


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ PeopleService ]
})
export class DetailsComponent implements OnInit {

	person : Person;

	constructor( private peopleService : PeopleService, private router : ActivatedRoute ) { }

	ngOnInit() {
		this.router.params.forEach((params:Params)=>{
			let id = +params['id'];

			this.peopleService.getPerson(id)
				.then( person => this.person = person )
		})
	}

}
