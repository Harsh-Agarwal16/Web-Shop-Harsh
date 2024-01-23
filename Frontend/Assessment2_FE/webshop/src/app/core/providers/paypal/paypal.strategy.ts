import { Injectable } from '@angular/core';
import { PaymentStrategy } from '../payment-provider.interface';

@Injectable({
    providedIn: 'root'
})
export class PaypalProvider implements PaymentStrategy {
    processPayment(orderAmount: number): void {
        console.log(`Processing payment using PayPal. Amount: ${orderAmount}`);
        // Add PayPal-specific logic here (integration with PayPal API, etc.).
    }
}
