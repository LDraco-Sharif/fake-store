import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    {
        title: 'Fake Store',
        path: '',
        component: HomePageComponent
    },
    {
        title: 'Products',
        path: 'products',
        component: ProductsComponent
    },
    {
        title: 'Product Details',
        path: 'products/:productId',
        component: ProductDetailComponent
    }
];
