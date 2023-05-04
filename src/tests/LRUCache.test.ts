import { LRUCache } from '../LRUCache';

describe('LRUCache', () => {
  it('should set and get values correctly', () => {
    const cache = new LRUCache<string, number>(3);
    cache.set('one', 1);
    cache.set('two', 2);
    cache.set('three', 3);

    expect(cache.get('one')).toBe(1);
    expect(cache.get('two')).toBe(2);
    expect(cache.get('three')).toBe(3);
  });

  it('should evict least recently used items', () => {
    const cache = new LRUCache<string, number>(3);
    cache.set('one', 1);
    cache.set('two', 2);
    cache.set('three', 3);
    cache.set('four', 4);

    expect(cache.get('one')).toBeUndefined();
    expect(cache.get('two')).toBe(2);
    expect(cache.get('three')).toBe(3);
    expect(cache.get('four')).toBe(4);
  });

  it('should cache miss correctly', () => {
    const cache = new LRUCache<string, number>(3);
    cache.set('one', 1);
    cache.set('two', 2);
    cache.set('three', 3);

    expect(cache.get('four')).toBeUndefined();
  });

  it('should update value correctly', () => {
    const cache = new LRUCache<string, number>(3);
    cache.set('one', 1);
    cache.set('two', 2);
    cache.set('three', 3);
    cache.set('two', 4);

    expect(cache.get('one')).toBe(1);
    expect(cache.get('two')).toBe(4);
    expect(cache.get('three')).toBe(3);
  });

  it('should evict least recently used items after update', () => {
    const cache = new LRUCache<string, number>(3);
    cache.set('one', 1);
    cache.set('two', 2);
    cache.set('three', 3);
    cache.set('two', 4);
    cache.set('four', 5);

    expect(cache.get('one')).toBeUndefined();
    expect(cache.get('two')).toBe(4);
    expect(cache.get('three')).toBe(3);
    expect(cache.get('four')).toBe(5);
  });

  it('should evict least recently used items after get', () => {
    const cache = new LRUCache<string, number>(3);
    cache.set('one', 1);
    cache.set('two', 2);
    cache.set('three', 3);
    cache.get('one');
    cache.set('four', 5);

    expect(cache.get('one')).toBe(1);
    expect(cache.get('two')).toBeUndefined();
    expect(cache.get('three')).toBe(3);
    expect(cache.get('four')).toBe(5);
  });

  it('should cache miss when cache size exceeds capacity', () => {
    const cache = new LRUCache<string, number>(3);
    cache.set('one', 1);
    cache.set('two', 2);
    cache.set('three', 3);
    cache.set('four', 4);

    expect(cache.get('one')).toBeUndefined();
    expect(cache.get('two')).toBe(2);
    expect(cache.get('three')).toBe(3);
    expect(cache.get('four')).toBe(4);
  });
});
