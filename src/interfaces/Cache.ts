export interface Cache<K extends unknown, V> {
  set: (key: K, value: V) => void;
  get: (key: K) => V | undefined;
  has: (key: K) => boolean;
}
