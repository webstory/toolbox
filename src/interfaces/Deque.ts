export interface Deque<T> {
  push(value: T): void;
  pop(): T | undefined;
  shift(): T | undefined;
  unshift(value: T): void;
  isEmpty(): boolean;
  size(): number;
}
