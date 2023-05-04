import { ArrayDeque } from '../ArrayDeque';

describe('ArrayDeque', () => {
  it('should push and pop values correctly', () => {
    const deque = new ArrayDeque<number>();
    deque.push(1);
    deque.push(2);
    deque.push(3);

    expect(deque.pop()).toBe(3);
    expect(deque.pop()).toBe(2);
    expect(deque.pop()).toBe(1);
  });

  it('should shift and unshift values correctly', () => {
    const deque = new ArrayDeque<number>();
    deque.unshift(1);
    deque.unshift(2);
    deque.unshift(3);

    expect(deque.shift()).toBe(3);
    expect(deque.shift()).toBe(2);
    expect(deque.shift()).toBe(1);
  });

  it('should return undefined when popping from empty deque', () => {
    const deque = new ArrayDeque<number>();

    expect(deque.pop()).toBeUndefined();
  });

  it('should return undefined when shifting from empty deque', () => {
    const deque = new ArrayDeque<number>();

    expect(deque.shift()).toBeUndefined();
  });

  it('should return correct size', () => {
    const deque = new ArrayDeque<number>();
    deque.push(1);
    deque.push(2);
    deque.push(3);

    expect(deque.size()).toBe(3);
  });

  it('should return correct size after popping', () => {
    const deque = new ArrayDeque<number>();
    deque.push(1);
    deque.push(2);
    deque.push(3);
    deque.pop();

    expect(deque.size()).toBe(2);
  });
});
