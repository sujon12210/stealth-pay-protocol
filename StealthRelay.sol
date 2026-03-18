// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title StealthRelay
 * @dev Simple contract to broadcast ephemeral public keys for stealth transactions.
 */
contract StealthRelay {
    event Announcement(
        uint256 indexed schemeId,
        bytes ephemeralPubKey,
        bytes metadata
    );

    /**
     * @notice Announces a stealth transaction.
     * @param schemeId The stealth scheme used (e.g., 0 for SECP256K1).
     * @param ephemeralPubKey The sender's one-time public key.
     * @param metadata Encrypted or additional data for the recipient.
     */
    function announce(
        uint256 schemeId,
        bytes calldata ephemeralPubKey,
        bytes calldata metadata
    ) external {
        emit Announcement(schemeId, ephemeralPubKey, metadata);
    }
}
