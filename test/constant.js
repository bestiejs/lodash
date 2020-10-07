import assert from 'assert';
import lodashStable from 'lodash';
import { empties, _, falsey, stubTrue } from './utils.js';

describe('constant', function() {
  it('should create a function that returns `value`', function() {
    let object = { 'a': 1 },
        values = Array(2).concat(empties, true, 1, 'a'),
        constant = _.constant(object);

    let results = lodashStable.map(values, function(value, index) {
      if (index < 2) {
        return index ? constant.call({}) : constant();
      }
      return constant(value);
    });

    assert.ok(lodashStable.every(results, function(result) {
      return result === object;
    }));
  });

  it('should work with falsey values', function() {
    let expected = lodashStable.map(falsey, stubTrue);

    let actual = lodashStable.map(falsey, function(value, index) {
      let constant = index ? _.constant(value) : _.constant(),
          result = constant();

      return (result === value) || (result !== result && value !== value);
    });

    assert.deepStrictEqual(actual, expected);
  });

  it('should return a wrapped value when chaining', function() {
    let wrapped = _(true).constant();
    assert.ok(wrapped instanceof _);
  });
});
