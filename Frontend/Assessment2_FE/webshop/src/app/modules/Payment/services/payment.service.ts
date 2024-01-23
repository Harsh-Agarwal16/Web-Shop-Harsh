import { Injectable } from '@angular/core';
import { PaymentStrategy } from './strategies/payment-strategy.interface';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  private currentStrategy: PaymentStrategy | null = null;

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.currentStrategy = strategy;
  }

  processPayment(orderAmount: number): void {
    if (this.currentStrategy) {
      this.currentStrategy.processPayment(orderAmount);
    } else {
      console.error('No payment strategy selected.');
    }
  }
}
