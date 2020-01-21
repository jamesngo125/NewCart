import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  // In the ngOnInit() method, subscribe to route params and fetch the product based on the productId.
  // Angular calls ngOnInit() shortly after creating a component.

  // The route parameters correspond to the path variables defined in the route. The productId is provided from the URL that was matched to the route. You use the productId to display the details for each unique product.
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}


// The ActivatedRoute is specific to each routed component loaded by the Angular Router. It contains information about the route, its parameters, and additional data associated with the route.