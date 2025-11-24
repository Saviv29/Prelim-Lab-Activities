import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  //text interpolation
  message = "Data Binding Demo";
  title = "My First App";
  description = "This is my new Angular Application!";

  //property binding
  imageUrl = "https://plus.unsplash.com/premium_photo-1664299631876-f143dc691c4d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnl8ZW58MHx8MHx8fDA%3D"
  w = 120;
  h = 120;
  textColor = 'red';

  isHighlighted = true;
  yourName = " ";
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
