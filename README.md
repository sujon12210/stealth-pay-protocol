# Stealth Pay Protocol

This repository provides a framework for **Stealth Addresses** on EVM chains. It allows users to send assets to a "shadow" address that is cryptographically linked to a recipient's public key, but is not linkable by outside observers.

## How it Works
1. **Recipient** publishes a "Stealth Meta-Address" (consisting of two public keys).
2. **Sender** generates an ephemeral private key and computes a "Stealth Address" using the recipient's public keys and their own ephemeral key.
3. **Sender** broadcasts the ephemeral public key via the `StealthRelay` contract.
4. **Recipient** scans the blockchain, uses their private key to identify which stealth addresses belong to them, and derives the private key to spend the funds.

## Key Components
* **StealthRelay.sol:** A simple on-chain registry to announce ephemeral keys (announcement logs).
* **Generator.js:** Client-side logic to derive stealth addresses and ephemeral keys.

## Security Note
This is a cryptographic primitive. To achieve full privacy, users should interact with the derived stealth addresses using privacy-preserving methods (like a fresh relayer or a specialized RPC).
