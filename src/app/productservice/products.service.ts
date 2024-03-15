import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Product } from '../product';
import { Observable } from 'rxjs';

const PATH = 'products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore, PATH); 

  getProducts(){
    return collectionData(this._collection) as Observable<Product[]>;
  }
  

}

