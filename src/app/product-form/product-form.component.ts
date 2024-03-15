import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  productForm!: FormGroup;

  constructor(private fb:FormBuilder) {
    this.productForm = this.fb.group({
      product: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])  
    })
  }

  
  onSubmit(){
    if(this.productForm.valid){    
      console.log(this.productForm.value);
    }else {
      this.productForm.markAllAsTouched();
    }
  }

}


