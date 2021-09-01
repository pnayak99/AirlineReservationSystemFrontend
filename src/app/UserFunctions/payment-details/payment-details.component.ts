import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  paymentForm!: FormGroup;
  displayMessage!: string;
  totalFare:any
  userName:any

  constructor(private formBuilder: FormBuilder) {

    this.totalFare=localStorage.getItem("totalFare");
    this.userName=localStorage.getItem("userName");
    /* Declare Reactive Form Group here */

  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.paymentForm = this.formBuilder.group({
      nameOnCard: ['', [Validators.required,Validators.minLength(1),Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      cardNumber: ['', [Validators.required,Validators.minLength(16),Validators.min(1111111111111111),Validators.max(9999999999999999)]],
      expirationMonth: ['', [Validators.required,Validators.minLength(1),Validators.maxLength(2),Validators.min(1),Validators.max(12)]],
      expirationYear: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.min(1111),Validators.max(9999)]],
      cardCVVNumber: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(3),Validators.min(111),Validators.max(999)]]
    });
  }


 get f() { return this.paymentForm.controls; }

 onSubmit() {
  this.submitForm();
  }

  submitForm() {
    
  if (this.paymentForm.invalid) {
    this.displayMessage = "Payment Failed!";
      return;
  }
    this.displayMessage = "Payment Successful!";
  }
}