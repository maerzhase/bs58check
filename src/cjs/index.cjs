'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeUnsafe = exports.decode = exports.encode = void 0;
var sha256_1 = require("@noble/hashes/sha256");
var base_js_1 = __importDefault(require("./base.cjs"));
// SHA256(SHA256(buffer))
function sha256x2(buffer) {
    return (0, sha256_1.sha256)((0, sha256_1.sha256)(buffer));
}
// Create the bs58check instance
var bs58check = (0, base_js_1.default)(sha256x2);
// Export the methods as named exports
exports.encode = bs58check.encode;
exports.decode = bs58check.decode;
exports.decodeUnsafe = bs58check.decodeUnsafe;
// Also export the default
exports.default = bs58check;
