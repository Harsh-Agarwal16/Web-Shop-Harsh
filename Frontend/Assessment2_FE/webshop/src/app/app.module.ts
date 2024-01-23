import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PaymentService } from './modules/Payment/services/payment.service';
import { StripeProvider } from './core/providers/stripe/stripe.strategy';
import { BraintreeProvider } from './core/providers/braintree/braintree.strategy';
import { PaypalProvider } from './core/providers/paypal/paypal.strategy';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    PaymentService,
    StripeProvider,
    BraintreeProvider,
    PaypalProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private paymentService: PaymentService) {
    // Register providers during the module initialization
    this.registerPaymentProviders();
  }

  private registerPaymentProviders(): void {
    // Create instances of providers and register them
    const stripeProvider = new StripeProvider();
    const braintreeProvider = new BraintreeProvider();
    const paypalProvider = new PaypalProvider();

    // Register providers with the PaymentService
    this.paymentService.setPaymentStrategy(stripeProvider);
    this.paymentService.setPaymentStrategy(braintreeProvider);
    this.paymentService.setPaymentStrategy(paypalProvider);
  }
}
