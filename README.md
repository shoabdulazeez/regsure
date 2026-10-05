# Regsure

Regsure is a bookkeeping and operating workspace for local and growing businesses.

## Product direction

- Palette: warm paper (`#f4f0e8`), deep ink (`#142b2b`), citrus lime (`#dce84f`), and orange (`#f06e45`). The paper base keeps bookkeeping approachable, while ink gives the product authority and the two accents create a memorable business signal.
- Type: DM Sans for practical UI copy, Fraunces for the human, editorial moments, and DM Mono for small operational labels.
- Voice: calm, direct, observant, and specific to the daily realities of shop owners.

## Suggested pricing

Start with **Free**, **Basic**, and **Pro** rather than a time-limited trial. Small businesses need to trust the workflow before they pay, and a permanent free tier creates a low-friction entry point.

- **Free:** one business, one user, core inventory, sales logging, and a simple weekly view.
- **Basic:** for a growing operator, with customers, purchase/restock tracking, monthly analytics, and WhatsApp assistant access.
- **Pro:** for teams, with multiple users, advanced reporting, roles, branch support, and priority support.

Keep the exact currency price flexible until interviews establish the customer’s willingness to pay. The current landing page intentionally avoids invented prices and statistics.

## Start

```bash
npm install
npm run dev
```

## Database

Create the Neon database table with:

```bash
npm run db:migrate
npm run db:health
```

The migration is tracked in `schema_migrations`, so it is safe to run during deploys. Keep `.env.local` private and use `.env.example` as the template for other environments.
