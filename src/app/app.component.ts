import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
