import slice from './slice.js'

/**
 * Gets all but the last element of `array`.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * initial([1, 2, 3])
 * // => [1, 2]
 */
const initial = array => Array.isArray(array) && array.length ? slice(array, 0, -1) : [];

export default initial
