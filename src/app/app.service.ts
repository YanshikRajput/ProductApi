import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Product } from './Product';
import {tap, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  private myerrorhandeler(err:any){
    console.log(err);
    return throwError(err);
  }
   getProduct() : Observable<Product[]> {
    const apiurl =environment.apibaseurl + "Demo/items";
    const headers = {'accept' : 'application/json','content-type' : 'application/json'};
    return this.http.get<Product[]>(apiurl,{'headers':headers}).pipe (
      // tap(data =>{console.log(data)}),
      catchError(error=>this.myerrorhandeler(error))
    );
  }

  getProducts() :Observable<Product[]> {
    const apiurl = environment.apibaseurl + "Demo/items";
    const headers = {'accept' : 'application/json','content-type' : 'application/json'};
 
    return this.http.get<Product[]>(apiurl,{'headers': headers}).pipe(
      // tap(data=>{console.log(data)}),
      catchError(error=>this.myerrorhandeler(error))
    );
  }

  postProduct(product :Product) : Observable<Product>{
    Object.defineProperty(product,'id',{'enumerable':false});
    const apiurl = environment.apibaseurl + "Demo/items";
    const headers = {'accept' : 'application/json','content-type' : 'application/json'};
    const taskDto = JSON.stringify(product);
    return this.http.post<Product>(apiurl, product, {headers: headers})
    .pipe(
      catchError(error=>this.myerrorhandeler(error))
    );
  }

  putProduct(product:Product): Observable<Product>{
    const apiurl = environment.apibaseurl + "Demo/items";
    const headers = {'accept' : 'application/json','content-type' : 'application/json'};
    return this.http.post<Product>(apiurl, product, {headers: headers})
    .pipe(
      catchError(error=>this.myerrorhandeler(error))
    );
  }

  deleteProduct(product:Product): Observable<Product>{
    const apiurl = environment.apibaseurl + "Demo/items";
    const headers = {'accept' : 'application/json','content-type' : 'application/json'};
    return this.http.post<Product>(apiurl, product, {headers: headers})
    .pipe(
      catchError(error=>this.myerrorhandeler(error))
    );
  }





  



  // addToDoTask(task:Product) : Observable<Product>{
  //   const apiurl = "https://localhost:44339/api/Demo/items";
  //   const headers = {'content-type' : 'application/json'};
  //   Object.defineProperty(task,'id',{'enumerable':false});
  //   const taskToDo = JSON.stringify(task);
  //   console.log(taskToDo);
  //   return this.http.post<Product>(apiurl,taskToDo,{headers:headers})
  //   .pipe(
  //     tap((task:any)=>{
  //       console.log(task)
  //     }),
  //     catchError(this.handleError)
  //   );
  // }
//   handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
//     throw new Error('Method not implemented.');
//   }
}
