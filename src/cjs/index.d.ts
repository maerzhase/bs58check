declare const bs58check: {
    encode: (payload: Uint8Array | number[]) => string;
    decode: (str: string) => Uint8Array;
    decodeUnsafe: (str: string) => Uint8Array | undefined;
};
export declare const encode: (payload: Uint8Array | number[]) => string;
export declare const decode: (str: string) => Uint8Array;
export declare const decodeUnsafe: (str: string) => Uint8Array | undefined;
export default bs58check;
