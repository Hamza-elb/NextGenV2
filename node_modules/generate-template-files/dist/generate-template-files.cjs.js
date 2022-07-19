'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enquirer = require('enquirer');
var recursiveCopy = require('recursive-copy');
var pathExists = require('path-exists');
var through = require('through2');
var replaceString = require('replace-string');
var colors = require('colors');
var yargs = require('yargs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var enquirer__default = /*#__PURE__*/_interopDefaultLegacy(enquirer);
var recursiveCopy__default = /*#__PURE__*/_interopDefaultLegacy(recursiveCopy);
var pathExists__default = /*#__PURE__*/_interopDefaultLegacy(pathExists);
var through__default = /*#__PURE__*/_interopDefaultLegacy(through);
var replaceString__default = /*#__PURE__*/_interopDefaultLegacy(replaceString);
var colors__default = /*#__PURE__*/_interopDefaultLegacy(colors);
var yargs__default = /*#__PURE__*/_interopDefaultLegacy(yargs);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayLikeToArray);

var arrayWithoutHoles = createCommonjsModule(function (module) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(unsupportedIterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _toConsumableArray = unwrapExports(toConsumableArray);

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithHoles);

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArrayLimit);

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableRest);

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _slicedToArray = unwrapExports(slicedToArray);

var toArray = createCommonjsModule(function (module) {
function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _toArray = unwrapExports(toArray);

var asyncToGenerator = createCommonjsModule(function (module) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _asyncToGenerator = unwrapExports(asyncToGenerator);

var classCallCheck = createCommonjsModule(function (module) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _classCallCheck = unwrapExports(classCallCheck);

var createClass = createCommonjsModule(function (module) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _createClass = unwrapExports(createClass);

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _defineProperty = unwrapExports(defineProperty);

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

var CaseConverterEnum;

(function (CaseConverterEnum) {
  CaseConverterEnum["None"] = "(noCase)";
  CaseConverterEnum["NoneUnderscore"] = "NoCase__";
  CaseConverterEnum["CamelCase"] = "(camelCase)";
  CaseConverterEnum["CamelCaseUnderscore"] = "CamelCase__";
  CaseConverterEnum["ConstantCase"] = "(constantCase)";
  CaseConverterEnum["ConstantCaseUnderscore"] = "ConstantCase__";
  CaseConverterEnum["DotCase"] = "(dotCase)";
  CaseConverterEnum["DotCaseUnderscore"] = "DotCase__";
  CaseConverterEnum["KebabCase"] = "(kebabCase)";
  CaseConverterEnum["KebabCaseUnderscore"] = "KebabCase__";
  CaseConverterEnum["LowerCase"] = "(lowerCase)";
  CaseConverterEnum["LowerCaseUnderscore"] = "LowerCase__";
  CaseConverterEnum["PascalCase"] = "(pascalCase)";
  CaseConverterEnum["PascalCaseUnderscore"] = "PascalCase__";
  CaseConverterEnum["PathCase"] = "(pathCase)";
  CaseConverterEnum["PathCaseUnderscore"] = "PathCase__";
  CaseConverterEnum["SentenceCase"] = "(sentenceCase)";
  CaseConverterEnum["SentenceCaseUnderscore"] = "SentenceCase__";
  CaseConverterEnum["SnakeCase"] = "(snakeCase)";
  CaseConverterEnum["SnakeCaseUnderscore"] = "SnakeCase__";
  CaseConverterEnum["TitleCase"] = "(titleCase)";
  CaseConverterEnum["TitleCaseUnderscore"] = "TitleCase__";
})(CaseConverterEnum || (CaseConverterEnum = {}));

var CaseConverterEnum$1 = CaseConverterEnum;

/**
 * Utility class to convert the case type of strings.
 */

var StringUtility = /*#__PURE__*/function () {
  function StringUtility() {
    _classCallCheck(this, StringUtility);
  }

  _createClass(StringUtility, null, [{
    key: "toCase",
    value:
    /**
     * Helper method for {@link CaseConverterEnum} to convert text into the proper case.
     *
     * ```
     * StringUtility.toCase('livesDown_by-the.River', CaseConverterEnum.PascalCase);
     * // 'LivesDownByTheRiver'
     * ```
     */
    function toCase(str, caseType) {
      switch (caseType) {
        case CaseConverterEnum$1.CamelCase:
        case CaseConverterEnum$1.CamelCaseUnderscore:
          return StringUtility.toCamelCase(str);

        case CaseConverterEnum$1.ConstantCase:
        case CaseConverterEnum$1.ConstantCaseUnderscore:
          return StringUtility.toConstantCase(str);

        case CaseConverterEnum$1.DotCase:
        case CaseConverterEnum$1.DotCaseUnderscore:
          return StringUtility.toSentence(str, '.');

        case CaseConverterEnum$1.KebabCase:
        case CaseConverterEnum$1.KebabCaseUnderscore:
          return StringUtility.toSentence(str, '-');

        case CaseConverterEnum$1.LowerCase:
        case CaseConverterEnum$1.LowerCaseUnderscore:
          return StringUtility.toSentence(str, '');

        case CaseConverterEnum$1.PascalCase:
        case CaseConverterEnum$1.PascalCaseUnderscore:
          return StringUtility.toPascalCase(str);

        case CaseConverterEnum$1.PathCase:
        case CaseConverterEnum$1.PathCaseUnderscore:
          return StringUtility.toSentence(str, '/');

        case CaseConverterEnum$1.SentenceCase:
        case CaseConverterEnum$1.SentenceCaseUnderscore:
          return StringUtility.toSentenceCase(str);

        case CaseConverterEnum$1.SnakeCase:
        case CaseConverterEnum$1.SnakeCaseUnderscore:
          return StringUtility.toSentence(str, '_');

        case CaseConverterEnum$1.TitleCase:
        case CaseConverterEnum$1.TitleCaseUnderscore:
          return StringUtility.toTitleCase(str);

        case CaseConverterEnum$1.None:
        case CaseConverterEnum$1.NoneUnderscore:
        default:
          return str;
      }
    }
    /**
     * Converts a string to a sentence case string.
     *
     * ```
     * StringUtility.toSentence('livesDown_by-the.River');
     * // 'lives down by the river'
     *
     * StringUtility.toSentence('livesDown_by-the.River', '-');
     * // 'lives-down-by-the-river'
     *
     * StringUtility.toSentence('livesDown_by-the.River', '_');
     * // 'lives_down_by_the_river'
     *
     * StringUtility.toSentence('livesDown_by-the.River', '/');
     * // 'lives/down/by/the/river'
     * ```
     */

  }, {
    key: "toSentence",
    value: function toSentence(str) {
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
      return String(str) // Add a space after any digits.
      .replace(/(\d+)/g, ' $1 ') // Add a space before any upper case characters.
      .replace(/([a-z](?=[A-Z]))/g, '$1 ') // Remove all non-word characters and replace with a single space.
      .replace(/[^a-zA-Z0-9 ]/g, ' ') // Replace multiple Spaces with a single space.
      .replace(/\s+/g, ' ') // Trim whitespace around the string.
      .replace(/^ | $/g, '') // Lower case the entire string.
      .toLowerCase() // If a separator is passed in then replace the space with it.
      .replace(/\s+/g, separator);
    }
    /**
     * Converts a string to a camel case string.
     *
     * ```
     * StringUtility.toCamelCase('livesDown_by-the.River');
     * // 'livesDownByTheRiver'
     * ```
     */

  }, {
    key: "toCamelCase",
    value: function toCamelCase(str) {
      return StringUtility.toSentence(str) // Replace spaces between words with a string upper cased character.
      .replace(/ (\w)/g, function (_, $1) {
        return $1.toUpperCase();
      });
    }
    /**
     * Converts a hyphen string to a pascal case string.
     *
     * ```
     * StringUtility.toPascalCase('livesDown_by-the.River');
     * // 'LivesDownByTheRiver'
     * ```
     */

  }, {
    key: "toPascalCase",
    value: function toPascalCase(str) {
      return StringUtility.toCamelCase(str) // Make first character uppercase.
      .replace(/^[a-zA-Z]/, function (a, b, c) {
        return a.toUpperCase();
      });
    }
    /**
     * Converts a string to a constant case string.
     *
     * ```
     * StringUtility.toConstantCase('livesDown_by-the.River');
     * // 'LIVES_DOWN_BY_THE_RIVER'
     * ```
     */

  }, {
    key: "toConstantCase",
    value: function toConstantCase(str) {
      return StringUtility.toSentence(str, '_').toUpperCase();
    }
    /**
     * Converts a string to a title case string.
     *
     * ```
     * StringUtility.toTitleCase('livesDown_by-the.River');
     * // 'Lives Down By The River'
     * ```
     */

  }, {
    key: "toTitleCase",
    value: function toTitleCase(str) {
      return StringUtility.toSentence(str).replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
    /**
     * Converts a string to a sentence case string.
     *
     * ```
     * StringUtility.toSentenceCase('livesDown_by-the.River');
     * // 'Lives down by the river'
     * ```
     */

  }, {
    key: "toSentenceCase",
    value: function toSentenceCase(str) {
      var sentence = StringUtility.toSentence(str);
      return sentence.charAt(0).toUpperCase() + sentence.substr(1).toLowerCase();
    }
    /**
     * Determines if the value is a string value
     *
     * ```
     * StringUtility.isString('livesDown_by-the.River');
     * // true
     * ```
     */

  }, {
    key: "isString",
    value: function isString(value) {
      return typeof value === 'string';
    }
  }]);

  return StringUtility;
}();

var displayError = function displayError(message) {
  console.info(colors__default['default'].bold.red("[Error in generate-template-files]: ".concat(colors__default['default'].red(message))));
};
var displayWarning = function displayWarning(message) {
  console.info(colors__default['default'].bold.yellow(colors__default['default'].yellow(message)));
};
var displaySuccess = function displaySuccess(message) {
  console.info(colors__default['default'].bold.green(colors__default['default'].green(message)));
};
var throwErrorIfNoConfigItems = function throwErrorIfNoConfigItems(options) {
  var hasAtLeastOneItem = Boolean(options === null || options === void 0 ? void 0 : options.length);

  if (!hasAtLeastOneItem) {
    throw new Error('There was no IConfigItem items found.');
  }
};
var throwErrorIfOptionNameIsNotFound = function throwErrorIfOptionNameIsNotFound(item, templateName) {
  if (!item) {
    throw new Error("No IConfigItem found for ".concat(templateName));
  }
};
var throwErrorIfStringReplacersDoNotMatch = function throwErrorIfStringReplacersDoNotMatch(item, commandLineStringReplacers) {
  var _item$stringReplacers;

  var configItemStringReplacers = (_item$stringReplacers = item === null || item === void 0 ? void 0 : item.stringReplacers) !== null && _item$stringReplacers !== void 0 ? _item$stringReplacers : [];

  if (commandLineStringReplacers.length !== configItemStringReplacers.length) {
    throw new Error('IConfigItem stringReplacers do not match the command line arguments.');
  }

  var configItemStringReplacersKeys = configItemStringReplacers.map(function (replacer) {
    return StringUtility.isString(replacer) ? replacer : replacer.slot;
  }).sort().join(', ');
  var commandLineStringReplacersKeys = commandLineStringReplacers.map(function (replacer) {
    return replacer.slot;
  }).sort().join(', ');

  if (configItemStringReplacersKeys !== commandLineStringReplacersKeys) {
    throw new Error("".concat(configItemStringReplacersKeys, " does not match ").concat(commandLineStringReplacersKeys, "."));
  }
};
var throwErrorIfNoStringOrDynamicReplacers = function throwErrorIfNoStringOrDynamicReplacers(options) {
  var hasStringOrDynamicReplacers = options.every(function (item) {
    var _item$stringReplacers2, _item$dynamicReplacer;

    return Boolean(item === null || item === void 0 ? void 0 : (_item$stringReplacers2 = item.stringReplacers) === null || _item$stringReplacers2 === void 0 ? void 0 : _item$stringReplacers2.length) || Boolean(item === null || item === void 0 ? void 0 : (_item$dynamicReplacer = item.dynamicReplacers) === null || _item$dynamicReplacer === void 0 ? void 0 : _item$dynamicReplacer.length);
  }) && options.length > 0;

  if (!hasStringOrDynamicReplacers) {
    throw new Error('IConfigItem needs to have a stringReplacers or dynamicReplacers.');
  }
};
var throwErrorIfStringReplacersExistOrNoDynamicReplacers = function throwErrorIfStringReplacersExistOrNoDynamicReplacers(options) {
  var allValidBatchEntries = options.every(function (item) {
    var _item$stringReplacers3, _item$dynamicReplacer2;

    return !Boolean(item === null || item === void 0 ? void 0 : (_item$stringReplacers3 = item.stringReplacers) === null || _item$stringReplacers3 === void 0 ? void 0 : _item$stringReplacers3.length) && Boolean(item === null || item === void 0 ? void 0 : (_item$dynamicReplacer2 = item.dynamicReplacers) === null || _item$dynamicReplacer2 === void 0 ? void 0 : _item$dynamicReplacer2.length);
  }) && options.length > 0;

  if (!allValidBatchEntries) {
    throw new Error('IConfigItem for batchGenerate does not support stringReplacers, and must have dynamicReplacers.');
  }
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var GenerateTemplateFiles = /*#__PURE__*/function () {
  function GenerateTemplateFiles() {
    _classCallCheck(this, GenerateTemplateFiles);

    _defineProperty(this, "_isCommandLine", false);

    _defineProperty(this, "_isBatch", false);
  }

  _createClass(GenerateTemplateFiles, [{
    key: "generate",
    value:
    /**
     * Main method to create your template files. Accepts an array of `IConfigItem` items.
     */
    function () {
      var _generate = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(options) {
        var selectedConfigItem, answeredReplacers;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                throwErrorIfNoConfigItems(options);
                throwErrorIfNoStringOrDynamicReplacers(options);
                _context.next = 5;
                return this._getSelectedItem(options);

              case 5:
                selectedConfigItem = _context.sent;
                _context.next = 8;
                return this._getReplacerSlotValues(selectedConfigItem);

              case 8:
                answeredReplacers = _context.sent;
                _context.next = 11;
                return this._outputFiles(selectedConfigItem, answeredReplacers);

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                displayError(_context.t0.message);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
      }));

      function generate(_x) {
        return _generate.apply(this, arguments);
      }

      return generate;
    }()
    /**
     * Main method to create your template files with the command line.
     */

  }, {
    key: "commandLine",
    value: function () {
      var _commandLine = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(options) {
        var _ref, _ref2, _ref2$, templateName, replacers, selectedConfigItem, commandLineStringReplacers, dynamicReplacers;

        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._isCommandLine = true;
                _context2.prev = 1;
                throwErrorIfNoConfigItems(options);
                throwErrorIfNoStringOrDynamicReplacers(options);
                _ref = yargs__default['default'].argv._, _ref2 = _toArray(_ref), _ref2$ = _ref2[0], templateName = _ref2$ === void 0 ? '' : _ref2$, replacers = _ref2.slice(1);
                selectedConfigItem = options.find(function (configItem) {
                  return StringUtility.toCase(configItem.option, CaseConverterEnum$1.KebabCase) === StringUtility.toCase(templateName, CaseConverterEnum$1.KebabCase);
                });
                throwErrorIfOptionNameIsNotFound(selectedConfigItem, StringUtility.toCase(templateName, CaseConverterEnum$1.KebabCase));
                commandLineStringReplacers = replacers.map(function (str) {
                  var _str$split = str.split('='),
                      _str$split2 = _slicedToArray(_str$split, 2),
                      slot = _str$split2[0],
                      slotValue = _str$split2[1];

                  return {
                    slot: slot,
                    slotValue: slotValue
                  };
                });
                throwErrorIfStringReplacersDoNotMatch(selectedConfigItem, commandLineStringReplacers);
                dynamicReplacers = (selectedConfigItem === null || selectedConfigItem === void 0 ? void 0 : selectedConfigItem.dynamicReplacers) || [];
                _context2.next = 12;
                return this._outputFiles(selectedConfigItem, [].concat(_toConsumableArray(commandLineStringReplacers), _toConsumableArray(dynamicReplacers)));

              case 12:
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](1);
                displayError(_context2.t0.message);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 14]]);
      }));

      function commandLine(_x2) {
        return _commandLine.apply(this, arguments);
      }

      return commandLine;
    }()
    /**
     * Main method to run generate on multiple templates at once, without any interactive prompts
     */

  }, {
    key: "batchGenerate",
    value: function () {
      var _batchGenerate = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(options) {
        var _iterator, _step, selectedConfigItem, answeredReplacers;

        return regenerator.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._isBatch = true;
                throwErrorIfNoConfigItems(options);
                throwErrorIfStringReplacersExistOrNoDynamicReplacers(options);
                _iterator = _createForOfIteratorHelper(options);
                _context3.prev = 4;

                _iterator.s();

              case 6:
                if ((_step = _iterator.n()).done) {
                  _context3.next = 15;
                  break;
                }

                selectedConfigItem = _step.value;
                _context3.next = 10;
                return this._getDynamicReplacerSlotValues(selectedConfigItem);

              case 10:
                answeredReplacers = _context3.sent;
                _context3.next = 13;
                return this._outputFiles(selectedConfigItem, answeredReplacers);

              case 13:
                _context3.next = 6;
                break;

              case 15:
                _context3.next = 20;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](4);

                _iterator.e(_context3.t0);

              case 20:
                _context3.prev = 20;

                _iterator.f();

                return _context3.finish(20);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 17, 20, 23]]);
      }));

      function batchGenerate(_x3) {
        return _batchGenerate.apply(this, arguments);
      }

      return batchGenerate;
    }()
  }, {
    key: "_outputFiles",
    value: function () {
      var _outputFiles2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(selectedConfigItem, replacers) {
        var _this$_getDefaultCase, contentCase, outputPathCase, contentReplacers, outputPathReplacers, outputPath, shouldWriteFiles, outputtedFilesAndFolders;

        return regenerator.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this$_getDefaultCase = this._getDefaultCaseConverters(selectedConfigItem), contentCase = _this$_getDefaultCase.contentCase, outputPathCase = _this$_getDefaultCase.outputPathCase;
                contentReplacers = this._getReplacers(replacers, contentCase);
                outputPathReplacers = this._getReplacers(replacers, outputPathCase);
                _context4.next = 5;
                return this._getOutputPath(outputPathReplacers, selectedConfigItem);

              case 5:
                outputPath = _context4.sent;
                _context4.next = 8;
                return this._shouldWriteFiles(outputPath, selectedConfigItem);

              case 8:
                shouldWriteFiles = _context4.sent;

                if (!(shouldWriteFiles === false)) {
                  _context4.next = 13;
                  break;
                }

                displayWarning('No new files created');

                if (this._isCommandLine) {
                  displayWarning('Use --overwrite option to overwrite existing files');
                }

                return _context4.abrupt("return");

              case 13:
                _context4.next = 15;
                return this._createFiles(replacers, outputPathReplacers, contentReplacers, outputPath, selectedConfigItem.entry.folderPath);

              case 15:
                outputtedFilesAndFolders = _context4.sent;

                this._onComplete(selectedConfigItem, outputPath, outputtedFilesAndFolders, replacers);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _outputFiles(_x4, _x5) {
        return _outputFiles2.apply(this, arguments);
      }

      return _outputFiles;
    }()
    /**
     * Ask what template options the user wants to use
     */

  }, {
    key: "_getSelectedItem",
    value: function () {
      var _getSelectedItem2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(options) {
        var templateQuestions, templateAnswers;
        return regenerator.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                templateQuestions = {
                  type: 'autocomplete',
                  name: 'optionChoice',
                  message: 'What do you want to generate?',
                  choices: options.map(function (configItem) {
                    return configItem.option;
                  }),
                  suggest: function suggest(input, choices) {
                    return choices.filter(function (choice) {
                      return choice.message.toLowerCase().startsWith(input.toLowerCase());
                    });
                  }
                };
                _context5.next = 3;
                return enquirer__default['default'].prompt(templateQuestions);

              case 3:
                templateAnswers = _context5.sent;
                return _context5.abrupt("return", options.find(function (item) {
                  return item.option === templateAnswers.optionChoice;
                }));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function _getSelectedItem(_x6) {
        return _getSelectedItem2.apply(this, arguments);
      }

      return _getSelectedItem;
    }()
    /**
     */

  }, {
    key: "_getDefaultCaseConverters",
    value: function _getDefaultCaseConverters(selectedConfigItem) {
      var _selectedConfigItem$d, _selectedConfigItem$o, _selectedConfigItem$o2;

      var defaultContentCase = (_selectedConfigItem$d = selectedConfigItem === null || selectedConfigItem === void 0 ? void 0 : selectedConfigItem.defaultCase) !== null && _selectedConfigItem$d !== void 0 ? _selectedConfigItem$d : CaseConverterEnum$1.None;
      var defaultOutputPath = (_selectedConfigItem$o = (_selectedConfigItem$o2 = selectedConfigItem.output) === null || _selectedConfigItem$o2 === void 0 ? void 0 : _selectedConfigItem$o2.pathAndFileNameDefaultCase) !== null && _selectedConfigItem$o !== void 0 ? _selectedConfigItem$o : defaultContentCase;
      return {
        contentCase: defaultContentCase,
        outputPathCase: defaultOutputPath
      };
    }
    /**
     * New question asking what should text should be used to replace the template text.
     */

  }, {
    key: "_getReplacerSlotValues",
    value: function () {
      var _getReplacerSlotValues2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6(selectedConfigItem) {
        var _selectedConfigItem$s;

        var stringReplacers, replacerQuestions, answer, replacers, dynamicReplacers;
        return regenerator.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                stringReplacers = (_selectedConfigItem$s = selectedConfigItem.stringReplacers) !== null && _selectedConfigItem$s !== void 0 ? _selectedConfigItem$s : [];
                replacerQuestions = stringReplacers.map(function (item) {
                  return {
                    type: 'input',
                    name: StringUtility.isString(item) ? item : item.slot,
                    message: StringUtility.isString(item) ? "Replace ".concat(item, " with") : item.question,
                    validate: function validate(replacerSlotValue) {
                      var isValid = Boolean(replacerSlotValue.trim());
                      return isValid || 'You must provide an answer.';
                    }
                  };
                });
                _context6.next = 4;
                return enquirer__default['default'].prompt(replacerQuestions);

              case 4:
                answer = _context6.sent;
                replacers = Object.entries(answer).map(function (_ref3) {
                  var _ref4 = _slicedToArray(_ref3, 2),
                      key = _ref4[0],
                      value = _ref4[1];

                  return {
                    slot: key,
                    slotValue: value
                  };
                });
                _context6.next = 8;
                return this._getDynamicReplacerSlotValues(selectedConfigItem);

              case 8:
                dynamicReplacers = _context6.sent;
                return _context6.abrupt("return", [].concat(_toConsumableArray(replacers), _toConsumableArray(dynamicReplacers)));

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _getReplacerSlotValues(_x7) {
        return _getReplacerSlotValues2.apply(this, arguments);
      }

      return _getReplacerSlotValues;
    }()
    /**
     * Dynamic replacer values, used for interactive and batch generation
     */

  }, {
    key: "_getDynamicReplacerSlotValues",
    value: function () {
      var _getDynamicReplacerSlotValues2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee7(selectedConfigItem) {
        var dynamicReplacers;
        return regenerator.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                dynamicReplacers = selectedConfigItem.dynamicReplacers || [];
                return _context7.abrupt("return", dynamicReplacers);

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function _getDynamicReplacerSlotValues(_x8) {
        return _getDynamicReplacerSlotValues2.apply(this, arguments);
      }

      return _getDynamicReplacerSlotValues;
    }()
    /**
     * Create every variation for the for the replacement keys
     */

  }, {
    key: "_getReplacers",
    value: function _getReplacers(replacers, defaultCase) {
      var caseTypes = Object.values(CaseConverterEnum$1);
      return replacers.reduce(function (previousReplacers, answeredReplacer) {
        var slot = answeredReplacer.slot,
            slotValue = answeredReplacer.slotValue;
        return [].concat(_toConsumableArray(previousReplacers), _toConsumableArray(caseTypes.map(function (caseType) {
          return {
            slot: "".concat(slot).concat(caseType),
            slotValue: StringUtility.toCase(slotValue, caseType)
          };
        })), [{
          slot: slot,
          slotValue: StringUtility.toCase(slotValue, defaultCase)
        }]);
      }, []);
    }
    /**
     */

  }, {
    key: "_getOutputPath",
    value: function () {
      var _getOutputPath2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee8(outputPathReplacers, selectedConfigItem) {
        var outputPathFormatted, outputPath, outputPathAnswer;
        return regenerator.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                // Create the output path replacing any template keys.
                outputPathFormatted = outputPathReplacers.reduce(function (outputPath, replacer) {
                  return replaceString__default['default'](outputPath, replacer.slot, replacer.slotValue);
                }, selectedConfigItem.output.path);

                if (!this._isCommandLine) {
                  _context8.next = 4;
                  break;
                }

                outputPath = yargs__default['default'].argv.outputpath;
                return _context8.abrupt("return", outputPath !== null && outputPath !== void 0 ? outputPath : outputPathFormatted);

              case 4:
                if (!this._isBatch) {
                  _context8.next = 6;
                  break;
                }

                return _context8.abrupt("return", outputPathFormatted);

              case 6:
                _context8.next = 8;
                return enquirer__default['default'].prompt({
                  type: 'input',
                  name: 'outputPath',
                  message: 'Output path:',
                  initial: outputPathFormatted
                });

              case 8:
                outputPathAnswer = _context8.sent;
                return _context8.abrupt("return", outputPathAnswer.outputPath);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _getOutputPath(_x9, _x10) {
        return _getOutputPath2.apply(this, arguments);
      }

      return _getOutputPath;
    }()
    /**
     */

  }, {
    key: "_shouldWriteFiles",
    value: function () {
      var _shouldWriteFiles2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee9(outputPath, selectedConfigItem) {
        var doesPathExist, overwriteFilesAnswer;
        return regenerator.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return pathExists__default['default'](outputPath);

              case 2:
                doesPathExist = _context9.sent;

                if (doesPathExist) {
                  _context9.next = 5;
                  break;
                }

                return _context9.abrupt("return", true);

              case 5:
                if (!(!this._isCommandLine && selectedConfigItem.output.overwrite)) {
                  _context9.next = 7;
                  break;
                }

                return _context9.abrupt("return", true);

              case 7:
                if (!this._isCommandLine) {
                  _context9.next = 9;
                  break;
                }

                return _context9.abrupt("return", selectedConfigItem.output.overwrite || yargs__default['default'].argv.overwrite === true);

              case 9:
                if (!this._isBatch) {
                  _context9.next = 11;
                  break;
                }

                return _context9.abrupt("return", Boolean(selectedConfigItem.output.overwrite));

              case 11:
                _context9.next = 13;
                return enquirer__default['default'].prompt({
                  name: 'overwrite',
                  message: 'Overwrite files, continue?',
                  type: 'confirm',
                  "default": false
                });

              case 13:
                overwriteFilesAnswer = _context9.sent;
                return _context9.abrupt("return", overwriteFilesAnswer.overwrite);

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function _shouldWriteFiles(_x11, _x12) {
        return _shouldWriteFiles2.apply(this, arguments);
      }

      return _shouldWriteFiles;
    }()
    /**
     * Process and copy files.
     */

  }, {
    key: "_createFiles",
    value: function () {
      var _createFiles2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee10(answeredReplacer, outputPathReplacers, replacers, outputPath, entryFolderPath) {
        var outputtedFilesAndFolders, recursiveCopyOptions;
        return regenerator.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                outputtedFilesAndFolders = [];
                recursiveCopyOptions = {
                  overwrite: true,
                  expand: false,
                  dot: true,
                  junk: true,
                  rename: function rename(fileFolderPath) {
                    var fileOrFolder = answeredReplacer.reduce(function (path) {
                      var formattedFilePath = path;
                      outputPathReplacers.forEach(function (replacer) {
                        formattedFilePath = replaceString__default['default'](formattedFilePath, replacer.slot, replacer.slotValue);
                      });
                      return formattedFilePath;
                    }, fileFolderPath);
                    outputtedFilesAndFolders.push(fileOrFolder);
                    return fileOrFolder;
                  },
                  transform: function transform(src, dest, stats) {
                    return through__default['default'](function (chunk, enc, done) {
                      var output = chunk.toString();
                      replacers.forEach(function (replacer) {
                        output = replaceString__default['default'](output, replacer.slot, replacer.slotValue);
                      });
                      done(null, output);
                    });
                  }
                };
                _context10.prev = 2;
                _context10.next = 5;
                return recursiveCopy__default['default'](entryFolderPath, outputPath, recursiveCopyOptions);

              case 5:
                displaySuccess("Files saved to: '".concat(outputPath, "'"));
                return _context10.abrupt("return", outputtedFilesAndFolders.filter(Boolean));

              case 9:
                _context10.prev = 9;
                _context10.t0 = _context10["catch"](2);
                displayError("Copy failed: ".concat(_context10.t0));
                return _context10.abrupt("return", ["Copy failed: ".concat(_context10.t0)]);

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[2, 9]]);
      }));

      function _createFiles(_x13, _x14, _x15, _x16, _x17) {
        return _createFiles2.apply(this, arguments);
      }

      return _createFiles;
    }()
    /**
     */

  }, {
    key: "_onComplete",
    value: function _onComplete(selectedConfigItem, outputPath, outputtedFilesAndFolders, stringReplacers) {
      var files = outputtedFilesAndFolders.filter(function (path) {
        return path.includes('.');
      });

      if (typeof selectedConfigItem.onComplete === 'function') {
        var results = {
          output: {
            path: outputPath,
            files: files.map(function (file) {
              return "".concat(outputPath, "/").concat(file);
            })
          },
          stringReplacers: stringReplacers
        };
        selectedConfigItem.onComplete(results);
      }
    }
  }]);

  return GenerateTemplateFiles;
}();

/**
 * Main method to create your template files. Accepts an array of `IConfigItem` items.
 */
function generateTemplateFiles(data) {
  return new GenerateTemplateFiles().generate(data);
}
/**
 * Main method to create your template files with command line.
 */

function generateTemplateFilesCommandLine(data) {
  return new GenerateTemplateFiles().commandLine(data);
}
/**
 * Main method to run generate on multiple templates at once, without any interactive prompts.
 */

function generateTemplateFilesBatch(data) {
  return new GenerateTemplateFiles().batchGenerate(data);
}

exports.CaseConverterEnum = CaseConverterEnum$1;
exports.StringUtility = StringUtility;
exports.generateTemplateFiles = generateTemplateFiles;
exports.generateTemplateFilesBatch = generateTemplateFilesBatch;
exports.generateTemplateFilesCommandLine = generateTemplateFilesCommandLine;
