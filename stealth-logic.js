const { ethers } = require("ethers");
const secp = require("noble-secp256k1");

/**
 * Computes a stealth address for a recipient.
 * @param {string} ephemeralPrivKey - Sender's random private key.
 * @param {string} recipientPubKey - Recipient's static public key.
 * @returns {string} The derived stealth address.
 */
async function generateStealthAddress(ephemeralPrivKey, recipientPubKey) {
    // 1. Compute Shared Secret: S = ephemeralPrivKey * recipientPubKey
    const sharedSecret = secp.getSharedSecret(ephemeralPrivKey, recipientPubKey);
    
    // 2. Hash the secret
    const hashedSecret = ethers.keccak256(sharedSecret);
    
    // 3. Tweak the original public key: P_stealth = recipientPubKey + G * hash(S)
    // Note: Simplified for demonstration; production uses dual-key schemes.
    const stealthPubKey = secp.ProjectivePoint.fromHex(recipientPubKey.replace('0x', ''))
        .add(secp.ProjectivePoint.BASE.multiply(BigInt(hashedSecret)));

    return ethers.computeAddress("0x" + stealthPubKey.toHex(false));
}

module.exports = { generateStealthAddress };
