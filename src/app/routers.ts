import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { DetailsComponent } from './details/details.component';


const appRoutes : Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'people', component: PeopleComponent },
	{ path: 'people/:id', component: DetailsComponent }
]

export const routers:ModuleWithProviders = RouterModule.forRoot(appRoutes); 