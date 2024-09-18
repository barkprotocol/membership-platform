# Compressed NFT Dashboard

This repository provides a frontend dashboard to interact with compressed NFTs. Users can mint, transfer, burn, redeem, and cancel redemption of NFTs. The frontend is built with React and TypeScript, and interacts with the Solana blockchain via the Helius RPCs.

## Features

- **Mint Compressed NFTs**: Mint a compressed NFT and assign it to a collection.
- **Transfer Compressed NFTs**: Transfer an NFT to another wallet address.
- **Burn Compressed NFTs**: Permanently remove a compressed NFT.
- **Redeem Compressed NFTs**: Redeem a compressed NFT (remove it from the Merkle tree).
- **Cancel Redeem**: Cancel the redemption of a compressed NFT and put it back into the Merkle tree.

## Tech Stack

- **React**: Frontend UI library for building the dashboard.
- **TypeScript**: Provides type safety and enhances code quality.
- **Solana Web3.js**: Library to interact with Solana blockchain.
- **Tailwind CSS** (optional): For styling the frontend.
- **Helius RPC**: Used to interact with Solana for compression and ownership proofs.

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/barkprotocol/compressed-nft-dashboard.git
cd compressed-nft-dashboard
```

### 2. Install Dependencies

Install the required dependencies using npm or yarn.

```bash
npm install
```

or

```bash
yarn install
```

### 3. Set Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

```bash
NEXT_PUBLIC_RPC_URL=https://api.devnet.solana.com
NEXT_PUBLIC_SECRET_KEY=[your wallet secret key here]
```

- **NEXT_PUBLIC_RPC_URL**: The Solana RPC endpoint for connecting to the blockchain.
- **NEXT_PUBLIC_SECRET_KEY**: The secret key of the wallet interacting with NFTs (be cautious while storing private keys).

### 4. Run the Development Server

To start the local development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

Navigate to `http://localhost:3000` to see the frontend running.

## Scripts

### Mint an NFT

To mint a compressed NFT, use:

```bash
npm run mint -- --collectionId=<collection-id>
```

### Transfer an NFT

To transfer a compressed NFT, run the transfer script with the asset ID and recipient's wallet address:

```bash
npm run transfer -- --assetId=<base58 encoded assetId> --recipient=<recipient wallet address>
```

### Burn an NFT

To burn a compressed NFT, run the following:

```bash
npm run burn -- --assetId=<base58 encoded assetId>
```

### Redeem an NFT

To redeem an NFT from the Merkle tree, run:

```bash
npm run redeem -- --assetId=<base58 encoded assetId>
```

### Cancel Redeem

To cancel the redemption of an NFT, use:

```bash
npm run cancel-redeem -- --assetId=<base58 encoded assetId>
```

## Components

- **NFTCard.tsx**: Displays the details of a compressed NFT.
- **TransferNFT.tsx**: Allows the user to transfer a compressed NFT.
- **BurnNFT.tsx**: Provides the functionality to burn a compressed NFT.
- **RedeemNFT.tsx**: Facilitates redeeming a compressed NFT.
- **CancelRedeemNFT.tsx**: Cancels the redemption process for a compressed NFT.

## How It Works

1. **Compression**: NFTs are compressed using Solana's compression techniques to optimize storage.
2. **Transfer**: The Helius compression indexer is used to verify ownership and include proofs in transfer transactions.
3. **Burn**: Removes the NFT from the blockchain permanently.
4. **Redeem**: Transfers the NFT out of the Merkle tree into a voucher PDA.
5. **Cancel Redemption**: Puts the NFT back into the Merkle tree after a redemption is canceled.

## Deployment

For production deployment, use services like **Vercel** or **Netlify** for static site hosting. Make sure to set up environment variables on the deployment platform.

## License

MIT License. See [LICENSE](./LICENSE) for more information.