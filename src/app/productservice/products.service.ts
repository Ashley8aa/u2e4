import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: Firestore) { }
  addProducts(product: Product){
    const productRef = collection(this.firestore, 'products');
    return addDoc(productRef, product); 

  }
}
