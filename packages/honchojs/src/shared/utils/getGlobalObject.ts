export function getGlobalObject<T extends Record<string, unknown> = never>(
  /** We use the filename or file path as module key */
  moduleKey: `${string}.ts`,
  defaultValue: T,
): T {
  const allGlobalObjects = (globalThis.__honcho = globalThis.__honcho || {})
  const globalObject = (allGlobalObjects[moduleKey] = (allGlobalObjects[moduleKey] as T) || defaultValue)
  return globalObject
}
declare global {
  // eslint-disable-next-line no-var
  var __honcho: undefined | Record<string, Record<string, unknown>>
}
