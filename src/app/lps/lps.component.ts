import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-lps',
  templateUrl: './lps.component.html',
  styleUrls: ['./lps.component.css']
})
export class LpsComponent implements OnInit {
  products : Product[] = [];         //productitem
  @Input() items$ : Observable<Product[]>;    //product
  productsubscription : Subscription;
  constructor(private appservice: AppService, private cd: ChangeDetectorRef) { 
    this.productsubscription = new Subscription();
    this.items$ = new Observable<Product[]>();
  }


  ngOnInit(): void {​​​​​​​​
  this.productsubscription = this.items$.subscribe(
  data=>{​​​​​​​​
  this.products = data
  this.cd.markForCheck();
        }​​​​​​​​,
  error=>{​​​​​​​​
  console.log(error);
        }​​​​​​​​,
        ()=>console.log('complete')
      )
    }​​​​​​​​
  
  ngOnDestroy() {​​​​​​​​
  if(this.productsubscription)
      {​​​​​​​​
  this.productsubscription.unsubscribe();
      }​​​​​​​​
    }​​​​​​​​
  
  

}
