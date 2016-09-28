import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';

const appRoutes : Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'people', component: PeopleComponent }
]

export const routers:ModuleWithProviders = RouterModule.forRoot(appRoutes); 