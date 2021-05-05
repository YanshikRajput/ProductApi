import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-lpa',
  templateUrl: './lpa.component.html',
  styleUrls: ['./lpa.component.css'],
changeDetection :ChangeDetectionStrategy.OnPush


})
export class LpaComponent implements OnInit {

  @Input() items$ : Observable<Product[]>; 
  constructor(private appservice : AppService) {
    this.items$ = new Observable<Product[]>();
   }
 
  ngOnInit(): void {
  }

}

