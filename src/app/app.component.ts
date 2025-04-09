import { Component, Input } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  productName = 'asdf';
  author = 'asdf';
  company = 'asdf';
  isShow = true;
  photoUrl = 'asdf';

  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}
