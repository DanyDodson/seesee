"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// accesses a variable inside of process.env, throwing an error if it's not found
// always run this method in advance (i.e. upon initialisation) so that the error is 
// thrown as early as possible caching the values improves performance 
// - accessing process.env many times is bad

/**
 * Cache env variable
 *
 * @param {string} key
 * @param {string} defaultValue
 * 
 * 
 */
const cache = {};

const accessEnv = (key, defaultValue) => {
  if (!(key in process.env)) {
    if (defaultValue) return defaultValue;
    throw new Error(`${key} not found in process.env!`);
  }

  if (cache[key]) return cache[key];
  cache[key] = process.env[key];
  return process.env[key];
};

var _default = accessEnv;
exports.default = _default;