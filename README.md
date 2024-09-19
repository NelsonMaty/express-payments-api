# Express Payments API

This is a simple Express.js API for managing payments. It provides endpoints for listing payments with pagination and date filtering capabilities.

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
   For development with auto-restart on file changes:
   ```
   npm run dev
   ```

## API Endpoints

### GET /payments

Retrieve a list of payments with optional pagination and date filtering.

Query Parameters:
- `page`: Page number (default: 1)
- `limit`: Number of items per page (default: 10)
- `fromDate`: Start date for filtering (format: YYYY-MM-DD)
- `toDate`: End date for filtering (format: YYYY-MM-DD)

Example:
```
curl "http://localhost:3000/payments?page=1&limit=10&fromDate=2023-06-01&toDate=2023-06-30"
```

## Project Structure

- `server.js`: Main entry point
- `routes/payments.js`: Payment routes
- `controllers/paymentController.js`: Payment controller logic
- `services/paymentService.js`: Business logic for payments
- `data/payments.js`: Mock payment data

## Development

This project uses nodemon for development. Run `npm run dev` to start the server with auto-restart on file changes.
