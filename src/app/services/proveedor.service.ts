import { Injectable } from '@angular/core';
import { Proveedor } from '../modals/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private proveedores: Proveedor[];

  constructor() {
    this.proveedores = [
      new Proveedor('Pepe', 'Martinez', 33),
      new Proveedor('Laza', 'Gutierrez', 33),
      new Proveedor('Army', 'López', 45),
    ];
  }
  public getProveedor(): Proveedor[] {
    return this.proveedores;
  }
}
