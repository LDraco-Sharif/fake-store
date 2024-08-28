import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<string[]>(`${this.baseUrl}/products/categories`);
  }

  getProducts(category: string | null, limit: number | null = null, skip: number | null = null) {

    let url = `${this.baseUrl}/products`;
    if(category) {
      url += '/category/' + category;
    }
    let params = new HttpParams();
    
    if(limit) {
      params = params.set('limit', limit);
    }

    //Skip does not exist in the API as of now.
    if(skip) {
      params = params.set('skip', skip);
    }

    return this.http.get<ProductModel[]>( url,{params: params});
  }
}
