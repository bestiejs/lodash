# Lo-Dash <sup>v0.1.0</sup>

<!-- div -->


<!-- div -->

## `_`
* [`_`](#_value)
* [`_.VERSION`](#_version)
* [`_.after`](#_aftertimes-func)
* [`_.bind`](#_bindfunc--arg1-arg2-)
* [`_.bindAll`](#_bindallobject--methodname1-methodname2-)
* [`_.chain`](#_chainvalue)
* [`_.clone`](#_clonevalue)
* [`_.compact`](#_compactarray)
* [`_.compose`](#_composefunc1-func2-)
* [`_.contains`](#_containscollection-target)
* [`_.debounce`](#_debouncefunc-wait-immediate)
* [`_.defaults`](#_defaultsobject--defaults1-defaults2-)
* [`_.defer`](#_deferfunc--arg1-arg2-)
* [`_.delay`](#_delayfunc-wait--arg1-arg2-)
* [`_.difference`](#_differencearray--array1-array2-)
* [`_.escape`](#_escapestring)
* [`_.every`](#_everycollection-callback--thisarg)
* [`_.extend`](#_extendobject--source1-source2-)
* [`_.filter`](#_filtercollection-callback--thisarg)
* [`_.find`](#_findcollection-callback--thisarg)
* [`_.first`](#_firstarray--n-guard)
* [`_.flatten`](#_flattenarray-shallow)
* [`_.forEach`](#_foreachcollection-callback--thisarg)
* [`_.functions`](#_functionsobject)
* [`_.groupBy`](#_groupbycollection-callback--thisarg)
* [`_.has`](#_hasobject-property)
* [`_.identity`](#_identityvalue)
* [`_.indexOf`](#_indexofarray-value--issortedfalse)
* [`_.initial`](#_initialarray--n-guard)
* [`_.intersection`](#_intersectionarray1-array2-)
* [`_.invoke`](#_invokearray-methodname--arg1-arg2-)
* [`_.isArguments`](#_isargumentsvalue)
* [`_.isArray`](#_isarrayvalue)
* [`_.isBoolean`](#_isbooleanvalue)
* [`_.isDate`](#_isdatevalue)
* [`_.isElement`](#_iselementvalue)
* [`_.isEmpty`](#_isemptyvalue)
* [`_.isEqual`](#_isequala-b--stack)
* [`_.isFinite`](#_isfinitevalue)
* [`_.isFunction`](#_isfunctionvalue)
* [`_.isNaN`](#_isnanvalue)
* [`_.isNull`](#_isnullvalue)
* [`_.isNumber`](#_isnumbervalue)
* [`_.isObject`](#_isobjectvalue)
* [`_.isPrimitive`](#_isprimitivevalue)
* [`_.isRegExp`](#_isregexpvalue)
* [`_.isString`](#_isstringvalue)
* [`_.isUndefined`](#_isundefinedvalue)
* [`_.keys`](#_keysobject)
* [`_.last`](#_lastarray--n-guard)
* [`_.lastIndexOf`](#_lastindexofarray-value)
* [`_.map`](#_mapcollection-callback--thisarg)
* [`_.max`](#_maxarray--callback-thisarg)
* [`_.memoize`](#_memoizefunc--resolver)
* [`_.min`](#_minarray--callback-thisarg)
* [`_.mixin`](#_mixinobject)
* [`_.noConflict`](#_noconflict)
* [`_.once`](#_oncefunc)
* [`_.partial`](#_partialfunc--arg1-arg2-)
* [`_.pick`](#_pickobject--prop1-prop2-)
* [`_.pluck`](#_pluckcollection-property)
* [`_.range`](#_rangestart0-end--step1)
* [`_.reduce`](#_reducecollection-callback--accumulator-thisarg)
* [`_.reduceRight`](#_reducerightcollection-callback--accumulator-thisarg)
* [`_.reject`](#_rejectcollection-callback--thisarg)
* [`_.rest`](#_restarray--n-guard)
* [`_.result`](#_resultobject-property)
* [`_.shuffle`](#_shufflearray)
* [`_.size`](#_sizecollection)
* [`_.some`](#_somecollection-callback--thisarg)
* [`_.sortBy`](#_sortbycollection-callback--thisarg)
* [`_.sortedIndex`](#_sortedindexarray-value--callback)
* [`_.tap`](#_tapvalue-interceptor)
* [`_.template`](#_templatetext-data-options)
* [`_.throttle`](#_throttlefunc-wait)
* [`_.times`](#_timesn-callback--thisarg)
* [`_.toArray`](#_toarraycollection)
* [`_.union`](#_unionarray1-array2-)
* [`_.uniq`](#_uniqarray--issortedfalse-callback)
* [`_.uniqueId`](#_uniqueidprefix)
* [`_.values`](#_valuescollection)
* [`_.without`](#_withoutarray--value1-value2-)
* [`_.wrap`](#_wrapfunc-wrapper--arg1-arg2-)
* [`_.zip`](#_ziparray1-array2-)

<!-- /div -->


<!-- div -->

## `_.prototype`
* [`_.prototype.chain`](#_prototypechain)
* [`_.prototype.value`](#_prototypevalue)

<!-- /div -->


<!-- div -->

## `_.templateSettings`
* [`_.templateSettings`](#_templatesettings)
* [`_.templateSettings.escape`](#_templatesettingsescape)
* [`_.templateSettings.evaluate`](#_templatesettingsevaluate)
* [`_.templateSettings.interpolate`](#_templatesettingsinterpolate)

<!-- /div -->


<!-- /div -->


<!-- div -->


<!-- div -->

## `_`

<!-- div -->


<!-- div -->

### `_(value)`
<a id="_value" href="#_value">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L253 "View in source") [&#x24C9;][1]

The `lodash` function.

#### Arguments
1. `value` *(Mixed)*: The value to wrap in a `LoDash` instance.

#### Returns
*(Object)*: Returns a `LoDash` instance.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.VERSION`
<a id="_version" href="#_version">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L3035 "View in source") [&#x24C9;][1]

*(String)*: The semantic version number.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.after(times, func)`
<a id="_aftertimes-func" href="#_aftertimes-func">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1635 "View in source") [&#x24C9;][1]

Creates a new function that is restricted to executing only after it is called a given number of `times`.

#### Arguments
1. `times` *(Number)*: The number of times the function must be called before it is executed.
2. `func` *(Function)*: The function to restrict.

#### Returns
*(Function)*: Returns the new restricted function.

#### Example
~~~ js
var renderNotes = _.after(notes.length, render);
_.forEach(notes, function(note) {
  note.asyncSave({ 'success': renderNotes });
});
// renderNotes is run once, after all notes have saved.
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.bind(func [, arg1, arg2, ...])`
<a id="_bindfunc--arg1-arg2-" href="#_bindfunc--arg1-arg2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1686 "View in source") [&#x24C9;][1]

Creates a new function that, when called, invokes `func` with the `this` binding of `thisArg` and prepends any additional `bind` arguments to those passed to the bound function. Lazy defined methods may be bound by passing the object they are bound to as `func` and the method name as `thisArg`.

#### Arguments
1. `func` *(Function|Object)*: The function to bind or the object the method belongs to.
2. `[arg1, arg2, ...]` *(Mixed)*: Arguments to be partially applied.

#### Returns
*(Function)*: Returns the new bound function.

#### Example
~~~ js
// basic bind
var func = function(greeting) { return greeting + ': ' + this.name; };
func = _.bind(func, { 'name': 'moe' }, 'hi');
func();
// => 'hi: moe'

// lazy bind
var object = {
  'name': 'moe',
  'greet': function(greeting) {
    return greeting + ': ' + this.name;
  }
};

var func = _.bind(object, 'greet', 'hi');
func();
// => 'hi: moe'

object.greet = function(greeting) {
  return greeting + ' ' + this.name + '!';
};

func();
// => 'hi moe!'
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.bindAll(object [, methodName1, methodName2, ...])`
<a id="_bindallobject--methodname1-methodname2-" href="#_bindallobject--methodname1-methodname2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1749 "View in source") [&#x24C9;][1]

Binds methods on the `object` to the object, overwriting the non-bound method. If no method names are provided, all the function properties of the `object` will be bound.

#### Arguments
1. `object` *(Object)*: The object to bind and assign the bound methods to.
2. `[methodName1, methodName2, ...]` *(String)*: Method names on the object to bind.

#### Returns
*(Object)*: Returns the `object`.

#### Example
~~~ js
var buttonView = {
 'label': 'lodash',
 'onClick': function() { alert('clicked: ' + this.label); },
 'onHover': function() { console.log('hovering: ' + this.label); }
};

_.bindAll(buttonView);
jQuery('#lodash_button').on('click', buttonView.onClick);
// => When the button is clicked, `this.label` will have the correct value
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.chain(value)`
<a id="_chainvalue" href="#_chainvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2985 "View in source") [&#x24C9;][1]

Wraps the value in a `lodash` chainable object.

#### Arguments
1. `value` *(Mixed)*: The value to wrap.

#### Returns
*(Object)*: Returns the `lodash` chainable object.

#### Example
~~~ js
var stooges = [
  { 'name': 'moe', 'age': 40 },
  { 'name': 'larry', 'age': 50 },
  { 'name': 'curly', 'age': 60 }
];

var youngest = _.chain(stooges)
    .sortBy(function(stooge) { return stooge.age; })
    .map(function(stooge) { return stooge.name + ' is ' + stooge.age; })
    .first()
    .value();
// => 'moe is 40'
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.clone(value)`
<a id="_clonevalue" href="#_clonevalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2073 "View in source") [&#x24C9;][1]

Create a shallow clone of the `value`. Any nested objects or arrays will be assigned by reference and not cloned.

#### Arguments
1. `value` *(Mixed)*: The value to clone.

#### Returns
*(Mixed)*: Returns the cloned `value`.

#### Example
~~~ js
_.clone({ 'name': 'moe' });
// => { 'name': 'moe' };
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.compact(array)`
<a id="_compactarray" href="#_compactarray">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L972 "View in source") [&#x24C9;][1]

Produces a new array with all falsey values of `array` removed. The values `false`, `null`, `0`, `""`, `undefined` and `NaN` are all falsey.

#### Arguments
1. `array` *(Array)*: The array to compact.

#### Returns
*(Array)*: Returns a new filtered array.

#### Example
~~~ js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.compose([func1, func2, ...])`
<a id="_composefunc1-func2-" href="#_composefunc1-func2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1781 "View in source") [&#x24C9;][1]

Creates a new function that is the composition of the passed functions, where each function consumes the return value of the function that follows. In math terms, composing thefunctions `f()`, `g()`, and `h()` produces `f(g(h()))`.

#### Arguments
1. `[func1, func2, ...]` *(Function)*: Functions to compose.

#### Returns
*(Function)*: Returns the new composed function.

#### Example
~~~ js
var greet = function(name) { return 'hi: ' + name; };
var exclaim = function(statement) { return statement + '!'; };
var welcome = _.compose(exclaim, greet);
welcome('moe');
// => 'hi: moe!'
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.contains(collection, target)`
<a id="_containscollection-target" href="#_containscollection-target">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L515 "View in source") [&#x24C9;][1]

Checks if a given `target` value is present in a `collection` using strict equality for comparisons, i.e. `===`.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `target` *(Mixed)*: The value to check for.

#### Returns
*(Boolean)*: Returns `true` if `target` value is found, else `false`.

#### Example
~~~ js
_.contains([1, 2, 3], 3);
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.debounce(func, wait, immediate)`
<a id="_debouncefunc-wait-immediate" href="#_debouncefunc-wait-immediate">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1813 "View in source") [&#x24C9;][1]

Creates a new function that will delay the execution of `func` until after `wait` milliseconds have elapsed since the last time it was invoked. Pass `true` for `immediate` to cause debounce to invoke `func` on the leading, instead of the trailing, edge of the `wait` timeout.

#### Arguments
1. `func` *(Function)*: The function to debounce.
2. `wait` *(Number)*: The number of milliseconds to delay.
3. `immediate` *(Boolean)*: A flag to indicate execution is on the leading  edge of the timeout.

#### Returns
*(Function)*: Returns the new debounced function.

#### Example
~~~ js
var lazyLayout = _.debounce(calculateLayout, 300);
jQuery(window).on('resize', lazyLayout);
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.defaults(object [, defaults1, defaults2, ..])`
<a id="_defaultsobject--defaults1-defaults2-" href="#_defaultsobject--defaults1-defaults2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2097 "View in source") [&#x24C9;][1]

Assigns missing properties in `object` with default values from the defaults objects. As soon as a property is set, additional defaults of the same property will be ignored.

#### Arguments
1. `object` *(Object)*: The object to populate.
2. `[defaults1, defaults2, ..]` *(Object)*: The defaults objects to apply to `object`.

#### Returns
*(Object)*: Returns `object`.

#### Example
~~~ js
var iceCream = { 'flavor': 'chocolate' };
_.defaults(iceCream, { 'flavor': 'vanilla', 'sprinkles': 'lots' });
// => { 'flavor': 'chocolate', 'sprinkles': 'lots' }
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.defer(func [, arg1, arg2, ...])`
<a id="_deferfunc--arg1-arg2-" href="#_deferfunc--arg1-arg2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1878 "View in source") [&#x24C9;][1]

Defers executing the `func` function until the current call stack has cleared. Additional arguments are passed to `func` when it is invoked.

#### Arguments
1. `func` *(Function)*: The function to defer.
2. `[arg1, arg2, ...]` *(Mixed)*: Arguments to invoke the function with.

#### Returns
*(Number)*: Returns the `setTimeout` timeout id.

#### Example
~~~ js
_.defer(function() { alert('deferred'); });
// Returns from the function before the alert runs.
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.delay(func, wait [, arg1, arg2, ...])`
<a id="_delayfunc-wait--arg1-arg2-" href="#_delayfunc-wait--arg1-arg2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1858 "View in source") [&#x24C9;][1]

Executes the `func` function after `wait` milliseconds. Additional arguments are passed to `func` when it is invoked.

#### Arguments
1. `func` *(Function)*: The function to delay.
2. `wait` *(Number)*: The number of milliseconds to delay execution.
3. `[arg1, arg2, ...]` *(Mixed)*: Arguments to invoke the function with.

#### Returns
*(Number)*: Returns the `setTimeout` timeout id.

#### Example
~~~ js
var log = _.bind(console.log, console);
_.delay(log, 1000, 'logged later');
// => 'logged later' (Appears after one second.)
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.difference(array [, array1, array2, ...])`
<a id="_differencearray--array1-array2-" href="#_differencearray--array1-array2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1001 "View in source") [&#x24C9;][1]

Produces a new array of `array` values not present in the other arrays using strict equality for comparisons, i.e. `===`.

#### Arguments
1. `array` *(Array)*: The array to process.
2. `[array1, array2, ...]` *(Array)*: Arrays to check.

#### Returns
*(Array)*: Returns a new array of `array` values not present in the  other arrays.

#### Example
~~~ js
_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
// => [1, 3, 4]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.escape(string)`
<a id="_escapestring" href="#_escapestring">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2682 "View in source") [&#x24C9;][1]

Escapes a string for insertion into HTML, replacing `&`, `<`, `"`, `'`, and `/` characters.

#### Arguments
1. `string` *(String)*: The string to escape.

#### Returns
*(String)*: Returns the escaped string.

#### Example
~~~ js
_.escape('Curly, Larry & Moe');
// => "Curly, Larry &amp; Moe"
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.every(collection, callback [, thisArg])`
<a id="_everycollection-callback--thisarg" href="#_everycollection-callback--thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L539 "View in source") [&#x24C9;][1]

Checks if the `callback` returns a truthy value for **all** elements of a `collection`. The `callback` is invoked with `3` arguments; for arrays they are *(value, index, array)* and for objects they are *(value, key, object)*.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `callback` *(Function)*: The function called per iteration.
3. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Boolean)*: Returns `true` if all values pass the callback check, else `false`.

#### Example
~~~ js
_.every([true, 1, null, 'yes'], Boolean);
=> false
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.extend(object [, source1, source2, ..])`
<a id="_extendobject--source1-source2-" href="#_extendobject--source1-source2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2116 "View in source") [&#x24C9;][1]

Copies enumerable properties from the source objects to the `destination` object. Subsequent sources will overwrite propery assignments of previous sources.

#### Arguments
1. `object` *(Object)*: The destination object.
2. `[source1, source2, ..]` *(Object)*: The source objects.

#### Returns
*(Object)*: Returns the destination object.

#### Example
~~~ js
_.extend({ 'name': 'moe' }, { 'age': 40 });
// => { 'name': 'moe', 'age': 40 }
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.filter(collection, callback [, thisArg])`
<a id="_filtercollection-callback--thisarg" href="#_filtercollection-callback--thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L560 "View in source") [&#x24C9;][1]

Examines each value in a `collection`, returning an array of all values the `callback` returns truthy for. The `callback` is invoked with `3` arguments; for arrays they are *(value, index, array)* and for objects they are *(value, key, object)*.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `callback` *(Function)*: The function called per iteration.
3. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Array)*: Returns a new array of values that passed callback check.

#### Example
~~~ js
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
// => [2, 4, 6]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.find(collection, callback [, thisArg])`
<a id="_findcollection-callback--thisarg" href="#_findcollection-callback--thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L582 "View in source") [&#x24C9;][1]

Examines each value in a `collection`, returning the first one the `callback` returns truthy for. The function returns as soon as it finds an acceptable value, and does not iterate over the entire `collection`. The `callback` is invoked with `3` arguments; for arrays they are *(value, index, array)* and for objects they are *(value, key, object)*.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `callback` *(Function)*: The function called per iteration.
3. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Mixed)*: Returns the value that passed the callback check, else `undefined`.

#### Example
~~~ js
var even = _.find([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
// => 2
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.first(array [, n, guard])`
<a id="_firstarray--n-guard" href="#_firstarray--n-guard">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1034 "View in source") [&#x24C9;][1]

Gets the first value of the `array`. Pass `n` to return the first `n` values of the `array`.

#### Arguments
1. `array` *(Array)*: The array to query.
2. `[n]` *(Number)*: The number of elements to return.
3. `[guard]` *(Object)*: Internally used to allow this method to work with  others like `_.map` without using their callback `index` argument for `n`.

#### Returns
*(Mixed)*: Returns the first value or an array of the first `n` values  of the `array`.

#### Example
~~~ js
_.first([5, 4, 3, 2, 1]);
// => 5
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.flatten(array, shallow)`
<a id="_flattenarray-shallow" href="#_flattenarray-shallow">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1056 "View in source") [&#x24C9;][1]

Flattens a nested array *(the nesting can be to any depth)*. If `shallow` is truthy, `array` will only be flattened a single level.

#### Arguments
1. `array` *(Array)*: The array to compact.
2. `shallow` *(Boolean)*: A flag to indicate only flattening a single level.

#### Returns
*(Array)*: Returns a new flattened array.

#### Example
~~~ js
_.flatten([1, [2], [3, [[4]]]]);
// => [1, 2, 3, 4];

_.flatten([1, [2], [3, [[4]]]], true);
// => [1, 2, 3, [[4]]];
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.forEach(collection, callback [, thisArg])`
<a id="_foreachcollection-callback--thisarg" href="#_foreachcollection-callback--thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L608 "View in source") [&#x24C9;][1]

Iterates over a `collection`, executing the `callback` for each value in the `collection`. The `callback` is bound to the `thisArg` value, if one is passed. The `callback` is invoked with `3` arguments; for arrays they are *(value, index, array)* and for objects they are *(value, key, object)*.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `callback` *(Function)*: The function called per iteration.
3. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Array, Object)*: Returns the `collection`.

#### Example
~~~ js
_.forEach([1, 2, 3], function(num) { alert(num); });
// => alerts each number in turn...

_.forEach({ 'one': 1, 'two': 2, 'three': 3}, function(num) { alert(num); });
// => alerts each number in turn...
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.functions(object)`
<a id="_functionsobject" href="#_functionsobject">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2133 "View in source") [&#x24C9;][1]

Produces a sorted array of the properties, own and inherited, of `object` that have function values.

#### Arguments
1. `object` *(Object)*: The object to inspect.

#### Returns
*(Array)*: Returns a new array of property names that have function values.

#### Example
~~~ js
_.functions(_);
// => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.groupBy(collection, callback [, thisArg])`
<a id="_groupbycollection-callback--thisarg" href="#_groupbycollection-callback--thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L632 "View in source") [&#x24C9;][1]

Splits a `collection` into sets, grouped by the result of running each value through `callback`. The `callback` is invoked with `3` arguments; for arrays they are *(value, index, array)* and for objects they are *(value, key, object)*. The `callback` argument may also be the name of a property to group by.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `callback` *(Function|String)*: The function called per iteration or  property name to group by.
3. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Object)*: Returns an object of grouped values.

#### Example
~~~ js
_.groupBy([1.3, 2.1, 2.4], function(num) { return Math.floor(num); });
// => { '1': [1.3], '2': [2.1, 2.4] }

_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.has(object, property)`
<a id="_hasobject-property" href="#_hasobject-property">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2156 "View in source") [&#x24C9;][1]

Checks if the specified object `property` exists and is a direct property, instead of an inherited property.

#### Arguments
1. `object` *(Object)*: The object to check.
2. `property` *(String)*: The property to check for.

#### Returns
*(Boolean)*: Returns `true` if key is a direct property, else `false`.

#### Example
~~~ js
_.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.identity(value)`
<a id="_identityvalue" href="#_identityvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2706 "View in source") [&#x24C9;][1]

This function simply returns the first argument passed to it. Note: It is used throughout Lo-Dash as a default callback.

#### Arguments
1. `value` *(Mixed)*: Any value.

#### Returns
*(Mixed)*: Returns `value`.

#### Example
~~~ js
var moe = { 'name': 'moe' };
moe === _.identity(moe);
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.indexOf(array, value [, isSorted=false])`
<a id="_indexofarray-value--issortedfalse" href="#_indexofarray-value--issortedfalse">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1093 "View in source") [&#x24C9;][1]

Gets the index at which the first occurrence of `value` is found using strict equality for comparisons, i.e. `===`. If the `array` is already sorted, passing `true` for `isSorted` will run a faster binary search.

#### Arguments
1. `array` *(Array)*: The array to search.
2. `value` *(Mixed)*: The value to search for.
3. `[isSorted=false]` *(Boolean)*: A flag to indicate that the `array` is already sorted.

#### Returns
*(Number)*: Returns the index of the matched value or `-1`.

#### Example
~~~ js
_.indexOf([1, 2, 3], 2);
// => 1
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.initial(array [, n, guard])`
<a id="_initialarray--n-guard" href="#_initialarray--n-guard">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1127 "View in source") [&#x24C9;][1]

Gets all but the last value of the `array`. Pass `n` to exclude the last `n` values from the result.

#### Arguments
1. `array` *(Array)*: The array to query.
2. `[n]` *(Number)*: The number of elements to return.
3. `[guard]` *(Object)*: Internally used to allow this method to work with  others like `_.map` without using their callback `index` argument for `n`.

#### Returns
*(Array)*: Returns all but the last value or `n` values of the `array`.

#### Example
~~~ js
_.initial([5, 4, 3, 2, 1]);
// => [5, 4, 3, 2]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.intersection([array1, array2, ...])`
<a id="_intersectionarray1-array2-" href="#_intersectionarray1-array2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1146 "View in source") [&#x24C9;][1]

Computes the intersection of all the passed-in arrays.

#### Arguments
1. `[array1, array2, ...]` *(Array)*: Arrays to process.

#### Returns
*(Array)*: Returns a new array of unique values, in order, that are  present in **all** of the arrays.

#### Example
~~~ js
_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// => [1, 2]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.invoke(array, methodName [, arg1, arg2, ...])`
<a id="_invokearray-methodname--arg1-arg2-" href="#_invokearray-methodname--arg1-arg2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1179 "View in source") [&#x24C9;][1]

Calls the method named by `methodName` for each value of the `collection`. Additional arguments will be passed to each invoked method.

#### Arguments
1. `array` *(Array)*: The array to iterate over.
2. `methodName` *(String)*: The name of the method to invoke.
3. `[arg1, arg2, ...]` *(Mixed)*: Arguments to invoke the method with.

#### Returns
*(Array)*: Returns a new array of values returned from each invoked method.

#### Example
~~~ js
_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isArguments(value)`
<a id="_isargumentsvalue" href="#_isargumentsvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2176 "View in source") [&#x24C9;][1]

Checks if a `value` is an `arguments` object.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is an `arguments` object, else `false`.

#### Example
~~~ js
(function() { return _.isArguments(arguments); })(1, 2, 3);
// => true

_.isArguments([1, 2, 3]);
// => false
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isArray(value)`
<a id="_isarrayvalue" href="#_isarrayvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L291 "View in source") [&#x24C9;][1]

Checks if a `value` is an array.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is an array, else `false`.

#### Example
~~~ js
(function() { return _.isArray(arguments); })();
// => false

_.isArray([1, 2, 3]);
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isBoolean(value)`
<a id="_isbooleanvalue" href="#_isbooleanvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2199 "View in source") [&#x24C9;][1]

Checks if a `value` is a boolean *(`true` or `false`)* value.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is a boolean value, else `false`.

#### Example
~~~ js
_.isBoolean(null);
// => false
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isDate(value)`
<a id="_isdatevalue" href="#_isdatevalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2216 "View in source") [&#x24C9;][1]

Checks if a `value` is a date.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is a date, else `false`.

#### Example
~~~ js
_.isDate(new Date);
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isElement(value)`
<a id="_iselementvalue" href="#_iselementvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2233 "View in source") [&#x24C9;][1]

Checks if a `value` is a DOM element.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is a DOM element, else `false`.

#### Example
~~~ js
_.isElement(document.body);
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isEmpty(value)`
<a id="_isemptyvalue" href="#_isemptyvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L312 "View in source") [&#x24C9;][1]

Checks if a `value` is empty. Arrays or strings with a length of `0` and objects with no enumerable own properties are considered "empty".

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is empty, else `false`.

#### Example
~~~ js
_.isEmpty([1, 2, 3]);
// => false

_.isEmpty({});
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isEqual(a, b [, stack])`
<a id="_isequala-b--stack" href="#_isequala-b--stack">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2260 "View in source") [&#x24C9;][1]

Performs a deep comparison between two values to determine if they are equivalent to each other.

#### Arguments
1. `a` *(Mixed)*: The value to compare.
2. `b` *(Mixed)*: The other value to compare.
3. `[stack]` *(Array)*: Internally used to keep track of "seen" objects to  avoid circular references.

#### Returns
*(Boolean)*: Returns `true` if the values are equvalent, else `false`.

#### Example
~~~ js
var moe = { 'name': 'moe', 'luckyNumbers': [13, 27, 34] };
var clone = { 'name': 'moe', 'luckyNumbers': [13, 27, 34] };

moe == clone;
// => false

_.isEqual(moe, clone);
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isFinite(value)`
<a id="_isfinitevalue" href="#_isfinitevalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2412 "View in source") [&#x24C9;][1]

Checks if a `value` is a finite number.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is a finite number, else `false`.

#### Example
~~~ js
_.isFinite(-101);
// => true

_.isFinite('10');
// => false

_.isFinite(Infinity);
// => false
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isFunction(value)`
<a id="_isfunctionvalue" href="#_isfunctionvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2429 "View in source") [&#x24C9;][1]

Checks if a `value` is a function.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is a function, else `false`.

#### Example
~~~ js
_.isFunction(''.concat);
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isNaN(value)`
<a id="_isnanvalue" href="#_isnanvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2477 "View in source") [&#x24C9;][1]

Checks if a `value` is `NaN`. Note: this is not the same as native `isNaN`, which will return true for `undefined` and other values. See http://es5.github.com/#x15.1.2.4.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is `NaN`, else `false`.

#### Example
~~~ js
_.isNaN(NaN);
// => true

_.isNaN(new Number(NaN));
// => true

isNaN(undefined);
// => true

_.isNaN(undefined);
// => false
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isNull(value)`
<a id="_isnullvalue" href="#_isnullvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2499 "View in source") [&#x24C9;][1]

Checks if a `value` is `null`.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is `null`, else `false`.

#### Example
~~~ js
_.isNull(null);
// => true

_.isNull(undefined);
// => false
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isNumber(value)`
<a id="_isnumbervalue" href="#_isnumbervalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2516 "View in source") [&#x24C9;][1]

Checks if a `value` is a number.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is a number, else `false`.

#### Example
~~~ js
_.isNumber(8.4 * 5;
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isObject(value)`
<a id="_isobjectvalue" href="#_isobjectvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2449 "View in source") [&#x24C9;][1]

Checks if a `value` is an object.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is an object, else `false`.

#### Example
~~~ js
_.isObject({});
// => true

_.isObject(1);
// => false
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isPrimitive(value)`
<a id="_isprimitivevalue" href="#_isprimitivevalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2584 "View in source") [&#x24C9;][1]

Checks if a `value` is a primitive *(string, number, boolean, undefined, null)*.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is a primitive, else `false`.

#### Example
~~~ js
_.isPrimitive(42);
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isRegExp(value)`
<a id="_isregexpvalue" href="#_isregexpvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2533 "View in source") [&#x24C9;][1]

Checks if a `value` is a regular expression.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is a regular expression, else `false`.

#### Example
~~~ js
_.isRegExp(/moe/);
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isString(value)`
<a id="_isstringvalue" href="#_isstringvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2550 "View in source") [&#x24C9;][1]

Checks if a `value` is a string.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is a string, else `false`.

#### Example
~~~ js
_.isString('moe');
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.isUndefined(value)`
<a id="_isundefinedvalue" href="#_isundefinedvalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2567 "View in source") [&#x24C9;][1]

Checks if a `value` is `undefined`.

#### Arguments
1. `value` *(Mixed)*: The value to check.

#### Returns
*(Boolean)*: Returns `true` if the `value` is `undefined`, else `false`.

#### Example
~~~ js
_.isUndefined(void 0);
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.keys(object)`
<a id="_keysobject" href="#_keysobject">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2601 "View in source") [&#x24C9;][1]

Produces an array of the `object`'s enumerable own property names.

#### Arguments
1. `object` *(Object)*: The object to inspect.

#### Returns
*(Array)*: Returns a new array of property names.

#### Example
~~~ js
_.keys({ 'one': 1, 'two': 2, 'three': 3 });
// => ['one', 'two', 'three']
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.last(array [, n, guard])`
<a id="_lastarray--n-guard" href="#_lastarray--n-guard">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1209 "View in source") [&#x24C9;][1]

Gets the last value of the `array`. Pass `n` to return the lasy `n` values of the `array`.

#### Arguments
1. `array` *(Array)*: The array to query.
2. `[n]` *(Number)*: The number of elements to return.
3. `[guard]` *(Object)*: Internally used to allow this method to work with  others like `_.map` without using their callback `index` argument for `n`.

#### Returns
*(Array)*: Returns all but the last value or `n` values of the `array`.

#### Example
~~~ js
_.last([5, 4, 3, 2, 1]);
// => 1
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.lastIndexOf(array, value)`
<a id="_lastindexofarray-value" href="#_lastindexofarray-value">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1229 "View in source") [&#x24C9;][1]

Gets the index at which the last occurrence of `value` is found using strict equality for comparisons, i.e. `===`.

#### Arguments
1. `array` *(Array)*: The array to search.
2. `value` *(Mixed)*: The value to search for.

#### Returns
*(Number)*: Returns the index of the matched value or `-1`.

#### Example
~~~ js
_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
// => 4
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.map(collection, callback [, thisArg])`
<a id="_mapcollection-callback--thisarg" href="#_mapcollection-callback--thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L666 "View in source") [&#x24C9;][1]

Produces a new array of values by mapping each value in the `collection` through a transformation `callback`. The `callback` is bound to the `thisArg` value, if one is passed. The `callback` is invoked with `3` arguments; for arrays they are *(value, index, array)* and for objects they are *(value, key, object)*.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `callback` *(Function)*: The function called per iteration.
3. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Array)*: Returns a new array of values returned by the callback.

#### Example
~~~ js
_.map([1, 2, 3], function(num) { return num * 3; });
// => [3, 6, 9]

_.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
// => [3, 6, 9]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.max(array [, callback, thisArg])`
<a id="_maxarray--callback-thisarg" href="#_maxarray--callback-thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1266 "View in source") [&#x24C9;][1]

Retrieves the maximum value of an `array`. If `callback` is passed, it will be executed for each value in the `array` to generate the criterion by which the value is ranked. The `callback` is invoked with `3` arguments; *(value, index, array)*.

#### Arguments
1. `array` *(Array)*: The array to iterate over.
2. `[callback]` *(Function)*: The function called per iteration.
3. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Mixed)*: Returns the maximum value.

#### Example
~~~ js
var stooges = [
  { 'name': 'moe', 'age': 40 },
  { 'name': 'larry', 'age': 50 },
  { 'name': 'curly', 'age': 60 }
];

_.max(stooges, function(stooge) { return stooge.age; });
// => { 'name': 'curly', 'age': 60 };
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.memoize(func [, resolver])`
<a id="_memoizefunc--resolver" href="#_memoizefunc--resolver">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1901 "View in source") [&#x24C9;][1]

Creates a new function that memoizes the result of `func`. If `resolver` is passed, it will be used to determine the cache key for storing the result based on the arguments passed to the memoized function. By default, the first argument passed to the memoized function is used as the cache key.

#### Arguments
1. `func` *(Function)*: The function to have its output memoized.
2. `[resolver]` *(Function)*: A function used to resolve the cache key.

#### Returns
*(Function)*: Returns the new memoizing function.

#### Example
~~~ js
var fibonacci = _.memoize(function(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.min(array [, callback, thisArg])`
<a id="_minarray--callback-thisarg" href="#_minarray--callback-thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1317 "View in source") [&#x24C9;][1]

Retrieves the minimum value of an `array`. If `callback` is passed, it will be executed for each value in the `array` to generate the criterion by which the value is ranked. The `callback` is invoked with `3` arguments; *(value, index, array)*.

#### Arguments
1. `array` *(Array)*: The array to iterate over.
2. `[callback]` *(Function)*: The function called per iteration.
3. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Mixed)*: Returns the minimum value.

#### Example
~~~ js
_.min([10, 5, 100, 2, 1000]);
// => 2
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.mixin(object)`
<a id="_mixinobject" href="#_mixinobject">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2732 "View in source") [&#x24C9;][1]

Adds functions properties of `object` to the `lodash` function and chainable wrapper.

#### Arguments
1. `object` *(Object)*: The object of function properties to add to `lodash`.

#### Example
~~~ js
_.mixin({
  'capitalize': function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
});

_.capitalize('curly');
// => 'Curly'

_('larry').capitalize();
// => 'Larry'
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.noConflict()`
<a id="_noconflict" href="#_noconflict">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2763 "View in source") [&#x24C9;][1]

Reverts the '_' variable to its previous value and returns a reference to the `lodash` function.

#### Returns
*(Function)*: Returns the `lodash` function.

#### Example
~~~ js
var lodash = _.noConflict();
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.once(func)`
<a id="_oncefunc" href="#_oncefunc">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1927 "View in source") [&#x24C9;][1]

Creates a new function that is restricted to one execution. Repeat calls to the function will return the value of the first call.

#### Arguments
1. `func` *(Function)*: The function to restrict.

#### Returns
*(Function)*: Returns the new restricted function.

#### Example
~~~ js
var initialize = _.once(createApplication);
initialize();
initialize();
// Application is only created once.
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.partial(func [, arg1, arg2, ...])`
<a id="_partialfunc--arg1-arg2-" href="#_partialfunc--arg1-arg2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1960 "View in source") [&#x24C9;][1]

Creates a new function that, when called, invokes `func` with any additional `partial` arguments prepended to those passed to the partially applied function. This method is similar `bind`, except it does **not** alter the `this` binding.

#### Arguments
1. `func` *(Function)*: The function to partially apply arguments to.
2. `[arg1, arg2, ...]` *(Mixed)*: Arguments to be partially applied.

#### Returns
*(Function)*: Returns the new partially applied function.

#### Example
~~~ js
var greet = function(greeting, name) { return greeting + ': ' + name; };
var hi = _.partial(greet, 'hi');
hi('moe');
// => 'hi: moe'
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.pick(object [, prop1, prop2, ..])`
<a id="_pickobject--prop1-prop2-" href="#_pickobject--prop1-prop2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2623 "View in source") [&#x24C9;][1]

Creates an object composed of the specified properties. Property names may be specified as individual arguments or as arrays of property names.

#### Arguments
1. `object` *(Object)*: The object to pluck.
2. `[prop1, prop2, ..]` *(Object)*: The properties to pick.

#### Returns
*(Object)*: Returns an object composed of the picked properties.

#### Example
~~~ js
_.pick({ 'name': 'moe', 'age': 40, 'userid': 'moe1' }, 'name', 'age');
// => { 'name': 'moe', 'age': 40 }
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.pluck(collection, property)`
<a id="_pluckcollection-property" href="#_pluckcollection-property">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L688 "View in source") [&#x24C9;][1]

Retrieves the value of a specified property from all values in a `collection`.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `property` *(String)*: The property to pluck.

#### Returns
*(Array)*: Returns a new array of property values.

#### Example
~~~ js
var stooges = [
  { 'name': 'moe', 'age': 40 },
  { 'name': 'larry', 'age': 50 },
  { 'name': 'curly', 'age': 60 }
];

_.pluck(stooges, 'name');
// => ['moe', 'larry', 'curly']
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.range([start=0], end [, step=1])`
<a id="_rangestart0-end--step1" href="#_rangestart0-end--step1">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1379 "View in source") [&#x24C9;][1]

Creates an array of numbers *(positive and/or negative)* progressing from `start` up to but not including `stop`. This method is a port of Python's `range()` function. See http://docs.python.org/library/functions.html#range.

#### Arguments
1. `[start=0]` *(Number)*: The start of the range.
2. `end` *(Number)*: The end of the range.
3. `[step=1]` *(Number)*: The value to increment or descrement by.

#### Returns
*(Array)*: Returns a new range array.

#### Example
~~~ js
_.range(10);
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

_.range(1, 11);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

_.range(0, 30, 5);
// => [0, 5, 10, 15, 20, 25]

_.range(0, -10, -1);
// => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

_.range(0);
// => []
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.reduce(collection, callback [, accumulator, thisArg])`
<a id="_reducecollection-callback--accumulator-thisarg" href="#_reducecollection-callback--accumulator-thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L718 "View in source") [&#x24C9;][1]

Boils down a `collection` to a single value. The initial state of the reduction is `accumulator` and each successive step of it should be returned by the `callback`. The `callback` is bound to the `thisArg` value, if one is passed. The `callback` is invoked with `4` arguments; for arrays they are *(accumulator, value, index, array)* and for objects they are *(accumulator, value, key, object)*.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `callback` *(Function)*: The function called per iteration.
3. `[accumulator]` *(Mixed)*: Initial value of the accumulator.
4. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Mixed)*: Returns the accumulated value.

#### Example
~~~ js
var sum = _.reduce([1, 2, 3], function(memo, num) { return memo + num; });
// => 6
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.reduceRight(collection, callback [, accumulator, thisArg])`
<a id="_reducerightcollection-callback--accumulator-thisarg" href="#_reducerightcollection-callback--accumulator-thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L758 "View in source") [&#x24C9;][1]

The right-associative version of `_.reduce`. The `callback` is bound to the `thisArg` value, if one is passed. The `callback` is invoked with `4` arguments; for arrays they are *(accumulator, value, index, array)* and for objects they are *(accumulator, value, key, object)*.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `callback` *(Function)*: The function called per iteration.
3. `[accumulator]` *(Mixed)*: Initial value of the accumulator.
4. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Mixed)*: Returns the accumulated value.

#### Example
~~~ js
var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
// => [4, 5, 2, 3, 0, 1]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.reject(collection, callback [, thisArg])`
<a id="_rejectcollection-callback--thisarg" href="#_rejectcollection-callback--thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L811 "View in source") [&#x24C9;][1]

The opposite of `_.filter`, this method returns the values of a `collection` that `callback` does **not** return truthy for. The `callback` is invoked with `3` arguments; for arrays they are *(value, index, array)* and for objects they are *(value, key, object)*.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `callback` *(Function)*: The function called per iteration.
3. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Array)*: Returns a new array of values that did **not** pass the callback check.

#### Example
~~~ js
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
// => [1, 3, 5]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.rest(array [, n, guard])`
<a id="_restarray--n-guard" href="#_restarray--n-guard">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1415 "View in source") [&#x24C9;][1]

The opposite of `_.initial`, this method gets all but the first value of the `array`. Pass `n` to exclude the first `n` values from the result.

#### Arguments
1. `array` *(Array)*: The array to query.
2. `[n]` *(Number)*: The number of elements to return.
3. `[guard]` *(Object)*: Internally used to allow this method to work with  others like `_.map` without using their callback `index` argument for `n`.

#### Returns
*(Array)*: Returns all but the first value or `n` values of the `array`.

#### Example
~~~ js
_.rest([5, 4, 3, 2, 1]);
// => [4, 3, 2, 1]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.result(object, property)`
<a id="_resultobject-property" href="#_resultobject-property">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2793 "View in source") [&#x24C9;][1]

Resolves the value of `property` on `object`. If the property is a function it will be invoked and its result returned, else the property value is returned.

#### Arguments
1. `object` *(Object)*: The object to inspect.
2. `property` *(String)*: The property to get the result of.

#### Returns
*(Mixed)*: Returns the resolved.

#### Example
~~~ js
var object = {
  'cheese': 'crumpets',
  'stuff': function() {
    return 'nonsense';
  }
};

_.result(object, 'cheese');
// => 'crumpets'

_.result(object, 'stuff');
// => 'nonsense'
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.shuffle(array)`
<a id="_shufflearray" href="#_shufflearray">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1433 "View in source") [&#x24C9;][1]

Produces a new array of shuffled `array` values, using a version of the Fisher-Yates shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.

#### Arguments
1. `array` *(Array)*: The array to shuffle.

#### Returns
*(Array)*: Returns a new shuffled array.

#### Example
~~~ js
_.shuffle([1, 2, 3, 4, 5, 6]);
// => [4, 1, 6, 3, 5, 2]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.size(collection)`
<a id="_sizecollection" href="#_sizecollection">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L828 "View in source") [&#x24C9;][1]

Gets the number of values in the `collection`.

#### Arguments
1. `collection` *(Array|Object)*: The collection inspect.

#### Returns
*(Number)*: Returns the number of values in the collection.

#### Example
~~~ js
_.size({ 'one': 1, 'two': 2, 'three': 3 });
// => 3
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.some(collection, callback [, thisArg])`
<a id="_somecollection-callback--thisarg" href="#_somecollection-callback--thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L901 "View in source") [&#x24C9;][1]

Checks if the `callback` returns a truthy value for **any** element of a `collection`. The function returns as soon as it finds passing value, and does not iterate over the entire `collection`. The `callback` is invoked with `3` arguments; for arrays they are *(value, index, array)* and for objects they are *(value, key, object)*.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `callback` *(Function)*: The function called per iteration.
3. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Boolean)*: Returns `true` if any value passes the callback check, else `false`.

#### Example
~~~ js
_.some([null, 0, 'yes', false]);
// => true
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.sortBy(collection, callback [, thisArg])`
<a id="_sortbycollection-callback--thisarg" href="#_sortbycollection-callback--thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L855 "View in source") [&#x24C9;][1]

Produces a new sorted array, ranked in ascending order by the results of running each value of a `collection` through `callback`. The `callback` is invoked with `3` arguments; for arrays they are *(value, index, array)* and for objects they are *(value, key, object)*. The `callback` argument may also be the name of a property to sort by *(e.g. 'length')*.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `callback` *(Function|String)*: The function called per iteration or  property name to sort by.
3. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Returns
*(Array)*: Returns a new array of sorted values.

#### Example
~~~ js
_.sortBy([1, 2, 3, 4, 5, 6], function(num) { return Math.sin(num); });
// => [5, 4, 6, 3, 1, 2]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.sortedIndex(array, value [, callback])`
<a id="_sortedindexarray-value--callback" href="#_sortedindexarray-value--callback">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1467 "View in source") [&#x24C9;][1]

Uses a binary search to determine the smallest  index at which the `value` should be inserted into the `collection` in order to maintain the sort order of the `collection`. If `callback` is passed, it will be executed for each value in the `collection` to compute their sort ranking. The `callback` is invoked with `1` argument; *(value)*.

#### Arguments
1. `array` *(Array)*: The array to iterate over.
2. `value` *(Mixed)*: The value to evaluate.
3. `[callback]` *(Function)*: The function called per iteration.

#### Returns
*(Number)*: Returns the index at which the value should be inserted  into the collection.

#### Example
~~~ js
_.sortedIndex([10, 20, 30, 40, 50], 35);
// => 3
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.tap(value, interceptor)`
<a id="_tapvalue-interceptor" href="#_tapvalue-interceptor">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2661 "View in source") [&#x24C9;][1]

Invokes `interceptor` with the `value` as the first argument, and then returns `value`. The primary purpose of this method is to "tap into" a method chain, in order to performoperations on intermediate results within the chain.

#### Arguments
1. `value` *(Mixed)*: The value to pass to `callback`.
2. `interceptor` *(Function)*: The function to invoke.

#### Returns
*(Mixed)*: Returns `value`.

#### Example
~~~ js
_.chain([1,2,3,200])
 .filter(function(num) { return num % 2 == 0; })
 .tap(alert)
 .map(function(num) { return num * num })
 .value();
// => // [2, 200] (alerted)
// => [4, 40000]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.template(text, data, options)`
<a id="_templatetext-data-options" href="#_templatetext-data-options">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2853 "View in source") [&#x24C9;][1]

A JavaScript micro-templating method, similar to John Resig's implementation. Lo-Dash templating handles arbitrary delimiters, preserves whitespace, and correctly escapes quotes within interpolated code.

#### Arguments
1. `text` *(String)*: The template text.
2. `data` *(Obect)*: The data object used to populate the text.
3. `options` *(Object)*: The options object.

#### Returns
*(Function, String)*: Returns a compiled function when no `data` object  is given, else it returns the interpolated text.

#### Example
~~~ js
// using compiled template
var compiled = _.template('hello: <%= name %>');
compiled({ 'name': 'moe' });
// => 'hello: moe'

var list = '% _.forEach(people, function(name) { %> <li><%= name %></li> <% }); %>';
_.template(list, { 'people': ['moe', 'curly', 'larry'] });
// => '<li>moe</li><li>curly</li><li>larry</li>'

var template = _.template('<b><%- value %></b>');
template({ 'value': '<script>' });
// => '<b>&lt;script&gt;</b>'

// using `print`
var compiled = _.template('<% print("Hello " + epithet); %>');
compiled({ 'epithet': 'stooge' });
// => 'Hello stooge.'

// using custom template settings
_.templateSettings = {
  'interpolate': /\{\{(.+?)\}\}/g
};

var template = _.template('Hello {{ name }}!');
template({ 'name': 'Mustache' });
// => 'Hello Mustache!'


// using the `variable` option
_.template('<%= data.hasWith %>', { 'hasWith': 'no' }, { 'variable': 'data' });
// => 'no'

// using the `source` property
<script>
  JST.project = <%= _.template(jstText).source %>;
</script>
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.throttle(func, wait)`
<a id="_throttlefunc-wait" href="#_throttlefunc-wait">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1995 "View in source") [&#x24C9;][1]

Creates a new function that, when executed, will only call the `func` function at most once per every `wait` milliseconds. If the throttled function is invoked more than once, `func` will also be called on the trailing edge of the `wait` timeout.

#### Arguments
1. `func` *(Function)*: The function to throttle.
2. `wait` *(Number)*: The number of milliseconds to throttle executions to.

#### Returns
*(Function)*: Returns the new throttled function.

#### Example
~~~ js
var throttled = _.throttle(updatePosition, 100);
jQuery(window).on('scroll', throttled);
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.times(n, callback [, thisArg])`
<a id="_timesn-callback--thisarg" href="#_timesn-callback--thisarg">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2932 "View in source") [&#x24C9;][1]

Executes the `callback` function `n` times. The `callback` is invoked with `1` argument; *(index)*.

#### Arguments
1. `n` *(Number)*: The number of times to execute the callback.
2. `callback` *(Function)*: The function called per iteration.
3. `[thisArg]` *(Mixed)*: The `this` binding for the callback.

#### Example
~~~ js
_.times(3, function() { genie.grantWish(); });
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.toArray(collection)`
<a id="_toarraycollection" href="#_toarraycollection">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L920 "View in source") [&#x24C9;][1]

Converts the `collection`, into an array. Useful for converting the `arguments` object.

#### Arguments
1. `collection` *(Array|Object)*: The collection to convert.

#### Returns
*(Array)*: Returns the new converted array.

#### Example
~~~ js
(function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
// => [2, 3, 4]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.union([array1, array2, ...])`
<a id="_unionarray1-array2-" href="#_unionarray1-array2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1500 "View in source") [&#x24C9;][1]

Computes the union of the passed-in arrays.

#### Arguments
1. `[array1, array2, ...]` *(Array)*: Arrays to process.

#### Returns
*(Array)*: Returns a new array of unique values, in order, that are  present in one or more of the arrays.

#### Example
~~~ js
_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// => [1, 2, 3, 101, 10]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.uniq(array [, isSorted=false, callback])`
<a id="_uniqarray--issortedfalse-callback" href="#_uniqarray--issortedfalse-callback">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1535 "View in source") [&#x24C9;][1]

Produces a duplicate-value-free version of the `array` using strict equality for comparisons, i.e. `===`. If the `array` is already sorted, passing `true` for `isSorted` will run a faster algorithm. If `callback` is passed, each value of `array` is passed through a transformation `callback` before uniqueness is computed. The `callback` is invoked with `3` arguments; *(value, index, array)*.

#### Arguments
1. `array` *(Array)*: The array to process.
2. `[isSorted=false]` *(Boolean)*: A flag to indicate that the `array` is already sorted.
3. `[callback]` *(Function)*: A

#### Returns
*(Array)*: Returns a duplicate-value-free array.

#### Example
~~~ js
_.uniq([1, 2, 1, 3, 1, 4]);
// => [1, 2, 3, 4]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.uniqueId([prefix])`
<a id="_uniqueidprefix" href="#_uniqueidprefix">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2955 "View in source") [&#x24C9;][1]

Generates a unique id. If `prefix` is passed, the id will be appended to it.

#### Arguments
1. `[prefix]` *(String)*: The value to prefix the id with.

#### Returns
*(Number, String)*: Returns a numeric id if no prefix is passed, else  a string id may be returned.

#### Example
~~~ js
_.uniqueId('contact_');
// => 'contact_104'
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.values(collection)`
<a id="_valuescollection" href="#_valuescollection">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L948 "View in source") [&#x24C9;][1]

Produces an array of enumerable own property values of the `collection`.

#### Arguments
1. `collection` *(Array|Object)*: The collection to inspect.

#### Returns
*(Array)*: Returns a new array of property values.

#### Example
~~~ js
_.values({ 'one': 1, 'two': 2, 'three': 3 });
// => [1, 2, 3]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.without(array [, value1, value2, ...])`
<a id="_withoutarray--value1-value2-" href="#_withoutarray--value1-value2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1573 "View in source") [&#x24C9;][1]

Produces a new array with all occurrences of the passed values removed using strict equality for comparisons, i.e. `===`.

#### Arguments
1. `array` *(Array)*: The array to filter.
2. `[value1, value2, ...]` *(Mixed)*: Values to remove.

#### Returns
*(Array)*: Returns a new filtered array.

#### Example
~~~ js
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
// => [2, 3, 4]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.wrap(func, wrapper [, arg1, arg2, ...])`
<a id="_wrapfunc-wrapper--arg1-arg2-" href="#_wrapfunc-wrapper--arg1-arg2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L2047 "View in source") [&#x24C9;][1]

Create a new function that passes the `func` function to the `wrapper` function as its first argument. Additional arguments are appended to those passed to the `wrapper` function.

#### Arguments
1. `func` *(Function)*: The function to wrap.
2. `wrapper` *(Function)*: The wrapper function.
3. `[arg1, arg2, ...]` *(Mixed)*: Arguments to append to those passed to the wrapper.

#### Returns
*(Function)*: Returns the new function.

#### Example
~~~ js
var hello = function(name) { return 'hello: ' + name; };
hello = _.wrap(hello, function(func) {
  return 'before, ' + func('moe') + ', after';
});
hello();
// => 'before, hello: moe, after'
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.zip([array1, array2, ...])`
<a id="_ziparray1-array2-" href="#_ziparray1-array2-">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L1603 "View in source") [&#x24C9;][1]

Merges together the values of each of the arrays with the value at the corresponding position. Useful for separate data sources that are coordinated through matching array indexes. For a matrix of nested arrays, `_.zip.apply(...)` can transpose the matrix in a similar fashion.

#### Arguments
1. `[array1, array2, ...]` *(Array)*: Arrays to process.

#### Returns
*(Array)*: Returns a new array of merged arrays.

#### Example
~~~ js
_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// => [['moe', 30, true], ['larry', 40, false], ['curly', 50, false]]
~~~

* * *

<!-- /div -->


<!-- /div -->


<!-- div -->

## `_.prototype`

<!-- div -->


<!-- div -->

### `_.prototype.chain()`
<a id="_prototypechain" href="#_prototypechain">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L3003 "View in source") [&#x24C9;][1]

Extracts the value from a wrapped chainable object.

#### Returns
*(Mixed)*: Returns the wrapped object.

#### Example
~~~ js
_([1, 2, 3]).value();
// => [1, 2, 3]
~~~

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.prototype.value()`
<a id="_prototypevalue" href="#_prototypevalue">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L3020 "View in source") [&#x24C9;][1]

Extracts the value from a wrapped chainable object.

#### Returns
*(Mixed)*: Returns the wrapped object.

#### Example
~~~ js
_([1, 2, 3]).value();
// => [1, 2, 3]
~~~

* * *

<!-- /div -->


<!-- /div -->


<!-- div -->

## `_.templateSettings`

<!-- div -->


<!-- div -->

### `_.templateSettings`
<a id="_templatesettings" href="#_templatesettings">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L3045 "View in source") [&#x24C9;][1]

*(Object)*: By default, Lo-Dash uses ERB-style template delimiters, change the following template settings to use alternative delimiters.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.templateSettings.escape`
<a id="_templatesettingsescape" href="#_templatesettingsescape">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L3054 "View in source") [&#x24C9;][1]

*(RegExp)*: Used to detect `data` property values to be HTML-escaped.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.templateSettings.evaluate`
<a id="_templatesettingsevaluate" href="#_templatesettingsevaluate">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L3063 "View in source") [&#x24C9;][1]

*(RegExp)*: Used to detect code to be evaluated.

* * *

<!-- /div -->


<!-- div -->


<!-- div -->

### `_.templateSettings.interpolate`
<a id="_templatesettingsinterpolate" href="#_templatesettingsinterpolate">#</a> [&#x24C8;](https://github.com/bestiejs/lodash/blob/master/lodash.js#L3072 "View in source") [&#x24C9;][1]

*(RegExp)*: Used to detect `data` property values to inject.

* * *

<!-- /div -->


<!-- /div -->


<!-- /div -->


  [1]: #readme "Jump back to the TOC."