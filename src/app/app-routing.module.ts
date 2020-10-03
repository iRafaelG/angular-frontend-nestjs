import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components
import { ProductsFormComponent } from "./components/products-form/products-form.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  },
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'products/create',
    component: ProductsFormComponent
  },
  {
    path: 'products/edit/:id',
    component: ProductsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
