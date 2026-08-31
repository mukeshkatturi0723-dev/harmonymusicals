# Harmony Musicals

A manually developed e-commerce website for a local musical-instrument business in Visakhapatnam.

## Project

Harmony Musicals is designed as a practical, professional storefront for browsing and purchasing musical instruments. The project is being developed with a human-designed visual direction rather than a generic template aesthetic.

### Current features

- Responsive Harmony Musicals storefront
- Instrument categories and product browsing
- Product detail pages
- Search and category filtering
- Shopping cart
- Checkout flow
- Buy Now flow
- Inventory and stock status
- Admin dashboard
- Admin authentication foundation
- Firebase and Firestore integration foundation

### Planned production features

- Firestore-backed product catalogue
- Real-time inventory and price management
- Secure admin authentication and authorization
- Order management
- Customer order history
- Payment gateway integration
- Product image management

## Design direction

The interface uses a restrained, editorial music-store aesthetic with strong photography, practical product information, natural spacing, subtle borders, and purposeful interaction. The goal is for the website to feel like it was designed specifically for Harmony Musicals.

## Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Firebase configuration

When Firebase is enabled, provide the required `VITE_FIREBASE_*` environment variables locally or through the deployment platform. Never commit private credentials or secrets to the repository.

## Project ownership

This repository contains the source code for Harmony Musicals and is maintained through GitHub with direct development changes to the application code.
