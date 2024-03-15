import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [NavbarComponent, RouterModule, ProductFormComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
