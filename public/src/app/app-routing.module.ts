import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ReviewsDetailsComponent } from './reviews-details/reviews-details.component';
import { ReviewsAuthorComponent } from './reviews-author/reviews-author.component';
import { ReviewsAllComponent } from './reviews-all/reviews-all.component';

const routes: Routes = [
  { path: 'products',component: ProductsComponent,
  children: [
    {
      path: 'details/:id',
      component: ProductDetailsComponent
    },
    {
      path: 'brand/:id',
      component: ProductBrandComponent
    },
    {
      path: 'category/:id',
      component: ProductCategoryComponent
    }
  ] },
  { path: 'reviews',component: ReviewsComponent, 
  children: [
    {
      path: 'details/:id',
      component: ReviewsDetailsComponent
    },
    {
      path: 'author/:id',
      component: ReviewsAuthorComponent
    },
    {
      path: 'all/:id',
      component: ReviewsAllComponent
    }
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
