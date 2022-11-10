/**
 * Create an empty object with `Object.create(null)`.
 * Objects made from `Object.create(null)` are totally empty -- they do not inherit anything from Object.prototype.
 */
export function safeObject(): Record<string, never>

/**
 * Create an object without inheriting anything from `Object.prototype`
 */
export function safeObject<TObj>(obj: TObj): TObj
/**
 * Merge two objects without inheritance from `Object.prototype`
 */
export function safeObject<TObj1, TObj2>(obj1: TObj1, obj2: TObj2): TObj1 & TObj2
export function safeObject(...args: unknown[]) {
  return Object.assign(Object.create(null), ...args)
}
