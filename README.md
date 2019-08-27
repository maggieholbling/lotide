# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @maggieholbling/lotide`

**Require it:**

`const _ = require('@maggieholbling/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: crops the *array* to only its [0] element and returns it
* `tail(array)`: removes the [0] element of the *array* and returns it
* `middle(array)`: returns the middle element of an *array*, if the *array*'s length is even, it returns the two middle elements
* `assertArraysEqual(expectedArray, actualArray)`: compares the *expectedArray* to the *actualArray* and prints out a message stating if they match or not
* `assertEqual(expected, actual)`: compares the *expected* value to the *actual* value and prints out a message stating if they match or not
* `assertObjectsEqual(expectedObject, actualObject)`: compares the *expectedObject* to the *actualObject* and prints out a message stating if they match or not
* `countLetters(string)`: returns an object with keys representing each letter in the *string* and the value being the number of times the letter appears in the *string*
* `countOnly(allItems, itemsToCount)`: returns an object, where the keys represent each element equaling to true in *itemsToCount* and the values are the number of times the element appears in *allItems*

  *allItems*: an array of strings that we need to look through

  *itemsToCount*: an object specifying what to count 
* `eqArrays(array1, array2)`: compares *array1* to *array2* and returns true if they match, false if they don't
* `eqObjects(object1, object2)`: compares *object1* to *object2* and returns true if they match, false if they don't
* `findKey(object, callback)`: scans the *object* and returns the first key for which the *callback* returns a truthy value

  If no key is found, then it returns undefined
* `findKeyByValue(object, value)`: scans the *object* and returns the first key which contains the given *value*

  If no key with that given *value* is found, then it should return undefined
* `flatten(arrayOfArrays)`: returns a "flattened" version of the *arrayOfArrays*
* `letterPositions(string)`: returns an object, where the keys represent the *string*'s characters and the values are the number of times the character appears in the *string*
* `map(arrayToMap, callback)`: returns a new array based on the results of the *callback* function on *arrayToMap*'s elements
* `takeUntil(array, callback)`: returns a slice of the *array*, collecting elements from the *array* until the *callback* returns a truthy value
* `without(array, unwantedArray)`: returns a subset of the *array*, removing *unwantedArray*'s elements