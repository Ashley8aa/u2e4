import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

interface Item {
  name: string,
  price: number,
  description: string,

};

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet, RouterModule, ProductFormComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})


export class StoreComponent {

  
  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);
  
  constructor() {
    const itemCollection = collection(this.firestore, 'products');
    this.item$ = collectionData(itemCollection) as Observable<Item[]>;
  }

  
}
