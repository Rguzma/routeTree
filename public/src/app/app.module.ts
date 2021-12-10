import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ReviewsDetailsComponent } from './reviews-details/reviews-details.component';
import { ReviewsAuthorComponent } from './reviews-author/reviews-author.component';
import { ReviewsAllComponent } from './reviews-all/reviews-all.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    ProductDetailsComponent,
    ProductBrandComponent,
    ProductCategoryComponent,
    ReviewsDetailsComponent,
    ReviewsAuthorComponent,
    ReviewsAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
