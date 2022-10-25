/**
 * Derived from PG information_schema
 * @link https://www.postgresql.org/docs/current/infoschema-columns.html */
export type GetColumnsResult = {
  // schema: string;
  table: string
  column: string
  nullable: boolean
  generated: 'NEVER' | 'ALWAYS'
  default: string
  type: string
  udt: string
}

export async function getColumns(schemaName: string) {
  return sql<GetColumnsResult[]>`
      SELECT
        -- table_schema as schema,
        table_name as table,
        column_name as column,
        ${sql`(is_nullable = 'YES')`} as nullable,
        is_generated as generated,
        column_default as default,
        data_type as type,
        udt_name as udt
      FROM information_schema.columns
      WHERE table_schema = ${schemaName}
      ORDER BY table_schema, table_name, ordinal_position
`
}
