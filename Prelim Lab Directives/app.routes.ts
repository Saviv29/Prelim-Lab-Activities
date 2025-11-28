import { Routes } from '@angular/router';
import { Home } from './home/home';
import { directives } from './directives/directives';
import { DataBinding } from './data-binding/data-binding';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'directives', component: directives},
  { path: 'data-binding', component: DataBinding}
];
