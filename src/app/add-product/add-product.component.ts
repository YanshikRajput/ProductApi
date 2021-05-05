import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addform:FormGroup;
  constructor(private fb:FormBuilder, private appservice:AppService, private router:Router) {
    this.addform = this.fb.group({
      title: ['',Validators.required],
      price: [[Validators.required,Validators.min(0)]],
      quantity:[[Validators.required,Validators.min(0)]],
      color: ['',Validators.required],
      expiryDate:['',Validators.required],
      isInStock :[true,Validators.required]
    })
   }

  ngOnInit(): void {
  }
  Submit(){
    let product:Product = {...this.addform.value};
    product.id = 0;
    this.appservice.postProduct(product).subscribe();
    this.router.navigate(['/home']);
  }
}
