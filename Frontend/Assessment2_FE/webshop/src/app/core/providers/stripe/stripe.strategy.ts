import { Injectable } from '@angular/core';
import { PaymentStrategy } from '../payment-provider.interface';

@Injectable({
    providedIn: 'root'
})
export class StripeProvider implements PaymentStrategy {
    processPayment(orderAmount: number): void {
        console.log(`Processing payment using Stripe. Amount: ${orderAmount}`);
        // Add Stripe-specific logic here (integration with Stripe API, etc.).
    }
}
