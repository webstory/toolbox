# Utility Toolbox

This package provides a collection of useful utility classes to streamline your development process and help you manage your data structures more efficiently. These classes are designed to be lightweight, easy to use, and highly performant.

## Installation

```bash
npm install -D @webstory/toolbox
```

## Test

```bash
npm run test
```

## Classes

List of classes in this package

### ArrayDeque

The ArrayDeque class is a double-ended queue implemented using a JavaScript array. It provides methods to add, remove, and access elements from both ends of the queue. This data structure is useful when you need to maintain a list of items in a specific order, and need to be able to insert and remove elements at both the beginning and end of the list efficiently.

Usage example:

```javascript
const { ArrayDeque } = require('@webstory/toolbox');

const deque = new ArrayDeque();

deque.push(1);
deque.push(2);
deque.unshift(3);
deque.unshift(4);
deque.pop(); // returns 1
deque.shift(); // returns 4
```

### LRUCache

The LRUCache class is an implementation of a Least Recently Used (LRU) cache, which is a cache that removes the least recently used items first. This can be helpful when you want to store a limited number of items in memory and ensure that the most recently accessed items are always available.

Usage example:

```javascript
const { LRUCache } = require('@webstory/toolbox');

const cache = new LRUCache(3);

cache.set('a', 1);
cache.set('b', 2);
cache.set('c', 3);
cache.get('a'); // returns 1
cache.set('d', 4); // removes key 'b' from the cache
cache.get('b'); // returns undefined
```

## Authors

- Hoya
- ChatGPT

## License

MIT
