import { Cache } from './interfaces/Cache';

/**
 * A Least Recently Used (LRU) Cache implementation in TypeScript that efficiently
 * stores a limited number of key-value pairs, automatically evicting the least
 * recently accessed items when the cache reaches its maximum size.
 *
 * @class LRUCache
 * @template K Type of keys compatible with JavaScript Map keys
 * @template V Type of values
 * @author Hoya Kim <hoya@mychar.info>, ChatGPT-4
 */
export class LRUCache<K, V> implements Cache<K, V> {
  private cache: Map<K, V>;
  private capacity: number;

  /**
   * @param size Maximum number of key-value pairs to store in the cache
   */
  constructor(size: number = Infinity) {
    this.capacity = size;
    this.cache = new Map<K, V>();
  }

  /**
   * Set a key-value pair in the cache.
   * @param key Key to set
   * @param value Value to set
   */
  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  /**
   * Get a value from the cache.
   * @param key Key to retrieve the value for
   * @returns Value associated with the key, or undefined if the key is not in the cache
   */
  get(key: K): V | undefined {
    if (!this.cache.has(key)) {
      return undefined;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value as V);
    return value;
  }

  /**
   * Check if a key is in the cache.
   * @param key Key to check
   * @returns true if the key is in the cache, false otherwise
   */
  has(key: K): boolean {
    return this.cache.has(key);
  }

  /**
   * Get the size of the cache.
   * @returns the size of the cache
   */
  size(): number {
    return this.cache.size;
  }
}
