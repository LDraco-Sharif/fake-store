import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  
  constructor(private productService: ProductService) {

  }
  categories: string[] = [];
  productsByCategory: Map< string, ProductModel[]> = new Map();

  ngOnInit(): void {
    this.getCatagories();
    
  }

  getCatagories() {
    this.productService.getCategories().subscribe((c) => {
      this.categories = c;
      this.categories.forEach(c => {
        this.getproducts(c, 10);
      });
    
    });
  }

  getproducts(category: string | null, limit: number = 10) {
    this.productService.getProducts(category, limit).subscribe((p) => {
      if(category) {
        this.productsByCategory.set(category, p);
      } 
    });
  }

}
