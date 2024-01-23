import { Injectable } from '@angular/core';
import { PaymentStrategy } from '../payment-provider.interface';

@Injectable({
    providedIn: 'root'
})
export class BraintreeProvider implements PaymentStrategy {
    processPayment(orderAmount: number): void {
        console.log(`Processing payment using Braintree. Amount: ${orderAmount}`);
        // Add Braintree-specific logic here (integration with Braintree API, etc.).
    }
}
