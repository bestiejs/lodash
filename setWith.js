import baseSet from './.internal/baseSet.js'

/**
 * This method is like `set` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`. If `customizer` returns
 * `undefined` path creation is handled by the method instead. The `customizer`
 * is invoked with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @since 4.0.0
 * @category Object
 * @example
 *   const object = {}
 *
 *   setWith(object, '[0][1]', 'a', Object)
 *   // => { '0': { '1': 'a' } }
 *
 * @param {Object} object The object to modify.
 * @param {Array | string} path The path of the property to set.
 * @param {any} value The value to set.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 */
function setWith(object, path, value, customizer) {
  customizer = typeof customizer === 'function' ? customizer : undefined
  return object == null ? object : baseSet(object, path, value, customizer)
}

export default setWith
