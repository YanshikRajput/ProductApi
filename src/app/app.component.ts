import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit , OnDestroy{
  title = 'ProductApiProject';
  Products : Product[] = [];
  Productssubscription : Subscription;
  today: number = Date.now();
  constructor(private appservice: AppService)
  {
    this.Productssubscription = new Subscription();
  }

  ngOnInit() {
    this.Productssubscription = this.appservice.getProduct().subscribe(
      data=> {
        this.Products = data
      },
      error=>
      {
      console.log(error)
      },
      ()=>console.log('complete')
    )
  }

  ngOnDestroy() {
    if(this.Productssubscription)
    {
      this.Productssubscription.unsubscribe();
    }
  }
 
  
}
