# Demo Credit Wallet Service

## Overview

This project is an MVP for a wallet service where users can create an account, fund their account, transfer funds to another user’s account, and withdraw funds from their account.

## Tech Stack

- Node.js
- TypeScript
- Express
- Knex.js
- MySQL

## Features

- Create an account
- Fund an account
- Transfer funds
- Withdraw funds
- Prevent onboarding of blacklisted users

## ER Diagram

![ER Diagram](./er-diagram.png)

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up the environment variables in `.env` file
4. Run the migrations: `npm run migrate`
5. Start the server: `npm run start`

## Endpoints

- `POST /api/wallet/create-account`
- `POST /api/wallet/fund-account`
- `POST /api/wallet/transfer-funds`
- `POST /api/wallet/withdraw-funds`

## Running Tests

To run tests, use the following command:

```bash
npm run test
```
