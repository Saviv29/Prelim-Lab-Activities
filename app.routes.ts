import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Employees } from './employees/employees';
import { Products } from './products/products';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'about', component: About},
  { path: 'emplist', component: Employees},
  { path: 'product', component:  Products},
  { path: 'pagenotfound', component: PageNotFound},
  { path: '**', redirectTo: 'pagenotfound' }];