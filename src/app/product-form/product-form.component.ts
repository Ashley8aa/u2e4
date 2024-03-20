import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../productservice/products.service';
import { ProductForm } from '../products';
import { Router , RouterLink} from '@angular/router';

export interface CreateForm {
  name: FormControl<string>;
  price: FormControl<number>;
  description: FormControl<string>;
}

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  private _productsService = inject(ProductsService);
  private _formBuilder = inject(FormBuilder).nonNullable;
  private _router = inject(Router);


  productForm!: FormGroup;

  constructor(private fb:FormBuilder) {
    this.productForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])  
    })
  }

  
  onSubmit(){
    if(this.productForm.valid){    
      const formData = this.productForm.value;
      this._productsService.createProducts(formData).then(() => {
        console.log('Product added successfully.');
        // You can optionally reset the form after successful submission
        this._router.navigate(['/store']);
      }).catch(error => {
        console.error('Error adding product: ', error);
      });
    } else {
      this.productForm.markAllAsTouched();
    }
  }




  /*
  form = this._formBuilder.group<CreateForm>({
    name: this._formBuilder.control('', Validators.required),
    price: this._formBuilder.control('', Validators.required),
    description: this._formBuilder.control('', Validators.required)
  });

  async createProduct() {
    if (this.form.invalid) return; 
    const product = this.form.value as ProductForm;
    try {
      await this._productsService.createProducts(product);
    }catch (error){
      
    }
  } */


}


