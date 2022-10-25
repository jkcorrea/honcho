import postgres from 'postgres'

const sql = postgres('postgres://localhost:5432/cf-core-dev')

sql`
    SELECT t.typname as name, array_agg(e.enumlabel) AS values
    FROM pg_type t
    JOIN pg_enum e on t.oid = e.enumtypid
    JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace
    GROUP BY name;
`
  .then(console.log)
  .catch(console.error)
  .finally(() => void sql.end())
