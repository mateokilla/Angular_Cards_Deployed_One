import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: '../assets/tree.jpeg',
      username: 'nature',
      content: 'Some shit about some shit',
    },
    {
      title: 'Big mountain',
      imageUrl: '../assets/mountain.jpeg',
      username: 'fucking fuck',
      content: 'Some shit about some shit',
    },
    {
      title: 'Bikini',
      imageUrl: '../assets/biking.jpeg',
      username: 'gay stuff',
      content: 'Some shit about some shit',
    },
  ];
}
