# BARK - Members Club Platform
**Proof of Concept**

BARK is a Members Club Platform built as a SaaS application that provides exclusive features and rewards to its members. This platform includes user authentication, Stripe integration for payments, role-based access control, and a personalized dashboard for users to manage memberships, clubs, and NFTs.

## Features

- **Marketing Landing Page** (`/`):  
  A beautifully designed landing page that introduces the platform, including sections for **Marketing**, **Membership**, and **Club** information.
  
- **Pricing Page** (`/pricing`):  
  A pricing page that connects to both **Solana Pay** and **Stripe Checkout**, offering users flexible payment methods.

- **Dashboard Pages**:  
  Authenticated users can manage their data and interact with the platform using **CRUD operations** on users and clubs.

- **Role-Based Access Control (RBAC)**:  
  Basic access control system supporting **Owner** and **Member** roles for fine-grained permissions.

- **Subscription Management**:  
  Integrates with **Stripe Customer Portal** for managing subscription plans, billing details, and payment history.

- **Email/Password Authentication**:  
  Secure **JWT-based** authentication system. JWTs are stored in cookies for session management.

- **Global Middleware**:  
  Protects logged-in routes by ensuring only authenticated users can access certain pages.

- **Local Middleware**:  
  Used to secure server actions and validate inputs using **Zod** schemas to ensure correct data handling.

- **Activity Logging System**:  
  Tracks and logs key user events to monitor activity across the platform.

- **Database Management with Drizzle Kit**:  
  Drizzle Kit is used to manage database migrations, schema updates, and SQL query generation for your application.

## Tech Stack

- **Next.js**: React framework with server-side rendering and static site generation.
- **TypeScript**: Provides type safety to ensure code reliability.
- **NextAuth.js**: Manages authentication using JWTs for secure user sessions.
- **Stripe**: Handles membership payments and subscription management.
- **Solana Pay**: Integration for Solana-based payment options.
- **Drizzle Kit**: Simplifies database migrations and schema management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **MongoDB**: Database solution for storing user and subscription data.
- **Vercel**: Hosting and deployment platform optimized for Next.js applications.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/barkprotocol/members-club-platform.git
cd members-club-platform
```

### 2. Install Dependencies

Install the required dependencies with npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of your project and include the following variables:

```bash
# NextAuth settings
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# Stripe settings
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret

# MongoDB settings
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority

# Supabase
DATABASE_URL=your-database-url
DB_CONNECTION=your-connection-string
```

### 4. Drizzle Kit Setup

Drizzle Kit is used for handling database migrations and schema management. To set it up, follow these steps:

1. Install **Drizzle Kit** as a development dependency:

   ```bash
   npm install drizzle-kit --save-dev
   ```

2. Create a **drizzle.config.ts** file to configure the database connection and migration paths:

   ```ts
   import { defineConfig } from 'drizzle-kit';

   export default defineConfig({
     schema: './src/db/schema', // Path to your schema files
     out: './migrations',       // Directory where migrations are stored
     driver: 'pg',              // Database driver, e.g., 'pg' for PostgreSQL
     dbConnectionString: process.env.DRIZZLE_DB_CONNECTION, // Database connection string from .env
   });
   ```

3. Run migrations:

   ```bash
   npx drizzle-kit generate
   npx drizzle-kit push
   ```

4. Add database schema changes and run migrations as your application grows.

### 5. Run the Development Server

To start the development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

Access the app at `http://localhost:3000`.

## Scripts

- **Start Development**: `npm run dev` – Runs the app in development mode.
- **Build for Production**: `npm run build` – Builds the app for production deployment.
- **Start in Production**: `npm start` – Starts the app using the built files.
- **Linting**: `npm run lint` – Runs ESLint to check for code quality.
- **Run Migrations**: `npx drizzle-kit generate && npx drizzle-kit push` – Generates and applies database migrations.

## Key Components

- **Landing Page**: 
  - Marketing and club introduction for prospective users.
  
- **Pricing**: 
  - Flexible payment integration with **Stripe** and **Solana Pay**.

- **Dashboard**: 
  - Allows users to manage clubs and view NFT-related content.
  
- **RBAC (Role-Based Access Control)**: 
  - Defines permissions for **Owners** and **Members** to manage club assets and content.

- **Authentication & JWT**: 
  - Authentication system using **NextAuth.js** to manage user sessions securely with **JWTs** stored in cookies.

- **Stripe Payment**: 
  - Handles subscription payments and plan upgrades using **Stripe Checkout** and **Customer Portal**.

- **Middleware**: 
  - Global middleware to protect logged-in routes.
  - Local middleware to secure server actions or validate **Zod** schemas.

- **Activity Logging**: 
  - Logs user activities for improved monitoring and auditing.

- **Database with Drizzle Kit**: 
  - Simplified schema migrations and updates using Drizzle Kit for consistent database management.

## Deployment

For deployment, platforms like **Vercel** are ideal for deploying Next.js applications.

1. Push your code to GitHub or another Git provider.
2. Link your repository to [Vercel](https://vercel.com/).
3. Set the **environment variables** on Vercel under "Settings > Environment Variables".
4. Vercel will handle the build and deployment process automatically.

## Webhooks

To handle Stripe events like subscription creation or payment failures, set up a webhook endpoint:

1. In your Stripe dashboard, navigate to **Developers > Webhooks**.
2. Add a new endpoint with the URL `https://your-domain.com/api/webhooks/stripe`.
3. Configure necessary Stripe events (e.g., `invoice.payment_succeeded`, `invoice.payment_failed`).
4. Add your **webhook secret** to `.env.local` as `STRIPE_WEBHOOK_SECRET`.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.