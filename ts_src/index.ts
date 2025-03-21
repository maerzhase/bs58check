'use strict'

import { sha256 } from '@noble/hashes/sha256'
import bs58checkBase from './base.js'

// SHA256(SHA256(buffer))
function sha256x2 (buffer: Uint8Array | string): Uint8Array {
  return sha256(sha256(buffer))
}

// Create the bs58check instance
const bs58check = bs58checkBase(sha256x2)

// Export the methods as named exports
export const encode = bs58check.encode
export const decode = bs58check.decode
export const decodeUnsafe = bs58check.decodeUnsafe

// Also export the default
export default bs58check
