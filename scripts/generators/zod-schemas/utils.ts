/**
 * Maps Postgres types to Zod definitions.
 *
 * TODO: Finish all the types from https://www.postgresql.org/docs/current/datatype.html
 */
export const PostgresToZodTypes = {
  bool: `z.boolean()`,
  // String-ish
  text: `z.string()`,
  citext: `z.string()`,
  char: `z.string()`,
  character: `z.string()`,
  bpchar: `z.string()`,
  varchar: `z.string()`,
  uuid: `z.string()`,
  xml: `z.string()`,
  cidr: `z.string()`,
  inet: `z.string()`,
  macaddr: `z.string()`,
  // Date-ish
  // TODO: Find a better way to handle dates.
  date: `z.string()`,
  time: `z.string()`,
  timestamp: `z.string()`,
  timestamptz: `z.string()`,
  // Number-ish
  smallint: `z.number().int()`,
  integer: `z.number().int()`,
  int: `z.number().int()`,
  int4: `z.number().int()`,
  int8: `z.number().int()`,
  real: `z.number()`,
  float: `z.number()`,
  float4: `z.number()`,
  float8: `z.number()`,
  numeric: `z.number()`,
  money: `z.number()`,
  // Misc
  json: `JsonSchema`,
  jsonb: `JsonSchema`,
  bytea: `z.instanceof(Buffer)`,
  // TODO: Unsupported-ish
  tsquery: `z.string()`,
  tsvector: `z.string()`,
}
