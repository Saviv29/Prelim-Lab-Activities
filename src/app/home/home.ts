import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface City {
  name: string;
  description: string;
  themes: string[];
  imagePath: string;
  link: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  cities: City[] = [
    {
      name: 'France',
      description: "The largest country in Western Europe, has long been a gateway between the continent's northern and southern regions.",
      themes: ['Architecture and Fine Arts', 'Cultural Events', 'Safety and Security'],
      imagePath: 'path/to/france-image.jpg',
      link: '/organization'
    },
    {
      name: 'Seoul',
      description: 'Korean Soul, formally Soul-t\'ükpyölsi ("Special City of Seoul"), city and capital of South Korea (the Republic of Korea).',
      themes: ['Humanities and Arts', 'Cultural Events', 'Safety and Security'],
      imagePath: 'path/to/seoul-image.jpg',
      link: '/partners'
    },
    {
      name: 'San Francisco',
      description: "It is a cultural and financial centre of the western United States and one of the country's most cosmopolitan cities.",
      themes: ['Science and Techology', 'Cultural Events', 'Safety and Security'],
      imagePath: 'path/to/sf-image.jpg',
      link: '/join'
    },
    {
      name: 'Boston',
      description: 'Best known for its famous baked beans, Fenway Park, The Boston Marathon, and of course for the bar from Cheers.',
      themes: ['Engineering and Tech', 'Cultural Events', 'Safety and Security'],
      imagePath: 'path/to/boston-image.jpg',
      link: '/home'
    }
  ];
}


