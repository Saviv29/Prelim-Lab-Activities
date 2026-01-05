import { Routes } from '@angular/router';

import { Home} from './home/home';
import { Join } from './join/join';
import { Organization } from './organization/organization';
import { Partners } from './partners/partners';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: Home},
  { path: 'join', component: Join},
  { path: 'organization', component: Organization},
  { path: 'partners', component: Partners},
];
