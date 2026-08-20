import { Component, signal } from '@angular/core';
import { Footer } from './footer/footer';
import { Carousel } from './carousel/carousel';
import { Card } from './card/card';

@Component({
  imports: [Footer, Carousel, Card],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('revisao-app');
}
