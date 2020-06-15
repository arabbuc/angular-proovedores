import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProveedorComponent} from './components/proveedor/proveedor.component'

//dentro de las llaves meto el componente
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //ruta por defecto
  { path: 'proveedor', component: ProveedorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
