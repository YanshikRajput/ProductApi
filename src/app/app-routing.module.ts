import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HomeComponent } from './home/home.component';
import { LpaComponent } from './lpa/lpa.component';
import { LpsComponent } from './lps/lps.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
{path:'home', component: HomeComponent},
{path:'lpa', component: LpaComponent},
{path:'lps', component: LpsComponent},
{path:'add-product', component: AddProductComponent},
{path:'update-product', component: UpdateProductComponent},
{path:'delete-product', component: DeleteProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
