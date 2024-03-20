import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, updateDoc, doc, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductForm, Products } from '../products';

const PATH = 'products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, PATH);

  getProducts() {
    return collectionData(this._collection) as Observable<Products[]>
  }

  createProducts(product: ProductForm){
    return addDoc(this._collection, product)
  }

  updateProducts(id: string, product: ProductForm){
    const document = doc(this._firestore, PATH, id); //recibir referencia a firestore
    return updateDoc(document, {...product}); //spread operator, crea un nuevo objeto con las mismas propiedades
  }

}

