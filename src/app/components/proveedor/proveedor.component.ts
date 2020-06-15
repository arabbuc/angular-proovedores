import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/modals/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css'],
  providers: [ProveedorService]
})
export class ProveedorComponent implements OnInit {
  public proveedor: Proveedor[];
  constructor(private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.proveedor = this.proveedorService.getProveedor();
    console.log(this.proveedor);
  }

}
