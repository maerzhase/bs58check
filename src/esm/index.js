'use strict';
import { sha256 } from '@noble/hashes/sha256';
import bs58checkBase from './base.js';

function sha256x2(buffer) {
    return sha256(sha256(buffer));
}

const bs58check = bs58checkBase(sha256x2);
export const { encode, decode, decodeUnsafe } = bs58check;
export default bs58check;
