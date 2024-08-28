import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input({required: true}) product!: ProductModel;
}
