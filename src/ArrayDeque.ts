import { Deque } from './interfaces/Deque';

/**
 * ArrayDeque for the queue with a fast shift operation
 *
 * @class ArrayDeque
 * @template T
 *
 * @author Hoya Kim <hoya@mychar.info>, ChatGPT-3.5
 */
export class ArrayDeque<T> implements Deque<T> {
  private _head: T[];
  private _tail: T[];

  /// ArrayDeque has no size limit, please be aware of memory usage
  constructor() {
    this._head = [];
    this._tail = [];
  }

  /// push to the tail
  push(value: T): void {
    this._tail.push(value);
  }

  /// pop from the tail
  pop(): T | undefined {
    if (this._tail.length === 0) {
      this._tail = this._head.reverse();
      this._head = [];
    }
    return this._tail.pop();
  }

  /// unshift to the head
  unshift(value: T): void {
    this._head.push(value);
  }

  /// shift from the head
  shift(): T | undefined {
    if (this._head.length === 0) {
      this._head = this._tail.reverse();
      this._tail = [];
    }
    return this._head.pop();
  }

  /// check if the deque is empty
  isEmpty(): boolean {
    return this._head.length === 0 && this._tail.length === 0;
  }

  /// return the size of the deque
  size(): number {
    return this._head.length + this._tail.length;
  }
}
