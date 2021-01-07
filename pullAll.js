import basePullAll from './.internal/basePullAll.js'

/**
 * This method is like `pull` except that it accepts an array of values to remove.
 *
 * **Note:** Unlike `difference`, this method mutates `array`.
 *
 * @since 4.0.0
 * @category Array
 * @example
 *   const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 *   pullAll(array, ['a', 'c'])
 *   console.log(array)
 *   // => ['b', 'b']
 *
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @see pull, pullAllBy, pullAllWith, pullAt, remove, reject
 * @returns {Array} Returns `array`.
 */
function pullAll(array, values) {
  return array != null && array.length && values != null && values.length
    ? basePullAll(array, values)
    : array
}

export default pullAll
