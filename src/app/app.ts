import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { Home } from './home/home';
//import { Join } from './join/join';
//import { Organization } from './organization/organization';
//import { Partners } from './partners/partners';
//import { DataBinding } from './data-binding/data-binding';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conferenceApp');
}
