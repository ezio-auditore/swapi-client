import { NgModule } from '@angular/core';

import { PersonDetailsComponent } from './person-details/person-details.component';

import {Routes ,RouterModule} from '@angular/router';
import {PeopleListComponent} from './people-list/people-list.component';

const routes : Routes = [
{
  path :'persons',
  component : PeopleListComponent
},
{
  path : 'persons/:id',
  component : PersonDetailsComponent
}
,
{
  path : '',
  redirectTo: '/persons',
  pathMatch : 'full'
}

];

@NgModule({
  imports :[RouterModule.forRoot(routes)],
  exports :[RouterModule]
})
export class AppRoutingModule{}
