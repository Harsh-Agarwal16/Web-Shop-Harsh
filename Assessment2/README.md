# EXPLANATION OF PAYMENT APPROACH

## Core Functionality: makePayment

The central component of the payment processing system is the makePayment method. This function serves as a gateway for directing payments based on user preferences. The payment gateway has a function that detects the user's chosen payment method and then routes the transaction to the corresponding payment service for processing.

### Scalability

The solution is scalable by design. The inclusion of additional payment gateways is facilitated through conditional statements within the makePayment method. Adding a new gateway involves creating a dedicated service file and a corresponding condition, providing a systematic and modular approach.

## Modular Design

Each payment gateway is encapsulated within its own service file. This modular structure enhances code organization, simplifies maintenance, and isolates changes to specific gateways without affecting the overall system.

## Business Logic Independence

The separation of payment processing logic from the core business logic ensures that modifications or additions to payment gateways do not impact the integrity of the project's foundational components.

# Workflow

1. We will be getting order details including amount and payment mode in payload
2. Insert the order details in the DB, keeping the payment status "Pending"
3. After inserting the order, makePayment method of payment service will be called to handle the payment
4. Payment service will make use of conditional statements to handle payment for different payment gateways
5. There will be separate reusable services for each payment gateway which will be free from any application level business logic   and payment service will be responsible for processing the payment
6. Then after getting the acknowledegement from the payment gateway a transaction in pending state will created.
7. Webhooks will be implemented to look for further activity for the payment which includes payment success and failre cases, corresponding changes to be made for order and transaction.