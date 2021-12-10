import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css']
})
export class ProductBrandComponent implements OnInit {
  param:any = {};
  
  constructor(private _route: ActivatedRoute){}
    
  ngOnInit(){
        this._route.params.subscribe(params => this.param = params)
    }
}