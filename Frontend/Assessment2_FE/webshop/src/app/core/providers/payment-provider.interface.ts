export interface PaymentStrategy {
    processPayment(orderAmount: number): void;
}
