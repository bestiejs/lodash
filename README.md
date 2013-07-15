# Lo-Dash <sup>v1.3.1</sup>

A low-level utility library delivering consistency, [customization](https://github.com/bestiejs/lodash#custom-builds), [performance](http://lodash.com/benchmarks), and [extra features](https://github.com/bestiejs/lodash#features).

## Download

* Lo-Dash builds (for modern environments):<br>
[Development](https://raw.github.com/bestiejs/lodash/v1.3.1/dist/lodash.js) and
[Production](https://raw.github.com/bestiejs/lodash/v1.3.1/dist/lodash.min.js)

* Lo-Dash compatibility builds (for legacy and modern environments):<br>
[Development](https://raw.github.com/bestiejs/lodash/v1.3.1/dist/lodash.compat.js) and
[Production](https://raw.github.com/bestiejs/lodash/v1.3.1/dist/lodash.compat.min.js)

* Underscore compatibility builds:<br>
[Development](https://raw.github.com/bestiejs/lodash/v1.3.1/dist/lodash.underscore.js) and
[Production](https://raw.github.com/bestiejs/lodash/v1.3.1/dist/lodash.underscore.min.js)

* For optimal file size, [create a custom build](https://github.com/bestiejs/lodash#custom-builds) with only the features you need

### CDN

* [jsDelivr](http://www.jsdelivr.com/#!lodash) hosts a full rainbow of build flavors & may be [fastest](http://www.cdnperf.com/) for most, thanks to [many sponsors](http://www.jsdelivr.com/about.php):<br>
[dev](//cdn.jsdelivr.net/ajax/libs/lodash.js/1.3.1/lodash.js),
[prod](//cdn.jsdelivr.net/ajax/libs/lodash.js/1.3.1/lodash.min.js),<br>
[compat-dev](//cdn.jsdelivr.net/ajax/libs/lodash.js/1.3.1/lodash.compat.js),
[compat-prod](//cdn.jsdelivr.net/ajax/libs/lodash.js/1.3.1/lodash.compat.min.js),<br>
[Backbone compat-dev](//cdn.jsdelivr.net/ajax/libs/lodash.js/1.3.1/lodash.backbone.js), 
[Backbone compat-prod](//cdn.jsdelivr.net/ajax/libs/lodash.js/1.3.1/lodash.backbone.min.js)<br>
[Legacy-dev](//cdn.jsdelivr.net/ajax/libs/lodash.js/1.3.1/lodash.legacy.js), 
[Legacy-prod](//cdn.jsdelivr.net/ajax/libs/lodash.js/1.3.1/lodash.legacy.min.js)<br>
[Mobile compat-dev](//cdn.jsdelivr.net/ajax/libs/lodash.js/1.3.1/lodash.mobile.js), 
[Mobile compat-prod](//cdn.jsdelivr.net/ajax/libs/lodash.js/1.3.1/lodash.mobile.min.js)<br>
[Underscore compat-dev](//cdn.jsdelivr.net/ajax/libs/lodash.js/1.3.1/lodash.underscore.js), and
[Underscore compat-prod](//cdn.jsdelivr.net/ajax/libs/lodash.js/1.3.1/lodash.underscore.min.js)

* [cdnjs](http://cdnjs.com/) hosts current and most older versions thanks to [CloudFlare](http://www.cloudflare.com/):<br>
[Lo-Dash dev](//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.3.1/lodash.js),
[Lo-Dash prod](//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.3.1/lodash.min.js),<br>
[Lo-Dash compat-dev](//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.3.1/lodash.compat.js),
[Lo-Dash compat-prod](//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.3.1/lodash.compat.min.js),<br>
[Underscore compat-dev](//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.3.1/lodash.underscore.js), and
[Underscore compat-prod](//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.3.1/lodash.underscore.min.js)

## Dive in

We’ve got [API docs](http://lodash.com/docs), [benchmarks](http://lodash.com/benchmarks), and [unit tests](http://lodash.com/tests).

For a list of upcoming features, check out our [roadmap](https://github.com/bestiejs/lodash/wiki/Roadmap).

## Resources

For more information check out these articles, screencasts, and other videos over Lo-Dash:

 * Posts
  - [Say “Hello” to Lo-Dash](http://kitcambridge.be/blog/say-hello-to-lo-dash/)

 * Videos
  - [Introducing Lo-Dash](https://vimeo.com/44154599)
  - [Lo-Dash optimizations and custom builds](https://vimeo.com/44154601)
  - [Lo-Dash’s origin and why it’s a better utility belt](https://vimeo.com/44154600)
  - [Unit testing in Lo-Dash](https://vimeo.com/45865290)
  - [Lo-Dash’s approach to native method use](https://vimeo.com/48576012)
  - [CascadiaJS: Lo-Dash for a better utility belt](http://www.youtube.com/watch?v=dpPy4f_SeEk)

## Features

 * AMD loader support ([RequireJS](http://requirejs.org/), [curl.js](https://github.com/cujojs/curl), etc.)
 * [_(…)](http://lodash.com/docs#_) supports intuitive chaining
 * [_.at](http://lodash.com/docs#at) for cherry-picking collection values
 * [_.bindKey](http://lodash.com/docs#bindKey) for binding [*“lazy”* defined](http://michaux.ca/articles/lazy-function-definition-pattern) methods
 * [_.cloneDeep](http://lodash.com/docs#cloneDeep) for deep cloning arrays and objects
 * [_.contains](http://lodash.com/docs#contains) accepts a `fromIndex` argument
 * [_.debounce](http://lodash.com/docs#debounce) and [_.throttle](http://lodash.com/docs#throttle) accept an `options` argument for more control
 * [_.createCallback](http://lodash.com/docs#createCallback) to customize how callback arguments are handled and support callback shorthands in mixins
 * [_.findIndex](http://lodash.com/docs#findIndex) and [_.findKey](http://lodash.com/docs#findKey) for finding indexes and keys of collections
 * [_.forEach](http://lodash.com/docs#forEach) is chainable and supports exiting iteration early
 * [_.forIn](http://lodash.com/docs#forIn) for iterating over an object’s own and inherited properties
 * [_.forOwn](http://lodash.com/docs#forOwn) for iterating over an object’s own properties
 * [_.isPlainObject](http://lodash.com/docs#isPlainObject) checks if values are created by the `Object` constructor
 * [_.merge](http://lodash.com/docs#merge) for a deep [_.extend](http://lodash.com/docs#extend)
 * [_.parseInt](http://lodash.com/docs#parseInt) for consistent cross-environment behavior
 * [_.partial](http://lodash.com/docs#partial) and [_.partialRight](http://lodash.com/docs#partialRight) for partial application without `this` binding
 * [_.runInContext](http://lodash.com/docs#runInContext) for easier mocking and extended environment support
 * [_.support](http://lodash.com/docs#support) to flag environment features
 * [_.template](http://lodash.com/docs#template) supports [*“imports”* options](http://lodash.com/docs#templateSettings_imports), [ES6 template delimiters](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-7.8.6), and [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
 * [_.transform](http://lodash.com/docs#transform) as a powerful alternative to [_.reduce](http://lodash.com/docs#reduce) for transforming objects
 * [_.unzip](http://lodash.com/docs#unzip) as the inverse of [_.zip](http://lodash.com/docs#zip)
 * [_.where](http://lodash.com/docs#where) supports deep object comparisons
 * [_.clone](http://lodash.com/docs#clone), [_.omit](http://lodash.com/docs#omit), [_.pick](http://lodash.com/docs#pick),
   [and more…](http://lodash.com/docs "_.assign, _.cloneDeep, _.first, _.initial, _.isEqual, _.last, _.merge, _.rest") accept `callback` and `thisArg` arguments
 * [_.contains](http://lodash.com/docs#contains), [_.size](http://lodash.com/docs#size), [_.toArray](http://lodash.com/docs#toArray),
   [and more…](http://lodash.com/docs "_.at, _.countBy, _.every, _.filter, _.find, _.forEach, _.groupBy, _.invoke, _.map, _.max, _.min, _.pluck, _.reduce, _.reduceRight, _.reject, _.shuffle, _.some, _.sortBy, _.where") accept strings
 * [_.filter](http://lodash.com/docs#filter), [_.find](http://lodash.com/docs#find), [_.map](http://lodash.com/docs#map),
   [and more…](http://lodash.com/docs "_.countBy, _.every, _.first, _.groupBy, _.initial, _.last, _.max, _.min, _.reject, _.rest, _.some, _.sortBy, _.sortedIndex, _.uniq") support *“_.pluck”* and *“_.where”* `callback` shorthands

## Support

Lo-Dash has been tested in at least Chrome 5~28, Firefox 2~22, IE 6-10, Opera 9.25~15, Safari 3-6, Node.js 0.4.8-0.10.13*, Narwhal 0.3.2, PhantomJS 1.9.0, RingoJS 0.9, and Rhino 1.7RC5.

\* Node.js 0.10.8-0.10.11 [have](https://github.com/joyent/node/issues/5622) [bugs](https://github.com/joyent/node/issues/5688) that prevent the `lodash` command-line utility from creating minified builds.

## Custom builds

Custom builds make it easy to create lightweight versions of Lo-Dash containing only the methods you need.
To top it off, we handle all method dependency and alias mapping for you.
For a more detailed summary over the differences between various builds, check out the [wiki page](https://github.com/bestiejs/lodash/wiki/build-differences).

 * Backbone builds, with only methods required by Backbone, may be created using the `backbone` modifier argument.
```bash
lodash backbone
```

 * Legacy builds, tailored for older environments without [ES5 support](http://es5.github.com/), may be created using the `legacy` modifier argument.
```bash
lodash legacy
```

 * Modern builds, tailored for newer environments with ES5 support, may be created using the `modern` modifier argument.
```bash
lodash modern
```

 * Mobile builds, without method compilation and most bug fixes for old browsers, may be created using the `mobile` modifier argument.
```bash
lodash mobile
```

 * Strict builds, with `_.bindAll`, `_.defaults`, and `_.extend` in [strict mode](http://es5.github.com/#C), may be created using the `strict` modifier argument.
```bash
lodash strict
```

 * Underscore builds, tailored for projects already using Underscore, may be created using the `underscore` modifier argument.
```bash
lodash underscore
```

Custom builds may be created using the following commands:

 * Use the `category` argument to pass comma separated categories of methods to include in the build.<br>
   Valid categories (case-insensitive) are *“arrays”*, *“chaining”*, *“collections”*, *“functions”*, *“objects”*, and *“utilities”*.
```bash
lodash category=collections,functions
lodash category="collections, functions"
```

 * Use the `exports` argument to pass comma separated names of ways to export the `LoDash` function.<br>
   Valid exports are *“amd”*, *“commonjs”*, *“global”*, *“node”*, and *“none”*.
```bash
lodash exports=amd,commonjs,node
lodash exports="amd, commonjs, node"
```

 * Use the `iife` argument to specify code to replace the immediately-invoked function expression that wraps Lo-Dash.
```bash
lodash iife="!function(window,undefined){%output%}(this)"
```

 * Use the `include` argument to pass comma separated method/category names to include in the build.
```bash
lodash include=each,filter,map
lodash include="each, filter, map"
```

 * Use the `minus` argument to pass comma separated method/category names to remove from those included in the build.
```bash
lodash underscore minus=result,shuffle
lodash underscore minus="result, shuffle"
```

 * Use the `plus` argument to pass comma separated method/category names to add to those included in the build.
```bash
lodash backbone plus=random,template
lodash backbone plus="random, template"
```

 * Use the `template` argument to pass the file path pattern used to match template files to precompile.
```bash
lodash template="./*.jst"
```

 * Use the `settings` argument to pass the template settings used when precompiling templates.
```bash
lodash settings="{interpolate:/\{\{([\s\S]+?)\}\}/g}"
```

 * Use the `moduleId` argument to specify the AMD module ID of Lo-Dash, which defaults to “lodash”, used by precompiled templates.
```bash
lodash moduleId="underscore"
```

All arguments, except `legacy` with `mobile`, `modern`, or `underscore`, may be combined.<br>
Unless specified by `-o` or `--output`, all files created are saved to the current working directory.

The following options are also supported:

 * `-c`, `--stdout` ......... Write output to standard output
 * `-d`, `--debug` ........... Write only the non-minified development output
 * `-h`, `--help` ............. Display help information
 * `-m`, `--minify` ......... Write only the minified production output
 * `-o`, `--output` ......... Write output to a given path/filename
 * `-p`, `--source-map` .. Generate a source map for the minified output, using an optional source map URL
 * `-s`, `--silent` ......... Skip status updates normally logged to the console
 * `-V`, `--version` ....... Output current version of Lo-Dash

The `lodash` command-line utility is available when Lo-Dash is installed as a global package (i.e. `npm install -g lodash`).

## Installation and usage

In browsers:

```html
<script src="lodash.js"></script>
```

Using [`npm`](http://npmjs.org/):

```bash
npm install lodash

npm install -g lodash
npm link lodash
```

To avoid potential issues, update `npm` before installing Lo-Dash:

```bash
npm install npm -g
```

In [Node.js](http://nodejs.org/) and [RingoJS ≥ v0.8.0](http://ringojs.org/):

```js
var _ = require('lodash');

// or as a drop-in replacement for Underscore
var _ = require('lodash/dist/lodash.underscore');
```

**Notes:**
 * Don’t assign Lo-Dash to the [special variable `_`](http://nodejs.org/api/repl.html#repl_repl_features) when inside the REPL.
 * If Lo-Dash is installed globally, run [`npm link lodash`](http://blog.nodejs.org/2011/03/23/npm-1-0-global-vs-local-installation/) in your project’s root directory before requiring it.

In [RingoJS ≤ v0.7.0](http://ringojs.org/):

```js
var _ = require('lodash')._;
```

In [Rhino](http://www.mozilla.org/rhino/):

```js
load('lodash.js');
```

In an AMD loader like [RequireJS](http://requirejs.org/):

```js
require({
  'paths': {
    'underscore': 'path/to/lodash'
  }
},
['underscore'], function(_) {
  console.log(_.VERSION);
});
```

## Release Notes

### <sup>v1.3.1</sup>

 * Added missing `cache` property to the objects returned by `getObject`
 * Ensured `maxWait` unit tests pass in Ringo
 * Increased the `maxPoolSize` value
 * Optimized `releaseArray` and `releaseObject`

### <sup>v1.3.0</sup>

 * Added `_.transform` method
 * Added `_.chain` and `_.findWhere` aliases
 * Added internal array and object pooling
 * Added Istanbul test coverage reports to Travis CI
 * Added `maxWait` option to `_.debounce`
 * Added support for floating point numbers to `_.random`
 * Added Volo configuration to package.json
 * Adjusted UMD for `component build`
 * Allowed more stable mixing of `lodash` and `underscore` build methods
 * Ensured debounced function with, `leading` and `trailing` options, works as expected
 * Ensured minified builds work with the Dojo builder
 * Ensured minification avoids deoptimizing expressions containing boolean values
 * Ensured support for `--output` paths containing build command keywords
 * Ensured unknown types return `false` in `_.isObject` and `_.isRegExp`
 * Ensured `_.clone`, `_.flatten`, and `_.uniq` can be used as a `callback` for methods like `_.map`
 * Ensured `_.forIn` works on objects with longer inheritance chains in IE < 9
 * Ensured `_.isPlainObject` returns `true` for empty objects in IE < 9
 * Ensured `_.max` and `_.min` chain correctly
 * Ensured `clearTimeout` use doesn’t cause errors in Titanium
 * Ensured that the `--stdout` build option doesn't write to a file
 * Exposed memoized function’s `cache`
 * Fixed `Error.prototype` iteration bugs
 * Fixed "scripts" paths in component.json
 * Made methods support customizing `_.indexOf`
 * Made the build track dependencies of private functions
 * Made the `template` pre-compiler build option avoid escaping non-ascii characters
 * Made `_.createCallback` avoid binding functions if they don’t reference `this`
 * Optimized the Closure Compiler minification process
 * Optimized the large array cache for `_.difference`, `_.intersection`, and `_.uniq`
 * Optimized internal `_.flatten` and `_.indexOf` use
 * Reduced `_.unzip` and `_.zip`
 * Removed special handling of arrays in `_.assign` and `_.defaults`

The full changelog is available [here](https://github.com/bestiejs/lodash/wiki/Changelog).

## BestieJS

Lo-Dash is part of the BestieJS *“Best in Class”* module collection. This means we promote solid browser/environment support, ES5+ precedents, unit testing, and plenty of documentation.

## Author

| [![twitter/jdalton](http://gravatar.com/avatar/299a3d891ff1920b69c364d061007043?s=70)](http://twitter.com/jdalton "Follow @jdalton on Twitter") |
|---|
| [John-David Dalton](http://allyoucanleet.com/) |

## Contributors

| [![twitter/kitcambridge](http://gravatar.com/avatar/6662a1d02f351b5ef2f8b4d815804661?s=70)](https://twitter.com/kitcambridge "Follow @kitcambridge on Twitter") | [![twitter/mathias](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter") |
|---|---|
| [Kit Cambridge](http://kitcambridge.github.io/) | [Mathias Bynens](http://mathiasbynens.be/) |
