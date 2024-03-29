import bs58 from "bs58";
import jssha from "jssha";

const sha256 = (str: string) => {
    const inst = new jssha("SHA-256", "HEX");
    inst.update(str);
    return inst.getHash("HEX");
};

export function validateTronAddress(wallet: string) {
    try {
        if (wallet.length !== 34) return false
        const bytes = Buffer.from(bs58.decode(wallet));
        const checkSum = bytes.subarray(bytes.length - 4).toString("hex");
        const addressWithoutCheckSum = bytes.subarray(0, bytes.length - 4).toString("hex");
        const doubleHash = sha256(sha256(addressWithoutCheckSum));
        const expectedCheckSum = doubleHash.slice(0, 8);
        return expectedCheckSum === checkSum
    } catch (e) {
        console.log("Failed to validate tron address, treating as the address is wrong");
        return false;
    }
}

