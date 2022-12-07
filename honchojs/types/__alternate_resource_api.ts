// import { CellContext } from "@tanstack/react-table"
// import React from "react"
// import { AnyResourceSchema } from "./schema"

// abstract class Column<TValue extends number | boolean | string | Date, TData> {
//   name: string
//   precedence = 0

//   constructor(name: string) {
//     this.name = name
//   }

//   abstract render(ctx: CellContext<TData, TValue>): React.ReactNode
// }

// class TextColumn<TData> extends Column<string, TData> {
//   name = 'f'
//   render({ getValue }) {
//     return getValue()
//   }
// }

// abstract class Resource<TSchema extends AnyResourceSchema = AnyResourceSchema> {
//   abstract schema: z.ZodObject<any, any, any, TSchema>
//   abstract name: string
//   precedence = 0

//   abstract list(): Promise<TSchema> | TSchema
// }

// export class EventGuestResource extends Resource {
//   schema = baseSchema
//   name = 'Event Guest'

//   list() {
//     return []
//   }
// }

// prisma.api_key.findMany({
//   where: {
//     AND: [{ createdAt: ''}]
//   }
// })
