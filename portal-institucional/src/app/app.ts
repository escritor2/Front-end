import { Component } from '@angular/core';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { HeroBanner } from './hero-banner/hero-banner';
import { CardProduct } from './card-product/card-product';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Sidebar, HeroBanner, CardProduct, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Portal Institucional';
}
