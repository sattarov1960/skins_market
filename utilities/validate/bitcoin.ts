import * as bitcoin from 'bitcoinjs-lib';

export function validateBitcoinAddress(address: string): boolean {
    try {
        bitcoin.address.toOutputScript(address);
        return true;
    } catch (e) {
        return false;
    }
}