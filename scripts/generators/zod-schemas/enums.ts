export interface EnumMeta {
  name: string
  values: string[]
}

export async function getEnums(schema: string) {
  return sql<EnumMeta[]>`
    SELECT t.typname as name, array_agg(e.enumlabel) AS values
    FROM pg_type t
    JOIN pg_enum e on t.oid = e.enumtypid
    JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace
    WHERE n.nspname = ${schema}
    GROUP BY name;
`
}
