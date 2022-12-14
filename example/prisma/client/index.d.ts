
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model api_key
 * 
 */
export type api_key = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  key: string
  organizationId: string
}

/**
 * Model camera
 * 
 */
export type camera = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  rtspUrl: string
  serviceObjectDetection: boolean
  serviceObjectCounts: boolean
  serviceDwellTime: boolean
  serviceObjectIngressEgress: boolean
  serviceObjectBehavior: boolean
  serviceOccupancyTracking: boolean
  serviceUtilizationRate: boolean
  serviceThroughput: boolean
  serviceLiveWaitTime: boolean
  serviceOther: boolean
  serviceObjectDetectionDescription: string | null
  serviceObjectBehaviorDescription: string | null
  serviceOtherDescription: string | null
  serviceThroughputUnitOfTime: service_throughput_unit_of_time | null
  locationId: string
  viewingAngle: camera_viewing_angle
}

/**
 * Model event
 * 
 */
export type event = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  start: Date
  end: Date
  organizationId: string
  locationId: string
}

/**
 * Model event_guest
 * 
 */
export type event_guest = {
  id: string
  createdAt: Date
  updatedAt: Date
  checkedInAt: Date | null
  guestId: string | null
  eventId: string | null
}

/**
 * Model guest
 * 
 */
export type guest = {
  id: string
  createdAt: Date
  updatedAt: Date
  organizationId: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string | null
  companyPosition: string | null
}

/**
 * Model location
 * 
 */
export type location = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  address: string
  latitude: Prisma.Decimal
  longitude: Prisma.Decimal
  number: number
  serialNumber: string | null
  connectionType: location_connection_type
  organizationId: string
}

/**
 * Model notification
 * 
 */
export type notification = {
  id: string
  createdAt: Date
  updatedAt: Date
  readAt: Date | null
  data: Prisma.JsonValue
  email: string | null
  phone: string | null
  sentAt: Date | null
}

/**
 * Model organization
 * 
 */
export type organization = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  subdomain: string
  stripeCustomerId: string | null
  status: organization_status
  statuses: organization_status[]
  statuses2: string[]
}

/**
 * Model organization_invitation
 * 
 */
export type organization_invitation = {
  id: string
  createdAt: Date
  updatedAt: Date
  email: string
  role: organization_member_role
  token: string
  organizationId: string
}

/**
 * Model organization_member
 * 
 */
export type organization_member = {
  id: string
  createdAt: Date
  updatedAt: Date
  role: organization_member_role
  userId: string
  organizationId: string
}

/**
 * Model parking_lot
 * 
 */
export type parking_lot = {
  id: string
  label: string
  createdAt: Date
  notifyEmail: string | null
  notifyPhone: string | null
  updatedAt: Date
}

/**
 * Model parking_space
 * 
 */
export type parking_space = {
  id: string
  createdAt: Date
  updatedAt: Date
  label: string | null
  order: number | null
  type: parking_space_type
  status: parking_space_status
  parkedAt: Date | null
  zoneId: string | null
  vehicleId: string | null
  parkingLotId: string | null
  media: Buffer | null
  cameraId: string | null
  detectedPlate: string | null
  lastDetectionId: string | null
}

/**
 * Model parking_space_activity_log
 * 
 */
export type parking_space_activity_log = {
  id: string
  createdAt: Date
  updatedAt: Date
  text: string | null
  parkingSpaceId: string
}

/**
 * Model vehicle
 * 
 */
export type vehicle = {
  id: string
  createdAt: Date
  updatedAt: Date
  year: number | null
  make: string | null
  model: string | null
  color: VehicleColor | null
  licensePlate: string
  guestId: string | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const VehicleColor: {
  BLUE: 'BLUE',
  MAROON: 'MAROON',
  YELLOW: 'YELLOW',
  SILVER: 'SILVER',
  PURPLE: 'PURPLE',
  ORANGE: 'ORANGE',
  GREEN: 'GREEN',
  GRAY: 'GRAY',
  PINK: 'PINK',
  TAN: 'TAN',
  BROWN: 'BROWN',
  BLACK: 'BLACK',
  RED: 'RED',
  GOLD: 'GOLD',
  BEIGE: 'BEIGE',
  WHITE: 'WHITE'
};

export type VehicleColor = (typeof VehicleColor)[keyof typeof VehicleColor]


export const camera_viewing_angle: {
  TOP_DOWN: 'TOP_DOWN',
  RAISED_ANGLE: 'RAISED_ANGLE',
  DIRECT_PARALLEL: 'DIRECT_PARALLEL',
  OTHER: 'OTHER',
  UNDECIDED: 'UNDECIDED'
};

export type camera_viewing_angle = (typeof camera_viewing_angle)[keyof typeof camera_viewing_angle]


export const location_connection_type: {
  SERVER_ON_PREM: 'SERVER_ON_PREM',
  EDGE_DEVICE_ON_PREM: 'EDGE_DEVICE_ON_PREM',
  CURBCLOUD: 'CURBCLOUD',
  NOT_SURE: 'NOT_SURE'
};

export type location_connection_type = (typeof location_connection_type)[keyof typeof location_connection_type]


export const organization_member_role: {
  OWNER: 'OWNER',
  MEMBER: 'MEMBER',
  READ_ONLY: 'READ_ONLY'
};

export type organization_member_role = (typeof organization_member_role)[keyof typeof organization_member_role]


export const organization_status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type organization_status = (typeof organization_status)[keyof typeof organization_status]


export const parking_space_status: {
  OCCUPIED: 'OCCUPIED',
  CHECKED_IN: 'CHECKED_IN',
  REGISTERED: 'REGISTERED',
  UNOCCUPIED: 'UNOCCUPIED',
  UNKNOWN: 'UNKNOWN'
};

export type parking_space_status = (typeof parking_space_status)[keyof typeof parking_space_status]


export const parking_space_type: {
  MANAGED: 'MANAGED',
  MONITORED: 'MONITORED'
};

export type parking_space_type = (typeof parking_space_type)[keyof typeof parking_space_type]


export const service_throughput_unit_of_time: {
  PerMinute: 'PerMinute',
  PerHour: 'PerHour',
  PerDay: 'PerDay'
};

export type service_throughput_unit_of_time = (typeof service_throughput_unit_of_time)[keyof typeof service_throughput_unit_of_time]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Api_keys
 * const api_keys = await prisma.api_key.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Api_keys
   * const api_keys = await prisma.api_key.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.api_key`: Exposes CRUD operations for the **api_key** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Api_keys
    * const api_keys = await prisma.api_key.findMany()
    * ```
    */
  get api_key(): Prisma.api_keyDelegate<GlobalReject>;

  /**
   * `prisma.camera`: Exposes CRUD operations for the **camera** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cameras
    * const cameras = await prisma.camera.findMany()
    * ```
    */
  get camera(): Prisma.cameraDelegate<GlobalReject>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.eventDelegate<GlobalReject>;

  /**
   * `prisma.event_guest`: Exposes CRUD operations for the **event_guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_guests
    * const event_guests = await prisma.event_guest.findMany()
    * ```
    */
  get event_guest(): Prisma.event_guestDelegate<GlobalReject>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.guestDelegate<GlobalReject>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.locationDelegate<GlobalReject>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.notificationDelegate<GlobalReject>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.organizationDelegate<GlobalReject>;

  /**
   * `prisma.organization_invitation`: Exposes CRUD operations for the **organization_invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organization_invitations
    * const organization_invitations = await prisma.organization_invitation.findMany()
    * ```
    */
  get organization_invitation(): Prisma.organization_invitationDelegate<GlobalReject>;

  /**
   * `prisma.organization_member`: Exposes CRUD operations for the **organization_member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organization_members
    * const organization_members = await prisma.organization_member.findMany()
    * ```
    */
  get organization_member(): Prisma.organization_memberDelegate<GlobalReject>;

  /**
   * `prisma.parking_lot`: Exposes CRUD operations for the **parking_lot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parking_lots
    * const parking_lots = await prisma.parking_lot.findMany()
    * ```
    */
  get parking_lot(): Prisma.parking_lotDelegate<GlobalReject>;

  /**
   * `prisma.parking_space`: Exposes CRUD operations for the **parking_space** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parking_spaces
    * const parking_spaces = await prisma.parking_space.findMany()
    * ```
    */
  get parking_space(): Prisma.parking_spaceDelegate<GlobalReject>;

  /**
   * `prisma.parking_space_activity_log`: Exposes CRUD operations for the **parking_space_activity_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parking_space_activity_logs
    * const parking_space_activity_logs = await prisma.parking_space_activity_log.findMany()
    * ```
    */
  get parking_space_activity_log(): Prisma.parking_space_activity_logDelegate<GlobalReject>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.vehicleDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    api_key: 'api_key',
    camera: 'camera',
    event: 'event',
    event_guest: 'event_guest',
    guest: 'guest',
    location: 'location',
    notification: 'notification',
    organization: 'organization',
    organization_invitation: 'organization_invitation',
    organization_member: 'organization_member',
    parking_lot: 'parking_lot',
    parking_space: 'parking_space',
    parking_space_activity_log: 'parking_space_activity_log',
    vehicle: 'vehicle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EventCountOutputType
   */


  export type EventCountOutputType = {
    event_guest: number
  }

  export type EventCountOutputTypeSelect = {
    event_guest?: boolean
  }

  export type EventCountOutputTypeGetPayload<S extends boolean | null | undefined | EventCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EventCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (EventCountOutputTypeArgs)
    ? EventCountOutputType 
    : S extends { select: any } & (EventCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof EventCountOutputType ? EventCountOutputType[P] : never
  } 
      : EventCountOutputType




  // Custom InputTypes

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     * 
    **/
    select?: EventCountOutputTypeSelect | null
  }



  /**
   * Count Type GuestCountOutputType
   */


  export type GuestCountOutputType = {
    event_guest: number
    vehicle: number
  }

  export type GuestCountOutputTypeSelect = {
    event_guest?: boolean
    vehicle?: boolean
  }

  export type GuestCountOutputTypeGetPayload<S extends boolean | null | undefined | GuestCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GuestCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GuestCountOutputTypeArgs)
    ? GuestCountOutputType 
    : S extends { select: any } & (GuestCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GuestCountOutputType ? GuestCountOutputType[P] : never
  } 
      : GuestCountOutputType




  // Custom InputTypes

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GuestCountOutputType
     * 
    **/
    select?: GuestCountOutputTypeSelect | null
  }



  /**
   * Count Type LocationCountOutputType
   */


  export type LocationCountOutputType = {
    camera: number
  }

  export type LocationCountOutputTypeSelect = {
    camera?: boolean
  }

  export type LocationCountOutputTypeGetPayload<S extends boolean | null | undefined | LocationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LocationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LocationCountOutputTypeArgs)
    ? LocationCountOutputType 
    : S extends { select: any } & (LocationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LocationCountOutputType ? LocationCountOutputType[P] : never
  } 
      : LocationCountOutputType




  // Custom InputTypes

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     * 
    **/
    select?: LocationCountOutputTypeSelect | null
  }



  /**
   * Count Type OrganizationCountOutputType
   */


  export type OrganizationCountOutputType = {
    api_key: number
    location: number
    organization_invitation: number
    organization_member: number
  }

  export type OrganizationCountOutputTypeSelect = {
    api_key?: boolean
    location?: boolean
    organization_invitation?: boolean
    organization_member?: boolean
  }

  export type OrganizationCountOutputTypeGetPayload<S extends boolean | null | undefined | OrganizationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrganizationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrganizationCountOutputTypeArgs)
    ? OrganizationCountOutputType 
    : S extends { select: any } & (OrganizationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrganizationCountOutputType ? OrganizationCountOutputType[P] : never
  } 
      : OrganizationCountOutputType




  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     * 
    **/
    select?: OrganizationCountOutputTypeSelect | null
  }



  /**
   * Count Type Parking_lotCountOutputType
   */


  export type Parking_lotCountOutputType = {
    parking_space: number
  }

  export type Parking_lotCountOutputTypeSelect = {
    parking_space?: boolean
  }

  export type Parking_lotCountOutputTypeGetPayload<S extends boolean | null | undefined | Parking_lotCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Parking_lotCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Parking_lotCountOutputTypeArgs)
    ? Parking_lotCountOutputType 
    : S extends { select: any } & (Parking_lotCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Parking_lotCountOutputType ? Parking_lotCountOutputType[P] : never
  } 
      : Parking_lotCountOutputType




  // Custom InputTypes

  /**
   * Parking_lotCountOutputType without action
   */
  export type Parking_lotCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Parking_lotCountOutputType
     * 
    **/
    select?: Parking_lotCountOutputTypeSelect | null
  }



  /**
   * Count Type Parking_spaceCountOutputType
   */


  export type Parking_spaceCountOutputType = {
    parking_space_activity_log: number
  }

  export type Parking_spaceCountOutputTypeSelect = {
    parking_space_activity_log?: boolean
  }

  export type Parking_spaceCountOutputTypeGetPayload<S extends boolean | null | undefined | Parking_spaceCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Parking_spaceCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Parking_spaceCountOutputTypeArgs)
    ? Parking_spaceCountOutputType 
    : S extends { select: any } & (Parking_spaceCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Parking_spaceCountOutputType ? Parking_spaceCountOutputType[P] : never
  } 
      : Parking_spaceCountOutputType




  // Custom InputTypes

  /**
   * Parking_spaceCountOutputType without action
   */
  export type Parking_spaceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Parking_spaceCountOutputType
     * 
    **/
    select?: Parking_spaceCountOutputTypeSelect | null
  }



  /**
   * Count Type VehicleCountOutputType
   */


  export type VehicleCountOutputType = {
    parking_space: number
  }

  export type VehicleCountOutputTypeSelect = {
    parking_space?: boolean
  }

  export type VehicleCountOutputTypeGetPayload<S extends boolean | null | undefined | VehicleCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VehicleCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VehicleCountOutputTypeArgs)
    ? VehicleCountOutputType 
    : S extends { select: any } & (VehicleCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VehicleCountOutputType ? VehicleCountOutputType[P] : never
  } 
      : VehicleCountOutputType




  // Custom InputTypes

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     * 
    **/
    select?: VehicleCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model api_key
   */


  export type AggregateApi_key = {
    _count: Api_keyCountAggregateOutputType | null
    _min: Api_keyMinAggregateOutputType | null
    _max: Api_keyMaxAggregateOutputType | null
  }

  export type Api_keyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    key: string | null
    organizationId: string | null
  }

  export type Api_keyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    key: string | null
    organizationId: string | null
  }

  export type Api_keyCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    key: number
    organizationId: number
    _all: number
  }


  export type Api_keyMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    key?: true
    organizationId?: true
  }

  export type Api_keyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    key?: true
    organizationId?: true
  }

  export type Api_keyCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    key?: true
    organizationId?: true
    _all?: true
  }

  export type Api_keyAggregateArgs = {
    /**
     * Filter which api_key to aggregate.
     * 
    **/
    where?: api_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     * 
    **/
    orderBy?: Enumerable<api_keyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: api_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned api_keys
    **/
    _count?: true | Api_keyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Api_keyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Api_keyMaxAggregateInputType
  }

  export type GetApi_keyAggregateType<T extends Api_keyAggregateArgs> = {
        [P in keyof T & keyof AggregateApi_key]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_key[P]>
      : GetScalarType<T[P], AggregateApi_key[P]>
  }




  export type Api_keyGroupByArgs = {
    where?: api_keyWhereInput
    orderBy?: Enumerable<api_keyOrderByWithAggregationInput>
    by: Array<Api_keyScalarFieldEnum>
    having?: api_keyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Api_keyCountAggregateInputType | true
    _min?: Api_keyMinAggregateInputType
    _max?: Api_keyMaxAggregateInputType
  }


  export type Api_keyGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    key: string
    organizationId: string
    _count: Api_keyCountAggregateOutputType | null
    _min: Api_keyMinAggregateOutputType | null
    _max: Api_keyMaxAggregateOutputType | null
  }

  type GetApi_keyGroupByPayload<T extends Api_keyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Api_keyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Api_keyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_keyGroupByOutputType[P]>
            : GetScalarType<T[P], Api_keyGroupByOutputType[P]>
        }
      >
    >


  export type api_keySelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    key?: boolean
    organizationId?: boolean
    organization?: boolean | organizationArgs
  }


  export type api_keyInclude = {
    organization?: boolean | organizationArgs
  } 

  export type api_keyGetPayload<S extends boolean | null | undefined | api_keyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? api_key :
    S extends undefined ? never :
    S extends { include: any } & (api_keyArgs | api_keyFindManyArgs)
    ? api_key  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'organization' ? organizationGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (api_keyArgs | api_keyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'organization' ? organizationGetPayload<S['select'][P]> :  P extends keyof api_key ? api_key[P] : never
  } 
      : api_key


  type api_keyCountArgs = Merge<
    Omit<api_keyFindManyArgs, 'select' | 'include'> & {
      select?: Api_keyCountAggregateInputType | true
    }
  >

  export interface api_keyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Api_key that matches the filter.
     * @param {api_keyFindUniqueArgs} args - Arguments to find a Api_key
     * @example
     * // Get one Api_key
     * const api_key = await prisma.api_key.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends api_keyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, api_keyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'api_key'> extends True ? Prisma__api_keyClient<api_keyGetPayload<T>> : Prisma__api_keyClient<api_keyGetPayload<T> | null, null>

    /**
     * Find one Api_key that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {api_keyFindUniqueOrThrowArgs} args - Arguments to find a Api_key
     * @example
     * // Get one Api_key
     * const api_key = await prisma.api_key.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends api_keyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, api_keyFindUniqueOrThrowArgs>
    ): Prisma__api_keyClient<api_keyGetPayload<T>>

    /**
     * Find the first Api_key that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyFindFirstArgs} args - Arguments to find a Api_key
     * @example
     * // Get one Api_key
     * const api_key = await prisma.api_key.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends api_keyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, api_keyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'api_key'> extends True ? Prisma__api_keyClient<api_keyGetPayload<T>> : Prisma__api_keyClient<api_keyGetPayload<T> | null, null>

    /**
     * Find the first Api_key that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyFindFirstOrThrowArgs} args - Arguments to find a Api_key
     * @example
     * // Get one Api_key
     * const api_key = await prisma.api_key.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends api_keyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, api_keyFindFirstOrThrowArgs>
    ): Prisma__api_keyClient<api_keyGetPayload<T>>

    /**
     * Find zero or more Api_keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_keys
     * const api_keys = await prisma.api_key.findMany()
     * 
     * // Get first 10 Api_keys
     * const api_keys = await prisma.api_key.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const api_keyWithIdOnly = await prisma.api_key.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends api_keyFindManyArgs>(
      args?: SelectSubset<T, api_keyFindManyArgs>
    ): PrismaPromise<Array<api_keyGetPayload<T>>>

    /**
     * Create a Api_key.
     * @param {api_keyCreateArgs} args - Arguments to create a Api_key.
     * @example
     * // Create one Api_key
     * const Api_key = await prisma.api_key.create({
     *   data: {
     *     // ... data to create a Api_key
     *   }
     * })
     * 
    **/
    create<T extends api_keyCreateArgs>(
      args: SelectSubset<T, api_keyCreateArgs>
    ): Prisma__api_keyClient<api_keyGetPayload<T>>

    /**
     * Create many Api_keys.
     *     @param {api_keyCreateManyArgs} args - Arguments to create many Api_keys.
     *     @example
     *     // Create many Api_keys
     *     const api_key = await prisma.api_key.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends api_keyCreateManyArgs>(
      args?: SelectSubset<T, api_keyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Api_key.
     * @param {api_keyDeleteArgs} args - Arguments to delete one Api_key.
     * @example
     * // Delete one Api_key
     * const Api_key = await prisma.api_key.delete({
     *   where: {
     *     // ... filter to delete one Api_key
     *   }
     * })
     * 
    **/
    delete<T extends api_keyDeleteArgs>(
      args: SelectSubset<T, api_keyDeleteArgs>
    ): Prisma__api_keyClient<api_keyGetPayload<T>>

    /**
     * Update one Api_key.
     * @param {api_keyUpdateArgs} args - Arguments to update one Api_key.
     * @example
     * // Update one Api_key
     * const api_key = await prisma.api_key.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends api_keyUpdateArgs>(
      args: SelectSubset<T, api_keyUpdateArgs>
    ): Prisma__api_keyClient<api_keyGetPayload<T>>

    /**
     * Delete zero or more Api_keys.
     * @param {api_keyDeleteManyArgs} args - Arguments to filter Api_keys to delete.
     * @example
     * // Delete a few Api_keys
     * const { count } = await prisma.api_key.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends api_keyDeleteManyArgs>(
      args?: SelectSubset<T, api_keyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_keys
     * const api_key = await prisma.api_key.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends api_keyUpdateManyArgs>(
      args: SelectSubset<T, api_keyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Api_key.
     * @param {api_keyUpsertArgs} args - Arguments to update or create a Api_key.
     * @example
     * // Update or create a Api_key
     * const api_key = await prisma.api_key.upsert({
     *   create: {
     *     // ... data to create a Api_key
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_key we want to update
     *   }
     * })
    **/
    upsert<T extends api_keyUpsertArgs>(
      args: SelectSubset<T, api_keyUpsertArgs>
    ): Prisma__api_keyClient<api_keyGetPayload<T>>

    /**
     * Count the number of Api_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyCountArgs} args - Arguments to filter Api_keys to count.
     * @example
     * // Count the number of Api_keys
     * const count = await prisma.api_key.count({
     *   where: {
     *     // ... the filter for the Api_keys we want to count
     *   }
     * })
    **/
    count<T extends api_keyCountArgs>(
      args?: Subset<T, api_keyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_keyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api_key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_keyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Api_keyAggregateArgs>(args: Subset<T, Api_keyAggregateArgs>): PrismaPromise<GetApi_keyAggregateType<T>>

    /**
     * Group by Api_key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_keyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Api_keyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Api_keyGroupByArgs['orderBy'] }
        : { orderBy?: Api_keyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Api_keyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApi_keyGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for api_key.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__api_keyClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    organization<T extends organizationArgs= {}>(args?: Subset<T, organizationArgs>): Prisma__organizationClient<organizationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * api_key base type for findUnique actions
   */
  export type api_keyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: api_keyInclude | null
    /**
     * Filter, which api_key to fetch.
     * 
    **/
    where: api_keyWhereUniqueInput
  }

  /**
   * api_key: findUnique
   */
  export interface api_keyFindUniqueArgs extends api_keyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * api_key findUniqueOrThrow
   */
  export type api_keyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: api_keyInclude | null
    /**
     * Filter, which api_key to fetch.
     * 
    **/
    where: api_keyWhereUniqueInput
  }


  /**
   * api_key base type for findFirst actions
   */
  export type api_keyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: api_keyInclude | null
    /**
     * Filter, which api_key to fetch.
     * 
    **/
    where?: api_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     * 
    **/
    orderBy?: Enumerable<api_keyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_keys.
     * 
    **/
    cursor?: api_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_keys.
     * 
    **/
    distinct?: Enumerable<Api_keyScalarFieldEnum>
  }

  /**
   * api_key: findFirst
   */
  export interface api_keyFindFirstArgs extends api_keyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * api_key findFirstOrThrow
   */
  export type api_keyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: api_keyInclude | null
    /**
     * Filter, which api_key to fetch.
     * 
    **/
    where?: api_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     * 
    **/
    orderBy?: Enumerable<api_keyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_keys.
     * 
    **/
    cursor?: api_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_keys.
     * 
    **/
    distinct?: Enumerable<Api_keyScalarFieldEnum>
  }


  /**
   * api_key findMany
   */
  export type api_keyFindManyArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: api_keyInclude | null
    /**
     * Filter, which api_keys to fetch.
     * 
    **/
    where?: api_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     * 
    **/
    orderBy?: Enumerable<api_keyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing api_keys.
     * 
    **/
    cursor?: api_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Api_keyScalarFieldEnum>
  }


  /**
   * api_key create
   */
  export type api_keyCreateArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: api_keyInclude | null
    /**
     * The data needed to create a api_key.
     * 
    **/
    data: XOR<api_keyCreateInput, api_keyUncheckedCreateInput>
  }


  /**
   * api_key createMany
   */
  export type api_keyCreateManyArgs = {
    /**
     * The data used to create many api_keys.
     * 
    **/
    data: Enumerable<api_keyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * api_key update
   */
  export type api_keyUpdateArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: api_keyInclude | null
    /**
     * The data needed to update a api_key.
     * 
    **/
    data: XOR<api_keyUpdateInput, api_keyUncheckedUpdateInput>
    /**
     * Choose, which api_key to update.
     * 
    **/
    where: api_keyWhereUniqueInput
  }


  /**
   * api_key updateMany
   */
  export type api_keyUpdateManyArgs = {
    /**
     * The data used to update api_keys.
     * 
    **/
    data: XOR<api_keyUpdateManyMutationInput, api_keyUncheckedUpdateManyInput>
    /**
     * Filter which api_keys to update
     * 
    **/
    where?: api_keyWhereInput
  }


  /**
   * api_key upsert
   */
  export type api_keyUpsertArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: api_keyInclude | null
    /**
     * The filter to search for the api_key to update in case it exists.
     * 
    **/
    where: api_keyWhereUniqueInput
    /**
     * In case the api_key found by the `where` argument doesn't exist, create a new api_key with this data.
     * 
    **/
    create: XOR<api_keyCreateInput, api_keyUncheckedCreateInput>
    /**
     * In case the api_key was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<api_keyUpdateInput, api_keyUncheckedUpdateInput>
  }


  /**
   * api_key delete
   */
  export type api_keyDeleteArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: api_keyInclude | null
    /**
     * Filter which api_key to delete.
     * 
    **/
    where: api_keyWhereUniqueInput
  }


  /**
   * api_key deleteMany
   */
  export type api_keyDeleteManyArgs = {
    /**
     * Filter which api_keys to delete
     * 
    **/
    where?: api_keyWhereInput
  }


  /**
   * api_key without action
   */
  export type api_keyArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: api_keyInclude | null
  }



  /**
   * Model camera
   */


  export type AggregateCamera = {
    _count: CameraCountAggregateOutputType | null
    _min: CameraMinAggregateOutputType | null
    _max: CameraMaxAggregateOutputType | null
  }

  export type CameraMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    rtspUrl: string | null
    serviceObjectDetection: boolean | null
    serviceObjectCounts: boolean | null
    serviceDwellTime: boolean | null
    serviceObjectIngressEgress: boolean | null
    serviceObjectBehavior: boolean | null
    serviceOccupancyTracking: boolean | null
    serviceUtilizationRate: boolean | null
    serviceThroughput: boolean | null
    serviceLiveWaitTime: boolean | null
    serviceOther: boolean | null
    serviceObjectDetectionDescription: string | null
    serviceObjectBehaviorDescription: string | null
    serviceOtherDescription: string | null
    serviceThroughputUnitOfTime: service_throughput_unit_of_time | null
    locationId: string | null
    viewingAngle: camera_viewing_angle | null
  }

  export type CameraMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    rtspUrl: string | null
    serviceObjectDetection: boolean | null
    serviceObjectCounts: boolean | null
    serviceDwellTime: boolean | null
    serviceObjectIngressEgress: boolean | null
    serviceObjectBehavior: boolean | null
    serviceOccupancyTracking: boolean | null
    serviceUtilizationRate: boolean | null
    serviceThroughput: boolean | null
    serviceLiveWaitTime: boolean | null
    serviceOther: boolean | null
    serviceObjectDetectionDescription: string | null
    serviceObjectBehaviorDescription: string | null
    serviceOtherDescription: string | null
    serviceThroughputUnitOfTime: service_throughput_unit_of_time | null
    locationId: string | null
    viewingAngle: camera_viewing_angle | null
  }

  export type CameraCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    rtspUrl: number
    serviceObjectDetection: number
    serviceObjectCounts: number
    serviceDwellTime: number
    serviceObjectIngressEgress: number
    serviceObjectBehavior: number
    serviceOccupancyTracking: number
    serviceUtilizationRate: number
    serviceThroughput: number
    serviceLiveWaitTime: number
    serviceOther: number
    serviceObjectDetectionDescription: number
    serviceObjectBehaviorDescription: number
    serviceOtherDescription: number
    serviceThroughputUnitOfTime: number
    locationId: number
    viewingAngle: number
    _all: number
  }


  export type CameraMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    rtspUrl?: true
    serviceObjectDetection?: true
    serviceObjectCounts?: true
    serviceDwellTime?: true
    serviceObjectIngressEgress?: true
    serviceObjectBehavior?: true
    serviceOccupancyTracking?: true
    serviceUtilizationRate?: true
    serviceThroughput?: true
    serviceLiveWaitTime?: true
    serviceOther?: true
    serviceObjectDetectionDescription?: true
    serviceObjectBehaviorDescription?: true
    serviceOtherDescription?: true
    serviceThroughputUnitOfTime?: true
    locationId?: true
    viewingAngle?: true
  }

  export type CameraMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    rtspUrl?: true
    serviceObjectDetection?: true
    serviceObjectCounts?: true
    serviceDwellTime?: true
    serviceObjectIngressEgress?: true
    serviceObjectBehavior?: true
    serviceOccupancyTracking?: true
    serviceUtilizationRate?: true
    serviceThroughput?: true
    serviceLiveWaitTime?: true
    serviceOther?: true
    serviceObjectDetectionDescription?: true
    serviceObjectBehaviorDescription?: true
    serviceOtherDescription?: true
    serviceThroughputUnitOfTime?: true
    locationId?: true
    viewingAngle?: true
  }

  export type CameraCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    rtspUrl?: true
    serviceObjectDetection?: true
    serviceObjectCounts?: true
    serviceDwellTime?: true
    serviceObjectIngressEgress?: true
    serviceObjectBehavior?: true
    serviceOccupancyTracking?: true
    serviceUtilizationRate?: true
    serviceThroughput?: true
    serviceLiveWaitTime?: true
    serviceOther?: true
    serviceObjectDetectionDescription?: true
    serviceObjectBehaviorDescription?: true
    serviceOtherDescription?: true
    serviceThroughputUnitOfTime?: true
    locationId?: true
    viewingAngle?: true
    _all?: true
  }

  export type CameraAggregateArgs = {
    /**
     * Filter which camera to aggregate.
     * 
    **/
    where?: cameraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cameras to fetch.
     * 
    **/
    orderBy?: Enumerable<cameraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: cameraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cameras from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cameras.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cameras
    **/
    _count?: true | CameraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CameraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CameraMaxAggregateInputType
  }

  export type GetCameraAggregateType<T extends CameraAggregateArgs> = {
        [P in keyof T & keyof AggregateCamera]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCamera[P]>
      : GetScalarType<T[P], AggregateCamera[P]>
  }




  export type CameraGroupByArgs = {
    where?: cameraWhereInput
    orderBy?: Enumerable<cameraOrderByWithAggregationInput>
    by: Array<CameraScalarFieldEnum>
    having?: cameraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CameraCountAggregateInputType | true
    _min?: CameraMinAggregateInputType
    _max?: CameraMaxAggregateInputType
  }


  export type CameraGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    rtspUrl: string
    serviceObjectDetection: boolean
    serviceObjectCounts: boolean
    serviceDwellTime: boolean
    serviceObjectIngressEgress: boolean
    serviceObjectBehavior: boolean
    serviceOccupancyTracking: boolean
    serviceUtilizationRate: boolean
    serviceThroughput: boolean
    serviceLiveWaitTime: boolean
    serviceOther: boolean
    serviceObjectDetectionDescription: string | null
    serviceObjectBehaviorDescription: string | null
    serviceOtherDescription: string | null
    serviceThroughputUnitOfTime: service_throughput_unit_of_time | null
    locationId: string
    viewingAngle: camera_viewing_angle
    _count: CameraCountAggregateOutputType | null
    _min: CameraMinAggregateOutputType | null
    _max: CameraMaxAggregateOutputType | null
  }

  type GetCameraGroupByPayload<T extends CameraGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CameraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CameraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CameraGroupByOutputType[P]>
            : GetScalarType<T[P], CameraGroupByOutputType[P]>
        }
      >
    >


  export type cameraSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    rtspUrl?: boolean
    serviceObjectDetection?: boolean
    serviceObjectCounts?: boolean
    serviceDwellTime?: boolean
    serviceObjectIngressEgress?: boolean
    serviceObjectBehavior?: boolean
    serviceOccupancyTracking?: boolean
    serviceUtilizationRate?: boolean
    serviceThroughput?: boolean
    serviceLiveWaitTime?: boolean
    serviceOther?: boolean
    serviceObjectDetectionDescription?: boolean
    serviceObjectBehaviorDescription?: boolean
    serviceOtherDescription?: boolean
    serviceThroughputUnitOfTime?: boolean
    locationId?: boolean
    viewingAngle?: boolean
    location?: boolean | locationArgs
  }


  export type cameraInclude = {
    location?: boolean | locationArgs
  } 

  export type cameraGetPayload<S extends boolean | null | undefined | cameraArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? camera :
    S extends undefined ? never :
    S extends { include: any } & (cameraArgs | cameraFindManyArgs)
    ? camera  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'location' ? locationGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (cameraArgs | cameraFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'location' ? locationGetPayload<S['select'][P]> :  P extends keyof camera ? camera[P] : never
  } 
      : camera


  type cameraCountArgs = Merge<
    Omit<cameraFindManyArgs, 'select' | 'include'> & {
      select?: CameraCountAggregateInputType | true
    }
  >

  export interface cameraDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Camera that matches the filter.
     * @param {cameraFindUniqueArgs} args - Arguments to find a Camera
     * @example
     * // Get one Camera
     * const camera = await prisma.camera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cameraFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cameraFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'camera'> extends True ? Prisma__cameraClient<cameraGetPayload<T>> : Prisma__cameraClient<cameraGetPayload<T> | null, null>

    /**
     * Find one Camera that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cameraFindUniqueOrThrowArgs} args - Arguments to find a Camera
     * @example
     * // Get one Camera
     * const camera = await prisma.camera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cameraFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, cameraFindUniqueOrThrowArgs>
    ): Prisma__cameraClient<cameraGetPayload<T>>

    /**
     * Find the first Camera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cameraFindFirstArgs} args - Arguments to find a Camera
     * @example
     * // Get one Camera
     * const camera = await prisma.camera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cameraFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cameraFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'camera'> extends True ? Prisma__cameraClient<cameraGetPayload<T>> : Prisma__cameraClient<cameraGetPayload<T> | null, null>

    /**
     * Find the first Camera that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cameraFindFirstOrThrowArgs} args - Arguments to find a Camera
     * @example
     * // Get one Camera
     * const camera = await prisma.camera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cameraFindFirstOrThrowArgs>(
      args?: SelectSubset<T, cameraFindFirstOrThrowArgs>
    ): Prisma__cameraClient<cameraGetPayload<T>>

    /**
     * Find zero or more Cameras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cameraFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cameras
     * const cameras = await prisma.camera.findMany()
     * 
     * // Get first 10 Cameras
     * const cameras = await prisma.camera.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cameraWithIdOnly = await prisma.camera.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cameraFindManyArgs>(
      args?: SelectSubset<T, cameraFindManyArgs>
    ): PrismaPromise<Array<cameraGetPayload<T>>>

    /**
     * Create a Camera.
     * @param {cameraCreateArgs} args - Arguments to create a Camera.
     * @example
     * // Create one Camera
     * const Camera = await prisma.camera.create({
     *   data: {
     *     // ... data to create a Camera
     *   }
     * })
     * 
    **/
    create<T extends cameraCreateArgs>(
      args: SelectSubset<T, cameraCreateArgs>
    ): Prisma__cameraClient<cameraGetPayload<T>>

    /**
     * Create many Cameras.
     *     @param {cameraCreateManyArgs} args - Arguments to create many Cameras.
     *     @example
     *     // Create many Cameras
     *     const camera = await prisma.camera.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cameraCreateManyArgs>(
      args?: SelectSubset<T, cameraCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Camera.
     * @param {cameraDeleteArgs} args - Arguments to delete one Camera.
     * @example
     * // Delete one Camera
     * const Camera = await prisma.camera.delete({
     *   where: {
     *     // ... filter to delete one Camera
     *   }
     * })
     * 
    **/
    delete<T extends cameraDeleteArgs>(
      args: SelectSubset<T, cameraDeleteArgs>
    ): Prisma__cameraClient<cameraGetPayload<T>>

    /**
     * Update one Camera.
     * @param {cameraUpdateArgs} args - Arguments to update one Camera.
     * @example
     * // Update one Camera
     * const camera = await prisma.camera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cameraUpdateArgs>(
      args: SelectSubset<T, cameraUpdateArgs>
    ): Prisma__cameraClient<cameraGetPayload<T>>

    /**
     * Delete zero or more Cameras.
     * @param {cameraDeleteManyArgs} args - Arguments to filter Cameras to delete.
     * @example
     * // Delete a few Cameras
     * const { count } = await prisma.camera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cameraDeleteManyArgs>(
      args?: SelectSubset<T, cameraDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cameras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cameraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cameras
     * const camera = await prisma.camera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cameraUpdateManyArgs>(
      args: SelectSubset<T, cameraUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Camera.
     * @param {cameraUpsertArgs} args - Arguments to update or create a Camera.
     * @example
     * // Update or create a Camera
     * const camera = await prisma.camera.upsert({
     *   create: {
     *     // ... data to create a Camera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Camera we want to update
     *   }
     * })
    **/
    upsert<T extends cameraUpsertArgs>(
      args: SelectSubset<T, cameraUpsertArgs>
    ): Prisma__cameraClient<cameraGetPayload<T>>

    /**
     * Count the number of Cameras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cameraCountArgs} args - Arguments to filter Cameras to count.
     * @example
     * // Count the number of Cameras
     * const count = await prisma.camera.count({
     *   where: {
     *     // ... the filter for the Cameras we want to count
     *   }
     * })
    **/
    count<T extends cameraCountArgs>(
      args?: Subset<T, cameraCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CameraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Camera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CameraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CameraAggregateArgs>(args: Subset<T, CameraAggregateArgs>): PrismaPromise<GetCameraAggregateType<T>>

    /**
     * Group by Camera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CameraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CameraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CameraGroupByArgs['orderBy'] }
        : { orderBy?: CameraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CameraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCameraGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for camera.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cameraClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    location<T extends locationArgs= {}>(args?: Subset<T, locationArgs>): Prisma__locationClient<locationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * camera base type for findUnique actions
   */
  export type cameraFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the camera
     * 
    **/
    select?: cameraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cameraInclude | null
    /**
     * Filter, which camera to fetch.
     * 
    **/
    where: cameraWhereUniqueInput
  }

  /**
   * camera: findUnique
   */
  export interface cameraFindUniqueArgs extends cameraFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * camera findUniqueOrThrow
   */
  export type cameraFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the camera
     * 
    **/
    select?: cameraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cameraInclude | null
    /**
     * Filter, which camera to fetch.
     * 
    **/
    where: cameraWhereUniqueInput
  }


  /**
   * camera base type for findFirst actions
   */
  export type cameraFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the camera
     * 
    **/
    select?: cameraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cameraInclude | null
    /**
     * Filter, which camera to fetch.
     * 
    **/
    where?: cameraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cameras to fetch.
     * 
    **/
    orderBy?: Enumerable<cameraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cameras.
     * 
    **/
    cursor?: cameraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cameras from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cameras.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cameras.
     * 
    **/
    distinct?: Enumerable<CameraScalarFieldEnum>
  }

  /**
   * camera: findFirst
   */
  export interface cameraFindFirstArgs extends cameraFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * camera findFirstOrThrow
   */
  export type cameraFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the camera
     * 
    **/
    select?: cameraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cameraInclude | null
    /**
     * Filter, which camera to fetch.
     * 
    **/
    where?: cameraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cameras to fetch.
     * 
    **/
    orderBy?: Enumerable<cameraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cameras.
     * 
    **/
    cursor?: cameraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cameras from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cameras.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cameras.
     * 
    **/
    distinct?: Enumerable<CameraScalarFieldEnum>
  }


  /**
   * camera findMany
   */
  export type cameraFindManyArgs = {
    /**
     * Select specific fields to fetch from the camera
     * 
    **/
    select?: cameraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cameraInclude | null
    /**
     * Filter, which cameras to fetch.
     * 
    **/
    where?: cameraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cameras to fetch.
     * 
    **/
    orderBy?: Enumerable<cameraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cameras.
     * 
    **/
    cursor?: cameraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cameras from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cameras.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CameraScalarFieldEnum>
  }


  /**
   * camera create
   */
  export type cameraCreateArgs = {
    /**
     * Select specific fields to fetch from the camera
     * 
    **/
    select?: cameraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cameraInclude | null
    /**
     * The data needed to create a camera.
     * 
    **/
    data: XOR<cameraCreateInput, cameraUncheckedCreateInput>
  }


  /**
   * camera createMany
   */
  export type cameraCreateManyArgs = {
    /**
     * The data used to create many cameras.
     * 
    **/
    data: Enumerable<cameraCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * camera update
   */
  export type cameraUpdateArgs = {
    /**
     * Select specific fields to fetch from the camera
     * 
    **/
    select?: cameraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cameraInclude | null
    /**
     * The data needed to update a camera.
     * 
    **/
    data: XOR<cameraUpdateInput, cameraUncheckedUpdateInput>
    /**
     * Choose, which camera to update.
     * 
    **/
    where: cameraWhereUniqueInput
  }


  /**
   * camera updateMany
   */
  export type cameraUpdateManyArgs = {
    /**
     * The data used to update cameras.
     * 
    **/
    data: XOR<cameraUpdateManyMutationInput, cameraUncheckedUpdateManyInput>
    /**
     * Filter which cameras to update
     * 
    **/
    where?: cameraWhereInput
  }


  /**
   * camera upsert
   */
  export type cameraUpsertArgs = {
    /**
     * Select specific fields to fetch from the camera
     * 
    **/
    select?: cameraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cameraInclude | null
    /**
     * The filter to search for the camera to update in case it exists.
     * 
    **/
    where: cameraWhereUniqueInput
    /**
     * In case the camera found by the `where` argument doesn't exist, create a new camera with this data.
     * 
    **/
    create: XOR<cameraCreateInput, cameraUncheckedCreateInput>
    /**
     * In case the camera was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<cameraUpdateInput, cameraUncheckedUpdateInput>
  }


  /**
   * camera delete
   */
  export type cameraDeleteArgs = {
    /**
     * Select specific fields to fetch from the camera
     * 
    **/
    select?: cameraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cameraInclude | null
    /**
     * Filter which camera to delete.
     * 
    **/
    where: cameraWhereUniqueInput
  }


  /**
   * camera deleteMany
   */
  export type cameraDeleteManyArgs = {
    /**
     * Filter which cameras to delete
     * 
    **/
    where?: cameraWhereInput
  }


  /**
   * camera without action
   */
  export type cameraArgs = {
    /**
     * Select specific fields to fetch from the camera
     * 
    **/
    select?: cameraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cameraInclude | null
  }



  /**
   * Model event
   */


  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    start: Date | null
    end: Date | null
    organizationId: string | null
    locationId: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    start: Date | null
    end: Date | null
    organizationId: string | null
    locationId: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    start: number
    end: number
    organizationId: number
    locationId: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    start?: true
    end?: true
    organizationId?: true
    locationId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    start?: true
    end?: true
    organizationId?: true
    locationId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    start?: true
    end?: true
    organizationId?: true
    locationId?: true
    _all?: true
  }

  export type EventAggregateArgs = {
    /**
     * Filter which event to aggregate.
     * 
    **/
    where?: eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     * 
    **/
    orderBy?: Enumerable<eventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs = {
    where?: eventWhereInput
    orderBy?: Enumerable<eventOrderByWithAggregationInput>
    by: Array<EventScalarFieldEnum>
    having?: eventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }


  export type EventGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    start: Date
    end: Date
    organizationId: string
    locationId: string
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type eventSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    start?: boolean
    end?: boolean
    organizationId?: boolean
    locationId?: boolean
    event_guest?: boolean | event_guestFindManyArgs
    _count?: boolean | EventCountOutputTypeArgs
  }


  export type eventInclude = {
    event_guest?: boolean | event_guestFindManyArgs
    _count?: boolean | EventCountOutputTypeArgs
  } 

  export type eventGetPayload<S extends boolean | null | undefined | eventArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? event :
    S extends undefined ? never :
    S extends { include: any } & (eventArgs | eventFindManyArgs)
    ? event  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'event_guest' ? Array < event_guestGetPayload<S['include'][P]>>  :
        P extends '_count' ? EventCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (eventArgs | eventFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'event_guest' ? Array < event_guestGetPayload<S['select'][P]>>  :
        P extends '_count' ? EventCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof event ? event[P] : never
  } 
      : event


  type eventCountArgs = Merge<
    Omit<eventFindManyArgs, 'select' | 'include'> & {
      select?: EventCountAggregateInputType | true
    }
  >

  export interface eventDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Event that matches the filter.
     * @param {eventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends eventFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, eventFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'event'> extends True ? Prisma__eventClient<eventGetPayload<T>> : Prisma__eventClient<eventGetPayload<T> | null, null>

    /**
     * Find one Event that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {eventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends eventFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, eventFindUniqueOrThrowArgs>
    ): Prisma__eventClient<eventGetPayload<T>>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends eventFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, eventFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'event'> extends True ? Prisma__eventClient<eventGetPayload<T>> : Prisma__eventClient<eventGetPayload<T> | null, null>

    /**
     * Find the first Event that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends eventFindFirstOrThrowArgs>(
      args?: SelectSubset<T, eventFindFirstOrThrowArgs>
    ): Prisma__eventClient<eventGetPayload<T>>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends eventFindManyArgs>(
      args?: SelectSubset<T, eventFindManyArgs>
    ): PrismaPromise<Array<eventGetPayload<T>>>

    /**
     * Create a Event.
     * @param {eventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
    **/
    create<T extends eventCreateArgs>(
      args: SelectSubset<T, eventCreateArgs>
    ): Prisma__eventClient<eventGetPayload<T>>

    /**
     * Create many Events.
     *     @param {eventCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const event = await prisma.event.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends eventCreateManyArgs>(
      args?: SelectSubset<T, eventCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {eventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
    **/
    delete<T extends eventDeleteArgs>(
      args: SelectSubset<T, eventDeleteArgs>
    ): Prisma__eventClient<eventGetPayload<T>>

    /**
     * Update one Event.
     * @param {eventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends eventUpdateArgs>(
      args: SelectSubset<T, eventUpdateArgs>
    ): Prisma__eventClient<eventGetPayload<T>>

    /**
     * Delete zero or more Events.
     * @param {eventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends eventDeleteManyArgs>(
      args?: SelectSubset<T, eventDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends eventUpdateManyArgs>(
      args: SelectSubset<T, eventUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {eventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
    **/
    upsert<T extends eventUpsertArgs>(
      args: SelectSubset<T, eventUpsertArgs>
    ): Prisma__eventClient<eventGetPayload<T>>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventCountArgs>(
      args?: Subset<T, eventCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__eventClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    event_guest<T extends event_guestFindManyArgs= {}>(args?: Subset<T, event_guestFindManyArgs>): PrismaPromise<Array<event_guestGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * event base type for findUnique actions
   */
  export type eventFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the event
     * 
    **/
    select?: eventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventInclude | null
    /**
     * Filter, which event to fetch.
     * 
    **/
    where: eventWhereUniqueInput
  }

  /**
   * event: findUnique
   */
  export interface eventFindUniqueArgs extends eventFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * event findUniqueOrThrow
   */
  export type eventFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the event
     * 
    **/
    select?: eventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventInclude | null
    /**
     * Filter, which event to fetch.
     * 
    **/
    where: eventWhereUniqueInput
  }


  /**
   * event base type for findFirst actions
   */
  export type eventFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the event
     * 
    **/
    select?: eventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventInclude | null
    /**
     * Filter, which event to fetch.
     * 
    **/
    where?: eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     * 
    **/
    orderBy?: Enumerable<eventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     * 
    **/
    cursor?: eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     * 
    **/
    distinct?: Enumerable<EventScalarFieldEnum>
  }

  /**
   * event: findFirst
   */
  export interface eventFindFirstArgs extends eventFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * event findFirstOrThrow
   */
  export type eventFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the event
     * 
    **/
    select?: eventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventInclude | null
    /**
     * Filter, which event to fetch.
     * 
    **/
    where?: eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     * 
    **/
    orderBy?: Enumerable<eventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     * 
    **/
    cursor?: eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     * 
    **/
    distinct?: Enumerable<EventScalarFieldEnum>
  }


  /**
   * event findMany
   */
  export type eventFindManyArgs = {
    /**
     * Select specific fields to fetch from the event
     * 
    **/
    select?: eventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventInclude | null
    /**
     * Filter, which events to fetch.
     * 
    **/
    where?: eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     * 
    **/
    orderBy?: Enumerable<eventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     * 
    **/
    cursor?: eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EventScalarFieldEnum>
  }


  /**
   * event create
   */
  export type eventCreateArgs = {
    /**
     * Select specific fields to fetch from the event
     * 
    **/
    select?: eventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventInclude | null
    /**
     * The data needed to create a event.
     * 
    **/
    data: XOR<eventCreateInput, eventUncheckedCreateInput>
  }


  /**
   * event createMany
   */
  export type eventCreateManyArgs = {
    /**
     * The data used to create many events.
     * 
    **/
    data: Enumerable<eventCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * event update
   */
  export type eventUpdateArgs = {
    /**
     * Select specific fields to fetch from the event
     * 
    **/
    select?: eventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventInclude | null
    /**
     * The data needed to update a event.
     * 
    **/
    data: XOR<eventUpdateInput, eventUncheckedUpdateInput>
    /**
     * Choose, which event to update.
     * 
    **/
    where: eventWhereUniqueInput
  }


  /**
   * event updateMany
   */
  export type eventUpdateManyArgs = {
    /**
     * The data used to update events.
     * 
    **/
    data: XOR<eventUpdateManyMutationInput, eventUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     * 
    **/
    where?: eventWhereInput
  }


  /**
   * event upsert
   */
  export type eventUpsertArgs = {
    /**
     * Select specific fields to fetch from the event
     * 
    **/
    select?: eventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventInclude | null
    /**
     * The filter to search for the event to update in case it exists.
     * 
    **/
    where: eventWhereUniqueInput
    /**
     * In case the event found by the `where` argument doesn't exist, create a new event with this data.
     * 
    **/
    create: XOR<eventCreateInput, eventUncheckedCreateInput>
    /**
     * In case the event was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<eventUpdateInput, eventUncheckedUpdateInput>
  }


  /**
   * event delete
   */
  export type eventDeleteArgs = {
    /**
     * Select specific fields to fetch from the event
     * 
    **/
    select?: eventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventInclude | null
    /**
     * Filter which event to delete.
     * 
    **/
    where: eventWhereUniqueInput
  }


  /**
   * event deleteMany
   */
  export type eventDeleteManyArgs = {
    /**
     * Filter which events to delete
     * 
    **/
    where?: eventWhereInput
  }


  /**
   * event without action
   */
  export type eventArgs = {
    /**
     * Select specific fields to fetch from the event
     * 
    **/
    select?: eventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: eventInclude | null
  }



  /**
   * Model event_guest
   */


  export type AggregateEvent_guest = {
    _count: Event_guestCountAggregateOutputType | null
    _min: Event_guestMinAggregateOutputType | null
    _max: Event_guestMaxAggregateOutputType | null
  }

  export type Event_guestMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    checkedInAt: Date | null
    guestId: string | null
    eventId: string | null
  }

  export type Event_guestMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    checkedInAt: Date | null
    guestId: string | null
    eventId: string | null
  }

  export type Event_guestCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    checkedInAt: number
    guestId: number
    eventId: number
    _all: number
  }


  export type Event_guestMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    checkedInAt?: true
    guestId?: true
    eventId?: true
  }

  export type Event_guestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    checkedInAt?: true
    guestId?: true
    eventId?: true
  }

  export type Event_guestCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    checkedInAt?: true
    guestId?: true
    eventId?: true
    _all?: true
  }

  export type Event_guestAggregateArgs = {
    /**
     * Filter which event_guest to aggregate.
     * 
    **/
    where?: event_guestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_guests to fetch.
     * 
    **/
    orderBy?: Enumerable<event_guestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: event_guestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_guests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_guests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned event_guests
    **/
    _count?: true | Event_guestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_guestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_guestMaxAggregateInputType
  }

  export type GetEvent_guestAggregateType<T extends Event_guestAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_guest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_guest[P]>
      : GetScalarType<T[P], AggregateEvent_guest[P]>
  }




  export type Event_guestGroupByArgs = {
    where?: event_guestWhereInput
    orderBy?: Enumerable<event_guestOrderByWithAggregationInput>
    by: Array<Event_guestScalarFieldEnum>
    having?: event_guestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_guestCountAggregateInputType | true
    _min?: Event_guestMinAggregateInputType
    _max?: Event_guestMaxAggregateInputType
  }


  export type Event_guestGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    checkedInAt: Date | null
    guestId: string | null
    eventId: string | null
    _count: Event_guestCountAggregateOutputType | null
    _min: Event_guestMinAggregateOutputType | null
    _max: Event_guestMaxAggregateOutputType | null
  }

  type GetEvent_guestGroupByPayload<T extends Event_guestGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Event_guestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_guestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_guestGroupByOutputType[P]>
            : GetScalarType<T[P], Event_guestGroupByOutputType[P]>
        }
      >
    >


  export type event_guestSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checkedInAt?: boolean
    guestId?: boolean
    eventId?: boolean
    event?: boolean | eventArgs
    guest?: boolean | guestArgs
  }


  export type event_guestInclude = {
    event?: boolean | eventArgs
    guest?: boolean | guestArgs
  } 

  export type event_guestGetPayload<S extends boolean | null | undefined | event_guestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? event_guest :
    S extends undefined ? never :
    S extends { include: any } & (event_guestArgs | event_guestFindManyArgs)
    ? event_guest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'event' ? eventGetPayload<S['include'][P]> | null :
        P extends 'guest' ? guestGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (event_guestArgs | event_guestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'event' ? eventGetPayload<S['select'][P]> | null :
        P extends 'guest' ? guestGetPayload<S['select'][P]> | null :  P extends keyof event_guest ? event_guest[P] : never
  } 
      : event_guest


  type event_guestCountArgs = Merge<
    Omit<event_guestFindManyArgs, 'select' | 'include'> & {
      select?: Event_guestCountAggregateInputType | true
    }
  >

  export interface event_guestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Event_guest that matches the filter.
     * @param {event_guestFindUniqueArgs} args - Arguments to find a Event_guest
     * @example
     * // Get one Event_guest
     * const event_guest = await prisma.event_guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends event_guestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, event_guestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'event_guest'> extends True ? Prisma__event_guestClient<event_guestGetPayload<T>> : Prisma__event_guestClient<event_guestGetPayload<T> | null, null>

    /**
     * Find one Event_guest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {event_guestFindUniqueOrThrowArgs} args - Arguments to find a Event_guest
     * @example
     * // Get one Event_guest
     * const event_guest = await prisma.event_guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends event_guestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, event_guestFindUniqueOrThrowArgs>
    ): Prisma__event_guestClient<event_guestGetPayload<T>>

    /**
     * Find the first Event_guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_guestFindFirstArgs} args - Arguments to find a Event_guest
     * @example
     * // Get one Event_guest
     * const event_guest = await prisma.event_guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends event_guestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, event_guestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'event_guest'> extends True ? Prisma__event_guestClient<event_guestGetPayload<T>> : Prisma__event_guestClient<event_guestGetPayload<T> | null, null>

    /**
     * Find the first Event_guest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_guestFindFirstOrThrowArgs} args - Arguments to find a Event_guest
     * @example
     * // Get one Event_guest
     * const event_guest = await prisma.event_guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends event_guestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, event_guestFindFirstOrThrowArgs>
    ): Prisma__event_guestClient<event_guestGetPayload<T>>

    /**
     * Find zero or more Event_guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_guestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_guests
     * const event_guests = await prisma.event_guest.findMany()
     * 
     * // Get first 10 Event_guests
     * const event_guests = await prisma.event_guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const event_guestWithIdOnly = await prisma.event_guest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends event_guestFindManyArgs>(
      args?: SelectSubset<T, event_guestFindManyArgs>
    ): PrismaPromise<Array<event_guestGetPayload<T>>>

    /**
     * Create a Event_guest.
     * @param {event_guestCreateArgs} args - Arguments to create a Event_guest.
     * @example
     * // Create one Event_guest
     * const Event_guest = await prisma.event_guest.create({
     *   data: {
     *     // ... data to create a Event_guest
     *   }
     * })
     * 
    **/
    create<T extends event_guestCreateArgs>(
      args: SelectSubset<T, event_guestCreateArgs>
    ): Prisma__event_guestClient<event_guestGetPayload<T>>

    /**
     * Create many Event_guests.
     *     @param {event_guestCreateManyArgs} args - Arguments to create many Event_guests.
     *     @example
     *     // Create many Event_guests
     *     const event_guest = await prisma.event_guest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends event_guestCreateManyArgs>(
      args?: SelectSubset<T, event_guestCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Event_guest.
     * @param {event_guestDeleteArgs} args - Arguments to delete one Event_guest.
     * @example
     * // Delete one Event_guest
     * const Event_guest = await prisma.event_guest.delete({
     *   where: {
     *     // ... filter to delete one Event_guest
     *   }
     * })
     * 
    **/
    delete<T extends event_guestDeleteArgs>(
      args: SelectSubset<T, event_guestDeleteArgs>
    ): Prisma__event_guestClient<event_guestGetPayload<T>>

    /**
     * Update one Event_guest.
     * @param {event_guestUpdateArgs} args - Arguments to update one Event_guest.
     * @example
     * // Update one Event_guest
     * const event_guest = await prisma.event_guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends event_guestUpdateArgs>(
      args: SelectSubset<T, event_guestUpdateArgs>
    ): Prisma__event_guestClient<event_guestGetPayload<T>>

    /**
     * Delete zero or more Event_guests.
     * @param {event_guestDeleteManyArgs} args - Arguments to filter Event_guests to delete.
     * @example
     * // Delete a few Event_guests
     * const { count } = await prisma.event_guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends event_guestDeleteManyArgs>(
      args?: SelectSubset<T, event_guestDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_guestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_guests
     * const event_guest = await prisma.event_guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends event_guestUpdateManyArgs>(
      args: SelectSubset<T, event_guestUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Event_guest.
     * @param {event_guestUpsertArgs} args - Arguments to update or create a Event_guest.
     * @example
     * // Update or create a Event_guest
     * const event_guest = await prisma.event_guest.upsert({
     *   create: {
     *     // ... data to create a Event_guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_guest we want to update
     *   }
     * })
    **/
    upsert<T extends event_guestUpsertArgs>(
      args: SelectSubset<T, event_guestUpsertArgs>
    ): Prisma__event_guestClient<event_guestGetPayload<T>>

    /**
     * Count the number of Event_guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_guestCountArgs} args - Arguments to filter Event_guests to count.
     * @example
     * // Count the number of Event_guests
     * const count = await prisma.event_guest.count({
     *   where: {
     *     // ... the filter for the Event_guests we want to count
     *   }
     * })
    **/
    count<T extends event_guestCountArgs>(
      args?: Subset<T, event_guestCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_guestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_guestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Event_guestAggregateArgs>(args: Subset<T, Event_guestAggregateArgs>): PrismaPromise<GetEvent_guestAggregateType<T>>

    /**
     * Group by Event_guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_guestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Event_guestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Event_guestGroupByArgs['orderBy'] }
        : { orderBy?: Event_guestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Event_guestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_guestGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for event_guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__event_guestClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    event<T extends eventArgs= {}>(args?: Subset<T, eventArgs>): Prisma__eventClient<eventGetPayload<T> | Null>;

    guest<T extends guestArgs= {}>(args?: Subset<T, guestArgs>): Prisma__guestClient<guestGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * event_guest base type for findUnique actions
   */
  export type event_guestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the event_guest
     * 
    **/
    select?: event_guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: event_guestInclude | null
    /**
     * Filter, which event_guest to fetch.
     * 
    **/
    where: event_guestWhereUniqueInput
  }

  /**
   * event_guest: findUnique
   */
  export interface event_guestFindUniqueArgs extends event_guestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * event_guest findUniqueOrThrow
   */
  export type event_guestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the event_guest
     * 
    **/
    select?: event_guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: event_guestInclude | null
    /**
     * Filter, which event_guest to fetch.
     * 
    **/
    where: event_guestWhereUniqueInput
  }


  /**
   * event_guest base type for findFirst actions
   */
  export type event_guestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the event_guest
     * 
    **/
    select?: event_guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: event_guestInclude | null
    /**
     * Filter, which event_guest to fetch.
     * 
    **/
    where?: event_guestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_guests to fetch.
     * 
    **/
    orderBy?: Enumerable<event_guestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_guests.
     * 
    **/
    cursor?: event_guestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_guests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_guests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_guests.
     * 
    **/
    distinct?: Enumerable<Event_guestScalarFieldEnum>
  }

  /**
   * event_guest: findFirst
   */
  export interface event_guestFindFirstArgs extends event_guestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * event_guest findFirstOrThrow
   */
  export type event_guestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the event_guest
     * 
    **/
    select?: event_guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: event_guestInclude | null
    /**
     * Filter, which event_guest to fetch.
     * 
    **/
    where?: event_guestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_guests to fetch.
     * 
    **/
    orderBy?: Enumerable<event_guestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_guests.
     * 
    **/
    cursor?: event_guestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_guests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_guests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_guests.
     * 
    **/
    distinct?: Enumerable<Event_guestScalarFieldEnum>
  }


  /**
   * event_guest findMany
   */
  export type event_guestFindManyArgs = {
    /**
     * Select specific fields to fetch from the event_guest
     * 
    **/
    select?: event_guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: event_guestInclude | null
    /**
     * Filter, which event_guests to fetch.
     * 
    **/
    where?: event_guestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_guests to fetch.
     * 
    **/
    orderBy?: Enumerable<event_guestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing event_guests.
     * 
    **/
    cursor?: event_guestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_guests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_guests.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Event_guestScalarFieldEnum>
  }


  /**
   * event_guest create
   */
  export type event_guestCreateArgs = {
    /**
     * Select specific fields to fetch from the event_guest
     * 
    **/
    select?: event_guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: event_guestInclude | null
    /**
     * The data needed to create a event_guest.
     * 
    **/
    data: XOR<event_guestCreateInput, event_guestUncheckedCreateInput>
  }


  /**
   * event_guest createMany
   */
  export type event_guestCreateManyArgs = {
    /**
     * The data used to create many event_guests.
     * 
    **/
    data: Enumerable<event_guestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * event_guest update
   */
  export type event_guestUpdateArgs = {
    /**
     * Select specific fields to fetch from the event_guest
     * 
    **/
    select?: event_guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: event_guestInclude | null
    /**
     * The data needed to update a event_guest.
     * 
    **/
    data: XOR<event_guestUpdateInput, event_guestUncheckedUpdateInput>
    /**
     * Choose, which event_guest to update.
     * 
    **/
    where: event_guestWhereUniqueInput
  }


  /**
   * event_guest updateMany
   */
  export type event_guestUpdateManyArgs = {
    /**
     * The data used to update event_guests.
     * 
    **/
    data: XOR<event_guestUpdateManyMutationInput, event_guestUncheckedUpdateManyInput>
    /**
     * Filter which event_guests to update
     * 
    **/
    where?: event_guestWhereInput
  }


  /**
   * event_guest upsert
   */
  export type event_guestUpsertArgs = {
    /**
     * Select specific fields to fetch from the event_guest
     * 
    **/
    select?: event_guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: event_guestInclude | null
    /**
     * The filter to search for the event_guest to update in case it exists.
     * 
    **/
    where: event_guestWhereUniqueInput
    /**
     * In case the event_guest found by the `where` argument doesn't exist, create a new event_guest with this data.
     * 
    **/
    create: XOR<event_guestCreateInput, event_guestUncheckedCreateInput>
    /**
     * In case the event_guest was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<event_guestUpdateInput, event_guestUncheckedUpdateInput>
  }


  /**
   * event_guest delete
   */
  export type event_guestDeleteArgs = {
    /**
     * Select specific fields to fetch from the event_guest
     * 
    **/
    select?: event_guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: event_guestInclude | null
    /**
     * Filter which event_guest to delete.
     * 
    **/
    where: event_guestWhereUniqueInput
  }


  /**
   * event_guest deleteMany
   */
  export type event_guestDeleteManyArgs = {
    /**
     * Filter which event_guests to delete
     * 
    **/
    where?: event_guestWhereInput
  }


  /**
   * event_guest without action
   */
  export type event_guestArgs = {
    /**
     * Select specific fields to fetch from the event_guest
     * 
    **/
    select?: event_guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: event_guestInclude | null
  }



  /**
   * Model guest
   */


  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    company: string | null
    companyPosition: string | null
  }

  export type GuestMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    company: string | null
    companyPosition: string | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    organizationId: number
    firstName: number
    lastName: number
    email: number
    phone: number
    company: number
    companyPosition: number
    _all: number
  }


  export type GuestMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    company?: true
    companyPosition?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    company?: true
    companyPosition?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    company?: true
    companyPosition?: true
    _all?: true
  }

  export type GuestAggregateArgs = {
    /**
     * Filter which guest to aggregate.
     * 
    **/
    where?: guestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guests to fetch.
     * 
    **/
    orderBy?: Enumerable<guestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: guestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs = {
    where?: guestWhereInput
    orderBy?: Enumerable<guestOrderByWithAggregationInput>
    by: Array<GuestScalarFieldEnum>
    having?: guestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }


  export type GuestGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    organizationId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string | null
    companyPosition: string | null
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type guestSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    companyPosition?: boolean
    event_guest?: boolean | event_guestFindManyArgs
    vehicle?: boolean | vehicleFindManyArgs
    _count?: boolean | GuestCountOutputTypeArgs
  }


  export type guestInclude = {
    event_guest?: boolean | event_guestFindManyArgs
    vehicle?: boolean | vehicleFindManyArgs
    _count?: boolean | GuestCountOutputTypeArgs
  } 

  export type guestGetPayload<S extends boolean | null | undefined | guestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? guest :
    S extends undefined ? never :
    S extends { include: any } & (guestArgs | guestFindManyArgs)
    ? guest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'event_guest' ? Array < event_guestGetPayload<S['include'][P]>>  :
        P extends 'vehicle' ? Array < vehicleGetPayload<S['include'][P]>>  :
        P extends '_count' ? GuestCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (guestArgs | guestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'event_guest' ? Array < event_guestGetPayload<S['select'][P]>>  :
        P extends 'vehicle' ? Array < vehicleGetPayload<S['select'][P]>>  :
        P extends '_count' ? GuestCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof guest ? guest[P] : never
  } 
      : guest


  type guestCountArgs = Merge<
    Omit<guestFindManyArgs, 'select' | 'include'> & {
      select?: GuestCountAggregateInputType | true
    }
  >

  export interface guestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Guest that matches the filter.
     * @param {guestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends guestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, guestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'guest'> extends True ? Prisma__guestClient<guestGetPayload<T>> : Prisma__guestClient<guestGetPayload<T> | null, null>

    /**
     * Find one Guest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {guestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends guestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, guestFindUniqueOrThrowArgs>
    ): Prisma__guestClient<guestGetPayload<T>>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends guestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, guestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'guest'> extends True ? Prisma__guestClient<guestGetPayload<T>> : Prisma__guestClient<guestGetPayload<T> | null, null>

    /**
     * Find the first Guest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends guestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, guestFindFirstOrThrowArgs>
    ): Prisma__guestClient<guestGetPayload<T>>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends guestFindManyArgs>(
      args?: SelectSubset<T, guestFindManyArgs>
    ): PrismaPromise<Array<guestGetPayload<T>>>

    /**
     * Create a Guest.
     * @param {guestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
    **/
    create<T extends guestCreateArgs>(
      args: SelectSubset<T, guestCreateArgs>
    ): Prisma__guestClient<guestGetPayload<T>>

    /**
     * Create many Guests.
     *     @param {guestCreateManyArgs} args - Arguments to create many Guests.
     *     @example
     *     // Create many Guests
     *     const guest = await prisma.guest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends guestCreateManyArgs>(
      args?: SelectSubset<T, guestCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Guest.
     * @param {guestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
    **/
    delete<T extends guestDeleteArgs>(
      args: SelectSubset<T, guestDeleteArgs>
    ): Prisma__guestClient<guestGetPayload<T>>

    /**
     * Update one Guest.
     * @param {guestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends guestUpdateArgs>(
      args: SelectSubset<T, guestUpdateArgs>
    ): Prisma__guestClient<guestGetPayload<T>>

    /**
     * Delete zero or more Guests.
     * @param {guestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends guestDeleteManyArgs>(
      args?: SelectSubset<T, guestDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends guestUpdateManyArgs>(
      args: SelectSubset<T, guestUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Guest.
     * @param {guestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
    **/
    upsert<T extends guestUpsertArgs>(
      args: SelectSubset<T, guestUpsertArgs>
    ): Prisma__guestClient<guestGetPayload<T>>

    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends guestCountArgs>(
      args?: Subset<T, guestCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__guestClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    event_guest<T extends event_guestFindManyArgs= {}>(args?: Subset<T, event_guestFindManyArgs>): PrismaPromise<Array<event_guestGetPayload<T>>| Null>;

    vehicle<T extends vehicleFindManyArgs= {}>(args?: Subset<T, vehicleFindManyArgs>): PrismaPromise<Array<vehicleGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * guest base type for findUnique actions
   */
  export type guestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the guest
     * 
    **/
    select?: guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: guestInclude | null
    /**
     * Filter, which guest to fetch.
     * 
    **/
    where: guestWhereUniqueInput
  }

  /**
   * guest: findUnique
   */
  export interface guestFindUniqueArgs extends guestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * guest findUniqueOrThrow
   */
  export type guestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the guest
     * 
    **/
    select?: guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: guestInclude | null
    /**
     * Filter, which guest to fetch.
     * 
    **/
    where: guestWhereUniqueInput
  }


  /**
   * guest base type for findFirst actions
   */
  export type guestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the guest
     * 
    **/
    select?: guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: guestInclude | null
    /**
     * Filter, which guest to fetch.
     * 
    **/
    where?: guestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guests to fetch.
     * 
    **/
    orderBy?: Enumerable<guestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for guests.
     * 
    **/
    cursor?: guestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of guests.
     * 
    **/
    distinct?: Enumerable<GuestScalarFieldEnum>
  }

  /**
   * guest: findFirst
   */
  export interface guestFindFirstArgs extends guestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * guest findFirstOrThrow
   */
  export type guestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the guest
     * 
    **/
    select?: guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: guestInclude | null
    /**
     * Filter, which guest to fetch.
     * 
    **/
    where?: guestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guests to fetch.
     * 
    **/
    orderBy?: Enumerable<guestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for guests.
     * 
    **/
    cursor?: guestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of guests.
     * 
    **/
    distinct?: Enumerable<GuestScalarFieldEnum>
  }


  /**
   * guest findMany
   */
  export type guestFindManyArgs = {
    /**
     * Select specific fields to fetch from the guest
     * 
    **/
    select?: guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: guestInclude | null
    /**
     * Filter, which guests to fetch.
     * 
    **/
    where?: guestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guests to fetch.
     * 
    **/
    orderBy?: Enumerable<guestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing guests.
     * 
    **/
    cursor?: guestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guests.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GuestScalarFieldEnum>
  }


  /**
   * guest create
   */
  export type guestCreateArgs = {
    /**
     * Select specific fields to fetch from the guest
     * 
    **/
    select?: guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: guestInclude | null
    /**
     * The data needed to create a guest.
     * 
    **/
    data: XOR<guestCreateInput, guestUncheckedCreateInput>
  }


  /**
   * guest createMany
   */
  export type guestCreateManyArgs = {
    /**
     * The data used to create many guests.
     * 
    **/
    data: Enumerable<guestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * guest update
   */
  export type guestUpdateArgs = {
    /**
     * Select specific fields to fetch from the guest
     * 
    **/
    select?: guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: guestInclude | null
    /**
     * The data needed to update a guest.
     * 
    **/
    data: XOR<guestUpdateInput, guestUncheckedUpdateInput>
    /**
     * Choose, which guest to update.
     * 
    **/
    where: guestWhereUniqueInput
  }


  /**
   * guest updateMany
   */
  export type guestUpdateManyArgs = {
    /**
     * The data used to update guests.
     * 
    **/
    data: XOR<guestUpdateManyMutationInput, guestUncheckedUpdateManyInput>
    /**
     * Filter which guests to update
     * 
    **/
    where?: guestWhereInput
  }


  /**
   * guest upsert
   */
  export type guestUpsertArgs = {
    /**
     * Select specific fields to fetch from the guest
     * 
    **/
    select?: guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: guestInclude | null
    /**
     * The filter to search for the guest to update in case it exists.
     * 
    **/
    where: guestWhereUniqueInput
    /**
     * In case the guest found by the `where` argument doesn't exist, create a new guest with this data.
     * 
    **/
    create: XOR<guestCreateInput, guestUncheckedCreateInput>
    /**
     * In case the guest was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<guestUpdateInput, guestUncheckedUpdateInput>
  }


  /**
   * guest delete
   */
  export type guestDeleteArgs = {
    /**
     * Select specific fields to fetch from the guest
     * 
    **/
    select?: guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: guestInclude | null
    /**
     * Filter which guest to delete.
     * 
    **/
    where: guestWhereUniqueInput
  }


  /**
   * guest deleteMany
   */
  export type guestDeleteManyArgs = {
    /**
     * Filter which guests to delete
     * 
    **/
    where?: guestWhereInput
  }


  /**
   * guest without action
   */
  export type guestArgs = {
    /**
     * Select specific fields to fetch from the guest
     * 
    **/
    select?: guestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: guestInclude | null
  }



  /**
   * Model location
   */


  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    number: number | null
  }

  export type LocationSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    number: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    address: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    number: number | null
    serialNumber: string | null
    connectionType: location_connection_type | null
    organizationId: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    address: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    number: number | null
    serialNumber: string | null
    connectionType: location_connection_type | null
    organizationId: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    address: number
    latitude: number
    longitude: number
    number: number
    serialNumber: number
    connectionType: number
    organizationId: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    number?: true
  }

  export type LocationSumAggregateInputType = {
    latitude?: true
    longitude?: true
    number?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    number?: true
    serialNumber?: true
    connectionType?: true
    organizationId?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    number?: true
    serialNumber?: true
    connectionType?: true
    organizationId?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    number?: true
    serialNumber?: true
    connectionType?: true
    organizationId?: true
    _all?: true
  }

  export type LocationAggregateArgs = {
    /**
     * Filter which location to aggregate.
     * 
    **/
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     * 
    **/
    orderBy?: Enumerable<locationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs = {
    where?: locationWhereInput
    orderBy?: Enumerable<locationOrderByWithAggregationInput>
    by: Array<LocationScalarFieldEnum>
    having?: locationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }


  export type LocationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    address: string
    latitude: Decimal
    longitude: Decimal
    number: number
    serialNumber: string | null
    connectionType: location_connection_type
    organizationId: string
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type locationSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    number?: boolean
    serialNumber?: boolean
    connectionType?: boolean
    organizationId?: boolean
    camera?: boolean | cameraFindManyArgs
    organization?: boolean | organizationArgs
    _count?: boolean | LocationCountOutputTypeArgs
  }


  export type locationInclude = {
    camera?: boolean | cameraFindManyArgs
    organization?: boolean | organizationArgs
    _count?: boolean | LocationCountOutputTypeArgs
  } 

  export type locationGetPayload<S extends boolean | null | undefined | locationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? location :
    S extends undefined ? never :
    S extends { include: any } & (locationArgs | locationFindManyArgs)
    ? location  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'camera' ? Array < cameraGetPayload<S['include'][P]>>  :
        P extends 'organization' ? organizationGetPayload<S['include'][P]> :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (locationArgs | locationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'camera' ? Array < cameraGetPayload<S['select'][P]>>  :
        P extends 'organization' ? organizationGetPayload<S['select'][P]> :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof location ? location[P] : never
  } 
      : location


  type locationCountArgs = Merge<
    Omit<locationFindManyArgs, 'select' | 'include'> & {
      select?: LocationCountAggregateInputType | true
    }
  >

  export interface locationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Location that matches the filter.
     * @param {locationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends locationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, locationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'location'> extends True ? Prisma__locationClient<locationGetPayload<T>> : Prisma__locationClient<locationGetPayload<T> | null, null>

    /**
     * Find one Location that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {locationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends locationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, locationFindUniqueOrThrowArgs>
    ): Prisma__locationClient<locationGetPayload<T>>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends locationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, locationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'location'> extends True ? Prisma__locationClient<locationGetPayload<T>> : Prisma__locationClient<locationGetPayload<T> | null, null>

    /**
     * Find the first Location that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends locationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, locationFindFirstOrThrowArgs>
    ): Prisma__locationClient<locationGetPayload<T>>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends locationFindManyArgs>(
      args?: SelectSubset<T, locationFindManyArgs>
    ): PrismaPromise<Array<locationGetPayload<T>>>

    /**
     * Create a Location.
     * @param {locationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
    **/
    create<T extends locationCreateArgs>(
      args: SelectSubset<T, locationCreateArgs>
    ): Prisma__locationClient<locationGetPayload<T>>

    /**
     * Create many Locations.
     *     @param {locationCreateManyArgs} args - Arguments to create many Locations.
     *     @example
     *     // Create many Locations
     *     const location = await prisma.location.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends locationCreateManyArgs>(
      args?: SelectSubset<T, locationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {locationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
    **/
    delete<T extends locationDeleteArgs>(
      args: SelectSubset<T, locationDeleteArgs>
    ): Prisma__locationClient<locationGetPayload<T>>

    /**
     * Update one Location.
     * @param {locationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends locationUpdateArgs>(
      args: SelectSubset<T, locationUpdateArgs>
    ): Prisma__locationClient<locationGetPayload<T>>

    /**
     * Delete zero or more Locations.
     * @param {locationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends locationDeleteManyArgs>(
      args?: SelectSubset<T, locationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends locationUpdateManyArgs>(
      args: SelectSubset<T, locationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {locationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
    **/
    upsert<T extends locationUpsertArgs>(
      args: SelectSubset<T, locationUpsertArgs>
    ): Prisma__locationClient<locationGetPayload<T>>

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends locationCountArgs>(
      args?: Subset<T, locationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__locationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    camera<T extends cameraFindManyArgs= {}>(args?: Subset<T, cameraFindManyArgs>): PrismaPromise<Array<cameraGetPayload<T>>| Null>;

    organization<T extends organizationArgs= {}>(args?: Subset<T, organizationArgs>): Prisma__organizationClient<organizationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * location base type for findUnique actions
   */
  export type locationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the location
     * 
    **/
    select?: locationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: locationInclude | null
    /**
     * Filter, which location to fetch.
     * 
    **/
    where: locationWhereUniqueInput
  }

  /**
   * location: findUnique
   */
  export interface locationFindUniqueArgs extends locationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * location findUniqueOrThrow
   */
  export type locationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the location
     * 
    **/
    select?: locationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: locationInclude | null
    /**
     * Filter, which location to fetch.
     * 
    **/
    where: locationWhereUniqueInput
  }


  /**
   * location base type for findFirst actions
   */
  export type locationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the location
     * 
    **/
    select?: locationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: locationInclude | null
    /**
     * Filter, which location to fetch.
     * 
    **/
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     * 
    **/
    orderBy?: Enumerable<locationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     * 
    **/
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     * 
    **/
    distinct?: Enumerable<LocationScalarFieldEnum>
  }

  /**
   * location: findFirst
   */
  export interface locationFindFirstArgs extends locationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * location findFirstOrThrow
   */
  export type locationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the location
     * 
    **/
    select?: locationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: locationInclude | null
    /**
     * Filter, which location to fetch.
     * 
    **/
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     * 
    **/
    orderBy?: Enumerable<locationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     * 
    **/
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     * 
    **/
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * location findMany
   */
  export type locationFindManyArgs = {
    /**
     * Select specific fields to fetch from the location
     * 
    **/
    select?: locationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: locationInclude | null
    /**
     * Filter, which locations to fetch.
     * 
    **/
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     * 
    **/
    orderBy?: Enumerable<locationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing locations.
     * 
    **/
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * location create
   */
  export type locationCreateArgs = {
    /**
     * Select specific fields to fetch from the location
     * 
    **/
    select?: locationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: locationInclude | null
    /**
     * The data needed to create a location.
     * 
    **/
    data: XOR<locationCreateInput, locationUncheckedCreateInput>
  }


  /**
   * location createMany
   */
  export type locationCreateManyArgs = {
    /**
     * The data used to create many locations.
     * 
    **/
    data: Enumerable<locationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * location update
   */
  export type locationUpdateArgs = {
    /**
     * Select specific fields to fetch from the location
     * 
    **/
    select?: locationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: locationInclude | null
    /**
     * The data needed to update a location.
     * 
    **/
    data: XOR<locationUpdateInput, locationUncheckedUpdateInput>
    /**
     * Choose, which location to update.
     * 
    **/
    where: locationWhereUniqueInput
  }


  /**
   * location updateMany
   */
  export type locationUpdateManyArgs = {
    /**
     * The data used to update locations.
     * 
    **/
    data: XOR<locationUpdateManyMutationInput, locationUncheckedUpdateManyInput>
    /**
     * Filter which locations to update
     * 
    **/
    where?: locationWhereInput
  }


  /**
   * location upsert
   */
  export type locationUpsertArgs = {
    /**
     * Select specific fields to fetch from the location
     * 
    **/
    select?: locationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: locationInclude | null
    /**
     * The filter to search for the location to update in case it exists.
     * 
    **/
    where: locationWhereUniqueInput
    /**
     * In case the location found by the `where` argument doesn't exist, create a new location with this data.
     * 
    **/
    create: XOR<locationCreateInput, locationUncheckedCreateInput>
    /**
     * In case the location was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<locationUpdateInput, locationUncheckedUpdateInput>
  }


  /**
   * location delete
   */
  export type locationDeleteArgs = {
    /**
     * Select specific fields to fetch from the location
     * 
    **/
    select?: locationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: locationInclude | null
    /**
     * Filter which location to delete.
     * 
    **/
    where: locationWhereUniqueInput
  }


  /**
   * location deleteMany
   */
  export type locationDeleteManyArgs = {
    /**
     * Filter which locations to delete
     * 
    **/
    where?: locationWhereInput
  }


  /**
   * location without action
   */
  export type locationArgs = {
    /**
     * Select specific fields to fetch from the location
     * 
    **/
    select?: locationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: locationInclude | null
  }



  /**
   * Model notification
   */


  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    readAt: Date | null
    email: string | null
    phone: string | null
    sentAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    readAt: Date | null
    email: string | null
    phone: string | null
    sentAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    readAt: number
    data: number
    email: number
    phone: number
    sentAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    readAt?: true
    email?: true
    phone?: true
    sentAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    readAt?: true
    email?: true
    phone?: true
    sentAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    readAt?: true
    data?: true
    email?: true
    phone?: true
    sentAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs = {
    /**
     * Filter which notification to aggregate.
     * 
    **/
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<notificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs = {
    where?: notificationWhereInput
    orderBy?: Enumerable<notificationOrderByWithAggregationInput>
    by: Array<NotificationScalarFieldEnum>
    having?: notificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }


  export type NotificationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    readAt: Date | null
    data: JsonValue
    email: string | null
    phone: string | null
    sentAt: Date | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type notificationSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    readAt?: boolean
    data?: boolean
    email?: boolean
    phone?: boolean
    sentAt?: boolean
  }


  export type notificationGetPayload<S extends boolean | null | undefined | notificationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? notification :
    S extends undefined ? never :
    S extends { include: any } & (notificationArgs | notificationFindManyArgs)
    ? notification 
    : S extends { select: any } & (notificationArgs | notificationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof notification ? notification[P] : never
  } 
      : notification


  type notificationCountArgs = Merge<
    Omit<notificationFindManyArgs, 'select' | 'include'> & {
      select?: NotificationCountAggregateInputType | true
    }
  >

  export interface notificationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Notification that matches the filter.
     * @param {notificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends notificationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, notificationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'notification'> extends True ? Prisma__notificationClient<notificationGetPayload<T>> : Prisma__notificationClient<notificationGetPayload<T> | null, null>

    /**
     * Find one Notification that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {notificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends notificationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, notificationFindUniqueOrThrowArgs>
    ): Prisma__notificationClient<notificationGetPayload<T>>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends notificationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, notificationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'notification'> extends True ? Prisma__notificationClient<notificationGetPayload<T>> : Prisma__notificationClient<notificationGetPayload<T> | null, null>

    /**
     * Find the first Notification that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends notificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, notificationFindFirstOrThrowArgs>
    ): Prisma__notificationClient<notificationGetPayload<T>>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends notificationFindManyArgs>(
      args?: SelectSubset<T, notificationFindManyArgs>
    ): PrismaPromise<Array<notificationGetPayload<T>>>

    /**
     * Create a Notification.
     * @param {notificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends notificationCreateArgs>(
      args: SelectSubset<T, notificationCreateArgs>
    ): Prisma__notificationClient<notificationGetPayload<T>>

    /**
     * Create many Notifications.
     *     @param {notificationCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notification = await prisma.notification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends notificationCreateManyArgs>(
      args?: SelectSubset<T, notificationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {notificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends notificationDeleteArgs>(
      args: SelectSubset<T, notificationDeleteArgs>
    ): Prisma__notificationClient<notificationGetPayload<T>>

    /**
     * Update one Notification.
     * @param {notificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends notificationUpdateArgs>(
      args: SelectSubset<T, notificationUpdateArgs>
    ): Prisma__notificationClient<notificationGetPayload<T>>

    /**
     * Delete zero or more Notifications.
     * @param {notificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends notificationDeleteManyArgs>(
      args?: SelectSubset<T, notificationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends notificationUpdateManyArgs>(
      args: SelectSubset<T, notificationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {notificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends notificationUpsertArgs>(
      args: SelectSubset<T, notificationUpsertArgs>
    ): Prisma__notificationClient<notificationGetPayload<T>>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationCountArgs>(
      args?: Subset<T, notificationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__notificationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * notification base type for findUnique actions
   */
  export type notificationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the notification
     * 
    **/
    select?: notificationSelect | null
    /**
     * Filter, which notification to fetch.
     * 
    **/
    where: notificationWhereUniqueInput
  }

  /**
   * notification: findUnique
   */
  export interface notificationFindUniqueArgs extends notificationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * notification findUniqueOrThrow
   */
  export type notificationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the notification
     * 
    **/
    select?: notificationSelect | null
    /**
     * Filter, which notification to fetch.
     * 
    **/
    where: notificationWhereUniqueInput
  }


  /**
   * notification base type for findFirst actions
   */
  export type notificationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the notification
     * 
    **/
    select?: notificationSelect | null
    /**
     * Filter, which notification to fetch.
     * 
    **/
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<notificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     * 
    **/
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     * 
    **/
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }

  /**
   * notification: findFirst
   */
  export interface notificationFindFirstArgs extends notificationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * notification findFirstOrThrow
   */
  export type notificationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the notification
     * 
    **/
    select?: notificationSelect | null
    /**
     * Filter, which notification to fetch.
     * 
    **/
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<notificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     * 
    **/
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     * 
    **/
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * notification findMany
   */
  export type notificationFindManyArgs = {
    /**
     * Select specific fields to fetch from the notification
     * 
    **/
    select?: notificationSelect | null
    /**
     * Filter, which notifications to fetch.
     * 
    **/
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<notificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     * 
    **/
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * notification create
   */
  export type notificationCreateArgs = {
    /**
     * Select specific fields to fetch from the notification
     * 
    **/
    select?: notificationSelect | null
    /**
     * The data needed to create a notification.
     * 
    **/
    data: XOR<notificationCreateInput, notificationUncheckedCreateInput>
  }


  /**
   * notification createMany
   */
  export type notificationCreateManyArgs = {
    /**
     * The data used to create many notifications.
     * 
    **/
    data: Enumerable<notificationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * notification update
   */
  export type notificationUpdateArgs = {
    /**
     * Select specific fields to fetch from the notification
     * 
    **/
    select?: notificationSelect | null
    /**
     * The data needed to update a notification.
     * 
    **/
    data: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
    /**
     * Choose, which notification to update.
     * 
    **/
    where: notificationWhereUniqueInput
  }


  /**
   * notification updateMany
   */
  export type notificationUpdateManyArgs = {
    /**
     * The data used to update notifications.
     * 
    **/
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     * 
    **/
    where?: notificationWhereInput
  }


  /**
   * notification upsert
   */
  export type notificationUpsertArgs = {
    /**
     * Select specific fields to fetch from the notification
     * 
    **/
    select?: notificationSelect | null
    /**
     * The filter to search for the notification to update in case it exists.
     * 
    **/
    where: notificationWhereUniqueInput
    /**
     * In case the notification found by the `where` argument doesn't exist, create a new notification with this data.
     * 
    **/
    create: XOR<notificationCreateInput, notificationUncheckedCreateInput>
    /**
     * In case the notification was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
  }


  /**
   * notification delete
   */
  export type notificationDeleteArgs = {
    /**
     * Select specific fields to fetch from the notification
     * 
    **/
    select?: notificationSelect | null
    /**
     * Filter which notification to delete.
     * 
    **/
    where: notificationWhereUniqueInput
  }


  /**
   * notification deleteMany
   */
  export type notificationDeleteManyArgs = {
    /**
     * Filter which notifications to delete
     * 
    **/
    where?: notificationWhereInput
  }


  /**
   * notification without action
   */
  export type notificationArgs = {
    /**
     * Select specific fields to fetch from the notification
     * 
    **/
    select?: notificationSelect | null
  }



  /**
   * Model organization
   */


  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    subdomain: string | null
    stripeCustomerId: string | null
    status: organization_status | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    subdomain: string | null
    stripeCustomerId: string | null
    status: organization_status | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    subdomain: number
    stripeCustomerId: number
    status: number
    statuses: number
    statuses2: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    subdomain?: true
    stripeCustomerId?: true
    status?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    subdomain?: true
    stripeCustomerId?: true
    status?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    subdomain?: true
    stripeCustomerId?: true
    status?: true
    statuses?: true
    statuses2?: true
    _all?: true
  }

  export type OrganizationAggregateArgs = {
    /**
     * Filter which organization to aggregate.
     * 
    **/
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<organizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs = {
    where?: organizationWhereInput
    orderBy?: Enumerable<organizationOrderByWithAggregationInput>
    by: Array<OrganizationScalarFieldEnum>
    having?: organizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }


  export type OrganizationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    subdomain: string
    stripeCustomerId: string | null
    status: organization_status
    statuses: organization_status[]
    statuses2: string[]
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type organizationSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    subdomain?: boolean
    stripeCustomerId?: boolean
    status?: boolean
    statuses?: boolean
    statuses2?: boolean
    api_key?: boolean | api_keyFindManyArgs
    location?: boolean | locationFindManyArgs
    organization_invitation?: boolean | organization_invitationFindManyArgs
    organization_member?: boolean | organization_memberFindManyArgs
    _count?: boolean | OrganizationCountOutputTypeArgs
  }


  export type organizationInclude = {
    api_key?: boolean | api_keyFindManyArgs
    location?: boolean | locationFindManyArgs
    organization_invitation?: boolean | organization_invitationFindManyArgs
    organization_member?: boolean | organization_memberFindManyArgs
    _count?: boolean | OrganizationCountOutputTypeArgs
  } 

  export type organizationGetPayload<S extends boolean | null | undefined | organizationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? organization :
    S extends undefined ? never :
    S extends { include: any } & (organizationArgs | organizationFindManyArgs)
    ? organization  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'api_key' ? Array < api_keyGetPayload<S['include'][P]>>  :
        P extends 'location' ? Array < locationGetPayload<S['include'][P]>>  :
        P extends 'organization_invitation' ? Array < organization_invitationGetPayload<S['include'][P]>>  :
        P extends 'organization_member' ? Array < organization_memberGetPayload<S['include'][P]>>  :
        P extends '_count' ? OrganizationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (organizationArgs | organizationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'api_key' ? Array < api_keyGetPayload<S['select'][P]>>  :
        P extends 'location' ? Array < locationGetPayload<S['select'][P]>>  :
        P extends 'organization_invitation' ? Array < organization_invitationGetPayload<S['select'][P]>>  :
        P extends 'organization_member' ? Array < organization_memberGetPayload<S['select'][P]>>  :
        P extends '_count' ? OrganizationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof organization ? organization[P] : never
  } 
      : organization


  type organizationCountArgs = Merge<
    Omit<organizationFindManyArgs, 'select' | 'include'> & {
      select?: OrganizationCountAggregateInputType | true
    }
  >

  export interface organizationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends organizationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, organizationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'organization'> extends True ? Prisma__organizationClient<organizationGetPayload<T>> : Prisma__organizationClient<organizationGetPayload<T> | null, null>

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs>
    ): Prisma__organizationClient<organizationGetPayload<T>>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends organizationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, organizationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'organization'> extends True ? Prisma__organizationClient<organizationGetPayload<T>> : Prisma__organizationClient<organizationGetPayload<T> | null, null>

    /**
     * Find the first Organization that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs>
    ): Prisma__organizationClient<organizationGetPayload<T>>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends organizationFindManyArgs>(
      args?: SelectSubset<T, organizationFindManyArgs>
    ): PrismaPromise<Array<organizationGetPayload<T>>>

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
    **/
    create<T extends organizationCreateArgs>(
      args: SelectSubset<T, organizationCreateArgs>
    ): Prisma__organizationClient<organizationGetPayload<T>>

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends organizationCreateManyArgs>(
      args?: SelectSubset<T, organizationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
    **/
    delete<T extends organizationDeleteArgs>(
      args: SelectSubset<T, organizationDeleteArgs>
    ): Prisma__organizationClient<organizationGetPayload<T>>

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends organizationUpdateArgs>(
      args: SelectSubset<T, organizationUpdateArgs>
    ): Prisma__organizationClient<organizationGetPayload<T>>

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends organizationDeleteManyArgs>(
      args?: SelectSubset<T, organizationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends organizationUpdateManyArgs>(
      args: SelectSubset<T, organizationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
    **/
    upsert<T extends organizationUpsertArgs>(
      args: SelectSubset<T, organizationUpsertArgs>
    ): Prisma__organizationClient<organizationGetPayload<T>>

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__organizationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    api_key<T extends api_keyFindManyArgs= {}>(args?: Subset<T, api_keyFindManyArgs>): PrismaPromise<Array<api_keyGetPayload<T>>| Null>;

    location<T extends locationFindManyArgs= {}>(args?: Subset<T, locationFindManyArgs>): PrismaPromise<Array<locationGetPayload<T>>| Null>;

    organization_invitation<T extends organization_invitationFindManyArgs= {}>(args?: Subset<T, organization_invitationFindManyArgs>): PrismaPromise<Array<organization_invitationGetPayload<T>>| Null>;

    organization_member<T extends organization_memberFindManyArgs= {}>(args?: Subset<T, organization_memberFindManyArgs>): PrismaPromise<Array<organization_memberGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * organization base type for findUnique actions
   */
  export type organizationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the organization
     * 
    **/
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organizationInclude | null
    /**
     * Filter, which organization to fetch.
     * 
    **/
    where: organizationWhereUniqueInput
  }

  /**
   * organization: findUnique
   */
  export interface organizationFindUniqueArgs extends organizationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the organization
     * 
    **/
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organizationInclude | null
    /**
     * Filter, which organization to fetch.
     * 
    **/
    where: organizationWhereUniqueInput
  }


  /**
   * organization base type for findFirst actions
   */
  export type organizationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the organization
     * 
    **/
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organizationInclude | null
    /**
     * Filter, which organization to fetch.
     * 
    **/
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<organizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     * 
    **/
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     * 
    **/
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }

  /**
   * organization: findFirst
   */
  export interface organizationFindFirstArgs extends organizationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the organization
     * 
    **/
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organizationInclude | null
    /**
     * Filter, which organization to fetch.
     * 
    **/
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<organizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     * 
    **/
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     * 
    **/
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }


  /**
   * organization findMany
   */
  export type organizationFindManyArgs = {
    /**
     * Select specific fields to fetch from the organization
     * 
    **/
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organizationInclude | null
    /**
     * Filter, which organizations to fetch.
     * 
    **/
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<organizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizations.
     * 
    **/
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }


  /**
   * organization create
   */
  export type organizationCreateArgs = {
    /**
     * Select specific fields to fetch from the organization
     * 
    **/
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organizationInclude | null
    /**
     * The data needed to create a organization.
     * 
    **/
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>
  }


  /**
   * organization createMany
   */
  export type organizationCreateManyArgs = {
    /**
     * The data used to create many organizations.
     * 
    **/
    data: Enumerable<organizationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * organization update
   */
  export type organizationUpdateArgs = {
    /**
     * Select specific fields to fetch from the organization
     * 
    **/
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organizationInclude | null
    /**
     * The data needed to update a organization.
     * 
    **/
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
    /**
     * Choose, which organization to update.
     * 
    **/
    where: organizationWhereUniqueInput
  }


  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs = {
    /**
     * The data used to update organizations.
     * 
    **/
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     * 
    **/
    where?: organizationWhereInput
  }


  /**
   * organization upsert
   */
  export type organizationUpsertArgs = {
    /**
     * Select specific fields to fetch from the organization
     * 
    **/
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organizationInclude | null
    /**
     * The filter to search for the organization to update in case it exists.
     * 
    **/
    where: organizationWhereUniqueInput
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     * 
    **/
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
  }


  /**
   * organization delete
   */
  export type organizationDeleteArgs = {
    /**
     * Select specific fields to fetch from the organization
     * 
    **/
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organizationInclude | null
    /**
     * Filter which organization to delete.
     * 
    **/
    where: organizationWhereUniqueInput
  }


  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs = {
    /**
     * Filter which organizations to delete
     * 
    **/
    where?: organizationWhereInput
  }


  /**
   * organization without action
   */
  export type organizationArgs = {
    /**
     * Select specific fields to fetch from the organization
     * 
    **/
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organizationInclude | null
  }



  /**
   * Model organization_invitation
   */


  export type AggregateOrganization_invitation = {
    _count: Organization_invitationCountAggregateOutputType | null
    _min: Organization_invitationMinAggregateOutputType | null
    _max: Organization_invitationMaxAggregateOutputType | null
  }

  export type Organization_invitationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    role: organization_member_role | null
    token: string | null
    organizationId: string | null
  }

  export type Organization_invitationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    role: organization_member_role | null
    token: string | null
    organizationId: string | null
  }

  export type Organization_invitationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    role: number
    token: number
    organizationId: number
    _all: number
  }


  export type Organization_invitationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    role?: true
    token?: true
    organizationId?: true
  }

  export type Organization_invitationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    role?: true
    token?: true
    organizationId?: true
  }

  export type Organization_invitationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    role?: true
    token?: true
    organizationId?: true
    _all?: true
  }

  export type Organization_invitationAggregateArgs = {
    /**
     * Filter which organization_invitation to aggregate.
     * 
    **/
    where?: organization_invitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_invitations to fetch.
     * 
    **/
    orderBy?: Enumerable<organization_invitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: organization_invitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_invitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_invitations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organization_invitations
    **/
    _count?: true | Organization_invitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Organization_invitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Organization_invitationMaxAggregateInputType
  }

  export type GetOrganization_invitationAggregateType<T extends Organization_invitationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization_invitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization_invitation[P]>
      : GetScalarType<T[P], AggregateOrganization_invitation[P]>
  }




  export type Organization_invitationGroupByArgs = {
    where?: organization_invitationWhereInput
    orderBy?: Enumerable<organization_invitationOrderByWithAggregationInput>
    by: Array<Organization_invitationScalarFieldEnum>
    having?: organization_invitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Organization_invitationCountAggregateInputType | true
    _min?: Organization_invitationMinAggregateInputType
    _max?: Organization_invitationMaxAggregateInputType
  }


  export type Organization_invitationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    role: organization_member_role
    token: string
    organizationId: string
    _count: Organization_invitationCountAggregateOutputType | null
    _min: Organization_invitationMinAggregateOutputType | null
    _max: Organization_invitationMaxAggregateOutputType | null
  }

  type GetOrganization_invitationGroupByPayload<T extends Organization_invitationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Organization_invitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Organization_invitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Organization_invitationGroupByOutputType[P]>
            : GetScalarType<T[P], Organization_invitationGroupByOutputType[P]>
        }
      >
    >


  export type organization_invitationSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    organizationId?: boolean
    organization?: boolean | organizationArgs
  }


  export type organization_invitationInclude = {
    organization?: boolean | organizationArgs
  } 

  export type organization_invitationGetPayload<S extends boolean | null | undefined | organization_invitationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? organization_invitation :
    S extends undefined ? never :
    S extends { include: any } & (organization_invitationArgs | organization_invitationFindManyArgs)
    ? organization_invitation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'organization' ? organizationGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (organization_invitationArgs | organization_invitationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'organization' ? organizationGetPayload<S['select'][P]> :  P extends keyof organization_invitation ? organization_invitation[P] : never
  } 
      : organization_invitation


  type organization_invitationCountArgs = Merge<
    Omit<organization_invitationFindManyArgs, 'select' | 'include'> & {
      select?: Organization_invitationCountAggregateInputType | true
    }
  >

  export interface organization_invitationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Organization_invitation that matches the filter.
     * @param {organization_invitationFindUniqueArgs} args - Arguments to find a Organization_invitation
     * @example
     * // Get one Organization_invitation
     * const organization_invitation = await prisma.organization_invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends organization_invitationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, organization_invitationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'organization_invitation'> extends True ? Prisma__organization_invitationClient<organization_invitationGetPayload<T>> : Prisma__organization_invitationClient<organization_invitationGetPayload<T> | null, null>

    /**
     * Find one Organization_invitation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {organization_invitationFindUniqueOrThrowArgs} args - Arguments to find a Organization_invitation
     * @example
     * // Get one Organization_invitation
     * const organization_invitation = await prisma.organization_invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends organization_invitationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, organization_invitationFindUniqueOrThrowArgs>
    ): Prisma__organization_invitationClient<organization_invitationGetPayload<T>>

    /**
     * Find the first Organization_invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_invitationFindFirstArgs} args - Arguments to find a Organization_invitation
     * @example
     * // Get one Organization_invitation
     * const organization_invitation = await prisma.organization_invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends organization_invitationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, organization_invitationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'organization_invitation'> extends True ? Prisma__organization_invitationClient<organization_invitationGetPayload<T>> : Prisma__organization_invitationClient<organization_invitationGetPayload<T> | null, null>

    /**
     * Find the first Organization_invitation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_invitationFindFirstOrThrowArgs} args - Arguments to find a Organization_invitation
     * @example
     * // Get one Organization_invitation
     * const organization_invitation = await prisma.organization_invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends organization_invitationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, organization_invitationFindFirstOrThrowArgs>
    ): Prisma__organization_invitationClient<organization_invitationGetPayload<T>>

    /**
     * Find zero or more Organization_invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_invitationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organization_invitations
     * const organization_invitations = await prisma.organization_invitation.findMany()
     * 
     * // Get first 10 Organization_invitations
     * const organization_invitations = await prisma.organization_invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organization_invitationWithIdOnly = await prisma.organization_invitation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends organization_invitationFindManyArgs>(
      args?: SelectSubset<T, organization_invitationFindManyArgs>
    ): PrismaPromise<Array<organization_invitationGetPayload<T>>>

    /**
     * Create a Organization_invitation.
     * @param {organization_invitationCreateArgs} args - Arguments to create a Organization_invitation.
     * @example
     * // Create one Organization_invitation
     * const Organization_invitation = await prisma.organization_invitation.create({
     *   data: {
     *     // ... data to create a Organization_invitation
     *   }
     * })
     * 
    **/
    create<T extends organization_invitationCreateArgs>(
      args: SelectSubset<T, organization_invitationCreateArgs>
    ): Prisma__organization_invitationClient<organization_invitationGetPayload<T>>

    /**
     * Create many Organization_invitations.
     *     @param {organization_invitationCreateManyArgs} args - Arguments to create many Organization_invitations.
     *     @example
     *     // Create many Organization_invitations
     *     const organization_invitation = await prisma.organization_invitation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends organization_invitationCreateManyArgs>(
      args?: SelectSubset<T, organization_invitationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Organization_invitation.
     * @param {organization_invitationDeleteArgs} args - Arguments to delete one Organization_invitation.
     * @example
     * // Delete one Organization_invitation
     * const Organization_invitation = await prisma.organization_invitation.delete({
     *   where: {
     *     // ... filter to delete one Organization_invitation
     *   }
     * })
     * 
    **/
    delete<T extends organization_invitationDeleteArgs>(
      args: SelectSubset<T, organization_invitationDeleteArgs>
    ): Prisma__organization_invitationClient<organization_invitationGetPayload<T>>

    /**
     * Update one Organization_invitation.
     * @param {organization_invitationUpdateArgs} args - Arguments to update one Organization_invitation.
     * @example
     * // Update one Organization_invitation
     * const organization_invitation = await prisma.organization_invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends organization_invitationUpdateArgs>(
      args: SelectSubset<T, organization_invitationUpdateArgs>
    ): Prisma__organization_invitationClient<organization_invitationGetPayload<T>>

    /**
     * Delete zero or more Organization_invitations.
     * @param {organization_invitationDeleteManyArgs} args - Arguments to filter Organization_invitations to delete.
     * @example
     * // Delete a few Organization_invitations
     * const { count } = await prisma.organization_invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends organization_invitationDeleteManyArgs>(
      args?: SelectSubset<T, organization_invitationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organization_invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_invitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organization_invitations
     * const organization_invitation = await prisma.organization_invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends organization_invitationUpdateManyArgs>(
      args: SelectSubset<T, organization_invitationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization_invitation.
     * @param {organization_invitationUpsertArgs} args - Arguments to update or create a Organization_invitation.
     * @example
     * // Update or create a Organization_invitation
     * const organization_invitation = await prisma.organization_invitation.upsert({
     *   create: {
     *     // ... data to create a Organization_invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization_invitation we want to update
     *   }
     * })
    **/
    upsert<T extends organization_invitationUpsertArgs>(
      args: SelectSubset<T, organization_invitationUpsertArgs>
    ): Prisma__organization_invitationClient<organization_invitationGetPayload<T>>

    /**
     * Count the number of Organization_invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_invitationCountArgs} args - Arguments to filter Organization_invitations to count.
     * @example
     * // Count the number of Organization_invitations
     * const count = await prisma.organization_invitation.count({
     *   where: {
     *     // ... the filter for the Organization_invitations we want to count
     *   }
     * })
    **/
    count<T extends organization_invitationCountArgs>(
      args?: Subset<T, organization_invitationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Organization_invitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization_invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_invitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Organization_invitationAggregateArgs>(args: Subset<T, Organization_invitationAggregateArgs>): PrismaPromise<GetOrganization_invitationAggregateType<T>>

    /**
     * Group by Organization_invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_invitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Organization_invitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Organization_invitationGroupByArgs['orderBy'] }
        : { orderBy?: Organization_invitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Organization_invitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganization_invitationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for organization_invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__organization_invitationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    organization<T extends organizationArgs= {}>(args?: Subset<T, organizationArgs>): Prisma__organizationClient<organizationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * organization_invitation base type for findUnique actions
   */
  export type organization_invitationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the organization_invitation
     * 
    **/
    select?: organization_invitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_invitationInclude | null
    /**
     * Filter, which organization_invitation to fetch.
     * 
    **/
    where: organization_invitationWhereUniqueInput
  }

  /**
   * organization_invitation: findUnique
   */
  export interface organization_invitationFindUniqueArgs extends organization_invitationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * organization_invitation findUniqueOrThrow
   */
  export type organization_invitationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the organization_invitation
     * 
    **/
    select?: organization_invitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_invitationInclude | null
    /**
     * Filter, which organization_invitation to fetch.
     * 
    **/
    where: organization_invitationWhereUniqueInput
  }


  /**
   * organization_invitation base type for findFirst actions
   */
  export type organization_invitationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the organization_invitation
     * 
    **/
    select?: organization_invitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_invitationInclude | null
    /**
     * Filter, which organization_invitation to fetch.
     * 
    **/
    where?: organization_invitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_invitations to fetch.
     * 
    **/
    orderBy?: Enumerable<organization_invitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organization_invitations.
     * 
    **/
    cursor?: organization_invitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_invitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_invitations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organization_invitations.
     * 
    **/
    distinct?: Enumerable<Organization_invitationScalarFieldEnum>
  }

  /**
   * organization_invitation: findFirst
   */
  export interface organization_invitationFindFirstArgs extends organization_invitationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * organization_invitation findFirstOrThrow
   */
  export type organization_invitationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the organization_invitation
     * 
    **/
    select?: organization_invitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_invitationInclude | null
    /**
     * Filter, which organization_invitation to fetch.
     * 
    **/
    where?: organization_invitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_invitations to fetch.
     * 
    **/
    orderBy?: Enumerable<organization_invitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organization_invitations.
     * 
    **/
    cursor?: organization_invitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_invitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_invitations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organization_invitations.
     * 
    **/
    distinct?: Enumerable<Organization_invitationScalarFieldEnum>
  }


  /**
   * organization_invitation findMany
   */
  export type organization_invitationFindManyArgs = {
    /**
     * Select specific fields to fetch from the organization_invitation
     * 
    **/
    select?: organization_invitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_invitationInclude | null
    /**
     * Filter, which organization_invitations to fetch.
     * 
    **/
    where?: organization_invitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_invitations to fetch.
     * 
    **/
    orderBy?: Enumerable<organization_invitationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organization_invitations.
     * 
    **/
    cursor?: organization_invitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_invitations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_invitations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Organization_invitationScalarFieldEnum>
  }


  /**
   * organization_invitation create
   */
  export type organization_invitationCreateArgs = {
    /**
     * Select specific fields to fetch from the organization_invitation
     * 
    **/
    select?: organization_invitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_invitationInclude | null
    /**
     * The data needed to create a organization_invitation.
     * 
    **/
    data: XOR<organization_invitationCreateInput, organization_invitationUncheckedCreateInput>
  }


  /**
   * organization_invitation createMany
   */
  export type organization_invitationCreateManyArgs = {
    /**
     * The data used to create many organization_invitations.
     * 
    **/
    data: Enumerable<organization_invitationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * organization_invitation update
   */
  export type organization_invitationUpdateArgs = {
    /**
     * Select specific fields to fetch from the organization_invitation
     * 
    **/
    select?: organization_invitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_invitationInclude | null
    /**
     * The data needed to update a organization_invitation.
     * 
    **/
    data: XOR<organization_invitationUpdateInput, organization_invitationUncheckedUpdateInput>
    /**
     * Choose, which organization_invitation to update.
     * 
    **/
    where: organization_invitationWhereUniqueInput
  }


  /**
   * organization_invitation updateMany
   */
  export type organization_invitationUpdateManyArgs = {
    /**
     * The data used to update organization_invitations.
     * 
    **/
    data: XOR<organization_invitationUpdateManyMutationInput, organization_invitationUncheckedUpdateManyInput>
    /**
     * Filter which organization_invitations to update
     * 
    **/
    where?: organization_invitationWhereInput
  }


  /**
   * organization_invitation upsert
   */
  export type organization_invitationUpsertArgs = {
    /**
     * Select specific fields to fetch from the organization_invitation
     * 
    **/
    select?: organization_invitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_invitationInclude | null
    /**
     * The filter to search for the organization_invitation to update in case it exists.
     * 
    **/
    where: organization_invitationWhereUniqueInput
    /**
     * In case the organization_invitation found by the `where` argument doesn't exist, create a new organization_invitation with this data.
     * 
    **/
    create: XOR<organization_invitationCreateInput, organization_invitationUncheckedCreateInput>
    /**
     * In case the organization_invitation was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<organization_invitationUpdateInput, organization_invitationUncheckedUpdateInput>
  }


  /**
   * organization_invitation delete
   */
  export type organization_invitationDeleteArgs = {
    /**
     * Select specific fields to fetch from the organization_invitation
     * 
    **/
    select?: organization_invitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_invitationInclude | null
    /**
     * Filter which organization_invitation to delete.
     * 
    **/
    where: organization_invitationWhereUniqueInput
  }


  /**
   * organization_invitation deleteMany
   */
  export type organization_invitationDeleteManyArgs = {
    /**
     * Filter which organization_invitations to delete
     * 
    **/
    where?: organization_invitationWhereInput
  }


  /**
   * organization_invitation without action
   */
  export type organization_invitationArgs = {
    /**
     * Select specific fields to fetch from the organization_invitation
     * 
    **/
    select?: organization_invitationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_invitationInclude | null
  }



  /**
   * Model organization_member
   */


  export type AggregateOrganization_member = {
    _count: Organization_memberCountAggregateOutputType | null
    _min: Organization_memberMinAggregateOutputType | null
    _max: Organization_memberMaxAggregateOutputType | null
  }

  export type Organization_memberMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: organization_member_role | null
    userId: string | null
    organizationId: string | null
  }

  export type Organization_memberMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: organization_member_role | null
    userId: string | null
    organizationId: string | null
  }

  export type Organization_memberCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    role: number
    userId: number
    organizationId: number
    _all: number
  }


  export type Organization_memberMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    userId?: true
    organizationId?: true
  }

  export type Organization_memberMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    userId?: true
    organizationId?: true
  }

  export type Organization_memberCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    userId?: true
    organizationId?: true
    _all?: true
  }

  export type Organization_memberAggregateArgs = {
    /**
     * Filter which organization_member to aggregate.
     * 
    **/
    where?: organization_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_members to fetch.
     * 
    **/
    orderBy?: Enumerable<organization_memberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: organization_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_members from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_members.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organization_members
    **/
    _count?: true | Organization_memberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Organization_memberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Organization_memberMaxAggregateInputType
  }

  export type GetOrganization_memberAggregateType<T extends Organization_memberAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization_member[P]>
      : GetScalarType<T[P], AggregateOrganization_member[P]>
  }




  export type Organization_memberGroupByArgs = {
    where?: organization_memberWhereInput
    orderBy?: Enumerable<organization_memberOrderByWithAggregationInput>
    by: Array<Organization_memberScalarFieldEnum>
    having?: organization_memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Organization_memberCountAggregateInputType | true
    _min?: Organization_memberMinAggregateInputType
    _max?: Organization_memberMaxAggregateInputType
  }


  export type Organization_memberGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    role: organization_member_role
    userId: string
    organizationId: string
    _count: Organization_memberCountAggregateOutputType | null
    _min: Organization_memberMinAggregateOutputType | null
    _max: Organization_memberMaxAggregateOutputType | null
  }

  type GetOrganization_memberGroupByPayload<T extends Organization_memberGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Organization_memberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Organization_memberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Organization_memberGroupByOutputType[P]>
            : GetScalarType<T[P], Organization_memberGroupByOutputType[P]>
        }
      >
    >


  export type organization_memberSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    userId?: boolean
    organizationId?: boolean
    organization?: boolean | organizationArgs
  }


  export type organization_memberInclude = {
    organization?: boolean | organizationArgs
  } 

  export type organization_memberGetPayload<S extends boolean | null | undefined | organization_memberArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? organization_member :
    S extends undefined ? never :
    S extends { include: any } & (organization_memberArgs | organization_memberFindManyArgs)
    ? organization_member  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'organization' ? organizationGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (organization_memberArgs | organization_memberFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'organization' ? organizationGetPayload<S['select'][P]> :  P extends keyof organization_member ? organization_member[P] : never
  } 
      : organization_member


  type organization_memberCountArgs = Merge<
    Omit<organization_memberFindManyArgs, 'select' | 'include'> & {
      select?: Organization_memberCountAggregateInputType | true
    }
  >

  export interface organization_memberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Organization_member that matches the filter.
     * @param {organization_memberFindUniqueArgs} args - Arguments to find a Organization_member
     * @example
     * // Get one Organization_member
     * const organization_member = await prisma.organization_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends organization_memberFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, organization_memberFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'organization_member'> extends True ? Prisma__organization_memberClient<organization_memberGetPayload<T>> : Prisma__organization_memberClient<organization_memberGetPayload<T> | null, null>

    /**
     * Find one Organization_member that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {organization_memberFindUniqueOrThrowArgs} args - Arguments to find a Organization_member
     * @example
     * // Get one Organization_member
     * const organization_member = await prisma.organization_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends organization_memberFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, organization_memberFindUniqueOrThrowArgs>
    ): Prisma__organization_memberClient<organization_memberGetPayload<T>>

    /**
     * Find the first Organization_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_memberFindFirstArgs} args - Arguments to find a Organization_member
     * @example
     * // Get one Organization_member
     * const organization_member = await prisma.organization_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends organization_memberFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, organization_memberFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'organization_member'> extends True ? Prisma__organization_memberClient<organization_memberGetPayload<T>> : Prisma__organization_memberClient<organization_memberGetPayload<T> | null, null>

    /**
     * Find the first Organization_member that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_memberFindFirstOrThrowArgs} args - Arguments to find a Organization_member
     * @example
     * // Get one Organization_member
     * const organization_member = await prisma.organization_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends organization_memberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, organization_memberFindFirstOrThrowArgs>
    ): Prisma__organization_memberClient<organization_memberGetPayload<T>>

    /**
     * Find zero or more Organization_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_memberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organization_members
     * const organization_members = await prisma.organization_member.findMany()
     * 
     * // Get first 10 Organization_members
     * const organization_members = await prisma.organization_member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organization_memberWithIdOnly = await prisma.organization_member.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends organization_memberFindManyArgs>(
      args?: SelectSubset<T, organization_memberFindManyArgs>
    ): PrismaPromise<Array<organization_memberGetPayload<T>>>

    /**
     * Create a Organization_member.
     * @param {organization_memberCreateArgs} args - Arguments to create a Organization_member.
     * @example
     * // Create one Organization_member
     * const Organization_member = await prisma.organization_member.create({
     *   data: {
     *     // ... data to create a Organization_member
     *   }
     * })
     * 
    **/
    create<T extends organization_memberCreateArgs>(
      args: SelectSubset<T, organization_memberCreateArgs>
    ): Prisma__organization_memberClient<organization_memberGetPayload<T>>

    /**
     * Create many Organization_members.
     *     @param {organization_memberCreateManyArgs} args - Arguments to create many Organization_members.
     *     @example
     *     // Create many Organization_members
     *     const organization_member = await prisma.organization_member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends organization_memberCreateManyArgs>(
      args?: SelectSubset<T, organization_memberCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Organization_member.
     * @param {organization_memberDeleteArgs} args - Arguments to delete one Organization_member.
     * @example
     * // Delete one Organization_member
     * const Organization_member = await prisma.organization_member.delete({
     *   where: {
     *     // ... filter to delete one Organization_member
     *   }
     * })
     * 
    **/
    delete<T extends organization_memberDeleteArgs>(
      args: SelectSubset<T, organization_memberDeleteArgs>
    ): Prisma__organization_memberClient<organization_memberGetPayload<T>>

    /**
     * Update one Organization_member.
     * @param {organization_memberUpdateArgs} args - Arguments to update one Organization_member.
     * @example
     * // Update one Organization_member
     * const organization_member = await prisma.organization_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends organization_memberUpdateArgs>(
      args: SelectSubset<T, organization_memberUpdateArgs>
    ): Prisma__organization_memberClient<organization_memberGetPayload<T>>

    /**
     * Delete zero or more Organization_members.
     * @param {organization_memberDeleteManyArgs} args - Arguments to filter Organization_members to delete.
     * @example
     * // Delete a few Organization_members
     * const { count } = await prisma.organization_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends organization_memberDeleteManyArgs>(
      args?: SelectSubset<T, organization_memberDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organization_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organization_members
     * const organization_member = await prisma.organization_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends organization_memberUpdateManyArgs>(
      args: SelectSubset<T, organization_memberUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization_member.
     * @param {organization_memberUpsertArgs} args - Arguments to update or create a Organization_member.
     * @example
     * // Update or create a Organization_member
     * const organization_member = await prisma.organization_member.upsert({
     *   create: {
     *     // ... data to create a Organization_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization_member we want to update
     *   }
     * })
    **/
    upsert<T extends organization_memberUpsertArgs>(
      args: SelectSubset<T, organization_memberUpsertArgs>
    ): Prisma__organization_memberClient<organization_memberGetPayload<T>>

    /**
     * Count the number of Organization_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_memberCountArgs} args - Arguments to filter Organization_members to count.
     * @example
     * // Count the number of Organization_members
     * const count = await prisma.organization_member.count({
     *   where: {
     *     // ... the filter for the Organization_members we want to count
     *   }
     * })
    **/
    count<T extends organization_memberCountArgs>(
      args?: Subset<T, organization_memberCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Organization_memberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Organization_memberAggregateArgs>(args: Subset<T, Organization_memberAggregateArgs>): PrismaPromise<GetOrganization_memberAggregateType<T>>

    /**
     * Group by Organization_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Organization_memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Organization_memberGroupByArgs['orderBy'] }
        : { orderBy?: Organization_memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Organization_memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganization_memberGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for organization_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__organization_memberClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    organization<T extends organizationArgs= {}>(args?: Subset<T, organizationArgs>): Prisma__organizationClient<organizationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * organization_member base type for findUnique actions
   */
  export type organization_memberFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the organization_member
     * 
    **/
    select?: organization_memberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_memberInclude | null
    /**
     * Filter, which organization_member to fetch.
     * 
    **/
    where: organization_memberWhereUniqueInput
  }

  /**
   * organization_member: findUnique
   */
  export interface organization_memberFindUniqueArgs extends organization_memberFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * organization_member findUniqueOrThrow
   */
  export type organization_memberFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the organization_member
     * 
    **/
    select?: organization_memberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_memberInclude | null
    /**
     * Filter, which organization_member to fetch.
     * 
    **/
    where: organization_memberWhereUniqueInput
  }


  /**
   * organization_member base type for findFirst actions
   */
  export type organization_memberFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the organization_member
     * 
    **/
    select?: organization_memberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_memberInclude | null
    /**
     * Filter, which organization_member to fetch.
     * 
    **/
    where?: organization_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_members to fetch.
     * 
    **/
    orderBy?: Enumerable<organization_memberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organization_members.
     * 
    **/
    cursor?: organization_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_members from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_members.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organization_members.
     * 
    **/
    distinct?: Enumerable<Organization_memberScalarFieldEnum>
  }

  /**
   * organization_member: findFirst
   */
  export interface organization_memberFindFirstArgs extends organization_memberFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * organization_member findFirstOrThrow
   */
  export type organization_memberFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the organization_member
     * 
    **/
    select?: organization_memberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_memberInclude | null
    /**
     * Filter, which organization_member to fetch.
     * 
    **/
    where?: organization_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_members to fetch.
     * 
    **/
    orderBy?: Enumerable<organization_memberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organization_members.
     * 
    **/
    cursor?: organization_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_members from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_members.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organization_members.
     * 
    **/
    distinct?: Enumerable<Organization_memberScalarFieldEnum>
  }


  /**
   * organization_member findMany
   */
  export type organization_memberFindManyArgs = {
    /**
     * Select specific fields to fetch from the organization_member
     * 
    **/
    select?: organization_memberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_memberInclude | null
    /**
     * Filter, which organization_members to fetch.
     * 
    **/
    where?: organization_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_members to fetch.
     * 
    **/
    orderBy?: Enumerable<organization_memberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organization_members.
     * 
    **/
    cursor?: organization_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_members from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_members.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Organization_memberScalarFieldEnum>
  }


  /**
   * organization_member create
   */
  export type organization_memberCreateArgs = {
    /**
     * Select specific fields to fetch from the organization_member
     * 
    **/
    select?: organization_memberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_memberInclude | null
    /**
     * The data needed to create a organization_member.
     * 
    **/
    data: XOR<organization_memberCreateInput, organization_memberUncheckedCreateInput>
  }


  /**
   * organization_member createMany
   */
  export type organization_memberCreateManyArgs = {
    /**
     * The data used to create many organization_members.
     * 
    **/
    data: Enumerable<organization_memberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * organization_member update
   */
  export type organization_memberUpdateArgs = {
    /**
     * Select specific fields to fetch from the organization_member
     * 
    **/
    select?: organization_memberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_memberInclude | null
    /**
     * The data needed to update a organization_member.
     * 
    **/
    data: XOR<organization_memberUpdateInput, organization_memberUncheckedUpdateInput>
    /**
     * Choose, which organization_member to update.
     * 
    **/
    where: organization_memberWhereUniqueInput
  }


  /**
   * organization_member updateMany
   */
  export type organization_memberUpdateManyArgs = {
    /**
     * The data used to update organization_members.
     * 
    **/
    data: XOR<organization_memberUpdateManyMutationInput, organization_memberUncheckedUpdateManyInput>
    /**
     * Filter which organization_members to update
     * 
    **/
    where?: organization_memberWhereInput
  }


  /**
   * organization_member upsert
   */
  export type organization_memberUpsertArgs = {
    /**
     * Select specific fields to fetch from the organization_member
     * 
    **/
    select?: organization_memberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_memberInclude | null
    /**
     * The filter to search for the organization_member to update in case it exists.
     * 
    **/
    where: organization_memberWhereUniqueInput
    /**
     * In case the organization_member found by the `where` argument doesn't exist, create a new organization_member with this data.
     * 
    **/
    create: XOR<organization_memberCreateInput, organization_memberUncheckedCreateInput>
    /**
     * In case the organization_member was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<organization_memberUpdateInput, organization_memberUncheckedUpdateInput>
  }


  /**
   * organization_member delete
   */
  export type organization_memberDeleteArgs = {
    /**
     * Select specific fields to fetch from the organization_member
     * 
    **/
    select?: organization_memberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_memberInclude | null
    /**
     * Filter which organization_member to delete.
     * 
    **/
    where: organization_memberWhereUniqueInput
  }


  /**
   * organization_member deleteMany
   */
  export type organization_memberDeleteManyArgs = {
    /**
     * Filter which organization_members to delete
     * 
    **/
    where?: organization_memberWhereInput
  }


  /**
   * organization_member without action
   */
  export type organization_memberArgs = {
    /**
     * Select specific fields to fetch from the organization_member
     * 
    **/
    select?: organization_memberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: organization_memberInclude | null
  }



  /**
   * Model parking_lot
   */


  export type AggregateParking_lot = {
    _count: Parking_lotCountAggregateOutputType | null
    _min: Parking_lotMinAggregateOutputType | null
    _max: Parking_lotMaxAggregateOutputType | null
  }

  export type Parking_lotMinAggregateOutputType = {
    id: string | null
    label: string | null
    createdAt: Date | null
    notifyEmail: string | null
    notifyPhone: string | null
    updatedAt: Date | null
  }

  export type Parking_lotMaxAggregateOutputType = {
    id: string | null
    label: string | null
    createdAt: Date | null
    notifyEmail: string | null
    notifyPhone: string | null
    updatedAt: Date | null
  }

  export type Parking_lotCountAggregateOutputType = {
    id: number
    label: number
    createdAt: number
    notifyEmail: number
    notifyPhone: number
    updatedAt: number
    _all: number
  }


  export type Parking_lotMinAggregateInputType = {
    id?: true
    label?: true
    createdAt?: true
    notifyEmail?: true
    notifyPhone?: true
    updatedAt?: true
  }

  export type Parking_lotMaxAggregateInputType = {
    id?: true
    label?: true
    createdAt?: true
    notifyEmail?: true
    notifyPhone?: true
    updatedAt?: true
  }

  export type Parking_lotCountAggregateInputType = {
    id?: true
    label?: true
    createdAt?: true
    notifyEmail?: true
    notifyPhone?: true
    updatedAt?: true
    _all?: true
  }

  export type Parking_lotAggregateArgs = {
    /**
     * Filter which parking_lot to aggregate.
     * 
    **/
    where?: parking_lotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parking_lots to fetch.
     * 
    **/
    orderBy?: Enumerable<parking_lotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: parking_lotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parking_lots from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parking_lots.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned parking_lots
    **/
    _count?: true | Parking_lotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Parking_lotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Parking_lotMaxAggregateInputType
  }

  export type GetParking_lotAggregateType<T extends Parking_lotAggregateArgs> = {
        [P in keyof T & keyof AggregateParking_lot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParking_lot[P]>
      : GetScalarType<T[P], AggregateParking_lot[P]>
  }




  export type Parking_lotGroupByArgs = {
    where?: parking_lotWhereInput
    orderBy?: Enumerable<parking_lotOrderByWithAggregationInput>
    by: Array<Parking_lotScalarFieldEnum>
    having?: parking_lotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Parking_lotCountAggregateInputType | true
    _min?: Parking_lotMinAggregateInputType
    _max?: Parking_lotMaxAggregateInputType
  }


  export type Parking_lotGroupByOutputType = {
    id: string
    label: string
    createdAt: Date
    notifyEmail: string | null
    notifyPhone: string | null
    updatedAt: Date
    _count: Parking_lotCountAggregateOutputType | null
    _min: Parking_lotMinAggregateOutputType | null
    _max: Parking_lotMaxAggregateOutputType | null
  }

  type GetParking_lotGroupByPayload<T extends Parking_lotGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Parking_lotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Parking_lotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Parking_lotGroupByOutputType[P]>
            : GetScalarType<T[P], Parking_lotGroupByOutputType[P]>
        }
      >
    >


  export type parking_lotSelect = {
    id?: boolean
    label?: boolean
    createdAt?: boolean
    notifyEmail?: boolean
    notifyPhone?: boolean
    updatedAt?: boolean
    parking_space?: boolean | parking_spaceFindManyArgs
    _count?: boolean | Parking_lotCountOutputTypeArgs
  }


  export type parking_lotInclude = {
    parking_space?: boolean | parking_spaceFindManyArgs
    _count?: boolean | Parking_lotCountOutputTypeArgs
  } 

  export type parking_lotGetPayload<S extends boolean | null | undefined | parking_lotArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? parking_lot :
    S extends undefined ? never :
    S extends { include: any } & (parking_lotArgs | parking_lotFindManyArgs)
    ? parking_lot  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'parking_space' ? Array < parking_spaceGetPayload<S['include'][P]>>  :
        P extends '_count' ? Parking_lotCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (parking_lotArgs | parking_lotFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'parking_space' ? Array < parking_spaceGetPayload<S['select'][P]>>  :
        P extends '_count' ? Parking_lotCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof parking_lot ? parking_lot[P] : never
  } 
      : parking_lot


  type parking_lotCountArgs = Merge<
    Omit<parking_lotFindManyArgs, 'select' | 'include'> & {
      select?: Parking_lotCountAggregateInputType | true
    }
  >

  export interface parking_lotDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Parking_lot that matches the filter.
     * @param {parking_lotFindUniqueArgs} args - Arguments to find a Parking_lot
     * @example
     * // Get one Parking_lot
     * const parking_lot = await prisma.parking_lot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends parking_lotFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, parking_lotFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'parking_lot'> extends True ? Prisma__parking_lotClient<parking_lotGetPayload<T>> : Prisma__parking_lotClient<parking_lotGetPayload<T> | null, null>

    /**
     * Find one Parking_lot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {parking_lotFindUniqueOrThrowArgs} args - Arguments to find a Parking_lot
     * @example
     * // Get one Parking_lot
     * const parking_lot = await prisma.parking_lot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends parking_lotFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, parking_lotFindUniqueOrThrowArgs>
    ): Prisma__parking_lotClient<parking_lotGetPayload<T>>

    /**
     * Find the first Parking_lot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_lotFindFirstArgs} args - Arguments to find a Parking_lot
     * @example
     * // Get one Parking_lot
     * const parking_lot = await prisma.parking_lot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends parking_lotFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, parking_lotFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'parking_lot'> extends True ? Prisma__parking_lotClient<parking_lotGetPayload<T>> : Prisma__parking_lotClient<parking_lotGetPayload<T> | null, null>

    /**
     * Find the first Parking_lot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_lotFindFirstOrThrowArgs} args - Arguments to find a Parking_lot
     * @example
     * // Get one Parking_lot
     * const parking_lot = await prisma.parking_lot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends parking_lotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, parking_lotFindFirstOrThrowArgs>
    ): Prisma__parking_lotClient<parking_lotGetPayload<T>>

    /**
     * Find zero or more Parking_lots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_lotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parking_lots
     * const parking_lots = await prisma.parking_lot.findMany()
     * 
     * // Get first 10 Parking_lots
     * const parking_lots = await prisma.parking_lot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parking_lotWithIdOnly = await prisma.parking_lot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends parking_lotFindManyArgs>(
      args?: SelectSubset<T, parking_lotFindManyArgs>
    ): PrismaPromise<Array<parking_lotGetPayload<T>>>

    /**
     * Create a Parking_lot.
     * @param {parking_lotCreateArgs} args - Arguments to create a Parking_lot.
     * @example
     * // Create one Parking_lot
     * const Parking_lot = await prisma.parking_lot.create({
     *   data: {
     *     // ... data to create a Parking_lot
     *   }
     * })
     * 
    **/
    create<T extends parking_lotCreateArgs>(
      args: SelectSubset<T, parking_lotCreateArgs>
    ): Prisma__parking_lotClient<parking_lotGetPayload<T>>

    /**
     * Create many Parking_lots.
     *     @param {parking_lotCreateManyArgs} args - Arguments to create many Parking_lots.
     *     @example
     *     // Create many Parking_lots
     *     const parking_lot = await prisma.parking_lot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends parking_lotCreateManyArgs>(
      args?: SelectSubset<T, parking_lotCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Parking_lot.
     * @param {parking_lotDeleteArgs} args - Arguments to delete one Parking_lot.
     * @example
     * // Delete one Parking_lot
     * const Parking_lot = await prisma.parking_lot.delete({
     *   where: {
     *     // ... filter to delete one Parking_lot
     *   }
     * })
     * 
    **/
    delete<T extends parking_lotDeleteArgs>(
      args: SelectSubset<T, parking_lotDeleteArgs>
    ): Prisma__parking_lotClient<parking_lotGetPayload<T>>

    /**
     * Update one Parking_lot.
     * @param {parking_lotUpdateArgs} args - Arguments to update one Parking_lot.
     * @example
     * // Update one Parking_lot
     * const parking_lot = await prisma.parking_lot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends parking_lotUpdateArgs>(
      args: SelectSubset<T, parking_lotUpdateArgs>
    ): Prisma__parking_lotClient<parking_lotGetPayload<T>>

    /**
     * Delete zero or more Parking_lots.
     * @param {parking_lotDeleteManyArgs} args - Arguments to filter Parking_lots to delete.
     * @example
     * // Delete a few Parking_lots
     * const { count } = await prisma.parking_lot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends parking_lotDeleteManyArgs>(
      args?: SelectSubset<T, parking_lotDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parking_lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_lotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parking_lots
     * const parking_lot = await prisma.parking_lot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends parking_lotUpdateManyArgs>(
      args: SelectSubset<T, parking_lotUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Parking_lot.
     * @param {parking_lotUpsertArgs} args - Arguments to update or create a Parking_lot.
     * @example
     * // Update or create a Parking_lot
     * const parking_lot = await prisma.parking_lot.upsert({
     *   create: {
     *     // ... data to create a Parking_lot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parking_lot we want to update
     *   }
     * })
    **/
    upsert<T extends parking_lotUpsertArgs>(
      args: SelectSubset<T, parking_lotUpsertArgs>
    ): Prisma__parking_lotClient<parking_lotGetPayload<T>>

    /**
     * Count the number of Parking_lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_lotCountArgs} args - Arguments to filter Parking_lots to count.
     * @example
     * // Count the number of Parking_lots
     * const count = await prisma.parking_lot.count({
     *   where: {
     *     // ... the filter for the Parking_lots we want to count
     *   }
     * })
    **/
    count<T extends parking_lotCountArgs>(
      args?: Subset<T, parking_lotCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Parking_lotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parking_lot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parking_lotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Parking_lotAggregateArgs>(args: Subset<T, Parking_lotAggregateArgs>): PrismaPromise<GetParking_lotAggregateType<T>>

    /**
     * Group by Parking_lot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parking_lotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Parking_lotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Parking_lotGroupByArgs['orderBy'] }
        : { orderBy?: Parking_lotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Parking_lotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParking_lotGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for parking_lot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__parking_lotClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    parking_space<T extends parking_spaceFindManyArgs= {}>(args?: Subset<T, parking_spaceFindManyArgs>): PrismaPromise<Array<parking_spaceGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * parking_lot base type for findUnique actions
   */
  export type parking_lotFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the parking_lot
     * 
    **/
    select?: parking_lotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_lotInclude | null
    /**
     * Filter, which parking_lot to fetch.
     * 
    **/
    where: parking_lotWhereUniqueInput
  }

  /**
   * parking_lot: findUnique
   */
  export interface parking_lotFindUniqueArgs extends parking_lotFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * parking_lot findUniqueOrThrow
   */
  export type parking_lotFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the parking_lot
     * 
    **/
    select?: parking_lotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_lotInclude | null
    /**
     * Filter, which parking_lot to fetch.
     * 
    **/
    where: parking_lotWhereUniqueInput
  }


  /**
   * parking_lot base type for findFirst actions
   */
  export type parking_lotFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the parking_lot
     * 
    **/
    select?: parking_lotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_lotInclude | null
    /**
     * Filter, which parking_lot to fetch.
     * 
    **/
    where?: parking_lotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parking_lots to fetch.
     * 
    **/
    orderBy?: Enumerable<parking_lotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parking_lots.
     * 
    **/
    cursor?: parking_lotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parking_lots from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parking_lots.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parking_lots.
     * 
    **/
    distinct?: Enumerable<Parking_lotScalarFieldEnum>
  }

  /**
   * parking_lot: findFirst
   */
  export interface parking_lotFindFirstArgs extends parking_lotFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * parking_lot findFirstOrThrow
   */
  export type parking_lotFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the parking_lot
     * 
    **/
    select?: parking_lotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_lotInclude | null
    /**
     * Filter, which parking_lot to fetch.
     * 
    **/
    where?: parking_lotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parking_lots to fetch.
     * 
    **/
    orderBy?: Enumerable<parking_lotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parking_lots.
     * 
    **/
    cursor?: parking_lotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parking_lots from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parking_lots.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parking_lots.
     * 
    **/
    distinct?: Enumerable<Parking_lotScalarFieldEnum>
  }


  /**
   * parking_lot findMany
   */
  export type parking_lotFindManyArgs = {
    /**
     * Select specific fields to fetch from the parking_lot
     * 
    **/
    select?: parking_lotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_lotInclude | null
    /**
     * Filter, which parking_lots to fetch.
     * 
    **/
    where?: parking_lotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parking_lots to fetch.
     * 
    **/
    orderBy?: Enumerable<parking_lotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing parking_lots.
     * 
    **/
    cursor?: parking_lotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parking_lots from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parking_lots.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Parking_lotScalarFieldEnum>
  }


  /**
   * parking_lot create
   */
  export type parking_lotCreateArgs = {
    /**
     * Select specific fields to fetch from the parking_lot
     * 
    **/
    select?: parking_lotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_lotInclude | null
    /**
     * The data needed to create a parking_lot.
     * 
    **/
    data: XOR<parking_lotCreateInput, parking_lotUncheckedCreateInput>
  }


  /**
   * parking_lot createMany
   */
  export type parking_lotCreateManyArgs = {
    /**
     * The data used to create many parking_lots.
     * 
    **/
    data: Enumerable<parking_lotCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * parking_lot update
   */
  export type parking_lotUpdateArgs = {
    /**
     * Select specific fields to fetch from the parking_lot
     * 
    **/
    select?: parking_lotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_lotInclude | null
    /**
     * The data needed to update a parking_lot.
     * 
    **/
    data: XOR<parking_lotUpdateInput, parking_lotUncheckedUpdateInput>
    /**
     * Choose, which parking_lot to update.
     * 
    **/
    where: parking_lotWhereUniqueInput
  }


  /**
   * parking_lot updateMany
   */
  export type parking_lotUpdateManyArgs = {
    /**
     * The data used to update parking_lots.
     * 
    **/
    data: XOR<parking_lotUpdateManyMutationInput, parking_lotUncheckedUpdateManyInput>
    /**
     * Filter which parking_lots to update
     * 
    **/
    where?: parking_lotWhereInput
  }


  /**
   * parking_lot upsert
   */
  export type parking_lotUpsertArgs = {
    /**
     * Select specific fields to fetch from the parking_lot
     * 
    **/
    select?: parking_lotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_lotInclude | null
    /**
     * The filter to search for the parking_lot to update in case it exists.
     * 
    **/
    where: parking_lotWhereUniqueInput
    /**
     * In case the parking_lot found by the `where` argument doesn't exist, create a new parking_lot with this data.
     * 
    **/
    create: XOR<parking_lotCreateInput, parking_lotUncheckedCreateInput>
    /**
     * In case the parking_lot was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<parking_lotUpdateInput, parking_lotUncheckedUpdateInput>
  }


  /**
   * parking_lot delete
   */
  export type parking_lotDeleteArgs = {
    /**
     * Select specific fields to fetch from the parking_lot
     * 
    **/
    select?: parking_lotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_lotInclude | null
    /**
     * Filter which parking_lot to delete.
     * 
    **/
    where: parking_lotWhereUniqueInput
  }


  /**
   * parking_lot deleteMany
   */
  export type parking_lotDeleteManyArgs = {
    /**
     * Filter which parking_lots to delete
     * 
    **/
    where?: parking_lotWhereInput
  }


  /**
   * parking_lot without action
   */
  export type parking_lotArgs = {
    /**
     * Select specific fields to fetch from the parking_lot
     * 
    **/
    select?: parking_lotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_lotInclude | null
  }



  /**
   * Model parking_space
   */


  export type AggregateParking_space = {
    _count: Parking_spaceCountAggregateOutputType | null
    _avg: Parking_spaceAvgAggregateOutputType | null
    _sum: Parking_spaceSumAggregateOutputType | null
    _min: Parking_spaceMinAggregateOutputType | null
    _max: Parking_spaceMaxAggregateOutputType | null
  }

  export type Parking_spaceAvgAggregateOutputType = {
    order: number | null
  }

  export type Parking_spaceSumAggregateOutputType = {
    order: number | null
  }

  export type Parking_spaceMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    label: string | null
    order: number | null
    type: parking_space_type | null
    status: parking_space_status | null
    parkedAt: Date | null
    zoneId: string | null
    vehicleId: string | null
    parkingLotId: string | null
    media: Buffer | null
    cameraId: string | null
    detectedPlate: string | null
    lastDetectionId: string | null
  }

  export type Parking_spaceMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    label: string | null
    order: number | null
    type: parking_space_type | null
    status: parking_space_status | null
    parkedAt: Date | null
    zoneId: string | null
    vehicleId: string | null
    parkingLotId: string | null
    media: Buffer | null
    cameraId: string | null
    detectedPlate: string | null
    lastDetectionId: string | null
  }

  export type Parking_spaceCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    label: number
    order: number
    type: number
    status: number
    parkedAt: number
    zoneId: number
    vehicleId: number
    parkingLotId: number
    media: number
    cameraId: number
    detectedPlate: number
    lastDetectionId: number
    _all: number
  }


  export type Parking_spaceAvgAggregateInputType = {
    order?: true
  }

  export type Parking_spaceSumAggregateInputType = {
    order?: true
  }

  export type Parking_spaceMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    label?: true
    order?: true
    type?: true
    status?: true
    parkedAt?: true
    zoneId?: true
    vehicleId?: true
    parkingLotId?: true
    media?: true
    cameraId?: true
    detectedPlate?: true
    lastDetectionId?: true
  }

  export type Parking_spaceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    label?: true
    order?: true
    type?: true
    status?: true
    parkedAt?: true
    zoneId?: true
    vehicleId?: true
    parkingLotId?: true
    media?: true
    cameraId?: true
    detectedPlate?: true
    lastDetectionId?: true
  }

  export type Parking_spaceCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    label?: true
    order?: true
    type?: true
    status?: true
    parkedAt?: true
    zoneId?: true
    vehicleId?: true
    parkingLotId?: true
    media?: true
    cameraId?: true
    detectedPlate?: true
    lastDetectionId?: true
    _all?: true
  }

  export type Parking_spaceAggregateArgs = {
    /**
     * Filter which parking_space to aggregate.
     * 
    **/
    where?: parking_spaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parking_spaces to fetch.
     * 
    **/
    orderBy?: Enumerable<parking_spaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: parking_spaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parking_spaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parking_spaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned parking_spaces
    **/
    _count?: true | Parking_spaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Parking_spaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Parking_spaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Parking_spaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Parking_spaceMaxAggregateInputType
  }

  export type GetParking_spaceAggregateType<T extends Parking_spaceAggregateArgs> = {
        [P in keyof T & keyof AggregateParking_space]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParking_space[P]>
      : GetScalarType<T[P], AggregateParking_space[P]>
  }




  export type Parking_spaceGroupByArgs = {
    where?: parking_spaceWhereInput
    orderBy?: Enumerable<parking_spaceOrderByWithAggregationInput>
    by: Array<Parking_spaceScalarFieldEnum>
    having?: parking_spaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Parking_spaceCountAggregateInputType | true
    _avg?: Parking_spaceAvgAggregateInputType
    _sum?: Parking_spaceSumAggregateInputType
    _min?: Parking_spaceMinAggregateInputType
    _max?: Parking_spaceMaxAggregateInputType
  }


  export type Parking_spaceGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    label: string | null
    order: number | null
    type: parking_space_type
    status: parking_space_status
    parkedAt: Date | null
    zoneId: string | null
    vehicleId: string | null
    parkingLotId: string | null
    media: Buffer | null
    cameraId: string | null
    detectedPlate: string | null
    lastDetectionId: string | null
    _count: Parking_spaceCountAggregateOutputType | null
    _avg: Parking_spaceAvgAggregateOutputType | null
    _sum: Parking_spaceSumAggregateOutputType | null
    _min: Parking_spaceMinAggregateOutputType | null
    _max: Parking_spaceMaxAggregateOutputType | null
  }

  type GetParking_spaceGroupByPayload<T extends Parking_spaceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Parking_spaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Parking_spaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Parking_spaceGroupByOutputType[P]>
            : GetScalarType<T[P], Parking_spaceGroupByOutputType[P]>
        }
      >
    >


  export type parking_spaceSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    label?: boolean
    order?: boolean
    type?: boolean
    status?: boolean
    parkedAt?: boolean
    zoneId?: boolean
    vehicleId?: boolean
    parkingLotId?: boolean
    media?: boolean
    cameraId?: boolean
    detectedPlate?: boolean
    lastDetectionId?: boolean
    parking_lot?: boolean | parking_lotArgs
    vehicle?: boolean | vehicleArgs
    parking_space_activity_log?: boolean | parking_space_activity_logFindManyArgs
    _count?: boolean | Parking_spaceCountOutputTypeArgs
  }


  export type parking_spaceInclude = {
    parking_lot?: boolean | parking_lotArgs
    vehicle?: boolean | vehicleArgs
    parking_space_activity_log?: boolean | parking_space_activity_logFindManyArgs
    _count?: boolean | Parking_spaceCountOutputTypeArgs
  } 

  export type parking_spaceGetPayload<S extends boolean | null | undefined | parking_spaceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? parking_space :
    S extends undefined ? never :
    S extends { include: any } & (parking_spaceArgs | parking_spaceFindManyArgs)
    ? parking_space  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'parking_lot' ? parking_lotGetPayload<S['include'][P]> | null :
        P extends 'vehicle' ? vehicleGetPayload<S['include'][P]> | null :
        P extends 'parking_space_activity_log' ? Array < parking_space_activity_logGetPayload<S['include'][P]>>  :
        P extends '_count' ? Parking_spaceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (parking_spaceArgs | parking_spaceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'parking_lot' ? parking_lotGetPayload<S['select'][P]> | null :
        P extends 'vehicle' ? vehicleGetPayload<S['select'][P]> | null :
        P extends 'parking_space_activity_log' ? Array < parking_space_activity_logGetPayload<S['select'][P]>>  :
        P extends '_count' ? Parking_spaceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof parking_space ? parking_space[P] : never
  } 
      : parking_space


  type parking_spaceCountArgs = Merge<
    Omit<parking_spaceFindManyArgs, 'select' | 'include'> & {
      select?: Parking_spaceCountAggregateInputType | true
    }
  >

  export interface parking_spaceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Parking_space that matches the filter.
     * @param {parking_spaceFindUniqueArgs} args - Arguments to find a Parking_space
     * @example
     * // Get one Parking_space
     * const parking_space = await prisma.parking_space.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends parking_spaceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, parking_spaceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'parking_space'> extends True ? Prisma__parking_spaceClient<parking_spaceGetPayload<T>> : Prisma__parking_spaceClient<parking_spaceGetPayload<T> | null, null>

    /**
     * Find one Parking_space that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {parking_spaceFindUniqueOrThrowArgs} args - Arguments to find a Parking_space
     * @example
     * // Get one Parking_space
     * const parking_space = await prisma.parking_space.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends parking_spaceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, parking_spaceFindUniqueOrThrowArgs>
    ): Prisma__parking_spaceClient<parking_spaceGetPayload<T>>

    /**
     * Find the first Parking_space that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_spaceFindFirstArgs} args - Arguments to find a Parking_space
     * @example
     * // Get one Parking_space
     * const parking_space = await prisma.parking_space.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends parking_spaceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, parking_spaceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'parking_space'> extends True ? Prisma__parking_spaceClient<parking_spaceGetPayload<T>> : Prisma__parking_spaceClient<parking_spaceGetPayload<T> | null, null>

    /**
     * Find the first Parking_space that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_spaceFindFirstOrThrowArgs} args - Arguments to find a Parking_space
     * @example
     * // Get one Parking_space
     * const parking_space = await prisma.parking_space.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends parking_spaceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, parking_spaceFindFirstOrThrowArgs>
    ): Prisma__parking_spaceClient<parking_spaceGetPayload<T>>

    /**
     * Find zero or more Parking_spaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_spaceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parking_spaces
     * const parking_spaces = await prisma.parking_space.findMany()
     * 
     * // Get first 10 Parking_spaces
     * const parking_spaces = await prisma.parking_space.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parking_spaceWithIdOnly = await prisma.parking_space.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends parking_spaceFindManyArgs>(
      args?: SelectSubset<T, parking_spaceFindManyArgs>
    ): PrismaPromise<Array<parking_spaceGetPayload<T>>>

    /**
     * Create a Parking_space.
     * @param {parking_spaceCreateArgs} args - Arguments to create a Parking_space.
     * @example
     * // Create one Parking_space
     * const Parking_space = await prisma.parking_space.create({
     *   data: {
     *     // ... data to create a Parking_space
     *   }
     * })
     * 
    **/
    create<T extends parking_spaceCreateArgs>(
      args: SelectSubset<T, parking_spaceCreateArgs>
    ): Prisma__parking_spaceClient<parking_spaceGetPayload<T>>

    /**
     * Create many Parking_spaces.
     *     @param {parking_spaceCreateManyArgs} args - Arguments to create many Parking_spaces.
     *     @example
     *     // Create many Parking_spaces
     *     const parking_space = await prisma.parking_space.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends parking_spaceCreateManyArgs>(
      args?: SelectSubset<T, parking_spaceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Parking_space.
     * @param {parking_spaceDeleteArgs} args - Arguments to delete one Parking_space.
     * @example
     * // Delete one Parking_space
     * const Parking_space = await prisma.parking_space.delete({
     *   where: {
     *     // ... filter to delete one Parking_space
     *   }
     * })
     * 
    **/
    delete<T extends parking_spaceDeleteArgs>(
      args: SelectSubset<T, parking_spaceDeleteArgs>
    ): Prisma__parking_spaceClient<parking_spaceGetPayload<T>>

    /**
     * Update one Parking_space.
     * @param {parking_spaceUpdateArgs} args - Arguments to update one Parking_space.
     * @example
     * // Update one Parking_space
     * const parking_space = await prisma.parking_space.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends parking_spaceUpdateArgs>(
      args: SelectSubset<T, parking_spaceUpdateArgs>
    ): Prisma__parking_spaceClient<parking_spaceGetPayload<T>>

    /**
     * Delete zero or more Parking_spaces.
     * @param {parking_spaceDeleteManyArgs} args - Arguments to filter Parking_spaces to delete.
     * @example
     * // Delete a few Parking_spaces
     * const { count } = await prisma.parking_space.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends parking_spaceDeleteManyArgs>(
      args?: SelectSubset<T, parking_spaceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parking_spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_spaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parking_spaces
     * const parking_space = await prisma.parking_space.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends parking_spaceUpdateManyArgs>(
      args: SelectSubset<T, parking_spaceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Parking_space.
     * @param {parking_spaceUpsertArgs} args - Arguments to update or create a Parking_space.
     * @example
     * // Update or create a Parking_space
     * const parking_space = await prisma.parking_space.upsert({
     *   create: {
     *     // ... data to create a Parking_space
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parking_space we want to update
     *   }
     * })
    **/
    upsert<T extends parking_spaceUpsertArgs>(
      args: SelectSubset<T, parking_spaceUpsertArgs>
    ): Prisma__parking_spaceClient<parking_spaceGetPayload<T>>

    /**
     * Count the number of Parking_spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_spaceCountArgs} args - Arguments to filter Parking_spaces to count.
     * @example
     * // Count the number of Parking_spaces
     * const count = await prisma.parking_space.count({
     *   where: {
     *     // ... the filter for the Parking_spaces we want to count
     *   }
     * })
    **/
    count<T extends parking_spaceCountArgs>(
      args?: Subset<T, parking_spaceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Parking_spaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parking_space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parking_spaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Parking_spaceAggregateArgs>(args: Subset<T, Parking_spaceAggregateArgs>): PrismaPromise<GetParking_spaceAggregateType<T>>

    /**
     * Group by Parking_space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parking_spaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Parking_spaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Parking_spaceGroupByArgs['orderBy'] }
        : { orderBy?: Parking_spaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Parking_spaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParking_spaceGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for parking_space.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__parking_spaceClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    parking_lot<T extends parking_lotArgs= {}>(args?: Subset<T, parking_lotArgs>): Prisma__parking_lotClient<parking_lotGetPayload<T> | Null>;

    vehicle<T extends vehicleArgs= {}>(args?: Subset<T, vehicleArgs>): Prisma__vehicleClient<vehicleGetPayload<T> | Null>;

    parking_space_activity_log<T extends parking_space_activity_logFindManyArgs= {}>(args?: Subset<T, parking_space_activity_logFindManyArgs>): PrismaPromise<Array<parking_space_activity_logGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * parking_space base type for findUnique actions
   */
  export type parking_spaceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the parking_space
     * 
    **/
    select?: parking_spaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_spaceInclude | null
    /**
     * Filter, which parking_space to fetch.
     * 
    **/
    where: parking_spaceWhereUniqueInput
  }

  /**
   * parking_space: findUnique
   */
  export interface parking_spaceFindUniqueArgs extends parking_spaceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * parking_space findUniqueOrThrow
   */
  export type parking_spaceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the parking_space
     * 
    **/
    select?: parking_spaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_spaceInclude | null
    /**
     * Filter, which parking_space to fetch.
     * 
    **/
    where: parking_spaceWhereUniqueInput
  }


  /**
   * parking_space base type for findFirst actions
   */
  export type parking_spaceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the parking_space
     * 
    **/
    select?: parking_spaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_spaceInclude | null
    /**
     * Filter, which parking_space to fetch.
     * 
    **/
    where?: parking_spaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parking_spaces to fetch.
     * 
    **/
    orderBy?: Enumerable<parking_spaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parking_spaces.
     * 
    **/
    cursor?: parking_spaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parking_spaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parking_spaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parking_spaces.
     * 
    **/
    distinct?: Enumerable<Parking_spaceScalarFieldEnum>
  }

  /**
   * parking_space: findFirst
   */
  export interface parking_spaceFindFirstArgs extends parking_spaceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * parking_space findFirstOrThrow
   */
  export type parking_spaceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the parking_space
     * 
    **/
    select?: parking_spaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_spaceInclude | null
    /**
     * Filter, which parking_space to fetch.
     * 
    **/
    where?: parking_spaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parking_spaces to fetch.
     * 
    **/
    orderBy?: Enumerable<parking_spaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parking_spaces.
     * 
    **/
    cursor?: parking_spaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parking_spaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parking_spaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parking_spaces.
     * 
    **/
    distinct?: Enumerable<Parking_spaceScalarFieldEnum>
  }


  /**
   * parking_space findMany
   */
  export type parking_spaceFindManyArgs = {
    /**
     * Select specific fields to fetch from the parking_space
     * 
    **/
    select?: parking_spaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_spaceInclude | null
    /**
     * Filter, which parking_spaces to fetch.
     * 
    **/
    where?: parking_spaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parking_spaces to fetch.
     * 
    **/
    orderBy?: Enumerable<parking_spaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing parking_spaces.
     * 
    **/
    cursor?: parking_spaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parking_spaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parking_spaces.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Parking_spaceScalarFieldEnum>
  }


  /**
   * parking_space create
   */
  export type parking_spaceCreateArgs = {
    /**
     * Select specific fields to fetch from the parking_space
     * 
    **/
    select?: parking_spaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_spaceInclude | null
    /**
     * The data needed to create a parking_space.
     * 
    **/
    data: XOR<parking_spaceCreateInput, parking_spaceUncheckedCreateInput>
  }


  /**
   * parking_space createMany
   */
  export type parking_spaceCreateManyArgs = {
    /**
     * The data used to create many parking_spaces.
     * 
    **/
    data: Enumerable<parking_spaceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * parking_space update
   */
  export type parking_spaceUpdateArgs = {
    /**
     * Select specific fields to fetch from the parking_space
     * 
    **/
    select?: parking_spaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_spaceInclude | null
    /**
     * The data needed to update a parking_space.
     * 
    **/
    data: XOR<parking_spaceUpdateInput, parking_spaceUncheckedUpdateInput>
    /**
     * Choose, which parking_space to update.
     * 
    **/
    where: parking_spaceWhereUniqueInput
  }


  /**
   * parking_space updateMany
   */
  export type parking_spaceUpdateManyArgs = {
    /**
     * The data used to update parking_spaces.
     * 
    **/
    data: XOR<parking_spaceUpdateManyMutationInput, parking_spaceUncheckedUpdateManyInput>
    /**
     * Filter which parking_spaces to update
     * 
    **/
    where?: parking_spaceWhereInput
  }


  /**
   * parking_space upsert
   */
  export type parking_spaceUpsertArgs = {
    /**
     * Select specific fields to fetch from the parking_space
     * 
    **/
    select?: parking_spaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_spaceInclude | null
    /**
     * The filter to search for the parking_space to update in case it exists.
     * 
    **/
    where: parking_spaceWhereUniqueInput
    /**
     * In case the parking_space found by the `where` argument doesn't exist, create a new parking_space with this data.
     * 
    **/
    create: XOR<parking_spaceCreateInput, parking_spaceUncheckedCreateInput>
    /**
     * In case the parking_space was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<parking_spaceUpdateInput, parking_spaceUncheckedUpdateInput>
  }


  /**
   * parking_space delete
   */
  export type parking_spaceDeleteArgs = {
    /**
     * Select specific fields to fetch from the parking_space
     * 
    **/
    select?: parking_spaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_spaceInclude | null
    /**
     * Filter which parking_space to delete.
     * 
    **/
    where: parking_spaceWhereUniqueInput
  }


  /**
   * parking_space deleteMany
   */
  export type parking_spaceDeleteManyArgs = {
    /**
     * Filter which parking_spaces to delete
     * 
    **/
    where?: parking_spaceWhereInput
  }


  /**
   * parking_space without action
   */
  export type parking_spaceArgs = {
    /**
     * Select specific fields to fetch from the parking_space
     * 
    **/
    select?: parking_spaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_spaceInclude | null
  }



  /**
   * Model parking_space_activity_log
   */


  export type AggregateParking_space_activity_log = {
    _count: Parking_space_activity_logCountAggregateOutputType | null
    _min: Parking_space_activity_logMinAggregateOutputType | null
    _max: Parking_space_activity_logMaxAggregateOutputType | null
  }

  export type Parking_space_activity_logMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    parkingSpaceId: string | null
  }

  export type Parking_space_activity_logMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    parkingSpaceId: string | null
  }

  export type Parking_space_activity_logCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    text: number
    parkingSpaceId: number
    _all: number
  }


  export type Parking_space_activity_logMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    parkingSpaceId?: true
  }

  export type Parking_space_activity_logMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    parkingSpaceId?: true
  }

  export type Parking_space_activity_logCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    parkingSpaceId?: true
    _all?: true
  }

  export type Parking_space_activity_logAggregateArgs = {
    /**
     * Filter which parking_space_activity_log to aggregate.
     * 
    **/
    where?: parking_space_activity_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parking_space_activity_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<parking_space_activity_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: parking_space_activity_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parking_space_activity_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parking_space_activity_logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned parking_space_activity_logs
    **/
    _count?: true | Parking_space_activity_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Parking_space_activity_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Parking_space_activity_logMaxAggregateInputType
  }

  export type GetParking_space_activity_logAggregateType<T extends Parking_space_activity_logAggregateArgs> = {
        [P in keyof T & keyof AggregateParking_space_activity_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParking_space_activity_log[P]>
      : GetScalarType<T[P], AggregateParking_space_activity_log[P]>
  }




  export type Parking_space_activity_logGroupByArgs = {
    where?: parking_space_activity_logWhereInput
    orderBy?: Enumerable<parking_space_activity_logOrderByWithAggregationInput>
    by: Array<Parking_space_activity_logScalarFieldEnum>
    having?: parking_space_activity_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Parking_space_activity_logCountAggregateInputType | true
    _min?: Parking_space_activity_logMinAggregateInputType
    _max?: Parking_space_activity_logMaxAggregateInputType
  }


  export type Parking_space_activity_logGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    text: string | null
    parkingSpaceId: string
    _count: Parking_space_activity_logCountAggregateOutputType | null
    _min: Parking_space_activity_logMinAggregateOutputType | null
    _max: Parking_space_activity_logMaxAggregateOutputType | null
  }

  type GetParking_space_activity_logGroupByPayload<T extends Parking_space_activity_logGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Parking_space_activity_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Parking_space_activity_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Parking_space_activity_logGroupByOutputType[P]>
            : GetScalarType<T[P], Parking_space_activity_logGroupByOutputType[P]>
        }
      >
    >


  export type parking_space_activity_logSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    parkingSpaceId?: boolean
    parking_space?: boolean | parking_spaceArgs
  }


  export type parking_space_activity_logInclude = {
    parking_space?: boolean | parking_spaceArgs
  } 

  export type parking_space_activity_logGetPayload<S extends boolean | null | undefined | parking_space_activity_logArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? parking_space_activity_log :
    S extends undefined ? never :
    S extends { include: any } & (parking_space_activity_logArgs | parking_space_activity_logFindManyArgs)
    ? parking_space_activity_log  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'parking_space' ? parking_spaceGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (parking_space_activity_logArgs | parking_space_activity_logFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'parking_space' ? parking_spaceGetPayload<S['select'][P]> :  P extends keyof parking_space_activity_log ? parking_space_activity_log[P] : never
  } 
      : parking_space_activity_log


  type parking_space_activity_logCountArgs = Merge<
    Omit<parking_space_activity_logFindManyArgs, 'select' | 'include'> & {
      select?: Parking_space_activity_logCountAggregateInputType | true
    }
  >

  export interface parking_space_activity_logDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Parking_space_activity_log that matches the filter.
     * @param {parking_space_activity_logFindUniqueArgs} args - Arguments to find a Parking_space_activity_log
     * @example
     * // Get one Parking_space_activity_log
     * const parking_space_activity_log = await prisma.parking_space_activity_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends parking_space_activity_logFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, parking_space_activity_logFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'parking_space_activity_log'> extends True ? Prisma__parking_space_activity_logClient<parking_space_activity_logGetPayload<T>> : Prisma__parking_space_activity_logClient<parking_space_activity_logGetPayload<T> | null, null>

    /**
     * Find one Parking_space_activity_log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {parking_space_activity_logFindUniqueOrThrowArgs} args - Arguments to find a Parking_space_activity_log
     * @example
     * // Get one Parking_space_activity_log
     * const parking_space_activity_log = await prisma.parking_space_activity_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends parking_space_activity_logFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, parking_space_activity_logFindUniqueOrThrowArgs>
    ): Prisma__parking_space_activity_logClient<parking_space_activity_logGetPayload<T>>

    /**
     * Find the first Parking_space_activity_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_space_activity_logFindFirstArgs} args - Arguments to find a Parking_space_activity_log
     * @example
     * // Get one Parking_space_activity_log
     * const parking_space_activity_log = await prisma.parking_space_activity_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends parking_space_activity_logFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, parking_space_activity_logFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'parking_space_activity_log'> extends True ? Prisma__parking_space_activity_logClient<parking_space_activity_logGetPayload<T>> : Prisma__parking_space_activity_logClient<parking_space_activity_logGetPayload<T> | null, null>

    /**
     * Find the first Parking_space_activity_log that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_space_activity_logFindFirstOrThrowArgs} args - Arguments to find a Parking_space_activity_log
     * @example
     * // Get one Parking_space_activity_log
     * const parking_space_activity_log = await prisma.parking_space_activity_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends parking_space_activity_logFindFirstOrThrowArgs>(
      args?: SelectSubset<T, parking_space_activity_logFindFirstOrThrowArgs>
    ): Prisma__parking_space_activity_logClient<parking_space_activity_logGetPayload<T>>

    /**
     * Find zero or more Parking_space_activity_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_space_activity_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parking_space_activity_logs
     * const parking_space_activity_logs = await prisma.parking_space_activity_log.findMany()
     * 
     * // Get first 10 Parking_space_activity_logs
     * const parking_space_activity_logs = await prisma.parking_space_activity_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parking_space_activity_logWithIdOnly = await prisma.parking_space_activity_log.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends parking_space_activity_logFindManyArgs>(
      args?: SelectSubset<T, parking_space_activity_logFindManyArgs>
    ): PrismaPromise<Array<parking_space_activity_logGetPayload<T>>>

    /**
     * Create a Parking_space_activity_log.
     * @param {parking_space_activity_logCreateArgs} args - Arguments to create a Parking_space_activity_log.
     * @example
     * // Create one Parking_space_activity_log
     * const Parking_space_activity_log = await prisma.parking_space_activity_log.create({
     *   data: {
     *     // ... data to create a Parking_space_activity_log
     *   }
     * })
     * 
    **/
    create<T extends parking_space_activity_logCreateArgs>(
      args: SelectSubset<T, parking_space_activity_logCreateArgs>
    ): Prisma__parking_space_activity_logClient<parking_space_activity_logGetPayload<T>>

    /**
     * Create many Parking_space_activity_logs.
     *     @param {parking_space_activity_logCreateManyArgs} args - Arguments to create many Parking_space_activity_logs.
     *     @example
     *     // Create many Parking_space_activity_logs
     *     const parking_space_activity_log = await prisma.parking_space_activity_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends parking_space_activity_logCreateManyArgs>(
      args?: SelectSubset<T, parking_space_activity_logCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Parking_space_activity_log.
     * @param {parking_space_activity_logDeleteArgs} args - Arguments to delete one Parking_space_activity_log.
     * @example
     * // Delete one Parking_space_activity_log
     * const Parking_space_activity_log = await prisma.parking_space_activity_log.delete({
     *   where: {
     *     // ... filter to delete one Parking_space_activity_log
     *   }
     * })
     * 
    **/
    delete<T extends parking_space_activity_logDeleteArgs>(
      args: SelectSubset<T, parking_space_activity_logDeleteArgs>
    ): Prisma__parking_space_activity_logClient<parking_space_activity_logGetPayload<T>>

    /**
     * Update one Parking_space_activity_log.
     * @param {parking_space_activity_logUpdateArgs} args - Arguments to update one Parking_space_activity_log.
     * @example
     * // Update one Parking_space_activity_log
     * const parking_space_activity_log = await prisma.parking_space_activity_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends parking_space_activity_logUpdateArgs>(
      args: SelectSubset<T, parking_space_activity_logUpdateArgs>
    ): Prisma__parking_space_activity_logClient<parking_space_activity_logGetPayload<T>>

    /**
     * Delete zero or more Parking_space_activity_logs.
     * @param {parking_space_activity_logDeleteManyArgs} args - Arguments to filter Parking_space_activity_logs to delete.
     * @example
     * // Delete a few Parking_space_activity_logs
     * const { count } = await prisma.parking_space_activity_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends parking_space_activity_logDeleteManyArgs>(
      args?: SelectSubset<T, parking_space_activity_logDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parking_space_activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_space_activity_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parking_space_activity_logs
     * const parking_space_activity_log = await prisma.parking_space_activity_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends parking_space_activity_logUpdateManyArgs>(
      args: SelectSubset<T, parking_space_activity_logUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Parking_space_activity_log.
     * @param {parking_space_activity_logUpsertArgs} args - Arguments to update or create a Parking_space_activity_log.
     * @example
     * // Update or create a Parking_space_activity_log
     * const parking_space_activity_log = await prisma.parking_space_activity_log.upsert({
     *   create: {
     *     // ... data to create a Parking_space_activity_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parking_space_activity_log we want to update
     *   }
     * })
    **/
    upsert<T extends parking_space_activity_logUpsertArgs>(
      args: SelectSubset<T, parking_space_activity_logUpsertArgs>
    ): Prisma__parking_space_activity_logClient<parking_space_activity_logGetPayload<T>>

    /**
     * Count the number of Parking_space_activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parking_space_activity_logCountArgs} args - Arguments to filter Parking_space_activity_logs to count.
     * @example
     * // Count the number of Parking_space_activity_logs
     * const count = await prisma.parking_space_activity_log.count({
     *   where: {
     *     // ... the filter for the Parking_space_activity_logs we want to count
     *   }
     * })
    **/
    count<T extends parking_space_activity_logCountArgs>(
      args?: Subset<T, parking_space_activity_logCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Parking_space_activity_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parking_space_activity_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parking_space_activity_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Parking_space_activity_logAggregateArgs>(args: Subset<T, Parking_space_activity_logAggregateArgs>): PrismaPromise<GetParking_space_activity_logAggregateType<T>>

    /**
     * Group by Parking_space_activity_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parking_space_activity_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Parking_space_activity_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Parking_space_activity_logGroupByArgs['orderBy'] }
        : { orderBy?: Parking_space_activity_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Parking_space_activity_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParking_space_activity_logGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for parking_space_activity_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__parking_space_activity_logClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    parking_space<T extends parking_spaceArgs= {}>(args?: Subset<T, parking_spaceArgs>): Prisma__parking_spaceClient<parking_spaceGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * parking_space_activity_log base type for findUnique actions
   */
  export type parking_space_activity_logFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the parking_space_activity_log
     * 
    **/
    select?: parking_space_activity_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_space_activity_logInclude | null
    /**
     * Filter, which parking_space_activity_log to fetch.
     * 
    **/
    where: parking_space_activity_logWhereUniqueInput
  }

  /**
   * parking_space_activity_log: findUnique
   */
  export interface parking_space_activity_logFindUniqueArgs extends parking_space_activity_logFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * parking_space_activity_log findUniqueOrThrow
   */
  export type parking_space_activity_logFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the parking_space_activity_log
     * 
    **/
    select?: parking_space_activity_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_space_activity_logInclude | null
    /**
     * Filter, which parking_space_activity_log to fetch.
     * 
    **/
    where: parking_space_activity_logWhereUniqueInput
  }


  /**
   * parking_space_activity_log base type for findFirst actions
   */
  export type parking_space_activity_logFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the parking_space_activity_log
     * 
    **/
    select?: parking_space_activity_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_space_activity_logInclude | null
    /**
     * Filter, which parking_space_activity_log to fetch.
     * 
    **/
    where?: parking_space_activity_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parking_space_activity_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<parking_space_activity_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parking_space_activity_logs.
     * 
    **/
    cursor?: parking_space_activity_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parking_space_activity_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parking_space_activity_logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parking_space_activity_logs.
     * 
    **/
    distinct?: Enumerable<Parking_space_activity_logScalarFieldEnum>
  }

  /**
   * parking_space_activity_log: findFirst
   */
  export interface parking_space_activity_logFindFirstArgs extends parking_space_activity_logFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * parking_space_activity_log findFirstOrThrow
   */
  export type parking_space_activity_logFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the parking_space_activity_log
     * 
    **/
    select?: parking_space_activity_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_space_activity_logInclude | null
    /**
     * Filter, which parking_space_activity_log to fetch.
     * 
    **/
    where?: parking_space_activity_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parking_space_activity_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<parking_space_activity_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parking_space_activity_logs.
     * 
    **/
    cursor?: parking_space_activity_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parking_space_activity_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parking_space_activity_logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parking_space_activity_logs.
     * 
    **/
    distinct?: Enumerable<Parking_space_activity_logScalarFieldEnum>
  }


  /**
   * parking_space_activity_log findMany
   */
  export type parking_space_activity_logFindManyArgs = {
    /**
     * Select specific fields to fetch from the parking_space_activity_log
     * 
    **/
    select?: parking_space_activity_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_space_activity_logInclude | null
    /**
     * Filter, which parking_space_activity_logs to fetch.
     * 
    **/
    where?: parking_space_activity_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parking_space_activity_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<parking_space_activity_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing parking_space_activity_logs.
     * 
    **/
    cursor?: parking_space_activity_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parking_space_activity_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parking_space_activity_logs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Parking_space_activity_logScalarFieldEnum>
  }


  /**
   * parking_space_activity_log create
   */
  export type parking_space_activity_logCreateArgs = {
    /**
     * Select specific fields to fetch from the parking_space_activity_log
     * 
    **/
    select?: parking_space_activity_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_space_activity_logInclude | null
    /**
     * The data needed to create a parking_space_activity_log.
     * 
    **/
    data: XOR<parking_space_activity_logCreateInput, parking_space_activity_logUncheckedCreateInput>
  }


  /**
   * parking_space_activity_log createMany
   */
  export type parking_space_activity_logCreateManyArgs = {
    /**
     * The data used to create many parking_space_activity_logs.
     * 
    **/
    data: Enumerable<parking_space_activity_logCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * parking_space_activity_log update
   */
  export type parking_space_activity_logUpdateArgs = {
    /**
     * Select specific fields to fetch from the parking_space_activity_log
     * 
    **/
    select?: parking_space_activity_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_space_activity_logInclude | null
    /**
     * The data needed to update a parking_space_activity_log.
     * 
    **/
    data: XOR<parking_space_activity_logUpdateInput, parking_space_activity_logUncheckedUpdateInput>
    /**
     * Choose, which parking_space_activity_log to update.
     * 
    **/
    where: parking_space_activity_logWhereUniqueInput
  }


  /**
   * parking_space_activity_log updateMany
   */
  export type parking_space_activity_logUpdateManyArgs = {
    /**
     * The data used to update parking_space_activity_logs.
     * 
    **/
    data: XOR<parking_space_activity_logUpdateManyMutationInput, parking_space_activity_logUncheckedUpdateManyInput>
    /**
     * Filter which parking_space_activity_logs to update
     * 
    **/
    where?: parking_space_activity_logWhereInput
  }


  /**
   * parking_space_activity_log upsert
   */
  export type parking_space_activity_logUpsertArgs = {
    /**
     * Select specific fields to fetch from the parking_space_activity_log
     * 
    **/
    select?: parking_space_activity_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_space_activity_logInclude | null
    /**
     * The filter to search for the parking_space_activity_log to update in case it exists.
     * 
    **/
    where: parking_space_activity_logWhereUniqueInput
    /**
     * In case the parking_space_activity_log found by the `where` argument doesn't exist, create a new parking_space_activity_log with this data.
     * 
    **/
    create: XOR<parking_space_activity_logCreateInput, parking_space_activity_logUncheckedCreateInput>
    /**
     * In case the parking_space_activity_log was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<parking_space_activity_logUpdateInput, parking_space_activity_logUncheckedUpdateInput>
  }


  /**
   * parking_space_activity_log delete
   */
  export type parking_space_activity_logDeleteArgs = {
    /**
     * Select specific fields to fetch from the parking_space_activity_log
     * 
    **/
    select?: parking_space_activity_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_space_activity_logInclude | null
    /**
     * Filter which parking_space_activity_log to delete.
     * 
    **/
    where: parking_space_activity_logWhereUniqueInput
  }


  /**
   * parking_space_activity_log deleteMany
   */
  export type parking_space_activity_logDeleteManyArgs = {
    /**
     * Filter which parking_space_activity_logs to delete
     * 
    **/
    where?: parking_space_activity_logWhereInput
  }


  /**
   * parking_space_activity_log without action
   */
  export type parking_space_activity_logArgs = {
    /**
     * Select specific fields to fetch from the parking_space_activity_log
     * 
    **/
    select?: parking_space_activity_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parking_space_activity_logInclude | null
  }



  /**
   * Model vehicle
   */


  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    year: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    year: number | null
    make: string | null
    model: string | null
    color: VehicleColor | null
    licensePlate: string | null
    guestId: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    year: number | null
    make: string | null
    model: string | null
    color: VehicleColor | null
    licensePlate: string | null
    guestId: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    year: number
    make: number
    model: number
    color: number
    licensePlate: number
    guestId: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    year?: true
    make?: true
    model?: true
    color?: true
    licensePlate?: true
    guestId?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    year?: true
    make?: true
    model?: true
    color?: true
    licensePlate?: true
    guestId?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    year?: true
    make?: true
    model?: true
    color?: true
    licensePlate?: true
    guestId?: true
    _all?: true
  }

  export type VehicleAggregateArgs = {
    /**
     * Filter which vehicle to aggregate.
     * 
    **/
    where?: vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<vehicleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs = {
    where?: vehicleWhereInput
    orderBy?: Enumerable<vehicleOrderByWithAggregationInput>
    by: Array<VehicleScalarFieldEnum>
    having?: vehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }


  export type VehicleGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    year: number | null
    make: string | null
    model: string | null
    color: VehicleColor | null
    licensePlate: string
    guestId: string | null
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type vehicleSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    year?: boolean
    make?: boolean
    model?: boolean
    color?: boolean
    licensePlate?: boolean
    guestId?: boolean
    parking_space?: boolean | parking_spaceFindManyArgs
    guest?: boolean | guestArgs
    _count?: boolean | VehicleCountOutputTypeArgs
  }


  export type vehicleInclude = {
    parking_space?: boolean | parking_spaceFindManyArgs
    guest?: boolean | guestArgs
    _count?: boolean | VehicleCountOutputTypeArgs
  } 

  export type vehicleGetPayload<S extends boolean | null | undefined | vehicleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? vehicle :
    S extends undefined ? never :
    S extends { include: any } & (vehicleArgs | vehicleFindManyArgs)
    ? vehicle  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'parking_space' ? Array < parking_spaceGetPayload<S['include'][P]>>  :
        P extends 'guest' ? guestGetPayload<S['include'][P]> | null :
        P extends '_count' ? VehicleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (vehicleArgs | vehicleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'parking_space' ? Array < parking_spaceGetPayload<S['select'][P]>>  :
        P extends 'guest' ? guestGetPayload<S['select'][P]> | null :
        P extends '_count' ? VehicleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof vehicle ? vehicle[P] : never
  } 
      : vehicle


  type vehicleCountArgs = Merge<
    Omit<vehicleFindManyArgs, 'select' | 'include'> & {
      select?: VehicleCountAggregateInputType | true
    }
  >

  export interface vehicleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {vehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends vehicleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, vehicleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'vehicle'> extends True ? Prisma__vehicleClient<vehicleGetPayload<T>> : Prisma__vehicleClient<vehicleGetPayload<T> | null, null>

    /**
     * Find one Vehicle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {vehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends vehicleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, vehicleFindUniqueOrThrowArgs>
    ): Prisma__vehicleClient<vehicleGetPayload<T>>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends vehicleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, vehicleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'vehicle'> extends True ? Prisma__vehicleClient<vehicleGetPayload<T>> : Prisma__vehicleClient<vehicleGetPayload<T> | null, null>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends vehicleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, vehicleFindFirstOrThrowArgs>
    ): Prisma__vehicleClient<vehicleGetPayload<T>>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends vehicleFindManyArgs>(
      args?: SelectSubset<T, vehicleFindManyArgs>
    ): PrismaPromise<Array<vehicleGetPayload<T>>>

    /**
     * Create a Vehicle.
     * @param {vehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
    **/
    create<T extends vehicleCreateArgs>(
      args: SelectSubset<T, vehicleCreateArgs>
    ): Prisma__vehicleClient<vehicleGetPayload<T>>

    /**
     * Create many Vehicles.
     *     @param {vehicleCreateManyArgs} args - Arguments to create many Vehicles.
     *     @example
     *     // Create many Vehicles
     *     const vehicle = await prisma.vehicle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends vehicleCreateManyArgs>(
      args?: SelectSubset<T, vehicleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle.
     * @param {vehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
    **/
    delete<T extends vehicleDeleteArgs>(
      args: SelectSubset<T, vehicleDeleteArgs>
    ): Prisma__vehicleClient<vehicleGetPayload<T>>

    /**
     * Update one Vehicle.
     * @param {vehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends vehicleUpdateArgs>(
      args: SelectSubset<T, vehicleUpdateArgs>
    ): Prisma__vehicleClient<vehicleGetPayload<T>>

    /**
     * Delete zero or more Vehicles.
     * @param {vehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends vehicleDeleteManyArgs>(
      args?: SelectSubset<T, vehicleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends vehicleUpdateManyArgs>(
      args: SelectSubset<T, vehicleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {vehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
    **/
    upsert<T extends vehicleUpsertArgs>(
      args: SelectSubset<T, vehicleUpsertArgs>
    ): Prisma__vehicleClient<vehicleGetPayload<T>>

    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends vehicleCountArgs>(
      args?: Subset<T, vehicleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__vehicleClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    parking_space<T extends parking_spaceFindManyArgs= {}>(args?: Subset<T, parking_spaceFindManyArgs>): PrismaPromise<Array<parking_spaceGetPayload<T>>| Null>;

    guest<T extends guestArgs= {}>(args?: Subset<T, guestArgs>): Prisma__guestClient<guestGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * vehicle base type for findUnique actions
   */
  export type vehicleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the vehicle
     * 
    **/
    select?: vehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vehicleInclude | null
    /**
     * Filter, which vehicle to fetch.
     * 
    **/
    where: vehicleWhereUniqueInput
  }

  /**
   * vehicle: findUnique
   */
  export interface vehicleFindUniqueArgs extends vehicleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * vehicle findUniqueOrThrow
   */
  export type vehicleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the vehicle
     * 
    **/
    select?: vehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vehicleInclude | null
    /**
     * Filter, which vehicle to fetch.
     * 
    **/
    where: vehicleWhereUniqueInput
  }


  /**
   * vehicle base type for findFirst actions
   */
  export type vehicleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the vehicle
     * 
    **/
    select?: vehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vehicleInclude | null
    /**
     * Filter, which vehicle to fetch.
     * 
    **/
    where?: vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<vehicleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicles.
     * 
    **/
    cursor?: vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicles.
     * 
    **/
    distinct?: Enumerable<VehicleScalarFieldEnum>
  }

  /**
   * vehicle: findFirst
   */
  export interface vehicleFindFirstArgs extends vehicleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * vehicle findFirstOrThrow
   */
  export type vehicleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the vehicle
     * 
    **/
    select?: vehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vehicleInclude | null
    /**
     * Filter, which vehicle to fetch.
     * 
    **/
    where?: vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<vehicleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicles.
     * 
    **/
    cursor?: vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicles.
     * 
    **/
    distinct?: Enumerable<VehicleScalarFieldEnum>
  }


  /**
   * vehicle findMany
   */
  export type vehicleFindManyArgs = {
    /**
     * Select specific fields to fetch from the vehicle
     * 
    **/
    select?: vehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vehicleInclude | null
    /**
     * Filter, which vehicles to fetch.
     * 
    **/
    where?: vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<vehicleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vehicles.
     * 
    **/
    cursor?: vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VehicleScalarFieldEnum>
  }


  /**
   * vehicle create
   */
  export type vehicleCreateArgs = {
    /**
     * Select specific fields to fetch from the vehicle
     * 
    **/
    select?: vehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vehicleInclude | null
    /**
     * The data needed to create a vehicle.
     * 
    **/
    data: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>
  }


  /**
   * vehicle createMany
   */
  export type vehicleCreateManyArgs = {
    /**
     * The data used to create many vehicles.
     * 
    **/
    data: Enumerable<vehicleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * vehicle update
   */
  export type vehicleUpdateArgs = {
    /**
     * Select specific fields to fetch from the vehicle
     * 
    **/
    select?: vehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vehicleInclude | null
    /**
     * The data needed to update a vehicle.
     * 
    **/
    data: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>
    /**
     * Choose, which vehicle to update.
     * 
    **/
    where: vehicleWhereUniqueInput
  }


  /**
   * vehicle updateMany
   */
  export type vehicleUpdateManyArgs = {
    /**
     * The data used to update vehicles.
     * 
    **/
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyInput>
    /**
     * Filter which vehicles to update
     * 
    **/
    where?: vehicleWhereInput
  }


  /**
   * vehicle upsert
   */
  export type vehicleUpsertArgs = {
    /**
     * Select specific fields to fetch from the vehicle
     * 
    **/
    select?: vehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vehicleInclude | null
    /**
     * The filter to search for the vehicle to update in case it exists.
     * 
    **/
    where: vehicleWhereUniqueInput
    /**
     * In case the vehicle found by the `where` argument doesn't exist, create a new vehicle with this data.
     * 
    **/
    create: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>
    /**
     * In case the vehicle was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>
  }


  /**
   * vehicle delete
   */
  export type vehicleDeleteArgs = {
    /**
     * Select specific fields to fetch from the vehicle
     * 
    **/
    select?: vehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vehicleInclude | null
    /**
     * Filter which vehicle to delete.
     * 
    **/
    where: vehicleWhereUniqueInput
  }


  /**
   * vehicle deleteMany
   */
  export type vehicleDeleteManyArgs = {
    /**
     * Filter which vehicles to delete
     * 
    **/
    where?: vehicleWhereInput
  }


  /**
   * vehicle without action
   */
  export type vehicleArgs = {
    /**
     * Select specific fields to fetch from the vehicle
     * 
    **/
    select?: vehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vehicleInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Api_keyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    key: 'key',
    organizationId: 'organizationId'
  };

  export type Api_keyScalarFieldEnum = (typeof Api_keyScalarFieldEnum)[keyof typeof Api_keyScalarFieldEnum]


  export const CameraScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    rtspUrl: 'rtspUrl',
    serviceObjectDetection: 'serviceObjectDetection',
    serviceObjectCounts: 'serviceObjectCounts',
    serviceDwellTime: 'serviceDwellTime',
    serviceObjectIngressEgress: 'serviceObjectIngressEgress',
    serviceObjectBehavior: 'serviceObjectBehavior',
    serviceOccupancyTracking: 'serviceOccupancyTracking',
    serviceUtilizationRate: 'serviceUtilizationRate',
    serviceThroughput: 'serviceThroughput',
    serviceLiveWaitTime: 'serviceLiveWaitTime',
    serviceOther: 'serviceOther',
    serviceObjectDetectionDescription: 'serviceObjectDetectionDescription',
    serviceObjectBehaviorDescription: 'serviceObjectBehaviorDescription',
    serviceOtherDescription: 'serviceOtherDescription',
    serviceThroughputUnitOfTime: 'serviceThroughputUnitOfTime',
    locationId: 'locationId',
    viewingAngle: 'viewingAngle'
  };

  export type CameraScalarFieldEnum = (typeof CameraScalarFieldEnum)[keyof typeof CameraScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    start: 'start',
    end: 'end',
    organizationId: 'organizationId',
    locationId: 'locationId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const Event_guestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    checkedInAt: 'checkedInAt',
    guestId: 'guestId',
    eventId: 'eventId'
  };

  export type Event_guestScalarFieldEnum = (typeof Event_guestScalarFieldEnum)[keyof typeof Event_guestScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    company: 'company',
    companyPosition: 'companyPosition'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const LocationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    number: 'number',
    serialNumber: 'serialNumber',
    connectionType: 'connectionType',
    organizationId: 'organizationId'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    readAt: 'readAt',
    data: 'data',
    email: 'email',
    phone: 'phone',
    sentAt: 'sentAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    subdomain: 'subdomain',
    stripeCustomerId: 'stripeCustomerId',
    status: 'status',
    statuses: 'statuses',
    statuses2: 'statuses2'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const Organization_invitationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    role: 'role',
    token: 'token',
    organizationId: 'organizationId'
  };

  export type Organization_invitationScalarFieldEnum = (typeof Organization_invitationScalarFieldEnum)[keyof typeof Organization_invitationScalarFieldEnum]


  export const Organization_memberScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    userId: 'userId',
    organizationId: 'organizationId'
  };

  export type Organization_memberScalarFieldEnum = (typeof Organization_memberScalarFieldEnum)[keyof typeof Organization_memberScalarFieldEnum]


  export const Parking_lotScalarFieldEnum: {
    id: 'id',
    label: 'label',
    createdAt: 'createdAt',
    notifyEmail: 'notifyEmail',
    notifyPhone: 'notifyPhone',
    updatedAt: 'updatedAt'
  };

  export type Parking_lotScalarFieldEnum = (typeof Parking_lotScalarFieldEnum)[keyof typeof Parking_lotScalarFieldEnum]


  export const Parking_spaceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    label: 'label',
    order: 'order',
    type: 'type',
    status: 'status',
    parkedAt: 'parkedAt',
    zoneId: 'zoneId',
    vehicleId: 'vehicleId',
    parkingLotId: 'parkingLotId',
    media: 'media',
    cameraId: 'cameraId',
    detectedPlate: 'detectedPlate',
    lastDetectionId: 'lastDetectionId'
  };

  export type Parking_spaceScalarFieldEnum = (typeof Parking_spaceScalarFieldEnum)[keyof typeof Parking_spaceScalarFieldEnum]


  export const Parking_space_activity_logScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    text: 'text',
    parkingSpaceId: 'parkingSpaceId'
  };

  export type Parking_space_activity_logScalarFieldEnum = (typeof Parking_space_activity_logScalarFieldEnum)[keyof typeof Parking_space_activity_logScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    year: 'year',
    make: 'make',
    model: 'model',
    color: 'color',
    licensePlate: 'licensePlate',
    guestId: 'guestId'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type api_keyWhereInput = {
    AND?: Enumerable<api_keyWhereInput>
    OR?: Enumerable<api_keyWhereInput>
    NOT?: Enumerable<api_keyWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    key?: StringFilter | string
    organizationId?: StringFilter | string
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>
  }

  export type api_keyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    key?: SortOrder
    organizationId?: SortOrder
    organization?: organizationOrderByWithRelationInput
  }

  export type api_keyWhereUniqueInput = {
    id?: string
    key?: string
  }

  export type api_keyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    key?: SortOrder
    organizationId?: SortOrder
    _count?: api_keyCountOrderByAggregateInput
    _max?: api_keyMaxOrderByAggregateInput
    _min?: api_keyMinOrderByAggregateInput
  }

  export type api_keyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<api_keyScalarWhereWithAggregatesInput>
    OR?: Enumerable<api_keyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<api_keyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    key?: StringWithAggregatesFilter | string
    organizationId?: StringWithAggregatesFilter | string
  }

  export type cameraWhereInput = {
    AND?: Enumerable<cameraWhereInput>
    OR?: Enumerable<cameraWhereInput>
    NOT?: Enumerable<cameraWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    rtspUrl?: StringFilter | string
    serviceObjectDetection?: BoolFilter | boolean
    serviceObjectCounts?: BoolFilter | boolean
    serviceDwellTime?: BoolFilter | boolean
    serviceObjectIngressEgress?: BoolFilter | boolean
    serviceObjectBehavior?: BoolFilter | boolean
    serviceOccupancyTracking?: BoolFilter | boolean
    serviceUtilizationRate?: BoolFilter | boolean
    serviceThroughput?: BoolFilter | boolean
    serviceLiveWaitTime?: BoolFilter | boolean
    serviceOther?: BoolFilter | boolean
    serviceObjectDetectionDescription?: StringNullableFilter | string | null
    serviceObjectBehaviorDescription?: StringNullableFilter | string | null
    serviceOtherDescription?: StringNullableFilter | string | null
    serviceThroughputUnitOfTime?: Enumservice_throughput_unit_of_timeNullableFilter | service_throughput_unit_of_time | null
    locationId?: StringFilter | string
    viewingAngle?: Enumcamera_viewing_angleFilter | camera_viewing_angle
    location?: XOR<LocationRelationFilter, locationWhereInput>
  }

  export type cameraOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    rtspUrl?: SortOrder
    serviceObjectDetection?: SortOrder
    serviceObjectCounts?: SortOrder
    serviceDwellTime?: SortOrder
    serviceObjectIngressEgress?: SortOrder
    serviceObjectBehavior?: SortOrder
    serviceOccupancyTracking?: SortOrder
    serviceUtilizationRate?: SortOrder
    serviceThroughput?: SortOrder
    serviceLiveWaitTime?: SortOrder
    serviceOther?: SortOrder
    serviceObjectDetectionDescription?: SortOrder
    serviceObjectBehaviorDescription?: SortOrder
    serviceOtherDescription?: SortOrder
    serviceThroughputUnitOfTime?: SortOrder
    locationId?: SortOrder
    viewingAngle?: SortOrder
    location?: locationOrderByWithRelationInput
  }

  export type cameraWhereUniqueInput = {
    id?: string
  }

  export type cameraOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    rtspUrl?: SortOrder
    serviceObjectDetection?: SortOrder
    serviceObjectCounts?: SortOrder
    serviceDwellTime?: SortOrder
    serviceObjectIngressEgress?: SortOrder
    serviceObjectBehavior?: SortOrder
    serviceOccupancyTracking?: SortOrder
    serviceUtilizationRate?: SortOrder
    serviceThroughput?: SortOrder
    serviceLiveWaitTime?: SortOrder
    serviceOther?: SortOrder
    serviceObjectDetectionDescription?: SortOrder
    serviceObjectBehaviorDescription?: SortOrder
    serviceOtherDescription?: SortOrder
    serviceThroughputUnitOfTime?: SortOrder
    locationId?: SortOrder
    viewingAngle?: SortOrder
    _count?: cameraCountOrderByAggregateInput
    _max?: cameraMaxOrderByAggregateInput
    _min?: cameraMinOrderByAggregateInput
  }

  export type cameraScalarWhereWithAggregatesInput = {
    AND?: Enumerable<cameraScalarWhereWithAggregatesInput>
    OR?: Enumerable<cameraScalarWhereWithAggregatesInput>
    NOT?: Enumerable<cameraScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    rtspUrl?: StringWithAggregatesFilter | string
    serviceObjectDetection?: BoolWithAggregatesFilter | boolean
    serviceObjectCounts?: BoolWithAggregatesFilter | boolean
    serviceDwellTime?: BoolWithAggregatesFilter | boolean
    serviceObjectIngressEgress?: BoolWithAggregatesFilter | boolean
    serviceObjectBehavior?: BoolWithAggregatesFilter | boolean
    serviceOccupancyTracking?: BoolWithAggregatesFilter | boolean
    serviceUtilizationRate?: BoolWithAggregatesFilter | boolean
    serviceThroughput?: BoolWithAggregatesFilter | boolean
    serviceLiveWaitTime?: BoolWithAggregatesFilter | boolean
    serviceOther?: BoolWithAggregatesFilter | boolean
    serviceObjectDetectionDescription?: StringNullableWithAggregatesFilter | string | null
    serviceObjectBehaviorDescription?: StringNullableWithAggregatesFilter | string | null
    serviceOtherDescription?: StringNullableWithAggregatesFilter | string | null
    serviceThroughputUnitOfTime?: Enumservice_throughput_unit_of_timeNullableWithAggregatesFilter | service_throughput_unit_of_time | null
    locationId?: StringWithAggregatesFilter | string
    viewingAngle?: Enumcamera_viewing_angleWithAggregatesFilter | camera_viewing_angle
  }

  export type eventWhereInput = {
    AND?: Enumerable<eventWhereInput>
    OR?: Enumerable<eventWhereInput>
    NOT?: Enumerable<eventWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    start?: DateTimeFilter | Date | string
    end?: DateTimeFilter | Date | string
    organizationId?: StringFilter | string
    locationId?: StringFilter | string
    event_guest?: Event_guestListRelationFilter
  }

  export type eventOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrder
    event_guest?: event_guestOrderByRelationAggregateInput
  }

  export type eventWhereUniqueInput = {
    id?: string
  }

  export type eventOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrder
    _count?: eventCountOrderByAggregateInput
    _max?: eventMaxOrderByAggregateInput
    _min?: eventMinOrderByAggregateInput
  }

  export type eventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<eventScalarWhereWithAggregatesInput>
    OR?: Enumerable<eventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<eventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    start?: DateTimeWithAggregatesFilter | Date | string
    end?: DateTimeWithAggregatesFilter | Date | string
    organizationId?: StringWithAggregatesFilter | string
    locationId?: StringWithAggregatesFilter | string
  }

  export type event_guestWhereInput = {
    AND?: Enumerable<event_guestWhereInput>
    OR?: Enumerable<event_guestWhereInput>
    NOT?: Enumerable<event_guestWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    checkedInAt?: DateTimeNullableFilter | Date | string | null
    guestId?: StringNullableFilter | string | null
    eventId?: StringNullableFilter | string | null
    event?: XOR<EventRelationFilter, eventWhereInput> | null
    guest?: XOR<GuestRelationFilter, guestWhereInput> | null
  }

  export type event_guestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkedInAt?: SortOrder
    guestId?: SortOrder
    eventId?: SortOrder
    event?: eventOrderByWithRelationInput
    guest?: guestOrderByWithRelationInput
  }

  export type event_guestWhereUniqueInput = {
    id?: string
    eventId_guestId?: event_guestEventIdGuestIdCompoundUniqueInput
  }

  export type event_guestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkedInAt?: SortOrder
    guestId?: SortOrder
    eventId?: SortOrder
    _count?: event_guestCountOrderByAggregateInput
    _max?: event_guestMaxOrderByAggregateInput
    _min?: event_guestMinOrderByAggregateInput
  }

  export type event_guestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<event_guestScalarWhereWithAggregatesInput>
    OR?: Enumerable<event_guestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<event_guestScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    checkedInAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    guestId?: StringNullableWithAggregatesFilter | string | null
    eventId?: StringNullableWithAggregatesFilter | string | null
  }

  export type guestWhereInput = {
    AND?: Enumerable<guestWhereInput>
    OR?: Enumerable<guestWhereInput>
    NOT?: Enumerable<guestWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    organizationId?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    email?: StringFilter | string
    phone?: StringFilter | string
    company?: StringNullableFilter | string | null
    companyPosition?: StringNullableFilter | string | null
    event_guest?: Event_guestListRelationFilter
    vehicle?: VehicleListRelationFilter
  }

  export type guestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    companyPosition?: SortOrder
    event_guest?: event_guestOrderByRelationAggregateInput
    vehicle?: vehicleOrderByRelationAggregateInput
  }

  export type guestWhereUniqueInput = {
    id?: string
    organizationId_email?: guestOrganizationIdEmailCompoundUniqueInput
  }

  export type guestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    companyPosition?: SortOrder
    _count?: guestCountOrderByAggregateInput
    _max?: guestMaxOrderByAggregateInput
    _min?: guestMinOrderByAggregateInput
  }

  export type guestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<guestScalarWhereWithAggregatesInput>
    OR?: Enumerable<guestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<guestScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    organizationId?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    company?: StringNullableWithAggregatesFilter | string | null
    companyPosition?: StringNullableWithAggregatesFilter | string | null
  }

  export type locationWhereInput = {
    AND?: Enumerable<locationWhereInput>
    OR?: Enumerable<locationWhereInput>
    NOT?: Enumerable<locationWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    address?: StringFilter | string
    latitude?: DecimalFilter | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter | Decimal | DecimalJsLike | number | string
    number?: IntFilter | number
    serialNumber?: StringNullableFilter | string | null
    connectionType?: Enumlocation_connection_typeFilter | location_connection_type
    organizationId?: StringFilter | string
    camera?: CameraListRelationFilter
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>
  }

  export type locationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    number?: SortOrder
    serialNumber?: SortOrder
    connectionType?: SortOrder
    organizationId?: SortOrder
    camera?: cameraOrderByRelationAggregateInput
    organization?: organizationOrderByWithRelationInput
  }

  export type locationWhereUniqueInput = {
    id?: string
  }

  export type locationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    number?: SortOrder
    serialNumber?: SortOrder
    connectionType?: SortOrder
    organizationId?: SortOrder
    _count?: locationCountOrderByAggregateInput
    _avg?: locationAvgOrderByAggregateInput
    _max?: locationMaxOrderByAggregateInput
    _min?: locationMinOrderByAggregateInput
    _sum?: locationSumOrderByAggregateInput
  }

  export type locationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<locationScalarWhereWithAggregatesInput>
    OR?: Enumerable<locationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<locationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    latitude?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    number?: IntWithAggregatesFilter | number
    serialNumber?: StringNullableWithAggregatesFilter | string | null
    connectionType?: Enumlocation_connection_typeWithAggregatesFilter | location_connection_type
    organizationId?: StringWithAggregatesFilter | string
  }

  export type notificationWhereInput = {
    AND?: Enumerable<notificationWhereInput>
    OR?: Enumerable<notificationWhereInput>
    NOT?: Enumerable<notificationWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    readAt?: DateTimeNullableFilter | Date | string | null
    data?: JsonFilter
    email?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    sentAt?: DateTimeNullableFilter | Date | string | null
  }

  export type notificationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    readAt?: SortOrder
    data?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sentAt?: SortOrder
  }

  export type notificationWhereUniqueInput = {
    id?: string
  }

  export type notificationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    readAt?: SortOrder
    data?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sentAt?: SortOrder
    _count?: notificationCountOrderByAggregateInput
    _max?: notificationMaxOrderByAggregateInput
    _min?: notificationMinOrderByAggregateInput
  }

  export type notificationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<notificationScalarWhereWithAggregatesInput>
    OR?: Enumerable<notificationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<notificationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    readAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    data?: JsonWithAggregatesFilter
    email?: StringNullableWithAggregatesFilter | string | null
    phone?: StringNullableWithAggregatesFilter | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type organizationWhereInput = {
    AND?: Enumerable<organizationWhereInput>
    OR?: Enumerable<organizationWhereInput>
    NOT?: Enumerable<organizationWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    subdomain?: StringFilter | string
    stripeCustomerId?: StringNullableFilter | string | null
    status?: Enumorganization_statusFilter | organization_status
    statuses?: Enumorganization_statusNullableListFilter
    statuses2?: StringNullableListFilter
    api_key?: Api_keyListRelationFilter
    location?: LocationListRelationFilter
    organization_invitation?: Organization_invitationListRelationFilter
    organization_member?: Organization_memberListRelationFilter
  }

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    stripeCustomerId?: SortOrder
    status?: SortOrder
    statuses?: SortOrder
    statuses2?: SortOrder
    api_key?: api_keyOrderByRelationAggregateInput
    location?: locationOrderByRelationAggregateInput
    organization_invitation?: organization_invitationOrderByRelationAggregateInput
    organization_member?: organization_memberOrderByRelationAggregateInput
  }

  export type organizationWhereUniqueInput = {
    id?: string
    subdomain?: string
  }

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    stripeCustomerId?: SortOrder
    status?: SortOrder
    statuses?: SortOrder
    statuses2?: SortOrder
    _count?: organizationCountOrderByAggregateInput
    _max?: organizationMaxOrderByAggregateInput
    _min?: organizationMinOrderByAggregateInput
  }

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<organizationScalarWhereWithAggregatesInput>
    OR?: Enumerable<organizationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<organizationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    subdomain?: StringWithAggregatesFilter | string
    stripeCustomerId?: StringNullableWithAggregatesFilter | string | null
    status?: Enumorganization_statusWithAggregatesFilter | organization_status
    statuses?: Enumorganization_statusNullableListFilter
    statuses2?: StringNullableListFilter
  }

  export type organization_invitationWhereInput = {
    AND?: Enumerable<organization_invitationWhereInput>
    OR?: Enumerable<organization_invitationWhereInput>
    NOT?: Enumerable<organization_invitationWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    role?: Enumorganization_member_roleFilter | organization_member_role
    token?: StringFilter | string
    organizationId?: StringFilter | string
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>
  }

  export type organization_invitationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    organizationId?: SortOrder
    organization?: organizationOrderByWithRelationInput
  }

  export type organization_invitationWhereUniqueInput = {
    id?: string
  }

  export type organization_invitationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    organizationId?: SortOrder
    _count?: organization_invitationCountOrderByAggregateInput
    _max?: organization_invitationMaxOrderByAggregateInput
    _min?: organization_invitationMinOrderByAggregateInput
  }

  export type organization_invitationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<organization_invitationScalarWhereWithAggregatesInput>
    OR?: Enumerable<organization_invitationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<organization_invitationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    role?: Enumorganization_member_roleWithAggregatesFilter | organization_member_role
    token?: StringWithAggregatesFilter | string
    organizationId?: StringWithAggregatesFilter | string
  }

  export type organization_memberWhereInput = {
    AND?: Enumerable<organization_memberWhereInput>
    OR?: Enumerable<organization_memberWhereInput>
    NOT?: Enumerable<organization_memberWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    role?: Enumorganization_member_roleFilter | organization_member_role
    userId?: StringFilter | string
    organizationId?: StringFilter | string
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>
  }

  export type organization_memberOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    organization?: organizationOrderByWithRelationInput
  }

  export type organization_memberWhereUniqueInput = {
    id?: string
    organizationId_userId?: organization_memberOrganizationIdUserIdCompoundUniqueInput
  }

  export type organization_memberOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    _count?: organization_memberCountOrderByAggregateInput
    _max?: organization_memberMaxOrderByAggregateInput
    _min?: organization_memberMinOrderByAggregateInput
  }

  export type organization_memberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<organization_memberScalarWhereWithAggregatesInput>
    OR?: Enumerable<organization_memberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<organization_memberScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    role?: Enumorganization_member_roleWithAggregatesFilter | organization_member_role
    userId?: StringWithAggregatesFilter | string
    organizationId?: StringWithAggregatesFilter | string
  }

  export type parking_lotWhereInput = {
    AND?: Enumerable<parking_lotWhereInput>
    OR?: Enumerable<parking_lotWhereInput>
    NOT?: Enumerable<parking_lotWhereInput>
    id?: StringFilter | string
    label?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    notifyEmail?: StringNullableFilter | string | null
    notifyPhone?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    parking_space?: Parking_spaceListRelationFilter
  }

  export type parking_lotOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    notifyEmail?: SortOrder
    notifyPhone?: SortOrder
    updatedAt?: SortOrder
    parking_space?: parking_spaceOrderByRelationAggregateInput
  }

  export type parking_lotWhereUniqueInput = {
    id?: string
  }

  export type parking_lotOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    notifyEmail?: SortOrder
    notifyPhone?: SortOrder
    updatedAt?: SortOrder
    _count?: parking_lotCountOrderByAggregateInput
    _max?: parking_lotMaxOrderByAggregateInput
    _min?: parking_lotMinOrderByAggregateInput
  }

  export type parking_lotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<parking_lotScalarWhereWithAggregatesInput>
    OR?: Enumerable<parking_lotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<parking_lotScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    label?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    notifyEmail?: StringNullableWithAggregatesFilter | string | null
    notifyPhone?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type parking_spaceWhereInput = {
    AND?: Enumerable<parking_spaceWhereInput>
    OR?: Enumerable<parking_spaceWhereInput>
    NOT?: Enumerable<parking_spaceWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    label?: StringNullableFilter | string | null
    order?: IntNullableFilter | number | null
    type?: Enumparking_space_typeFilter | parking_space_type
    status?: Enumparking_space_statusFilter | parking_space_status
    parkedAt?: DateTimeNullableFilter | Date | string | null
    zoneId?: StringNullableFilter | string | null
    vehicleId?: StringNullableFilter | string | null
    parkingLotId?: StringNullableFilter | string | null
    media?: BytesNullableFilter | Buffer | null
    cameraId?: StringNullableFilter | string | null
    detectedPlate?: StringNullableFilter | string | null
    lastDetectionId?: StringNullableFilter | string | null
    parking_lot?: XOR<Parking_lotRelationFilter, parking_lotWhereInput> | null
    vehicle?: XOR<VehicleRelationFilter, vehicleWhereInput> | null
    parking_space_activity_log?: Parking_space_activity_logListRelationFilter
  }

  export type parking_spaceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    label?: SortOrder
    order?: SortOrder
    type?: SortOrder
    status?: SortOrder
    parkedAt?: SortOrder
    zoneId?: SortOrder
    vehicleId?: SortOrder
    parkingLotId?: SortOrder
    media?: SortOrder
    cameraId?: SortOrder
    detectedPlate?: SortOrder
    lastDetectionId?: SortOrder
    parking_lot?: parking_lotOrderByWithRelationInput
    vehicle?: vehicleOrderByWithRelationInput
    parking_space_activity_log?: parking_space_activity_logOrderByRelationAggregateInput
  }

  export type parking_spaceWhereUniqueInput = {
    id?: string
    zoneId?: string
  }

  export type parking_spaceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    label?: SortOrder
    order?: SortOrder
    type?: SortOrder
    status?: SortOrder
    parkedAt?: SortOrder
    zoneId?: SortOrder
    vehicleId?: SortOrder
    parkingLotId?: SortOrder
    media?: SortOrder
    cameraId?: SortOrder
    detectedPlate?: SortOrder
    lastDetectionId?: SortOrder
    _count?: parking_spaceCountOrderByAggregateInput
    _avg?: parking_spaceAvgOrderByAggregateInput
    _max?: parking_spaceMaxOrderByAggregateInput
    _min?: parking_spaceMinOrderByAggregateInput
    _sum?: parking_spaceSumOrderByAggregateInput
  }

  export type parking_spaceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<parking_spaceScalarWhereWithAggregatesInput>
    OR?: Enumerable<parking_spaceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<parking_spaceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    label?: StringNullableWithAggregatesFilter | string | null
    order?: IntNullableWithAggregatesFilter | number | null
    type?: Enumparking_space_typeWithAggregatesFilter | parking_space_type
    status?: Enumparking_space_statusWithAggregatesFilter | parking_space_status
    parkedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    zoneId?: StringNullableWithAggregatesFilter | string | null
    vehicleId?: StringNullableWithAggregatesFilter | string | null
    parkingLotId?: StringNullableWithAggregatesFilter | string | null
    media?: BytesNullableWithAggregatesFilter | Buffer | null
    cameraId?: StringNullableWithAggregatesFilter | string | null
    detectedPlate?: StringNullableWithAggregatesFilter | string | null
    lastDetectionId?: StringNullableWithAggregatesFilter | string | null
  }

  export type parking_space_activity_logWhereInput = {
    AND?: Enumerable<parking_space_activity_logWhereInput>
    OR?: Enumerable<parking_space_activity_logWhereInput>
    NOT?: Enumerable<parking_space_activity_logWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    text?: StringNullableFilter | string | null
    parkingSpaceId?: StringFilter | string
    parking_space?: XOR<Parking_spaceRelationFilter, parking_spaceWhereInput>
  }

  export type parking_space_activity_logOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    parkingSpaceId?: SortOrder
    parking_space?: parking_spaceOrderByWithRelationInput
  }

  export type parking_space_activity_logWhereUniqueInput = {
    id?: string
  }

  export type parking_space_activity_logOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    parkingSpaceId?: SortOrder
    _count?: parking_space_activity_logCountOrderByAggregateInput
    _max?: parking_space_activity_logMaxOrderByAggregateInput
    _min?: parking_space_activity_logMinOrderByAggregateInput
  }

  export type parking_space_activity_logScalarWhereWithAggregatesInput = {
    AND?: Enumerable<parking_space_activity_logScalarWhereWithAggregatesInput>
    OR?: Enumerable<parking_space_activity_logScalarWhereWithAggregatesInput>
    NOT?: Enumerable<parking_space_activity_logScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    text?: StringNullableWithAggregatesFilter | string | null
    parkingSpaceId?: StringWithAggregatesFilter | string
  }

  export type vehicleWhereInput = {
    AND?: Enumerable<vehicleWhereInput>
    OR?: Enumerable<vehicleWhereInput>
    NOT?: Enumerable<vehicleWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    year?: IntNullableFilter | number | null
    make?: StringNullableFilter | string | null
    model?: StringNullableFilter | string | null
    color?: EnumVehicleColorNullableFilter | VehicleColor | null
    licensePlate?: StringFilter | string
    guestId?: StringNullableFilter | string | null
    parking_space?: Parking_spaceListRelationFilter
    guest?: XOR<GuestRelationFilter, guestWhereInput> | null
  }

  export type vehicleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    color?: SortOrder
    licensePlate?: SortOrder
    guestId?: SortOrder
    parking_space?: parking_spaceOrderByRelationAggregateInput
    guest?: guestOrderByWithRelationInput
  }

  export type vehicleWhereUniqueInput = {
    id?: string
  }

  export type vehicleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    color?: SortOrder
    licensePlate?: SortOrder
    guestId?: SortOrder
    _count?: vehicleCountOrderByAggregateInput
    _avg?: vehicleAvgOrderByAggregateInput
    _max?: vehicleMaxOrderByAggregateInput
    _min?: vehicleMinOrderByAggregateInput
    _sum?: vehicleSumOrderByAggregateInput
  }

  export type vehicleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<vehicleScalarWhereWithAggregatesInput>
    OR?: Enumerable<vehicleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<vehicleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    year?: IntNullableWithAggregatesFilter | number | null
    make?: StringNullableWithAggregatesFilter | string | null
    model?: StringNullableWithAggregatesFilter | string | null
    color?: EnumVehicleColorNullableWithAggregatesFilter | VehicleColor | null
    licensePlate?: StringWithAggregatesFilter | string
    guestId?: StringNullableWithAggregatesFilter | string | null
  }

  export type api_keyCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    key: string
    organization: organizationCreateNestedOneWithoutApi_keyInput
  }

  export type api_keyUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    key: string
    organizationId: string
  }

  export type api_keyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    organization?: organizationUpdateOneRequiredWithoutApi_keyNestedInput
  }

  export type api_keyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type api_keyCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    key: string
    organizationId: string
  }

  export type api_keyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
  }

  export type api_keyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type cameraCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    rtspUrl: string
    serviceObjectDetection?: boolean
    serviceObjectCounts?: boolean
    serviceDwellTime?: boolean
    serviceObjectIngressEgress?: boolean
    serviceObjectBehavior?: boolean
    serviceOccupancyTracking?: boolean
    serviceUtilizationRate?: boolean
    serviceThroughput?: boolean
    serviceLiveWaitTime?: boolean
    serviceOther?: boolean
    serviceObjectDetectionDescription?: string | null
    serviceObjectBehaviorDescription?: string | null
    serviceOtherDescription?: string | null
    serviceThroughputUnitOfTime?: service_throughput_unit_of_time | null
    viewingAngle: camera_viewing_angle
    location: locationCreateNestedOneWithoutCameraInput
  }

  export type cameraUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    rtspUrl: string
    serviceObjectDetection?: boolean
    serviceObjectCounts?: boolean
    serviceDwellTime?: boolean
    serviceObjectIngressEgress?: boolean
    serviceObjectBehavior?: boolean
    serviceOccupancyTracking?: boolean
    serviceUtilizationRate?: boolean
    serviceThroughput?: boolean
    serviceLiveWaitTime?: boolean
    serviceOther?: boolean
    serviceObjectDetectionDescription?: string | null
    serviceObjectBehaviorDescription?: string | null
    serviceOtherDescription?: string | null
    serviceThroughputUnitOfTime?: service_throughput_unit_of_time | null
    locationId: string
    viewingAngle: camera_viewing_angle
  }

  export type cameraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rtspUrl?: StringFieldUpdateOperationsInput | string
    serviceObjectDetection?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectCounts?: BoolFieldUpdateOperationsInput | boolean
    serviceDwellTime?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectIngressEgress?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectBehavior?: BoolFieldUpdateOperationsInput | boolean
    serviceOccupancyTracking?: BoolFieldUpdateOperationsInput | boolean
    serviceUtilizationRate?: BoolFieldUpdateOperationsInput | boolean
    serviceThroughput?: BoolFieldUpdateOperationsInput | boolean
    serviceLiveWaitTime?: BoolFieldUpdateOperationsInput | boolean
    serviceOther?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectDetectionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceObjectBehaviorDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceOtherDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceThroughputUnitOfTime?: NullableEnumservice_throughput_unit_of_timeFieldUpdateOperationsInput | service_throughput_unit_of_time | null
    viewingAngle?: Enumcamera_viewing_angleFieldUpdateOperationsInput | camera_viewing_angle
    location?: locationUpdateOneRequiredWithoutCameraNestedInput
  }

  export type cameraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rtspUrl?: StringFieldUpdateOperationsInput | string
    serviceObjectDetection?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectCounts?: BoolFieldUpdateOperationsInput | boolean
    serviceDwellTime?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectIngressEgress?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectBehavior?: BoolFieldUpdateOperationsInput | boolean
    serviceOccupancyTracking?: BoolFieldUpdateOperationsInput | boolean
    serviceUtilizationRate?: BoolFieldUpdateOperationsInput | boolean
    serviceThroughput?: BoolFieldUpdateOperationsInput | boolean
    serviceLiveWaitTime?: BoolFieldUpdateOperationsInput | boolean
    serviceOther?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectDetectionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceObjectBehaviorDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceOtherDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceThroughputUnitOfTime?: NullableEnumservice_throughput_unit_of_timeFieldUpdateOperationsInput | service_throughput_unit_of_time | null
    locationId?: StringFieldUpdateOperationsInput | string
    viewingAngle?: Enumcamera_viewing_angleFieldUpdateOperationsInput | camera_viewing_angle
  }

  export type cameraCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    rtspUrl: string
    serviceObjectDetection?: boolean
    serviceObjectCounts?: boolean
    serviceDwellTime?: boolean
    serviceObjectIngressEgress?: boolean
    serviceObjectBehavior?: boolean
    serviceOccupancyTracking?: boolean
    serviceUtilizationRate?: boolean
    serviceThroughput?: boolean
    serviceLiveWaitTime?: boolean
    serviceOther?: boolean
    serviceObjectDetectionDescription?: string | null
    serviceObjectBehaviorDescription?: string | null
    serviceOtherDescription?: string | null
    serviceThroughputUnitOfTime?: service_throughput_unit_of_time | null
    locationId: string
    viewingAngle: camera_viewing_angle
  }

  export type cameraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rtspUrl?: StringFieldUpdateOperationsInput | string
    serviceObjectDetection?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectCounts?: BoolFieldUpdateOperationsInput | boolean
    serviceDwellTime?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectIngressEgress?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectBehavior?: BoolFieldUpdateOperationsInput | boolean
    serviceOccupancyTracking?: BoolFieldUpdateOperationsInput | boolean
    serviceUtilizationRate?: BoolFieldUpdateOperationsInput | boolean
    serviceThroughput?: BoolFieldUpdateOperationsInput | boolean
    serviceLiveWaitTime?: BoolFieldUpdateOperationsInput | boolean
    serviceOther?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectDetectionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceObjectBehaviorDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceOtherDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceThroughputUnitOfTime?: NullableEnumservice_throughput_unit_of_timeFieldUpdateOperationsInput | service_throughput_unit_of_time | null
    viewingAngle?: Enumcamera_viewing_angleFieldUpdateOperationsInput | camera_viewing_angle
  }

  export type cameraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rtspUrl?: StringFieldUpdateOperationsInput | string
    serviceObjectDetection?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectCounts?: BoolFieldUpdateOperationsInput | boolean
    serviceDwellTime?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectIngressEgress?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectBehavior?: BoolFieldUpdateOperationsInput | boolean
    serviceOccupancyTracking?: BoolFieldUpdateOperationsInput | boolean
    serviceUtilizationRate?: BoolFieldUpdateOperationsInput | boolean
    serviceThroughput?: BoolFieldUpdateOperationsInput | boolean
    serviceLiveWaitTime?: BoolFieldUpdateOperationsInput | boolean
    serviceOther?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectDetectionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceObjectBehaviorDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceOtherDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceThroughputUnitOfTime?: NullableEnumservice_throughput_unit_of_timeFieldUpdateOperationsInput | service_throughput_unit_of_time | null
    locationId?: StringFieldUpdateOperationsInput | string
    viewingAngle?: Enumcamera_viewing_angleFieldUpdateOperationsInput | camera_viewing_angle
  }

  export type eventCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    start: Date | string
    end: Date | string
    organizationId: string
    locationId: string
    event_guest?: event_guestCreateNestedManyWithoutEventInput
  }

  export type eventUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    start: Date | string
    end: Date | string
    organizationId: string
    locationId: string
    event_guest?: event_guestUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    event_guest?: event_guestUpdateManyWithoutEventNestedInput
  }

  export type eventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    event_guest?: event_guestUncheckedUpdateManyWithoutEventNestedInput
  }

  export type eventCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    start: Date | string
    end: Date | string
    organizationId: string
    locationId: string
  }

  export type eventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type eventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type event_guestCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    checkedInAt?: Date | string | null
    event?: eventCreateNestedOneWithoutEvent_guestInput
    guest?: guestCreateNestedOneWithoutEvent_guestInput
  }

  export type event_guestUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    checkedInAt?: Date | string | null
    guestId?: string | null
    eventId?: string | null
  }

  export type event_guestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: eventUpdateOneWithoutEvent_guestNestedInput
    guest?: guestUpdateOneWithoutEvent_guestNestedInput
  }

  export type event_guestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type event_guestCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    checkedInAt?: Date | string | null
    guestId?: string | null
    eventId?: string | null
  }

  export type event_guestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type event_guestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type guestCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    organizationId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    company?: string | null
    companyPosition?: string | null
    event_guest?: event_guestCreateNestedManyWithoutGuestInput
    vehicle?: vehicleCreateNestedManyWithoutGuestInput
  }

  export type guestUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    organizationId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    company?: string | null
    companyPosition?: string | null
    event_guest?: event_guestUncheckedCreateNestedManyWithoutGuestInput
    vehicle?: vehicleUncheckedCreateNestedManyWithoutGuestInput
  }

  export type guestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyPosition?: NullableStringFieldUpdateOperationsInput | string | null
    event_guest?: event_guestUpdateManyWithoutGuestNestedInput
    vehicle?: vehicleUpdateManyWithoutGuestNestedInput
  }

  export type guestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyPosition?: NullableStringFieldUpdateOperationsInput | string | null
    event_guest?: event_guestUncheckedUpdateManyWithoutGuestNestedInput
    vehicle?: vehicleUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type guestCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    organizationId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    company?: string | null
    companyPosition?: string | null
  }

  export type guestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyPosition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type guestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyPosition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type locationCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    number?: number
    serialNumber?: string | null
    connectionType: location_connection_type
    camera?: cameraCreateNestedManyWithoutLocationInput
    organization: organizationCreateNestedOneWithoutLocationInput
  }

  export type locationUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    number?: number
    serialNumber?: string | null
    connectionType: location_connection_type
    organizationId: string
    camera?: cameraUncheckedCreateNestedManyWithoutLocationInput
  }

  export type locationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: Enumlocation_connection_typeFieldUpdateOperationsInput | location_connection_type
    camera?: cameraUpdateManyWithoutLocationNestedInput
    organization?: organizationUpdateOneRequiredWithoutLocationNestedInput
  }

  export type locationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: Enumlocation_connection_typeFieldUpdateOperationsInput | location_connection_type
    organizationId?: StringFieldUpdateOperationsInput | string
    camera?: cameraUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type locationCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    number?: number
    serialNumber?: string | null
    connectionType: location_connection_type
    organizationId: string
  }

  export type locationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: Enumlocation_connection_typeFieldUpdateOperationsInput | location_connection_type
  }

  export type locationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: Enumlocation_connection_typeFieldUpdateOperationsInput | location_connection_type
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type notificationCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    readAt?: Date | string | null
    data: JsonNullValueInput | InputJsonValue
    email?: string | null
    phone?: string | null
    sentAt?: Date | string | null
  }

  export type notificationUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    readAt?: Date | string | null
    data: JsonNullValueInput | InputJsonValue
    email?: string | null
    phone?: string | null
    sentAt?: Date | string | null
  }

  export type notificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: JsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: JsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    readAt?: Date | string | null
    data: JsonNullValueInput | InputJsonValue
    email?: string | null
    phone?: string | null
    sentAt?: Date | string | null
  }

  export type notificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: JsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: JsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type organizationCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    subdomain: string
    stripeCustomerId?: string | null
    status?: organization_status
    statuses?: organizationCreatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationCreatestatuses2Input | Enumerable<string>
    api_key?: api_keyCreateNestedManyWithoutOrganizationInput
    location?: locationCreateNestedManyWithoutOrganizationInput
    organization_invitation?: organization_invitationCreateNestedManyWithoutOrganizationInput
    organization_member?: organization_memberCreateNestedManyWithoutOrganizationInput
  }

  export type organizationUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    subdomain: string
    stripeCustomerId?: string | null
    status?: organization_status
    statuses?: organizationCreatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationCreatestatuses2Input | Enumerable<string>
    api_key?: api_keyUncheckedCreateNestedManyWithoutOrganizationInput
    location?: locationUncheckedCreateNestedManyWithoutOrganizationInput
    organization_invitation?: organization_invitationUncheckedCreateNestedManyWithoutOrganizationInput
    organization_member?: organization_memberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumorganization_statusFieldUpdateOperationsInput | organization_status
    statuses?: organizationUpdatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationUpdatestatuses2Input | Enumerable<string>
    api_key?: api_keyUpdateManyWithoutOrganizationNestedInput
    location?: locationUpdateManyWithoutOrganizationNestedInput
    organization_invitation?: organization_invitationUpdateManyWithoutOrganizationNestedInput
    organization_member?: organization_memberUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumorganization_statusFieldUpdateOperationsInput | organization_status
    statuses?: organizationUpdatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationUpdatestatuses2Input | Enumerable<string>
    api_key?: api_keyUncheckedUpdateManyWithoutOrganizationNestedInput
    location?: locationUncheckedUpdateManyWithoutOrganizationNestedInput
    organization_invitation?: organization_invitationUncheckedUpdateManyWithoutOrganizationNestedInput
    organization_member?: organization_memberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    subdomain: string
    stripeCustomerId?: string | null
    status?: organization_status
    statuses?: organizationCreatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationCreatestatuses2Input | Enumerable<string>
  }

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumorganization_statusFieldUpdateOperationsInput | organization_status
    statuses?: organizationUpdatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationUpdatestatuses2Input | Enumerable<string>
  }

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumorganization_statusFieldUpdateOperationsInput | organization_status
    statuses?: organizationUpdatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationUpdatestatuses2Input | Enumerable<string>
  }

  export type organization_invitationCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    email: string
    role: organization_member_role
    token: string
    organization: organizationCreateNestedOneWithoutOrganization_invitationInput
  }

  export type organization_invitationUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    email: string
    role: organization_member_role
    token: string
    organizationId: string
  }

  export type organization_invitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    token?: StringFieldUpdateOperationsInput | string
    organization?: organizationUpdateOneRequiredWithoutOrganization_invitationNestedInput
  }

  export type organization_invitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    token?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type organization_invitationCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    email: string
    role: organization_member_role
    token: string
    organizationId: string
  }

  export type organization_invitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    token?: StringFieldUpdateOperationsInput | string
  }

  export type organization_invitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    token?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type organization_memberCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    role: organization_member_role
    userId: string
    organization: organizationCreateNestedOneWithoutOrganization_memberInput
  }

  export type organization_memberUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    role: organization_member_role
    userId: string
    organizationId: string
  }

  export type organization_memberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    userId?: StringFieldUpdateOperationsInput | string
    organization?: organizationUpdateOneRequiredWithoutOrganization_memberNestedInput
  }

  export type organization_memberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type organization_memberCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    role: organization_member_role
    userId: string
    organizationId: string
  }

  export type organization_memberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type organization_memberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type parking_lotCreateInput = {
    id: string
    label: string
    createdAt?: Date | string
    notifyEmail?: string | null
    notifyPhone?: string | null
    updatedAt: Date | string
    parking_space?: parking_spaceCreateNestedManyWithoutParking_lotInput
  }

  export type parking_lotUncheckedCreateInput = {
    id: string
    label: string
    createdAt?: Date | string
    notifyEmail?: string | null
    notifyPhone?: string | null
    updatedAt: Date | string
    parking_space?: parking_spaceUncheckedCreateNestedManyWithoutParking_lotInput
  }

  export type parking_lotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    notifyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parking_space?: parking_spaceUpdateManyWithoutParking_lotNestedInput
  }

  export type parking_lotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    notifyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parking_space?: parking_spaceUncheckedUpdateManyWithoutParking_lotNestedInput
  }

  export type parking_lotCreateManyInput = {
    id: string
    label: string
    createdAt?: Date | string
    notifyEmail?: string | null
    notifyPhone?: string | null
    updatedAt: Date | string
  }

  export type parking_lotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    notifyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type parking_lotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    notifyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type parking_spaceCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    label?: string | null
    order?: number | null
    type?: parking_space_type
    status?: parking_space_status
    parkedAt?: Date | string | null
    zoneId?: string | null
    media?: Buffer | null
    cameraId?: string | null
    detectedPlate?: string | null
    lastDetectionId?: string | null
    parking_lot?: parking_lotCreateNestedOneWithoutParking_spaceInput
    vehicle?: vehicleCreateNestedOneWithoutParking_spaceInput
    parking_space_activity_log?: parking_space_activity_logCreateNestedManyWithoutParking_spaceInput
  }

  export type parking_spaceUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    label?: string | null
    order?: number | null
    type?: parking_space_type
    status?: parking_space_status
    parkedAt?: Date | string | null
    zoneId?: string | null
    vehicleId?: string | null
    parkingLotId?: string | null
    media?: Buffer | null
    cameraId?: string | null
    detectedPlate?: string | null
    lastDetectionId?: string | null
    parking_space_activity_log?: parking_space_activity_logUncheckedCreateNestedManyWithoutParking_spaceInput
  }

  export type parking_spaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumparking_space_typeFieldUpdateOperationsInput | parking_space_type
    status?: Enumparking_space_statusFieldUpdateOperationsInput | parking_space_status
    parkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPlate?: NullableStringFieldUpdateOperationsInput | string | null
    lastDetectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parking_lot?: parking_lotUpdateOneWithoutParking_spaceNestedInput
    vehicle?: vehicleUpdateOneWithoutParking_spaceNestedInput
    parking_space_activity_log?: parking_space_activity_logUpdateManyWithoutParking_spaceNestedInput
  }

  export type parking_spaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumparking_space_typeFieldUpdateOperationsInput | parking_space_type
    status?: Enumparking_space_statusFieldUpdateOperationsInput | parking_space_status
    parkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingLotId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPlate?: NullableStringFieldUpdateOperationsInput | string | null
    lastDetectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parking_space_activity_log?: parking_space_activity_logUncheckedUpdateManyWithoutParking_spaceNestedInput
  }

  export type parking_spaceCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    label?: string | null
    order?: number | null
    type?: parking_space_type
    status?: parking_space_status
    parkedAt?: Date | string | null
    zoneId?: string | null
    vehicleId?: string | null
    parkingLotId?: string | null
    media?: Buffer | null
    cameraId?: string | null
    detectedPlate?: string | null
    lastDetectionId?: string | null
  }

  export type parking_spaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumparking_space_typeFieldUpdateOperationsInput | parking_space_type
    status?: Enumparking_space_statusFieldUpdateOperationsInput | parking_space_status
    parkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPlate?: NullableStringFieldUpdateOperationsInput | string | null
    lastDetectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type parking_spaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumparking_space_typeFieldUpdateOperationsInput | parking_space_type
    status?: Enumparking_space_statusFieldUpdateOperationsInput | parking_space_status
    parkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingLotId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPlate?: NullableStringFieldUpdateOperationsInput | string | null
    lastDetectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type parking_space_activity_logCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    text?: string | null
    parking_space: parking_spaceCreateNestedOneWithoutParking_space_activity_logInput
  }

  export type parking_space_activity_logUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    text?: string | null
    parkingSpaceId: string
  }

  export type parking_space_activity_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    parking_space?: parking_spaceUpdateOneRequiredWithoutParking_space_activity_logNestedInput
  }

  export type parking_space_activity_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    parkingSpaceId?: StringFieldUpdateOperationsInput | string
  }

  export type parking_space_activity_logCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    text?: string | null
    parkingSpaceId: string
  }

  export type parking_space_activity_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type parking_space_activity_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    parkingSpaceId?: StringFieldUpdateOperationsInput | string
  }

  export type vehicleCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    year?: number | null
    make?: string | null
    model?: string | null
    color?: VehicleColor | null
    licensePlate: string
    parking_space?: parking_spaceCreateNestedManyWithoutVehicleInput
    guest?: guestCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    year?: number | null
    make?: string | null
    model?: string | null
    color?: VehicleColor | null
    licensePlate: string
    guestId?: string | null
    parking_space?: parking_spaceUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableEnumVehicleColorFieldUpdateOperationsInput | VehicleColor | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    parking_space?: parking_spaceUpdateManyWithoutVehicleNestedInput
    guest?: guestUpdateOneWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableEnumVehicleColorFieldUpdateOperationsInput | VehicleColor | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    parking_space?: parking_spaceUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    year?: number | null
    make?: string | null
    model?: string | null
    color?: VehicleColor | null
    licensePlate: string
    guestId?: string | null
  }

  export type vehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableEnumVehicleColorFieldUpdateOperationsInput | VehicleColor | null
    licensePlate?: StringFieldUpdateOperationsInput | string
  }

  export type vehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableEnumVehicleColorFieldUpdateOperationsInput | VehicleColor | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput
    isNot?: organizationWhereInput
  }

  export type api_keyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    key?: SortOrder
    organizationId?: SortOrder
  }

  export type api_keyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    key?: SortOrder
    organizationId?: SortOrder
  }

  export type api_keyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    key?: SortOrder
    organizationId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type Enumservice_throughput_unit_of_timeNullableFilter = {
    equals?: service_throughput_unit_of_time | null
    in?: Enumerable<service_throughput_unit_of_time> | null
    notIn?: Enumerable<service_throughput_unit_of_time> | null
    not?: NestedEnumservice_throughput_unit_of_timeNullableFilter | service_throughput_unit_of_time | null
  }

  export type Enumcamera_viewing_angleFilter = {
    equals?: camera_viewing_angle
    in?: Enumerable<camera_viewing_angle>
    notIn?: Enumerable<camera_viewing_angle>
    not?: NestedEnumcamera_viewing_angleFilter | camera_viewing_angle
  }

  export type LocationRelationFilter = {
    is?: locationWhereInput
    isNot?: locationWhereInput
  }

  export type cameraCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    rtspUrl?: SortOrder
    serviceObjectDetection?: SortOrder
    serviceObjectCounts?: SortOrder
    serviceDwellTime?: SortOrder
    serviceObjectIngressEgress?: SortOrder
    serviceObjectBehavior?: SortOrder
    serviceOccupancyTracking?: SortOrder
    serviceUtilizationRate?: SortOrder
    serviceThroughput?: SortOrder
    serviceLiveWaitTime?: SortOrder
    serviceOther?: SortOrder
    serviceObjectDetectionDescription?: SortOrder
    serviceObjectBehaviorDescription?: SortOrder
    serviceOtherDescription?: SortOrder
    serviceThroughputUnitOfTime?: SortOrder
    locationId?: SortOrder
    viewingAngle?: SortOrder
  }

  export type cameraMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    rtspUrl?: SortOrder
    serviceObjectDetection?: SortOrder
    serviceObjectCounts?: SortOrder
    serviceDwellTime?: SortOrder
    serviceObjectIngressEgress?: SortOrder
    serviceObjectBehavior?: SortOrder
    serviceOccupancyTracking?: SortOrder
    serviceUtilizationRate?: SortOrder
    serviceThroughput?: SortOrder
    serviceLiveWaitTime?: SortOrder
    serviceOther?: SortOrder
    serviceObjectDetectionDescription?: SortOrder
    serviceObjectBehaviorDescription?: SortOrder
    serviceOtherDescription?: SortOrder
    serviceThroughputUnitOfTime?: SortOrder
    locationId?: SortOrder
    viewingAngle?: SortOrder
  }

  export type cameraMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    rtspUrl?: SortOrder
    serviceObjectDetection?: SortOrder
    serviceObjectCounts?: SortOrder
    serviceDwellTime?: SortOrder
    serviceObjectIngressEgress?: SortOrder
    serviceObjectBehavior?: SortOrder
    serviceOccupancyTracking?: SortOrder
    serviceUtilizationRate?: SortOrder
    serviceThroughput?: SortOrder
    serviceLiveWaitTime?: SortOrder
    serviceOther?: SortOrder
    serviceObjectDetectionDescription?: SortOrder
    serviceObjectBehaviorDescription?: SortOrder
    serviceOtherDescription?: SortOrder
    serviceThroughputUnitOfTime?: SortOrder
    locationId?: SortOrder
    viewingAngle?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type Enumservice_throughput_unit_of_timeNullableWithAggregatesFilter = {
    equals?: service_throughput_unit_of_time | null
    in?: Enumerable<service_throughput_unit_of_time> | null
    notIn?: Enumerable<service_throughput_unit_of_time> | null
    not?: NestedEnumservice_throughput_unit_of_timeNullableWithAggregatesFilter | service_throughput_unit_of_time | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumservice_throughput_unit_of_timeNullableFilter
    _max?: NestedEnumservice_throughput_unit_of_timeNullableFilter
  }

  export type Enumcamera_viewing_angleWithAggregatesFilter = {
    equals?: camera_viewing_angle
    in?: Enumerable<camera_viewing_angle>
    notIn?: Enumerable<camera_viewing_angle>
    not?: NestedEnumcamera_viewing_angleWithAggregatesFilter | camera_viewing_angle
    _count?: NestedIntFilter
    _min?: NestedEnumcamera_viewing_angleFilter
    _max?: NestedEnumcamera_viewing_angleFilter
  }

  export type Event_guestListRelationFilter = {
    every?: event_guestWhereInput
    some?: event_guestWhereInput
    none?: event_guestWhereInput
  }

  export type event_guestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrder
  }

  export type eventMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrder
  }

  export type eventMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type EventRelationFilter = {
    is?: eventWhereInput | null
    isNot?: eventWhereInput | null
  }

  export type GuestRelationFilter = {
    is?: guestWhereInput | null
    isNot?: guestWhereInput | null
  }

  export type event_guestEventIdGuestIdCompoundUniqueInput = {
    eventId: string
    guestId: string
  }

  export type event_guestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkedInAt?: SortOrder
    guestId?: SortOrder
    eventId?: SortOrder
  }

  export type event_guestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkedInAt?: SortOrder
    guestId?: SortOrder
    eventId?: SortOrder
  }

  export type event_guestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkedInAt?: SortOrder
    guestId?: SortOrder
    eventId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type VehicleListRelationFilter = {
    every?: vehicleWhereInput
    some?: vehicleWhereInput
    none?: vehicleWhereInput
  }

  export type vehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type guestOrganizationIdEmailCompoundUniqueInput = {
    organizationId: string
    email: string
  }

  export type guestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    companyPosition?: SortOrder
  }

  export type guestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    companyPosition?: SortOrder
  }

  export type guestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    companyPosition?: SortOrder
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type Enumlocation_connection_typeFilter = {
    equals?: location_connection_type
    in?: Enumerable<location_connection_type>
    notIn?: Enumerable<location_connection_type>
    not?: NestedEnumlocation_connection_typeFilter | location_connection_type
  }

  export type CameraListRelationFilter = {
    every?: cameraWhereInput
    some?: cameraWhereInput
    none?: cameraWhereInput
  }

  export type cameraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type locationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    number?: SortOrder
    serialNumber?: SortOrder
    connectionType?: SortOrder
    organizationId?: SortOrder
  }

  export type locationAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    number?: SortOrder
  }

  export type locationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    number?: SortOrder
    serialNumber?: SortOrder
    connectionType?: SortOrder
    organizationId?: SortOrder
  }

  export type locationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    number?: SortOrder
    serialNumber?: SortOrder
    connectionType?: SortOrder
    organizationId?: SortOrder
  }

  export type locationSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    number?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type Enumlocation_connection_typeWithAggregatesFilter = {
    equals?: location_connection_type
    in?: Enumerable<location_connection_type>
    notIn?: Enumerable<location_connection_type>
    not?: NestedEnumlocation_connection_typeWithAggregatesFilter | location_connection_type
    _count?: NestedIntFilter
    _min?: NestedEnumlocation_connection_typeFilter
    _max?: NestedEnumlocation_connection_typeFilter
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type notificationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    readAt?: SortOrder
    data?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sentAt?: SortOrder
  }

  export type notificationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    readAt?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sentAt?: SortOrder
  }

  export type notificationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    readAt?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sentAt?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type Enumorganization_statusFilter = {
    equals?: organization_status
    in?: Enumerable<organization_status>
    notIn?: Enumerable<organization_status>
    not?: NestedEnumorganization_statusFilter | organization_status
  }

  export type Enumorganization_statusNullableListFilter = {
    equals?: Enumerable<organization_status> | null
    has?: organization_status | null
    hasEvery?: Enumerable<organization_status>
    hasSome?: Enumerable<organization_status>
    isEmpty?: boolean
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type Api_keyListRelationFilter = {
    every?: api_keyWhereInput
    some?: api_keyWhereInput
    none?: api_keyWhereInput
  }

  export type LocationListRelationFilter = {
    every?: locationWhereInput
    some?: locationWhereInput
    none?: locationWhereInput
  }

  export type Organization_invitationListRelationFilter = {
    every?: organization_invitationWhereInput
    some?: organization_invitationWhereInput
    none?: organization_invitationWhereInput
  }

  export type Organization_memberListRelationFilter = {
    every?: organization_memberWhereInput
    some?: organization_memberWhereInput
    none?: organization_memberWhereInput
  }

  export type api_keyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type locationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organization_invitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organization_memberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    stripeCustomerId?: SortOrder
    status?: SortOrder
    statuses?: SortOrder
    statuses2?: SortOrder
  }

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    stripeCustomerId?: SortOrder
    status?: SortOrder
  }

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    stripeCustomerId?: SortOrder
    status?: SortOrder
  }

  export type Enumorganization_statusWithAggregatesFilter = {
    equals?: organization_status
    in?: Enumerable<organization_status>
    notIn?: Enumerable<organization_status>
    not?: NestedEnumorganization_statusWithAggregatesFilter | organization_status
    _count?: NestedIntFilter
    _min?: NestedEnumorganization_statusFilter
    _max?: NestedEnumorganization_statusFilter
  }

  export type Enumorganization_member_roleFilter = {
    equals?: organization_member_role
    in?: Enumerable<organization_member_role>
    notIn?: Enumerable<organization_member_role>
    not?: NestedEnumorganization_member_roleFilter | organization_member_role
  }

  export type organization_invitationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    organizationId?: SortOrder
  }

  export type organization_invitationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    organizationId?: SortOrder
  }

  export type organization_invitationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    organizationId?: SortOrder
  }

  export type Enumorganization_member_roleWithAggregatesFilter = {
    equals?: organization_member_role
    in?: Enumerable<organization_member_role>
    notIn?: Enumerable<organization_member_role>
    not?: NestedEnumorganization_member_roleWithAggregatesFilter | organization_member_role
    _count?: NestedIntFilter
    _min?: NestedEnumorganization_member_roleFilter
    _max?: NestedEnumorganization_member_roleFilter
  }

  export type organization_memberOrganizationIdUserIdCompoundUniqueInput = {
    organizationId: string
    userId: string
  }

  export type organization_memberCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
  }

  export type organization_memberMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
  }

  export type organization_memberMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
  }

  export type Parking_spaceListRelationFilter = {
    every?: parking_spaceWhereInput
    some?: parking_spaceWhereInput
    none?: parking_spaceWhereInput
  }

  export type parking_spaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type parking_lotCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    notifyEmail?: SortOrder
    notifyPhone?: SortOrder
    updatedAt?: SortOrder
  }

  export type parking_lotMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    notifyEmail?: SortOrder
    notifyPhone?: SortOrder
    updatedAt?: SortOrder
  }

  export type parking_lotMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    notifyEmail?: SortOrder
    notifyPhone?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type Enumparking_space_typeFilter = {
    equals?: parking_space_type
    in?: Enumerable<parking_space_type>
    notIn?: Enumerable<parking_space_type>
    not?: NestedEnumparking_space_typeFilter | parking_space_type
  }

  export type Enumparking_space_statusFilter = {
    equals?: parking_space_status
    in?: Enumerable<parking_space_status>
    notIn?: Enumerable<parking_space_status>
    not?: NestedEnumparking_space_statusFilter | parking_space_status
  }

  export type BytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type Parking_lotRelationFilter = {
    is?: parking_lotWhereInput | null
    isNot?: parking_lotWhereInput | null
  }

  export type VehicleRelationFilter = {
    is?: vehicleWhereInput | null
    isNot?: vehicleWhereInput | null
  }

  export type Parking_space_activity_logListRelationFilter = {
    every?: parking_space_activity_logWhereInput
    some?: parking_space_activity_logWhereInput
    none?: parking_space_activity_logWhereInput
  }

  export type parking_space_activity_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type parking_spaceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    label?: SortOrder
    order?: SortOrder
    type?: SortOrder
    status?: SortOrder
    parkedAt?: SortOrder
    zoneId?: SortOrder
    vehicleId?: SortOrder
    parkingLotId?: SortOrder
    media?: SortOrder
    cameraId?: SortOrder
    detectedPlate?: SortOrder
    lastDetectionId?: SortOrder
  }

  export type parking_spaceAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type parking_spaceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    label?: SortOrder
    order?: SortOrder
    type?: SortOrder
    status?: SortOrder
    parkedAt?: SortOrder
    zoneId?: SortOrder
    vehicleId?: SortOrder
    parkingLotId?: SortOrder
    media?: SortOrder
    cameraId?: SortOrder
    detectedPlate?: SortOrder
    lastDetectionId?: SortOrder
  }

  export type parking_spaceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    label?: SortOrder
    order?: SortOrder
    type?: SortOrder
    status?: SortOrder
    parkedAt?: SortOrder
    zoneId?: SortOrder
    vehicleId?: SortOrder
    parkingLotId?: SortOrder
    media?: SortOrder
    cameraId?: SortOrder
    detectedPlate?: SortOrder
    lastDetectionId?: SortOrder
  }

  export type parking_spaceSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type Enumparking_space_typeWithAggregatesFilter = {
    equals?: parking_space_type
    in?: Enumerable<parking_space_type>
    notIn?: Enumerable<parking_space_type>
    not?: NestedEnumparking_space_typeWithAggregatesFilter | parking_space_type
    _count?: NestedIntFilter
    _min?: NestedEnumparking_space_typeFilter
    _max?: NestedEnumparking_space_typeFilter
  }

  export type Enumparking_space_statusWithAggregatesFilter = {
    equals?: parking_space_status
    in?: Enumerable<parking_space_status>
    notIn?: Enumerable<parking_space_status>
    not?: NestedEnumparking_space_statusWithAggregatesFilter | parking_space_status
    _count?: NestedIntFilter
    _min?: NestedEnumparking_space_statusFilter
    _max?: NestedEnumparking_space_statusFilter
  }

  export type BytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type Parking_spaceRelationFilter = {
    is?: parking_spaceWhereInput
    isNot?: parking_spaceWhereInput
  }

  export type parking_space_activity_logCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    parkingSpaceId?: SortOrder
  }

  export type parking_space_activity_logMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    parkingSpaceId?: SortOrder
  }

  export type parking_space_activity_logMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    parkingSpaceId?: SortOrder
  }

  export type EnumVehicleColorNullableFilter = {
    equals?: VehicleColor | null
    in?: Enumerable<VehicleColor> | null
    notIn?: Enumerable<VehicleColor> | null
    not?: NestedEnumVehicleColorNullableFilter | VehicleColor | null
  }

  export type vehicleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    color?: SortOrder
    licensePlate?: SortOrder
    guestId?: SortOrder
  }

  export type vehicleAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type vehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    color?: SortOrder
    licensePlate?: SortOrder
    guestId?: SortOrder
  }

  export type vehicleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    color?: SortOrder
    licensePlate?: SortOrder
    guestId?: SortOrder
  }

  export type vehicleSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type EnumVehicleColorNullableWithAggregatesFilter = {
    equals?: VehicleColor | null
    in?: Enumerable<VehicleColor> | null
    notIn?: Enumerable<VehicleColor> | null
    not?: NestedEnumVehicleColorNullableWithAggregatesFilter | VehicleColor | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumVehicleColorNullableFilter
    _max?: NestedEnumVehicleColorNullableFilter
  }

  export type organizationCreateNestedOneWithoutApi_keyInput = {
    create?: XOR<organizationCreateWithoutApi_keyInput, organizationUncheckedCreateWithoutApi_keyInput>
    connectOrCreate?: organizationCreateOrConnectWithoutApi_keyInput
    connect?: organizationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type organizationUpdateOneRequiredWithoutApi_keyNestedInput = {
    create?: XOR<organizationCreateWithoutApi_keyInput, organizationUncheckedCreateWithoutApi_keyInput>
    connectOrCreate?: organizationCreateOrConnectWithoutApi_keyInput
    upsert?: organizationUpsertWithoutApi_keyInput
    connect?: organizationWhereUniqueInput
    update?: XOR<organizationUpdateWithoutApi_keyInput, organizationUncheckedUpdateWithoutApi_keyInput>
  }

  export type locationCreateNestedOneWithoutCameraInput = {
    create?: XOR<locationCreateWithoutCameraInput, locationUncheckedCreateWithoutCameraInput>
    connectOrCreate?: locationCreateOrConnectWithoutCameraInput
    connect?: locationWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumservice_throughput_unit_of_timeFieldUpdateOperationsInput = {
    set?: service_throughput_unit_of_time | null
  }

  export type Enumcamera_viewing_angleFieldUpdateOperationsInput = {
    set?: camera_viewing_angle
  }

  export type locationUpdateOneRequiredWithoutCameraNestedInput = {
    create?: XOR<locationCreateWithoutCameraInput, locationUncheckedCreateWithoutCameraInput>
    connectOrCreate?: locationCreateOrConnectWithoutCameraInput
    upsert?: locationUpsertWithoutCameraInput
    connect?: locationWhereUniqueInput
    update?: XOR<locationUpdateWithoutCameraInput, locationUncheckedUpdateWithoutCameraInput>
  }

  export type event_guestCreateNestedManyWithoutEventInput = {
    create?: XOR<Enumerable<event_guestCreateWithoutEventInput>, Enumerable<event_guestUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<event_guestCreateOrConnectWithoutEventInput>
    createMany?: event_guestCreateManyEventInputEnvelope
    connect?: Enumerable<event_guestWhereUniqueInput>
  }

  export type event_guestUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<Enumerable<event_guestCreateWithoutEventInput>, Enumerable<event_guestUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<event_guestCreateOrConnectWithoutEventInput>
    createMany?: event_guestCreateManyEventInputEnvelope
    connect?: Enumerable<event_guestWhereUniqueInput>
  }

  export type event_guestUpdateManyWithoutEventNestedInput = {
    create?: XOR<Enumerable<event_guestCreateWithoutEventInput>, Enumerable<event_guestUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<event_guestCreateOrConnectWithoutEventInput>
    upsert?: Enumerable<event_guestUpsertWithWhereUniqueWithoutEventInput>
    createMany?: event_guestCreateManyEventInputEnvelope
    set?: Enumerable<event_guestWhereUniqueInput>
    disconnect?: Enumerable<event_guestWhereUniqueInput>
    delete?: Enumerable<event_guestWhereUniqueInput>
    connect?: Enumerable<event_guestWhereUniqueInput>
    update?: Enumerable<event_guestUpdateWithWhereUniqueWithoutEventInput>
    updateMany?: Enumerable<event_guestUpdateManyWithWhereWithoutEventInput>
    deleteMany?: Enumerable<event_guestScalarWhereInput>
  }

  export type event_guestUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<Enumerable<event_guestCreateWithoutEventInput>, Enumerable<event_guestUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<event_guestCreateOrConnectWithoutEventInput>
    upsert?: Enumerable<event_guestUpsertWithWhereUniqueWithoutEventInput>
    createMany?: event_guestCreateManyEventInputEnvelope
    set?: Enumerable<event_guestWhereUniqueInput>
    disconnect?: Enumerable<event_guestWhereUniqueInput>
    delete?: Enumerable<event_guestWhereUniqueInput>
    connect?: Enumerable<event_guestWhereUniqueInput>
    update?: Enumerable<event_guestUpdateWithWhereUniqueWithoutEventInput>
    updateMany?: Enumerable<event_guestUpdateManyWithWhereWithoutEventInput>
    deleteMany?: Enumerable<event_guestScalarWhereInput>
  }

  export type eventCreateNestedOneWithoutEvent_guestInput = {
    create?: XOR<eventCreateWithoutEvent_guestInput, eventUncheckedCreateWithoutEvent_guestInput>
    connectOrCreate?: eventCreateOrConnectWithoutEvent_guestInput
    connect?: eventWhereUniqueInput
  }

  export type guestCreateNestedOneWithoutEvent_guestInput = {
    create?: XOR<guestCreateWithoutEvent_guestInput, guestUncheckedCreateWithoutEvent_guestInput>
    connectOrCreate?: guestCreateOrConnectWithoutEvent_guestInput
    connect?: guestWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type eventUpdateOneWithoutEvent_guestNestedInput = {
    create?: XOR<eventCreateWithoutEvent_guestInput, eventUncheckedCreateWithoutEvent_guestInput>
    connectOrCreate?: eventCreateOrConnectWithoutEvent_guestInput
    upsert?: eventUpsertWithoutEvent_guestInput
    disconnect?: boolean
    delete?: boolean
    connect?: eventWhereUniqueInput
    update?: XOR<eventUpdateWithoutEvent_guestInput, eventUncheckedUpdateWithoutEvent_guestInput>
  }

  export type guestUpdateOneWithoutEvent_guestNestedInput = {
    create?: XOR<guestCreateWithoutEvent_guestInput, guestUncheckedCreateWithoutEvent_guestInput>
    connectOrCreate?: guestCreateOrConnectWithoutEvent_guestInput
    upsert?: guestUpsertWithoutEvent_guestInput
    disconnect?: boolean
    delete?: boolean
    connect?: guestWhereUniqueInput
    update?: XOR<guestUpdateWithoutEvent_guestInput, guestUncheckedUpdateWithoutEvent_guestInput>
  }

  export type event_guestCreateNestedManyWithoutGuestInput = {
    create?: XOR<Enumerable<event_guestCreateWithoutGuestInput>, Enumerable<event_guestUncheckedCreateWithoutGuestInput>>
    connectOrCreate?: Enumerable<event_guestCreateOrConnectWithoutGuestInput>
    createMany?: event_guestCreateManyGuestInputEnvelope
    connect?: Enumerable<event_guestWhereUniqueInput>
  }

  export type vehicleCreateNestedManyWithoutGuestInput = {
    create?: XOR<Enumerable<vehicleCreateWithoutGuestInput>, Enumerable<vehicleUncheckedCreateWithoutGuestInput>>
    connectOrCreate?: Enumerable<vehicleCreateOrConnectWithoutGuestInput>
    createMany?: vehicleCreateManyGuestInputEnvelope
    connect?: Enumerable<vehicleWhereUniqueInput>
  }

  export type event_guestUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<Enumerable<event_guestCreateWithoutGuestInput>, Enumerable<event_guestUncheckedCreateWithoutGuestInput>>
    connectOrCreate?: Enumerable<event_guestCreateOrConnectWithoutGuestInput>
    createMany?: event_guestCreateManyGuestInputEnvelope
    connect?: Enumerable<event_guestWhereUniqueInput>
  }

  export type vehicleUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<Enumerable<vehicleCreateWithoutGuestInput>, Enumerable<vehicleUncheckedCreateWithoutGuestInput>>
    connectOrCreate?: Enumerable<vehicleCreateOrConnectWithoutGuestInput>
    createMany?: vehicleCreateManyGuestInputEnvelope
    connect?: Enumerable<vehicleWhereUniqueInput>
  }

  export type event_guestUpdateManyWithoutGuestNestedInput = {
    create?: XOR<Enumerable<event_guestCreateWithoutGuestInput>, Enumerable<event_guestUncheckedCreateWithoutGuestInput>>
    connectOrCreate?: Enumerable<event_guestCreateOrConnectWithoutGuestInput>
    upsert?: Enumerable<event_guestUpsertWithWhereUniqueWithoutGuestInput>
    createMany?: event_guestCreateManyGuestInputEnvelope
    set?: Enumerable<event_guestWhereUniqueInput>
    disconnect?: Enumerable<event_guestWhereUniqueInput>
    delete?: Enumerable<event_guestWhereUniqueInput>
    connect?: Enumerable<event_guestWhereUniqueInput>
    update?: Enumerable<event_guestUpdateWithWhereUniqueWithoutGuestInput>
    updateMany?: Enumerable<event_guestUpdateManyWithWhereWithoutGuestInput>
    deleteMany?: Enumerable<event_guestScalarWhereInput>
  }

  export type vehicleUpdateManyWithoutGuestNestedInput = {
    create?: XOR<Enumerable<vehicleCreateWithoutGuestInput>, Enumerable<vehicleUncheckedCreateWithoutGuestInput>>
    connectOrCreate?: Enumerable<vehicleCreateOrConnectWithoutGuestInput>
    upsert?: Enumerable<vehicleUpsertWithWhereUniqueWithoutGuestInput>
    createMany?: vehicleCreateManyGuestInputEnvelope
    set?: Enumerable<vehicleWhereUniqueInput>
    disconnect?: Enumerable<vehicleWhereUniqueInput>
    delete?: Enumerable<vehicleWhereUniqueInput>
    connect?: Enumerable<vehicleWhereUniqueInput>
    update?: Enumerable<vehicleUpdateWithWhereUniqueWithoutGuestInput>
    updateMany?: Enumerable<vehicleUpdateManyWithWhereWithoutGuestInput>
    deleteMany?: Enumerable<vehicleScalarWhereInput>
  }

  export type event_guestUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<Enumerable<event_guestCreateWithoutGuestInput>, Enumerable<event_guestUncheckedCreateWithoutGuestInput>>
    connectOrCreate?: Enumerable<event_guestCreateOrConnectWithoutGuestInput>
    upsert?: Enumerable<event_guestUpsertWithWhereUniqueWithoutGuestInput>
    createMany?: event_guestCreateManyGuestInputEnvelope
    set?: Enumerable<event_guestWhereUniqueInput>
    disconnect?: Enumerable<event_guestWhereUniqueInput>
    delete?: Enumerable<event_guestWhereUniqueInput>
    connect?: Enumerable<event_guestWhereUniqueInput>
    update?: Enumerable<event_guestUpdateWithWhereUniqueWithoutGuestInput>
    updateMany?: Enumerable<event_guestUpdateManyWithWhereWithoutGuestInput>
    deleteMany?: Enumerable<event_guestScalarWhereInput>
  }

  export type vehicleUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<Enumerable<vehicleCreateWithoutGuestInput>, Enumerable<vehicleUncheckedCreateWithoutGuestInput>>
    connectOrCreate?: Enumerable<vehicleCreateOrConnectWithoutGuestInput>
    upsert?: Enumerable<vehicleUpsertWithWhereUniqueWithoutGuestInput>
    createMany?: vehicleCreateManyGuestInputEnvelope
    set?: Enumerable<vehicleWhereUniqueInput>
    disconnect?: Enumerable<vehicleWhereUniqueInput>
    delete?: Enumerable<vehicleWhereUniqueInput>
    connect?: Enumerable<vehicleWhereUniqueInput>
    update?: Enumerable<vehicleUpdateWithWhereUniqueWithoutGuestInput>
    updateMany?: Enumerable<vehicleUpdateManyWithWhereWithoutGuestInput>
    deleteMany?: Enumerable<vehicleScalarWhereInput>
  }

  export type cameraCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<cameraCreateWithoutLocationInput>, Enumerable<cameraUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<cameraCreateOrConnectWithoutLocationInput>
    createMany?: cameraCreateManyLocationInputEnvelope
    connect?: Enumerable<cameraWhereUniqueInput>
  }

  export type organizationCreateNestedOneWithoutLocationInput = {
    create?: XOR<organizationCreateWithoutLocationInput, organizationUncheckedCreateWithoutLocationInput>
    connectOrCreate?: organizationCreateOrConnectWithoutLocationInput
    connect?: organizationWhereUniqueInput
  }

  export type cameraUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<cameraCreateWithoutLocationInput>, Enumerable<cameraUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<cameraCreateOrConnectWithoutLocationInput>
    createMany?: cameraCreateManyLocationInputEnvelope
    connect?: Enumerable<cameraWhereUniqueInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumlocation_connection_typeFieldUpdateOperationsInput = {
    set?: location_connection_type
  }

  export type cameraUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<cameraCreateWithoutLocationInput>, Enumerable<cameraUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<cameraCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<cameraUpsertWithWhereUniqueWithoutLocationInput>
    createMany?: cameraCreateManyLocationInputEnvelope
    set?: Enumerable<cameraWhereUniqueInput>
    disconnect?: Enumerable<cameraWhereUniqueInput>
    delete?: Enumerable<cameraWhereUniqueInput>
    connect?: Enumerable<cameraWhereUniqueInput>
    update?: Enumerable<cameraUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<cameraUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<cameraScalarWhereInput>
  }

  export type organizationUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<organizationCreateWithoutLocationInput, organizationUncheckedCreateWithoutLocationInput>
    connectOrCreate?: organizationCreateOrConnectWithoutLocationInput
    upsert?: organizationUpsertWithoutLocationInput
    connect?: organizationWhereUniqueInput
    update?: XOR<organizationUpdateWithoutLocationInput, organizationUncheckedUpdateWithoutLocationInput>
  }

  export type cameraUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<cameraCreateWithoutLocationInput>, Enumerable<cameraUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<cameraCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<cameraUpsertWithWhereUniqueWithoutLocationInput>
    createMany?: cameraCreateManyLocationInputEnvelope
    set?: Enumerable<cameraWhereUniqueInput>
    disconnect?: Enumerable<cameraWhereUniqueInput>
    delete?: Enumerable<cameraWhereUniqueInput>
    connect?: Enumerable<cameraWhereUniqueInput>
    update?: Enumerable<cameraUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<cameraUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<cameraScalarWhereInput>
  }

  export type organizationCreatestatusesInput = {
    set: Enumerable<organization_status>
  }

  export type organizationCreatestatuses2Input = {
    set: Enumerable<string>
  }

  export type api_keyCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<api_keyCreateWithoutOrganizationInput>, Enumerable<api_keyUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<api_keyCreateOrConnectWithoutOrganizationInput>
    createMany?: api_keyCreateManyOrganizationInputEnvelope
    connect?: Enumerable<api_keyWhereUniqueInput>
  }

  export type locationCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<locationCreateWithoutOrganizationInput>, Enumerable<locationUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<locationCreateOrConnectWithoutOrganizationInput>
    createMany?: locationCreateManyOrganizationInputEnvelope
    connect?: Enumerable<locationWhereUniqueInput>
  }

  export type organization_invitationCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<organization_invitationCreateWithoutOrganizationInput>, Enumerable<organization_invitationUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<organization_invitationCreateOrConnectWithoutOrganizationInput>
    createMany?: organization_invitationCreateManyOrganizationInputEnvelope
    connect?: Enumerable<organization_invitationWhereUniqueInput>
  }

  export type organization_memberCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<organization_memberCreateWithoutOrganizationInput>, Enumerable<organization_memberUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<organization_memberCreateOrConnectWithoutOrganizationInput>
    createMany?: organization_memberCreateManyOrganizationInputEnvelope
    connect?: Enumerable<organization_memberWhereUniqueInput>
  }

  export type api_keyUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<api_keyCreateWithoutOrganizationInput>, Enumerable<api_keyUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<api_keyCreateOrConnectWithoutOrganizationInput>
    createMany?: api_keyCreateManyOrganizationInputEnvelope
    connect?: Enumerable<api_keyWhereUniqueInput>
  }

  export type locationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<locationCreateWithoutOrganizationInput>, Enumerable<locationUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<locationCreateOrConnectWithoutOrganizationInput>
    createMany?: locationCreateManyOrganizationInputEnvelope
    connect?: Enumerable<locationWhereUniqueInput>
  }

  export type organization_invitationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<organization_invitationCreateWithoutOrganizationInput>, Enumerable<organization_invitationUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<organization_invitationCreateOrConnectWithoutOrganizationInput>
    createMany?: organization_invitationCreateManyOrganizationInputEnvelope
    connect?: Enumerable<organization_invitationWhereUniqueInput>
  }

  export type organization_memberUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<organization_memberCreateWithoutOrganizationInput>, Enumerable<organization_memberUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<organization_memberCreateOrConnectWithoutOrganizationInput>
    createMany?: organization_memberCreateManyOrganizationInputEnvelope
    connect?: Enumerable<organization_memberWhereUniqueInput>
  }

  export type Enumorganization_statusFieldUpdateOperationsInput = {
    set?: organization_status
  }

  export type organizationUpdatestatusesInput = {
    set?: Enumerable<organization_status>
    push?: Enumerable<organization_status>
  }

  export type organizationUpdatestatuses2Input = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type api_keyUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<api_keyCreateWithoutOrganizationInput>, Enumerable<api_keyUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<api_keyCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<api_keyUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: api_keyCreateManyOrganizationInputEnvelope
    set?: Enumerable<api_keyWhereUniqueInput>
    disconnect?: Enumerable<api_keyWhereUniqueInput>
    delete?: Enumerable<api_keyWhereUniqueInput>
    connect?: Enumerable<api_keyWhereUniqueInput>
    update?: Enumerable<api_keyUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<api_keyUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<api_keyScalarWhereInput>
  }

  export type locationUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<locationCreateWithoutOrganizationInput>, Enumerable<locationUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<locationCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<locationUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: locationCreateManyOrganizationInputEnvelope
    set?: Enumerable<locationWhereUniqueInput>
    disconnect?: Enumerable<locationWhereUniqueInput>
    delete?: Enumerable<locationWhereUniqueInput>
    connect?: Enumerable<locationWhereUniqueInput>
    update?: Enumerable<locationUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<locationUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<locationScalarWhereInput>
  }

  export type organization_invitationUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<organization_invitationCreateWithoutOrganizationInput>, Enumerable<organization_invitationUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<organization_invitationCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<organization_invitationUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: organization_invitationCreateManyOrganizationInputEnvelope
    set?: Enumerable<organization_invitationWhereUniqueInput>
    disconnect?: Enumerable<organization_invitationWhereUniqueInput>
    delete?: Enumerable<organization_invitationWhereUniqueInput>
    connect?: Enumerable<organization_invitationWhereUniqueInput>
    update?: Enumerable<organization_invitationUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<organization_invitationUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<organization_invitationScalarWhereInput>
  }

  export type organization_memberUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<organization_memberCreateWithoutOrganizationInput>, Enumerable<organization_memberUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<organization_memberCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<organization_memberUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: organization_memberCreateManyOrganizationInputEnvelope
    set?: Enumerable<organization_memberWhereUniqueInput>
    disconnect?: Enumerable<organization_memberWhereUniqueInput>
    delete?: Enumerable<organization_memberWhereUniqueInput>
    connect?: Enumerable<organization_memberWhereUniqueInput>
    update?: Enumerable<organization_memberUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<organization_memberUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<organization_memberScalarWhereInput>
  }

  export type api_keyUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<api_keyCreateWithoutOrganizationInput>, Enumerable<api_keyUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<api_keyCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<api_keyUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: api_keyCreateManyOrganizationInputEnvelope
    set?: Enumerable<api_keyWhereUniqueInput>
    disconnect?: Enumerable<api_keyWhereUniqueInput>
    delete?: Enumerable<api_keyWhereUniqueInput>
    connect?: Enumerable<api_keyWhereUniqueInput>
    update?: Enumerable<api_keyUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<api_keyUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<api_keyScalarWhereInput>
  }

  export type locationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<locationCreateWithoutOrganizationInput>, Enumerable<locationUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<locationCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<locationUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: locationCreateManyOrganizationInputEnvelope
    set?: Enumerable<locationWhereUniqueInput>
    disconnect?: Enumerable<locationWhereUniqueInput>
    delete?: Enumerable<locationWhereUniqueInput>
    connect?: Enumerable<locationWhereUniqueInput>
    update?: Enumerable<locationUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<locationUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<locationScalarWhereInput>
  }

  export type organization_invitationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<organization_invitationCreateWithoutOrganizationInput>, Enumerable<organization_invitationUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<organization_invitationCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<organization_invitationUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: organization_invitationCreateManyOrganizationInputEnvelope
    set?: Enumerable<organization_invitationWhereUniqueInput>
    disconnect?: Enumerable<organization_invitationWhereUniqueInput>
    delete?: Enumerable<organization_invitationWhereUniqueInput>
    connect?: Enumerable<organization_invitationWhereUniqueInput>
    update?: Enumerable<organization_invitationUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<organization_invitationUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<organization_invitationScalarWhereInput>
  }

  export type organization_memberUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<organization_memberCreateWithoutOrganizationInput>, Enumerable<organization_memberUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<organization_memberCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<organization_memberUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: organization_memberCreateManyOrganizationInputEnvelope
    set?: Enumerable<organization_memberWhereUniqueInput>
    disconnect?: Enumerable<organization_memberWhereUniqueInput>
    delete?: Enumerable<organization_memberWhereUniqueInput>
    connect?: Enumerable<organization_memberWhereUniqueInput>
    update?: Enumerable<organization_memberUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<organization_memberUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<organization_memberScalarWhereInput>
  }

  export type organizationCreateNestedOneWithoutOrganization_invitationInput = {
    create?: XOR<organizationCreateWithoutOrganization_invitationInput, organizationUncheckedCreateWithoutOrganization_invitationInput>
    connectOrCreate?: organizationCreateOrConnectWithoutOrganization_invitationInput
    connect?: organizationWhereUniqueInput
  }

  export type Enumorganization_member_roleFieldUpdateOperationsInput = {
    set?: organization_member_role
  }

  export type organizationUpdateOneRequiredWithoutOrganization_invitationNestedInput = {
    create?: XOR<organizationCreateWithoutOrganization_invitationInput, organizationUncheckedCreateWithoutOrganization_invitationInput>
    connectOrCreate?: organizationCreateOrConnectWithoutOrganization_invitationInput
    upsert?: organizationUpsertWithoutOrganization_invitationInput
    connect?: organizationWhereUniqueInput
    update?: XOR<organizationUpdateWithoutOrganization_invitationInput, organizationUncheckedUpdateWithoutOrganization_invitationInput>
  }

  export type organizationCreateNestedOneWithoutOrganization_memberInput = {
    create?: XOR<organizationCreateWithoutOrganization_memberInput, organizationUncheckedCreateWithoutOrganization_memberInput>
    connectOrCreate?: organizationCreateOrConnectWithoutOrganization_memberInput
    connect?: organizationWhereUniqueInput
  }

  export type organizationUpdateOneRequiredWithoutOrganization_memberNestedInput = {
    create?: XOR<organizationCreateWithoutOrganization_memberInput, organizationUncheckedCreateWithoutOrganization_memberInput>
    connectOrCreate?: organizationCreateOrConnectWithoutOrganization_memberInput
    upsert?: organizationUpsertWithoutOrganization_memberInput
    connect?: organizationWhereUniqueInput
    update?: XOR<organizationUpdateWithoutOrganization_memberInput, organizationUncheckedUpdateWithoutOrganization_memberInput>
  }

  export type parking_spaceCreateNestedManyWithoutParking_lotInput = {
    create?: XOR<Enumerable<parking_spaceCreateWithoutParking_lotInput>, Enumerable<parking_spaceUncheckedCreateWithoutParking_lotInput>>
    connectOrCreate?: Enumerable<parking_spaceCreateOrConnectWithoutParking_lotInput>
    createMany?: parking_spaceCreateManyParking_lotInputEnvelope
    connect?: Enumerable<parking_spaceWhereUniqueInput>
  }

  export type parking_spaceUncheckedCreateNestedManyWithoutParking_lotInput = {
    create?: XOR<Enumerable<parking_spaceCreateWithoutParking_lotInput>, Enumerable<parking_spaceUncheckedCreateWithoutParking_lotInput>>
    connectOrCreate?: Enumerable<parking_spaceCreateOrConnectWithoutParking_lotInput>
    createMany?: parking_spaceCreateManyParking_lotInputEnvelope
    connect?: Enumerable<parking_spaceWhereUniqueInput>
  }

  export type parking_spaceUpdateManyWithoutParking_lotNestedInput = {
    create?: XOR<Enumerable<parking_spaceCreateWithoutParking_lotInput>, Enumerable<parking_spaceUncheckedCreateWithoutParking_lotInput>>
    connectOrCreate?: Enumerable<parking_spaceCreateOrConnectWithoutParking_lotInput>
    upsert?: Enumerable<parking_spaceUpsertWithWhereUniqueWithoutParking_lotInput>
    createMany?: parking_spaceCreateManyParking_lotInputEnvelope
    set?: Enumerable<parking_spaceWhereUniqueInput>
    disconnect?: Enumerable<parking_spaceWhereUniqueInput>
    delete?: Enumerable<parking_spaceWhereUniqueInput>
    connect?: Enumerable<parking_spaceWhereUniqueInput>
    update?: Enumerable<parking_spaceUpdateWithWhereUniqueWithoutParking_lotInput>
    updateMany?: Enumerable<parking_spaceUpdateManyWithWhereWithoutParking_lotInput>
    deleteMany?: Enumerable<parking_spaceScalarWhereInput>
  }

  export type parking_spaceUncheckedUpdateManyWithoutParking_lotNestedInput = {
    create?: XOR<Enumerable<parking_spaceCreateWithoutParking_lotInput>, Enumerable<parking_spaceUncheckedCreateWithoutParking_lotInput>>
    connectOrCreate?: Enumerable<parking_spaceCreateOrConnectWithoutParking_lotInput>
    upsert?: Enumerable<parking_spaceUpsertWithWhereUniqueWithoutParking_lotInput>
    createMany?: parking_spaceCreateManyParking_lotInputEnvelope
    set?: Enumerable<parking_spaceWhereUniqueInput>
    disconnect?: Enumerable<parking_spaceWhereUniqueInput>
    delete?: Enumerable<parking_spaceWhereUniqueInput>
    connect?: Enumerable<parking_spaceWhereUniqueInput>
    update?: Enumerable<parking_spaceUpdateWithWhereUniqueWithoutParking_lotInput>
    updateMany?: Enumerable<parking_spaceUpdateManyWithWhereWithoutParking_lotInput>
    deleteMany?: Enumerable<parking_spaceScalarWhereInput>
  }

  export type parking_lotCreateNestedOneWithoutParking_spaceInput = {
    create?: XOR<parking_lotCreateWithoutParking_spaceInput, parking_lotUncheckedCreateWithoutParking_spaceInput>
    connectOrCreate?: parking_lotCreateOrConnectWithoutParking_spaceInput
    connect?: parking_lotWhereUniqueInput
  }

  export type vehicleCreateNestedOneWithoutParking_spaceInput = {
    create?: XOR<vehicleCreateWithoutParking_spaceInput, vehicleUncheckedCreateWithoutParking_spaceInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutParking_spaceInput
    connect?: vehicleWhereUniqueInput
  }

  export type parking_space_activity_logCreateNestedManyWithoutParking_spaceInput = {
    create?: XOR<Enumerable<parking_space_activity_logCreateWithoutParking_spaceInput>, Enumerable<parking_space_activity_logUncheckedCreateWithoutParking_spaceInput>>
    connectOrCreate?: Enumerable<parking_space_activity_logCreateOrConnectWithoutParking_spaceInput>
    createMany?: parking_space_activity_logCreateManyParking_spaceInputEnvelope
    connect?: Enumerable<parking_space_activity_logWhereUniqueInput>
  }

  export type parking_space_activity_logUncheckedCreateNestedManyWithoutParking_spaceInput = {
    create?: XOR<Enumerable<parking_space_activity_logCreateWithoutParking_spaceInput>, Enumerable<parking_space_activity_logUncheckedCreateWithoutParking_spaceInput>>
    connectOrCreate?: Enumerable<parking_space_activity_logCreateOrConnectWithoutParking_spaceInput>
    createMany?: parking_space_activity_logCreateManyParking_spaceInputEnvelope
    connect?: Enumerable<parking_space_activity_logWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumparking_space_typeFieldUpdateOperationsInput = {
    set?: parking_space_type
  }

  export type Enumparking_space_statusFieldUpdateOperationsInput = {
    set?: parking_space_status
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type parking_lotUpdateOneWithoutParking_spaceNestedInput = {
    create?: XOR<parking_lotCreateWithoutParking_spaceInput, parking_lotUncheckedCreateWithoutParking_spaceInput>
    connectOrCreate?: parking_lotCreateOrConnectWithoutParking_spaceInput
    upsert?: parking_lotUpsertWithoutParking_spaceInput
    disconnect?: boolean
    delete?: boolean
    connect?: parking_lotWhereUniqueInput
    update?: XOR<parking_lotUpdateWithoutParking_spaceInput, parking_lotUncheckedUpdateWithoutParking_spaceInput>
  }

  export type vehicleUpdateOneWithoutParking_spaceNestedInput = {
    create?: XOR<vehicleCreateWithoutParking_spaceInput, vehicleUncheckedCreateWithoutParking_spaceInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutParking_spaceInput
    upsert?: vehicleUpsertWithoutParking_spaceInput
    disconnect?: boolean
    delete?: boolean
    connect?: vehicleWhereUniqueInput
    update?: XOR<vehicleUpdateWithoutParking_spaceInput, vehicleUncheckedUpdateWithoutParking_spaceInput>
  }

  export type parking_space_activity_logUpdateManyWithoutParking_spaceNestedInput = {
    create?: XOR<Enumerable<parking_space_activity_logCreateWithoutParking_spaceInput>, Enumerable<parking_space_activity_logUncheckedCreateWithoutParking_spaceInput>>
    connectOrCreate?: Enumerable<parking_space_activity_logCreateOrConnectWithoutParking_spaceInput>
    upsert?: Enumerable<parking_space_activity_logUpsertWithWhereUniqueWithoutParking_spaceInput>
    createMany?: parking_space_activity_logCreateManyParking_spaceInputEnvelope
    set?: Enumerable<parking_space_activity_logWhereUniqueInput>
    disconnect?: Enumerable<parking_space_activity_logWhereUniqueInput>
    delete?: Enumerable<parking_space_activity_logWhereUniqueInput>
    connect?: Enumerable<parking_space_activity_logWhereUniqueInput>
    update?: Enumerable<parking_space_activity_logUpdateWithWhereUniqueWithoutParking_spaceInput>
    updateMany?: Enumerable<parking_space_activity_logUpdateManyWithWhereWithoutParking_spaceInput>
    deleteMany?: Enumerable<parking_space_activity_logScalarWhereInput>
  }

  export type parking_space_activity_logUncheckedUpdateManyWithoutParking_spaceNestedInput = {
    create?: XOR<Enumerable<parking_space_activity_logCreateWithoutParking_spaceInput>, Enumerable<parking_space_activity_logUncheckedCreateWithoutParking_spaceInput>>
    connectOrCreate?: Enumerable<parking_space_activity_logCreateOrConnectWithoutParking_spaceInput>
    upsert?: Enumerable<parking_space_activity_logUpsertWithWhereUniqueWithoutParking_spaceInput>
    createMany?: parking_space_activity_logCreateManyParking_spaceInputEnvelope
    set?: Enumerable<parking_space_activity_logWhereUniqueInput>
    disconnect?: Enumerable<parking_space_activity_logWhereUniqueInput>
    delete?: Enumerable<parking_space_activity_logWhereUniqueInput>
    connect?: Enumerable<parking_space_activity_logWhereUniqueInput>
    update?: Enumerable<parking_space_activity_logUpdateWithWhereUniqueWithoutParking_spaceInput>
    updateMany?: Enumerable<parking_space_activity_logUpdateManyWithWhereWithoutParking_spaceInput>
    deleteMany?: Enumerable<parking_space_activity_logScalarWhereInput>
  }

  export type parking_spaceCreateNestedOneWithoutParking_space_activity_logInput = {
    create?: XOR<parking_spaceCreateWithoutParking_space_activity_logInput, parking_spaceUncheckedCreateWithoutParking_space_activity_logInput>
    connectOrCreate?: parking_spaceCreateOrConnectWithoutParking_space_activity_logInput
    connect?: parking_spaceWhereUniqueInput
  }

  export type parking_spaceUpdateOneRequiredWithoutParking_space_activity_logNestedInput = {
    create?: XOR<parking_spaceCreateWithoutParking_space_activity_logInput, parking_spaceUncheckedCreateWithoutParking_space_activity_logInput>
    connectOrCreate?: parking_spaceCreateOrConnectWithoutParking_space_activity_logInput
    upsert?: parking_spaceUpsertWithoutParking_space_activity_logInput
    connect?: parking_spaceWhereUniqueInput
    update?: XOR<parking_spaceUpdateWithoutParking_space_activity_logInput, parking_spaceUncheckedUpdateWithoutParking_space_activity_logInput>
  }

  export type parking_spaceCreateNestedManyWithoutVehicleInput = {
    create?: XOR<Enumerable<parking_spaceCreateWithoutVehicleInput>, Enumerable<parking_spaceUncheckedCreateWithoutVehicleInput>>
    connectOrCreate?: Enumerable<parking_spaceCreateOrConnectWithoutVehicleInput>
    createMany?: parking_spaceCreateManyVehicleInputEnvelope
    connect?: Enumerable<parking_spaceWhereUniqueInput>
  }

  export type guestCreateNestedOneWithoutVehicleInput = {
    create?: XOR<guestCreateWithoutVehicleInput, guestUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: guestCreateOrConnectWithoutVehicleInput
    connect?: guestWhereUniqueInput
  }

  export type parking_spaceUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<Enumerable<parking_spaceCreateWithoutVehicleInput>, Enumerable<parking_spaceUncheckedCreateWithoutVehicleInput>>
    connectOrCreate?: Enumerable<parking_spaceCreateOrConnectWithoutVehicleInput>
    createMany?: parking_spaceCreateManyVehicleInputEnvelope
    connect?: Enumerable<parking_spaceWhereUniqueInput>
  }

  export type NullableEnumVehicleColorFieldUpdateOperationsInput = {
    set?: VehicleColor | null
  }

  export type parking_spaceUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<Enumerable<parking_spaceCreateWithoutVehicleInput>, Enumerable<parking_spaceUncheckedCreateWithoutVehicleInput>>
    connectOrCreate?: Enumerable<parking_spaceCreateOrConnectWithoutVehicleInput>
    upsert?: Enumerable<parking_spaceUpsertWithWhereUniqueWithoutVehicleInput>
    createMany?: parking_spaceCreateManyVehicleInputEnvelope
    set?: Enumerable<parking_spaceWhereUniqueInput>
    disconnect?: Enumerable<parking_spaceWhereUniqueInput>
    delete?: Enumerable<parking_spaceWhereUniqueInput>
    connect?: Enumerable<parking_spaceWhereUniqueInput>
    update?: Enumerable<parking_spaceUpdateWithWhereUniqueWithoutVehicleInput>
    updateMany?: Enumerable<parking_spaceUpdateManyWithWhereWithoutVehicleInput>
    deleteMany?: Enumerable<parking_spaceScalarWhereInput>
  }

  export type guestUpdateOneWithoutVehicleNestedInput = {
    create?: XOR<guestCreateWithoutVehicleInput, guestUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: guestCreateOrConnectWithoutVehicleInput
    upsert?: guestUpsertWithoutVehicleInput
    disconnect?: boolean
    delete?: boolean
    connect?: guestWhereUniqueInput
    update?: XOR<guestUpdateWithoutVehicleInput, guestUncheckedUpdateWithoutVehicleInput>
  }

  export type parking_spaceUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<Enumerable<parking_spaceCreateWithoutVehicleInput>, Enumerable<parking_spaceUncheckedCreateWithoutVehicleInput>>
    connectOrCreate?: Enumerable<parking_spaceCreateOrConnectWithoutVehicleInput>
    upsert?: Enumerable<parking_spaceUpsertWithWhereUniqueWithoutVehicleInput>
    createMany?: parking_spaceCreateManyVehicleInputEnvelope
    set?: Enumerable<parking_spaceWhereUniqueInput>
    disconnect?: Enumerable<parking_spaceWhereUniqueInput>
    delete?: Enumerable<parking_spaceWhereUniqueInput>
    connect?: Enumerable<parking_spaceWhereUniqueInput>
    update?: Enumerable<parking_spaceUpdateWithWhereUniqueWithoutVehicleInput>
    updateMany?: Enumerable<parking_spaceUpdateManyWithWhereWithoutVehicleInput>
    deleteMany?: Enumerable<parking_spaceScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumservice_throughput_unit_of_timeNullableFilter = {
    equals?: service_throughput_unit_of_time | null
    in?: Enumerable<service_throughput_unit_of_time> | null
    notIn?: Enumerable<service_throughput_unit_of_time> | null
    not?: NestedEnumservice_throughput_unit_of_timeNullableFilter | service_throughput_unit_of_time | null
  }

  export type NestedEnumcamera_viewing_angleFilter = {
    equals?: camera_viewing_angle
    in?: Enumerable<camera_viewing_angle>
    notIn?: Enumerable<camera_viewing_angle>
    not?: NestedEnumcamera_viewing_angleFilter | camera_viewing_angle
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumservice_throughput_unit_of_timeNullableWithAggregatesFilter = {
    equals?: service_throughput_unit_of_time | null
    in?: Enumerable<service_throughput_unit_of_time> | null
    notIn?: Enumerable<service_throughput_unit_of_time> | null
    not?: NestedEnumservice_throughput_unit_of_timeNullableWithAggregatesFilter | service_throughput_unit_of_time | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumservice_throughput_unit_of_timeNullableFilter
    _max?: NestedEnumservice_throughput_unit_of_timeNullableFilter
  }

  export type NestedEnumcamera_viewing_angleWithAggregatesFilter = {
    equals?: camera_viewing_angle
    in?: Enumerable<camera_viewing_angle>
    notIn?: Enumerable<camera_viewing_angle>
    not?: NestedEnumcamera_viewing_angleWithAggregatesFilter | camera_viewing_angle
    _count?: NestedIntFilter
    _min?: NestedEnumcamera_viewing_angleFilter
    _max?: NestedEnumcamera_viewing_angleFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumlocation_connection_typeFilter = {
    equals?: location_connection_type
    in?: Enumerable<location_connection_type>
    notIn?: Enumerable<location_connection_type>
    not?: NestedEnumlocation_connection_typeFilter | location_connection_type
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumlocation_connection_typeWithAggregatesFilter = {
    equals?: location_connection_type
    in?: Enumerable<location_connection_type>
    notIn?: Enumerable<location_connection_type>
    not?: NestedEnumlocation_connection_typeWithAggregatesFilter | location_connection_type
    _count?: NestedIntFilter
    _min?: NestedEnumlocation_connection_typeFilter
    _max?: NestedEnumlocation_connection_typeFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedEnumorganization_statusFilter = {
    equals?: organization_status
    in?: Enumerable<organization_status>
    notIn?: Enumerable<organization_status>
    not?: NestedEnumorganization_statusFilter | organization_status
  }

  export type NestedEnumorganization_statusWithAggregatesFilter = {
    equals?: organization_status
    in?: Enumerable<organization_status>
    notIn?: Enumerable<organization_status>
    not?: NestedEnumorganization_statusWithAggregatesFilter | organization_status
    _count?: NestedIntFilter
    _min?: NestedEnumorganization_statusFilter
    _max?: NestedEnumorganization_statusFilter
  }

  export type NestedEnumorganization_member_roleFilter = {
    equals?: organization_member_role
    in?: Enumerable<organization_member_role>
    notIn?: Enumerable<organization_member_role>
    not?: NestedEnumorganization_member_roleFilter | organization_member_role
  }

  export type NestedEnumorganization_member_roleWithAggregatesFilter = {
    equals?: organization_member_role
    in?: Enumerable<organization_member_role>
    notIn?: Enumerable<organization_member_role>
    not?: NestedEnumorganization_member_roleWithAggregatesFilter | organization_member_role
    _count?: NestedIntFilter
    _min?: NestedEnumorganization_member_roleFilter
    _max?: NestedEnumorganization_member_roleFilter
  }

  export type NestedEnumparking_space_typeFilter = {
    equals?: parking_space_type
    in?: Enumerable<parking_space_type>
    notIn?: Enumerable<parking_space_type>
    not?: NestedEnumparking_space_typeFilter | parking_space_type
  }

  export type NestedEnumparking_space_statusFilter = {
    equals?: parking_space_status
    in?: Enumerable<parking_space_status>
    notIn?: Enumerable<parking_space_status>
    not?: NestedEnumparking_space_statusFilter | parking_space_status
  }

  export type NestedBytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumparking_space_typeWithAggregatesFilter = {
    equals?: parking_space_type
    in?: Enumerable<parking_space_type>
    notIn?: Enumerable<parking_space_type>
    not?: NestedEnumparking_space_typeWithAggregatesFilter | parking_space_type
    _count?: NestedIntFilter
    _min?: NestedEnumparking_space_typeFilter
    _max?: NestedEnumparking_space_typeFilter
  }

  export type NestedEnumparking_space_statusWithAggregatesFilter = {
    equals?: parking_space_status
    in?: Enumerable<parking_space_status>
    notIn?: Enumerable<parking_space_status>
    not?: NestedEnumparking_space_statusWithAggregatesFilter | parking_space_status
    _count?: NestedIntFilter
    _min?: NestedEnumparking_space_statusFilter
    _max?: NestedEnumparking_space_statusFilter
  }

  export type NestedBytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type NestedEnumVehicleColorNullableFilter = {
    equals?: VehicleColor | null
    in?: Enumerable<VehicleColor> | null
    notIn?: Enumerable<VehicleColor> | null
    not?: NestedEnumVehicleColorNullableFilter | VehicleColor | null
  }

  export type NestedEnumVehicleColorNullableWithAggregatesFilter = {
    equals?: VehicleColor | null
    in?: Enumerable<VehicleColor> | null
    notIn?: Enumerable<VehicleColor> | null
    not?: NestedEnumVehicleColorNullableWithAggregatesFilter | VehicleColor | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumVehicleColorNullableFilter
    _max?: NestedEnumVehicleColorNullableFilter
  }

  export type organizationCreateWithoutApi_keyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    subdomain: string
    stripeCustomerId?: string | null
    status?: organization_status
    statuses?: organizationCreatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationCreatestatuses2Input | Enumerable<string>
    location?: locationCreateNestedManyWithoutOrganizationInput
    organization_invitation?: organization_invitationCreateNestedManyWithoutOrganizationInput
    organization_member?: organization_memberCreateNestedManyWithoutOrganizationInput
  }

  export type organizationUncheckedCreateWithoutApi_keyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    subdomain: string
    stripeCustomerId?: string | null
    status?: organization_status
    statuses?: organizationCreatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationCreatestatuses2Input | Enumerable<string>
    location?: locationUncheckedCreateNestedManyWithoutOrganizationInput
    organization_invitation?: organization_invitationUncheckedCreateNestedManyWithoutOrganizationInput
    organization_member?: organization_memberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationCreateOrConnectWithoutApi_keyInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutApi_keyInput, organizationUncheckedCreateWithoutApi_keyInput>
  }

  export type organizationUpsertWithoutApi_keyInput = {
    update: XOR<organizationUpdateWithoutApi_keyInput, organizationUncheckedUpdateWithoutApi_keyInput>
    create: XOR<organizationCreateWithoutApi_keyInput, organizationUncheckedCreateWithoutApi_keyInput>
  }

  export type organizationUpdateWithoutApi_keyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumorganization_statusFieldUpdateOperationsInput | organization_status
    statuses?: organizationUpdatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationUpdatestatuses2Input | Enumerable<string>
    location?: locationUpdateManyWithoutOrganizationNestedInput
    organization_invitation?: organization_invitationUpdateManyWithoutOrganizationNestedInput
    organization_member?: organization_memberUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationUncheckedUpdateWithoutApi_keyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumorganization_statusFieldUpdateOperationsInput | organization_status
    statuses?: organizationUpdatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationUpdatestatuses2Input | Enumerable<string>
    location?: locationUncheckedUpdateManyWithoutOrganizationNestedInput
    organization_invitation?: organization_invitationUncheckedUpdateManyWithoutOrganizationNestedInput
    organization_member?: organization_memberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type locationCreateWithoutCameraInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    number?: number
    serialNumber?: string | null
    connectionType: location_connection_type
    organization: organizationCreateNestedOneWithoutLocationInput
  }

  export type locationUncheckedCreateWithoutCameraInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    number?: number
    serialNumber?: string | null
    connectionType: location_connection_type
    organizationId: string
  }

  export type locationCreateOrConnectWithoutCameraInput = {
    where: locationWhereUniqueInput
    create: XOR<locationCreateWithoutCameraInput, locationUncheckedCreateWithoutCameraInput>
  }

  export type locationUpsertWithoutCameraInput = {
    update: XOR<locationUpdateWithoutCameraInput, locationUncheckedUpdateWithoutCameraInput>
    create: XOR<locationCreateWithoutCameraInput, locationUncheckedCreateWithoutCameraInput>
  }

  export type locationUpdateWithoutCameraInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: Enumlocation_connection_typeFieldUpdateOperationsInput | location_connection_type
    organization?: organizationUpdateOneRequiredWithoutLocationNestedInput
  }

  export type locationUncheckedUpdateWithoutCameraInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: Enumlocation_connection_typeFieldUpdateOperationsInput | location_connection_type
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type event_guestCreateWithoutEventInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    checkedInAt?: Date | string | null
    guest?: guestCreateNestedOneWithoutEvent_guestInput
  }

  export type event_guestUncheckedCreateWithoutEventInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    checkedInAt?: Date | string | null
    guestId?: string | null
  }

  export type event_guestCreateOrConnectWithoutEventInput = {
    where: event_guestWhereUniqueInput
    create: XOR<event_guestCreateWithoutEventInput, event_guestUncheckedCreateWithoutEventInput>
  }

  export type event_guestCreateManyEventInputEnvelope = {
    data: Enumerable<event_guestCreateManyEventInput>
    skipDuplicates?: boolean
  }

  export type event_guestUpsertWithWhereUniqueWithoutEventInput = {
    where: event_guestWhereUniqueInput
    update: XOR<event_guestUpdateWithoutEventInput, event_guestUncheckedUpdateWithoutEventInput>
    create: XOR<event_guestCreateWithoutEventInput, event_guestUncheckedCreateWithoutEventInput>
  }

  export type event_guestUpdateWithWhereUniqueWithoutEventInput = {
    where: event_guestWhereUniqueInput
    data: XOR<event_guestUpdateWithoutEventInput, event_guestUncheckedUpdateWithoutEventInput>
  }

  export type event_guestUpdateManyWithWhereWithoutEventInput = {
    where: event_guestScalarWhereInput
    data: XOR<event_guestUpdateManyMutationInput, event_guestUncheckedUpdateManyWithoutEvent_guestInput>
  }

  export type event_guestScalarWhereInput = {
    AND?: Enumerable<event_guestScalarWhereInput>
    OR?: Enumerable<event_guestScalarWhereInput>
    NOT?: Enumerable<event_guestScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    checkedInAt?: DateTimeNullableFilter | Date | string | null
    guestId?: StringNullableFilter | string | null
    eventId?: StringNullableFilter | string | null
  }

  export type eventCreateWithoutEvent_guestInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    start: Date | string
    end: Date | string
    organizationId: string
    locationId: string
  }

  export type eventUncheckedCreateWithoutEvent_guestInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    start: Date | string
    end: Date | string
    organizationId: string
    locationId: string
  }

  export type eventCreateOrConnectWithoutEvent_guestInput = {
    where: eventWhereUniqueInput
    create: XOR<eventCreateWithoutEvent_guestInput, eventUncheckedCreateWithoutEvent_guestInput>
  }

  export type guestCreateWithoutEvent_guestInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    organizationId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    company?: string | null
    companyPosition?: string | null
    vehicle?: vehicleCreateNestedManyWithoutGuestInput
  }

  export type guestUncheckedCreateWithoutEvent_guestInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    organizationId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    company?: string | null
    companyPosition?: string | null
    vehicle?: vehicleUncheckedCreateNestedManyWithoutGuestInput
  }

  export type guestCreateOrConnectWithoutEvent_guestInput = {
    where: guestWhereUniqueInput
    create: XOR<guestCreateWithoutEvent_guestInput, guestUncheckedCreateWithoutEvent_guestInput>
  }

  export type eventUpsertWithoutEvent_guestInput = {
    update: XOR<eventUpdateWithoutEvent_guestInput, eventUncheckedUpdateWithoutEvent_guestInput>
    create: XOR<eventCreateWithoutEvent_guestInput, eventUncheckedCreateWithoutEvent_guestInput>
  }

  export type eventUpdateWithoutEvent_guestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type eventUncheckedUpdateWithoutEvent_guestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type guestUpsertWithoutEvent_guestInput = {
    update: XOR<guestUpdateWithoutEvent_guestInput, guestUncheckedUpdateWithoutEvent_guestInput>
    create: XOR<guestCreateWithoutEvent_guestInput, guestUncheckedCreateWithoutEvent_guestInput>
  }

  export type guestUpdateWithoutEvent_guestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyPosition?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle?: vehicleUpdateManyWithoutGuestNestedInput
  }

  export type guestUncheckedUpdateWithoutEvent_guestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyPosition?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle?: vehicleUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type event_guestCreateWithoutGuestInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    checkedInAt?: Date | string | null
    event?: eventCreateNestedOneWithoutEvent_guestInput
  }

  export type event_guestUncheckedCreateWithoutGuestInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    checkedInAt?: Date | string | null
    eventId?: string | null
  }

  export type event_guestCreateOrConnectWithoutGuestInput = {
    where: event_guestWhereUniqueInput
    create: XOR<event_guestCreateWithoutGuestInput, event_guestUncheckedCreateWithoutGuestInput>
  }

  export type event_guestCreateManyGuestInputEnvelope = {
    data: Enumerable<event_guestCreateManyGuestInput>
    skipDuplicates?: boolean
  }

  export type vehicleCreateWithoutGuestInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    year?: number | null
    make?: string | null
    model?: string | null
    color?: VehicleColor | null
    licensePlate: string
    parking_space?: parking_spaceCreateNestedManyWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutGuestInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    year?: number | null
    make?: string | null
    model?: string | null
    color?: VehicleColor | null
    licensePlate: string
    parking_space?: parking_spaceUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleCreateOrConnectWithoutGuestInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutGuestInput, vehicleUncheckedCreateWithoutGuestInput>
  }

  export type vehicleCreateManyGuestInputEnvelope = {
    data: Enumerable<vehicleCreateManyGuestInput>
    skipDuplicates?: boolean
  }

  export type event_guestUpsertWithWhereUniqueWithoutGuestInput = {
    where: event_guestWhereUniqueInput
    update: XOR<event_guestUpdateWithoutGuestInput, event_guestUncheckedUpdateWithoutGuestInput>
    create: XOR<event_guestCreateWithoutGuestInput, event_guestUncheckedCreateWithoutGuestInput>
  }

  export type event_guestUpdateWithWhereUniqueWithoutGuestInput = {
    where: event_guestWhereUniqueInput
    data: XOR<event_guestUpdateWithoutGuestInput, event_guestUncheckedUpdateWithoutGuestInput>
  }

  export type event_guestUpdateManyWithWhereWithoutGuestInput = {
    where: event_guestScalarWhereInput
    data: XOR<event_guestUpdateManyMutationInput, event_guestUncheckedUpdateManyWithoutEvent_guestInput>
  }

  export type vehicleUpsertWithWhereUniqueWithoutGuestInput = {
    where: vehicleWhereUniqueInput
    update: XOR<vehicleUpdateWithoutGuestInput, vehicleUncheckedUpdateWithoutGuestInput>
    create: XOR<vehicleCreateWithoutGuestInput, vehicleUncheckedCreateWithoutGuestInput>
  }

  export type vehicleUpdateWithWhereUniqueWithoutGuestInput = {
    where: vehicleWhereUniqueInput
    data: XOR<vehicleUpdateWithoutGuestInput, vehicleUncheckedUpdateWithoutGuestInput>
  }

  export type vehicleUpdateManyWithWhereWithoutGuestInput = {
    where: vehicleScalarWhereInput
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyWithoutVehicleInput>
  }

  export type vehicleScalarWhereInput = {
    AND?: Enumerable<vehicleScalarWhereInput>
    OR?: Enumerable<vehicleScalarWhereInput>
    NOT?: Enumerable<vehicleScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    year?: IntNullableFilter | number | null
    make?: StringNullableFilter | string | null
    model?: StringNullableFilter | string | null
    color?: EnumVehicleColorNullableFilter | VehicleColor | null
    licensePlate?: StringFilter | string
    guestId?: StringNullableFilter | string | null
  }

  export type cameraCreateWithoutLocationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    rtspUrl: string
    serviceObjectDetection?: boolean
    serviceObjectCounts?: boolean
    serviceDwellTime?: boolean
    serviceObjectIngressEgress?: boolean
    serviceObjectBehavior?: boolean
    serviceOccupancyTracking?: boolean
    serviceUtilizationRate?: boolean
    serviceThroughput?: boolean
    serviceLiveWaitTime?: boolean
    serviceOther?: boolean
    serviceObjectDetectionDescription?: string | null
    serviceObjectBehaviorDescription?: string | null
    serviceOtherDescription?: string | null
    serviceThroughputUnitOfTime?: service_throughput_unit_of_time | null
    viewingAngle: camera_viewing_angle
  }

  export type cameraUncheckedCreateWithoutLocationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    rtspUrl: string
    serviceObjectDetection?: boolean
    serviceObjectCounts?: boolean
    serviceDwellTime?: boolean
    serviceObjectIngressEgress?: boolean
    serviceObjectBehavior?: boolean
    serviceOccupancyTracking?: boolean
    serviceUtilizationRate?: boolean
    serviceThroughput?: boolean
    serviceLiveWaitTime?: boolean
    serviceOther?: boolean
    serviceObjectDetectionDescription?: string | null
    serviceObjectBehaviorDescription?: string | null
    serviceOtherDescription?: string | null
    serviceThroughputUnitOfTime?: service_throughput_unit_of_time | null
    viewingAngle: camera_viewing_angle
  }

  export type cameraCreateOrConnectWithoutLocationInput = {
    where: cameraWhereUniqueInput
    create: XOR<cameraCreateWithoutLocationInput, cameraUncheckedCreateWithoutLocationInput>
  }

  export type cameraCreateManyLocationInputEnvelope = {
    data: Enumerable<cameraCreateManyLocationInput>
    skipDuplicates?: boolean
  }

  export type organizationCreateWithoutLocationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    subdomain: string
    stripeCustomerId?: string | null
    status?: organization_status
    statuses?: organizationCreatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationCreatestatuses2Input | Enumerable<string>
    api_key?: api_keyCreateNestedManyWithoutOrganizationInput
    organization_invitation?: organization_invitationCreateNestedManyWithoutOrganizationInput
    organization_member?: organization_memberCreateNestedManyWithoutOrganizationInput
  }

  export type organizationUncheckedCreateWithoutLocationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    subdomain: string
    stripeCustomerId?: string | null
    status?: organization_status
    statuses?: organizationCreatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationCreatestatuses2Input | Enumerable<string>
    api_key?: api_keyUncheckedCreateNestedManyWithoutOrganizationInput
    organization_invitation?: organization_invitationUncheckedCreateNestedManyWithoutOrganizationInput
    organization_member?: organization_memberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationCreateOrConnectWithoutLocationInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutLocationInput, organizationUncheckedCreateWithoutLocationInput>
  }

  export type cameraUpsertWithWhereUniqueWithoutLocationInput = {
    where: cameraWhereUniqueInput
    update: XOR<cameraUpdateWithoutLocationInput, cameraUncheckedUpdateWithoutLocationInput>
    create: XOR<cameraCreateWithoutLocationInput, cameraUncheckedCreateWithoutLocationInput>
  }

  export type cameraUpdateWithWhereUniqueWithoutLocationInput = {
    where: cameraWhereUniqueInput
    data: XOR<cameraUpdateWithoutLocationInput, cameraUncheckedUpdateWithoutLocationInput>
  }

  export type cameraUpdateManyWithWhereWithoutLocationInput = {
    where: cameraScalarWhereInput
    data: XOR<cameraUpdateManyMutationInput, cameraUncheckedUpdateManyWithoutCameraInput>
  }

  export type cameraScalarWhereInput = {
    AND?: Enumerable<cameraScalarWhereInput>
    OR?: Enumerable<cameraScalarWhereInput>
    NOT?: Enumerable<cameraScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    rtspUrl?: StringFilter | string
    serviceObjectDetection?: BoolFilter | boolean
    serviceObjectCounts?: BoolFilter | boolean
    serviceDwellTime?: BoolFilter | boolean
    serviceObjectIngressEgress?: BoolFilter | boolean
    serviceObjectBehavior?: BoolFilter | boolean
    serviceOccupancyTracking?: BoolFilter | boolean
    serviceUtilizationRate?: BoolFilter | boolean
    serviceThroughput?: BoolFilter | boolean
    serviceLiveWaitTime?: BoolFilter | boolean
    serviceOther?: BoolFilter | boolean
    serviceObjectDetectionDescription?: StringNullableFilter | string | null
    serviceObjectBehaviorDescription?: StringNullableFilter | string | null
    serviceOtherDescription?: StringNullableFilter | string | null
    serviceThroughputUnitOfTime?: Enumservice_throughput_unit_of_timeNullableFilter | service_throughput_unit_of_time | null
    locationId?: StringFilter | string
    viewingAngle?: Enumcamera_viewing_angleFilter | camera_viewing_angle
  }

  export type organizationUpsertWithoutLocationInput = {
    update: XOR<organizationUpdateWithoutLocationInput, organizationUncheckedUpdateWithoutLocationInput>
    create: XOR<organizationCreateWithoutLocationInput, organizationUncheckedCreateWithoutLocationInput>
  }

  export type organizationUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumorganization_statusFieldUpdateOperationsInput | organization_status
    statuses?: organizationUpdatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationUpdatestatuses2Input | Enumerable<string>
    api_key?: api_keyUpdateManyWithoutOrganizationNestedInput
    organization_invitation?: organization_invitationUpdateManyWithoutOrganizationNestedInput
    organization_member?: organization_memberUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumorganization_statusFieldUpdateOperationsInput | organization_status
    statuses?: organizationUpdatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationUpdatestatuses2Input | Enumerable<string>
    api_key?: api_keyUncheckedUpdateManyWithoutOrganizationNestedInput
    organization_invitation?: organization_invitationUncheckedUpdateManyWithoutOrganizationNestedInput
    organization_member?: organization_memberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type api_keyCreateWithoutOrganizationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    key: string
  }

  export type api_keyUncheckedCreateWithoutOrganizationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    key: string
  }

  export type api_keyCreateOrConnectWithoutOrganizationInput = {
    where: api_keyWhereUniqueInput
    create: XOR<api_keyCreateWithoutOrganizationInput, api_keyUncheckedCreateWithoutOrganizationInput>
  }

  export type api_keyCreateManyOrganizationInputEnvelope = {
    data: Enumerable<api_keyCreateManyOrganizationInput>
    skipDuplicates?: boolean
  }

  export type locationCreateWithoutOrganizationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    number?: number
    serialNumber?: string | null
    connectionType: location_connection_type
    camera?: cameraCreateNestedManyWithoutLocationInput
  }

  export type locationUncheckedCreateWithoutOrganizationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    number?: number
    serialNumber?: string | null
    connectionType: location_connection_type
    camera?: cameraUncheckedCreateNestedManyWithoutLocationInput
  }

  export type locationCreateOrConnectWithoutOrganizationInput = {
    where: locationWhereUniqueInput
    create: XOR<locationCreateWithoutOrganizationInput, locationUncheckedCreateWithoutOrganizationInput>
  }

  export type locationCreateManyOrganizationInputEnvelope = {
    data: Enumerable<locationCreateManyOrganizationInput>
    skipDuplicates?: boolean
  }

  export type organization_invitationCreateWithoutOrganizationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    email: string
    role: organization_member_role
    token: string
  }

  export type organization_invitationUncheckedCreateWithoutOrganizationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    email: string
    role: organization_member_role
    token: string
  }

  export type organization_invitationCreateOrConnectWithoutOrganizationInput = {
    where: organization_invitationWhereUniqueInput
    create: XOR<organization_invitationCreateWithoutOrganizationInput, organization_invitationUncheckedCreateWithoutOrganizationInput>
  }

  export type organization_invitationCreateManyOrganizationInputEnvelope = {
    data: Enumerable<organization_invitationCreateManyOrganizationInput>
    skipDuplicates?: boolean
  }

  export type organization_memberCreateWithoutOrganizationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    role: organization_member_role
    userId: string
  }

  export type organization_memberUncheckedCreateWithoutOrganizationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    role: organization_member_role
    userId: string
  }

  export type organization_memberCreateOrConnectWithoutOrganizationInput = {
    where: organization_memberWhereUniqueInput
    create: XOR<organization_memberCreateWithoutOrganizationInput, organization_memberUncheckedCreateWithoutOrganizationInput>
  }

  export type organization_memberCreateManyOrganizationInputEnvelope = {
    data: Enumerable<organization_memberCreateManyOrganizationInput>
    skipDuplicates?: boolean
  }

  export type api_keyUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: api_keyWhereUniqueInput
    update: XOR<api_keyUpdateWithoutOrganizationInput, api_keyUncheckedUpdateWithoutOrganizationInput>
    create: XOR<api_keyCreateWithoutOrganizationInput, api_keyUncheckedCreateWithoutOrganizationInput>
  }

  export type api_keyUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: api_keyWhereUniqueInput
    data: XOR<api_keyUpdateWithoutOrganizationInput, api_keyUncheckedUpdateWithoutOrganizationInput>
  }

  export type api_keyUpdateManyWithWhereWithoutOrganizationInput = {
    where: api_keyScalarWhereInput
    data: XOR<api_keyUpdateManyMutationInput, api_keyUncheckedUpdateManyWithoutApi_keyInput>
  }

  export type api_keyScalarWhereInput = {
    AND?: Enumerable<api_keyScalarWhereInput>
    OR?: Enumerable<api_keyScalarWhereInput>
    NOT?: Enumerable<api_keyScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    key?: StringFilter | string
    organizationId?: StringFilter | string
  }

  export type locationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: locationWhereUniqueInput
    update: XOR<locationUpdateWithoutOrganizationInput, locationUncheckedUpdateWithoutOrganizationInput>
    create: XOR<locationCreateWithoutOrganizationInput, locationUncheckedCreateWithoutOrganizationInput>
  }

  export type locationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: locationWhereUniqueInput
    data: XOR<locationUpdateWithoutOrganizationInput, locationUncheckedUpdateWithoutOrganizationInput>
  }

  export type locationUpdateManyWithWhereWithoutOrganizationInput = {
    where: locationScalarWhereInput
    data: XOR<locationUpdateManyMutationInput, locationUncheckedUpdateManyWithoutLocationInput>
  }

  export type locationScalarWhereInput = {
    AND?: Enumerable<locationScalarWhereInput>
    OR?: Enumerable<locationScalarWhereInput>
    NOT?: Enumerable<locationScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    address?: StringFilter | string
    latitude?: DecimalFilter | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter | Decimal | DecimalJsLike | number | string
    number?: IntFilter | number
    serialNumber?: StringNullableFilter | string | null
    connectionType?: Enumlocation_connection_typeFilter | location_connection_type
    organizationId?: StringFilter | string
  }

  export type organization_invitationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: organization_invitationWhereUniqueInput
    update: XOR<organization_invitationUpdateWithoutOrganizationInput, organization_invitationUncheckedUpdateWithoutOrganizationInput>
    create: XOR<organization_invitationCreateWithoutOrganizationInput, organization_invitationUncheckedCreateWithoutOrganizationInput>
  }

  export type organization_invitationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: organization_invitationWhereUniqueInput
    data: XOR<organization_invitationUpdateWithoutOrganizationInput, organization_invitationUncheckedUpdateWithoutOrganizationInput>
  }

  export type organization_invitationUpdateManyWithWhereWithoutOrganizationInput = {
    where: organization_invitationScalarWhereInput
    data: XOR<organization_invitationUpdateManyMutationInput, organization_invitationUncheckedUpdateManyWithoutOrganization_invitationInput>
  }

  export type organization_invitationScalarWhereInput = {
    AND?: Enumerable<organization_invitationScalarWhereInput>
    OR?: Enumerable<organization_invitationScalarWhereInput>
    NOT?: Enumerable<organization_invitationScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    role?: Enumorganization_member_roleFilter | organization_member_role
    token?: StringFilter | string
    organizationId?: StringFilter | string
  }

  export type organization_memberUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: organization_memberWhereUniqueInput
    update: XOR<organization_memberUpdateWithoutOrganizationInput, organization_memberUncheckedUpdateWithoutOrganizationInput>
    create: XOR<organization_memberCreateWithoutOrganizationInput, organization_memberUncheckedCreateWithoutOrganizationInput>
  }

  export type organization_memberUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: organization_memberWhereUniqueInput
    data: XOR<organization_memberUpdateWithoutOrganizationInput, organization_memberUncheckedUpdateWithoutOrganizationInput>
  }

  export type organization_memberUpdateManyWithWhereWithoutOrganizationInput = {
    where: organization_memberScalarWhereInput
    data: XOR<organization_memberUpdateManyMutationInput, organization_memberUncheckedUpdateManyWithoutOrganization_memberInput>
  }

  export type organization_memberScalarWhereInput = {
    AND?: Enumerable<organization_memberScalarWhereInput>
    OR?: Enumerable<organization_memberScalarWhereInput>
    NOT?: Enumerable<organization_memberScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    role?: Enumorganization_member_roleFilter | organization_member_role
    userId?: StringFilter | string
    organizationId?: StringFilter | string
  }

  export type organizationCreateWithoutOrganization_invitationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    subdomain: string
    stripeCustomerId?: string | null
    status?: organization_status
    statuses?: organizationCreatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationCreatestatuses2Input | Enumerable<string>
    api_key?: api_keyCreateNestedManyWithoutOrganizationInput
    location?: locationCreateNestedManyWithoutOrganizationInput
    organization_member?: organization_memberCreateNestedManyWithoutOrganizationInput
  }

  export type organizationUncheckedCreateWithoutOrganization_invitationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    subdomain: string
    stripeCustomerId?: string | null
    status?: organization_status
    statuses?: organizationCreatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationCreatestatuses2Input | Enumerable<string>
    api_key?: api_keyUncheckedCreateNestedManyWithoutOrganizationInput
    location?: locationUncheckedCreateNestedManyWithoutOrganizationInput
    organization_member?: organization_memberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationCreateOrConnectWithoutOrganization_invitationInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutOrganization_invitationInput, organizationUncheckedCreateWithoutOrganization_invitationInput>
  }

  export type organizationUpsertWithoutOrganization_invitationInput = {
    update: XOR<organizationUpdateWithoutOrganization_invitationInput, organizationUncheckedUpdateWithoutOrganization_invitationInput>
    create: XOR<organizationCreateWithoutOrganization_invitationInput, organizationUncheckedCreateWithoutOrganization_invitationInput>
  }

  export type organizationUpdateWithoutOrganization_invitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumorganization_statusFieldUpdateOperationsInput | organization_status
    statuses?: organizationUpdatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationUpdatestatuses2Input | Enumerable<string>
    api_key?: api_keyUpdateManyWithoutOrganizationNestedInput
    location?: locationUpdateManyWithoutOrganizationNestedInput
    organization_member?: organization_memberUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationUncheckedUpdateWithoutOrganization_invitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumorganization_statusFieldUpdateOperationsInput | organization_status
    statuses?: organizationUpdatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationUpdatestatuses2Input | Enumerable<string>
    api_key?: api_keyUncheckedUpdateManyWithoutOrganizationNestedInput
    location?: locationUncheckedUpdateManyWithoutOrganizationNestedInput
    organization_member?: organization_memberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationCreateWithoutOrganization_memberInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    subdomain: string
    stripeCustomerId?: string | null
    status?: organization_status
    statuses?: organizationCreatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationCreatestatuses2Input | Enumerable<string>
    api_key?: api_keyCreateNestedManyWithoutOrganizationInput
    location?: locationCreateNestedManyWithoutOrganizationInput
    organization_invitation?: organization_invitationCreateNestedManyWithoutOrganizationInput
  }

  export type organizationUncheckedCreateWithoutOrganization_memberInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    subdomain: string
    stripeCustomerId?: string | null
    status?: organization_status
    statuses?: organizationCreatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationCreatestatuses2Input | Enumerable<string>
    api_key?: api_keyUncheckedCreateNestedManyWithoutOrganizationInput
    location?: locationUncheckedCreateNestedManyWithoutOrganizationInput
    organization_invitation?: organization_invitationUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationCreateOrConnectWithoutOrganization_memberInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutOrganization_memberInput, organizationUncheckedCreateWithoutOrganization_memberInput>
  }

  export type organizationUpsertWithoutOrganization_memberInput = {
    update: XOR<organizationUpdateWithoutOrganization_memberInput, organizationUncheckedUpdateWithoutOrganization_memberInput>
    create: XOR<organizationCreateWithoutOrganization_memberInput, organizationUncheckedCreateWithoutOrganization_memberInput>
  }

  export type organizationUpdateWithoutOrganization_memberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumorganization_statusFieldUpdateOperationsInput | organization_status
    statuses?: organizationUpdatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationUpdatestatuses2Input | Enumerable<string>
    api_key?: api_keyUpdateManyWithoutOrganizationNestedInput
    location?: locationUpdateManyWithoutOrganizationNestedInput
    organization_invitation?: organization_invitationUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationUncheckedUpdateWithoutOrganization_memberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumorganization_statusFieldUpdateOperationsInput | organization_status
    statuses?: organizationUpdatestatusesInput | Enumerable<organization_status>
    statuses2?: organizationUpdatestatuses2Input | Enumerable<string>
    api_key?: api_keyUncheckedUpdateManyWithoutOrganizationNestedInput
    location?: locationUncheckedUpdateManyWithoutOrganizationNestedInput
    organization_invitation?: organization_invitationUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type parking_spaceCreateWithoutParking_lotInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    label?: string | null
    order?: number | null
    type?: parking_space_type
    status?: parking_space_status
    parkedAt?: Date | string | null
    zoneId?: string | null
    media?: Buffer | null
    cameraId?: string | null
    detectedPlate?: string | null
    lastDetectionId?: string | null
    vehicle?: vehicleCreateNestedOneWithoutParking_spaceInput
    parking_space_activity_log?: parking_space_activity_logCreateNestedManyWithoutParking_spaceInput
  }

  export type parking_spaceUncheckedCreateWithoutParking_lotInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    label?: string | null
    order?: number | null
    type?: parking_space_type
    status?: parking_space_status
    parkedAt?: Date | string | null
    zoneId?: string | null
    vehicleId?: string | null
    media?: Buffer | null
    cameraId?: string | null
    detectedPlate?: string | null
    lastDetectionId?: string | null
    parking_space_activity_log?: parking_space_activity_logUncheckedCreateNestedManyWithoutParking_spaceInput
  }

  export type parking_spaceCreateOrConnectWithoutParking_lotInput = {
    where: parking_spaceWhereUniqueInput
    create: XOR<parking_spaceCreateWithoutParking_lotInput, parking_spaceUncheckedCreateWithoutParking_lotInput>
  }

  export type parking_spaceCreateManyParking_lotInputEnvelope = {
    data: Enumerable<parking_spaceCreateManyParking_lotInput>
    skipDuplicates?: boolean
  }

  export type parking_spaceUpsertWithWhereUniqueWithoutParking_lotInput = {
    where: parking_spaceWhereUniqueInput
    update: XOR<parking_spaceUpdateWithoutParking_lotInput, parking_spaceUncheckedUpdateWithoutParking_lotInput>
    create: XOR<parking_spaceCreateWithoutParking_lotInput, parking_spaceUncheckedCreateWithoutParking_lotInput>
  }

  export type parking_spaceUpdateWithWhereUniqueWithoutParking_lotInput = {
    where: parking_spaceWhereUniqueInput
    data: XOR<parking_spaceUpdateWithoutParking_lotInput, parking_spaceUncheckedUpdateWithoutParking_lotInput>
  }

  export type parking_spaceUpdateManyWithWhereWithoutParking_lotInput = {
    where: parking_spaceScalarWhereInput
    data: XOR<parking_spaceUpdateManyMutationInput, parking_spaceUncheckedUpdateManyWithoutParking_spaceInput>
  }

  export type parking_spaceScalarWhereInput = {
    AND?: Enumerable<parking_spaceScalarWhereInput>
    OR?: Enumerable<parking_spaceScalarWhereInput>
    NOT?: Enumerable<parking_spaceScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    label?: StringNullableFilter | string | null
    order?: IntNullableFilter | number | null
    type?: Enumparking_space_typeFilter | parking_space_type
    status?: Enumparking_space_statusFilter | parking_space_status
    parkedAt?: DateTimeNullableFilter | Date | string | null
    zoneId?: StringNullableFilter | string | null
    vehicleId?: StringNullableFilter | string | null
    parkingLotId?: StringNullableFilter | string | null
    media?: BytesNullableFilter | Buffer | null
    cameraId?: StringNullableFilter | string | null
    detectedPlate?: StringNullableFilter | string | null
    lastDetectionId?: StringNullableFilter | string | null
  }

  export type parking_lotCreateWithoutParking_spaceInput = {
    id: string
    label: string
    createdAt?: Date | string
    notifyEmail?: string | null
    notifyPhone?: string | null
    updatedAt: Date | string
  }

  export type parking_lotUncheckedCreateWithoutParking_spaceInput = {
    id: string
    label: string
    createdAt?: Date | string
    notifyEmail?: string | null
    notifyPhone?: string | null
    updatedAt: Date | string
  }

  export type parking_lotCreateOrConnectWithoutParking_spaceInput = {
    where: parking_lotWhereUniqueInput
    create: XOR<parking_lotCreateWithoutParking_spaceInput, parking_lotUncheckedCreateWithoutParking_spaceInput>
  }

  export type vehicleCreateWithoutParking_spaceInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    year?: number | null
    make?: string | null
    model?: string | null
    color?: VehicleColor | null
    licensePlate: string
    guest?: guestCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutParking_spaceInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    year?: number | null
    make?: string | null
    model?: string | null
    color?: VehicleColor | null
    licensePlate: string
    guestId?: string | null
  }

  export type vehicleCreateOrConnectWithoutParking_spaceInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutParking_spaceInput, vehicleUncheckedCreateWithoutParking_spaceInput>
  }

  export type parking_space_activity_logCreateWithoutParking_spaceInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    text?: string | null
  }

  export type parking_space_activity_logUncheckedCreateWithoutParking_spaceInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    text?: string | null
  }

  export type parking_space_activity_logCreateOrConnectWithoutParking_spaceInput = {
    where: parking_space_activity_logWhereUniqueInput
    create: XOR<parking_space_activity_logCreateWithoutParking_spaceInput, parking_space_activity_logUncheckedCreateWithoutParking_spaceInput>
  }

  export type parking_space_activity_logCreateManyParking_spaceInputEnvelope = {
    data: Enumerable<parking_space_activity_logCreateManyParking_spaceInput>
    skipDuplicates?: boolean
  }

  export type parking_lotUpsertWithoutParking_spaceInput = {
    update: XOR<parking_lotUpdateWithoutParking_spaceInput, parking_lotUncheckedUpdateWithoutParking_spaceInput>
    create: XOR<parking_lotCreateWithoutParking_spaceInput, parking_lotUncheckedCreateWithoutParking_spaceInput>
  }

  export type parking_lotUpdateWithoutParking_spaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    notifyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type parking_lotUncheckedUpdateWithoutParking_spaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    notifyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehicleUpsertWithoutParking_spaceInput = {
    update: XOR<vehicleUpdateWithoutParking_spaceInput, vehicleUncheckedUpdateWithoutParking_spaceInput>
    create: XOR<vehicleCreateWithoutParking_spaceInput, vehicleUncheckedCreateWithoutParking_spaceInput>
  }

  export type vehicleUpdateWithoutParking_spaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableEnumVehicleColorFieldUpdateOperationsInput | VehicleColor | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    guest?: guestUpdateOneWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutParking_spaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableEnumVehicleColorFieldUpdateOperationsInput | VehicleColor | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type parking_space_activity_logUpsertWithWhereUniqueWithoutParking_spaceInput = {
    where: parking_space_activity_logWhereUniqueInput
    update: XOR<parking_space_activity_logUpdateWithoutParking_spaceInput, parking_space_activity_logUncheckedUpdateWithoutParking_spaceInput>
    create: XOR<parking_space_activity_logCreateWithoutParking_spaceInput, parking_space_activity_logUncheckedCreateWithoutParking_spaceInput>
  }

  export type parking_space_activity_logUpdateWithWhereUniqueWithoutParking_spaceInput = {
    where: parking_space_activity_logWhereUniqueInput
    data: XOR<parking_space_activity_logUpdateWithoutParking_spaceInput, parking_space_activity_logUncheckedUpdateWithoutParking_spaceInput>
  }

  export type parking_space_activity_logUpdateManyWithWhereWithoutParking_spaceInput = {
    where: parking_space_activity_logScalarWhereInput
    data: XOR<parking_space_activity_logUpdateManyMutationInput, parking_space_activity_logUncheckedUpdateManyWithoutParking_space_activity_logInput>
  }

  export type parking_space_activity_logScalarWhereInput = {
    AND?: Enumerable<parking_space_activity_logScalarWhereInput>
    OR?: Enumerable<parking_space_activity_logScalarWhereInput>
    NOT?: Enumerable<parking_space_activity_logScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    text?: StringNullableFilter | string | null
    parkingSpaceId?: StringFilter | string
  }

  export type parking_spaceCreateWithoutParking_space_activity_logInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    label?: string | null
    order?: number | null
    type?: parking_space_type
    status?: parking_space_status
    parkedAt?: Date | string | null
    zoneId?: string | null
    media?: Buffer | null
    cameraId?: string | null
    detectedPlate?: string | null
    lastDetectionId?: string | null
    parking_lot?: parking_lotCreateNestedOneWithoutParking_spaceInput
    vehicle?: vehicleCreateNestedOneWithoutParking_spaceInput
  }

  export type parking_spaceUncheckedCreateWithoutParking_space_activity_logInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    label?: string | null
    order?: number | null
    type?: parking_space_type
    status?: parking_space_status
    parkedAt?: Date | string | null
    zoneId?: string | null
    vehicleId?: string | null
    parkingLotId?: string | null
    media?: Buffer | null
    cameraId?: string | null
    detectedPlate?: string | null
    lastDetectionId?: string | null
  }

  export type parking_spaceCreateOrConnectWithoutParking_space_activity_logInput = {
    where: parking_spaceWhereUniqueInput
    create: XOR<parking_spaceCreateWithoutParking_space_activity_logInput, parking_spaceUncheckedCreateWithoutParking_space_activity_logInput>
  }

  export type parking_spaceUpsertWithoutParking_space_activity_logInput = {
    update: XOR<parking_spaceUpdateWithoutParking_space_activity_logInput, parking_spaceUncheckedUpdateWithoutParking_space_activity_logInput>
    create: XOR<parking_spaceCreateWithoutParking_space_activity_logInput, parking_spaceUncheckedCreateWithoutParking_space_activity_logInput>
  }

  export type parking_spaceUpdateWithoutParking_space_activity_logInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumparking_space_typeFieldUpdateOperationsInput | parking_space_type
    status?: Enumparking_space_statusFieldUpdateOperationsInput | parking_space_status
    parkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPlate?: NullableStringFieldUpdateOperationsInput | string | null
    lastDetectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parking_lot?: parking_lotUpdateOneWithoutParking_spaceNestedInput
    vehicle?: vehicleUpdateOneWithoutParking_spaceNestedInput
  }

  export type parking_spaceUncheckedUpdateWithoutParking_space_activity_logInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumparking_space_typeFieldUpdateOperationsInput | parking_space_type
    status?: Enumparking_space_statusFieldUpdateOperationsInput | parking_space_status
    parkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingLotId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPlate?: NullableStringFieldUpdateOperationsInput | string | null
    lastDetectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type parking_spaceCreateWithoutVehicleInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    label?: string | null
    order?: number | null
    type?: parking_space_type
    status?: parking_space_status
    parkedAt?: Date | string | null
    zoneId?: string | null
    media?: Buffer | null
    cameraId?: string | null
    detectedPlate?: string | null
    lastDetectionId?: string | null
    parking_lot?: parking_lotCreateNestedOneWithoutParking_spaceInput
    parking_space_activity_log?: parking_space_activity_logCreateNestedManyWithoutParking_spaceInput
  }

  export type parking_spaceUncheckedCreateWithoutVehicleInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    label?: string | null
    order?: number | null
    type?: parking_space_type
    status?: parking_space_status
    parkedAt?: Date | string | null
    zoneId?: string | null
    parkingLotId?: string | null
    media?: Buffer | null
    cameraId?: string | null
    detectedPlate?: string | null
    lastDetectionId?: string | null
    parking_space_activity_log?: parking_space_activity_logUncheckedCreateNestedManyWithoutParking_spaceInput
  }

  export type parking_spaceCreateOrConnectWithoutVehicleInput = {
    where: parking_spaceWhereUniqueInput
    create: XOR<parking_spaceCreateWithoutVehicleInput, parking_spaceUncheckedCreateWithoutVehicleInput>
  }

  export type parking_spaceCreateManyVehicleInputEnvelope = {
    data: Enumerable<parking_spaceCreateManyVehicleInput>
    skipDuplicates?: boolean
  }

  export type guestCreateWithoutVehicleInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    organizationId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    company?: string | null
    companyPosition?: string | null
    event_guest?: event_guestCreateNestedManyWithoutGuestInput
  }

  export type guestUncheckedCreateWithoutVehicleInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    organizationId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    company?: string | null
    companyPosition?: string | null
    event_guest?: event_guestUncheckedCreateNestedManyWithoutGuestInput
  }

  export type guestCreateOrConnectWithoutVehicleInput = {
    where: guestWhereUniqueInput
    create: XOR<guestCreateWithoutVehicleInput, guestUncheckedCreateWithoutVehicleInput>
  }

  export type parking_spaceUpsertWithWhereUniqueWithoutVehicleInput = {
    where: parking_spaceWhereUniqueInput
    update: XOR<parking_spaceUpdateWithoutVehicleInput, parking_spaceUncheckedUpdateWithoutVehicleInput>
    create: XOR<parking_spaceCreateWithoutVehicleInput, parking_spaceUncheckedCreateWithoutVehicleInput>
  }

  export type parking_spaceUpdateWithWhereUniqueWithoutVehicleInput = {
    where: parking_spaceWhereUniqueInput
    data: XOR<parking_spaceUpdateWithoutVehicleInput, parking_spaceUncheckedUpdateWithoutVehicleInput>
  }

  export type parking_spaceUpdateManyWithWhereWithoutVehicleInput = {
    where: parking_spaceScalarWhereInput
    data: XOR<parking_spaceUpdateManyMutationInput, parking_spaceUncheckedUpdateManyWithoutParking_spaceInput>
  }

  export type guestUpsertWithoutVehicleInput = {
    update: XOR<guestUpdateWithoutVehicleInput, guestUncheckedUpdateWithoutVehicleInput>
    create: XOR<guestCreateWithoutVehicleInput, guestUncheckedCreateWithoutVehicleInput>
  }

  export type guestUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyPosition?: NullableStringFieldUpdateOperationsInput | string | null
    event_guest?: event_guestUpdateManyWithoutGuestNestedInput
  }

  export type guestUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companyPosition?: NullableStringFieldUpdateOperationsInput | string | null
    event_guest?: event_guestUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type event_guestCreateManyEventInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    checkedInAt?: Date | string | null
    guestId?: string | null
  }

  export type event_guestUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guest?: guestUpdateOneWithoutEvent_guestNestedInput
  }

  export type event_guestUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type event_guestUncheckedUpdateManyWithoutEvent_guestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type event_guestCreateManyGuestInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    checkedInAt?: Date | string | null
    eventId?: string | null
  }

  export type vehicleCreateManyGuestInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    year?: number | null
    make?: string | null
    model?: string | null
    color?: VehicleColor | null
    licensePlate: string
  }

  export type event_guestUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: eventUpdateOneWithoutEvent_guestNestedInput
  }

  export type event_guestUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vehicleUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableEnumVehicleColorFieldUpdateOperationsInput | VehicleColor | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    parking_space?: parking_spaceUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableEnumVehicleColorFieldUpdateOperationsInput | VehicleColor | null
    licensePlate?: StringFieldUpdateOperationsInput | string
    parking_space?: parking_spaceUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableEnumVehicleColorFieldUpdateOperationsInput | VehicleColor | null
    licensePlate?: StringFieldUpdateOperationsInput | string
  }

  export type cameraCreateManyLocationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    rtspUrl: string
    serviceObjectDetection?: boolean
    serviceObjectCounts?: boolean
    serviceDwellTime?: boolean
    serviceObjectIngressEgress?: boolean
    serviceObjectBehavior?: boolean
    serviceOccupancyTracking?: boolean
    serviceUtilizationRate?: boolean
    serviceThroughput?: boolean
    serviceLiveWaitTime?: boolean
    serviceOther?: boolean
    serviceObjectDetectionDescription?: string | null
    serviceObjectBehaviorDescription?: string | null
    serviceOtherDescription?: string | null
    serviceThroughputUnitOfTime?: service_throughput_unit_of_time | null
    viewingAngle: camera_viewing_angle
  }

  export type cameraUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rtspUrl?: StringFieldUpdateOperationsInput | string
    serviceObjectDetection?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectCounts?: BoolFieldUpdateOperationsInput | boolean
    serviceDwellTime?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectIngressEgress?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectBehavior?: BoolFieldUpdateOperationsInput | boolean
    serviceOccupancyTracking?: BoolFieldUpdateOperationsInput | boolean
    serviceUtilizationRate?: BoolFieldUpdateOperationsInput | boolean
    serviceThroughput?: BoolFieldUpdateOperationsInput | boolean
    serviceLiveWaitTime?: BoolFieldUpdateOperationsInput | boolean
    serviceOther?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectDetectionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceObjectBehaviorDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceOtherDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceThroughputUnitOfTime?: NullableEnumservice_throughput_unit_of_timeFieldUpdateOperationsInput | service_throughput_unit_of_time | null
    viewingAngle?: Enumcamera_viewing_angleFieldUpdateOperationsInput | camera_viewing_angle
  }

  export type cameraUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rtspUrl?: StringFieldUpdateOperationsInput | string
    serviceObjectDetection?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectCounts?: BoolFieldUpdateOperationsInput | boolean
    serviceDwellTime?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectIngressEgress?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectBehavior?: BoolFieldUpdateOperationsInput | boolean
    serviceOccupancyTracking?: BoolFieldUpdateOperationsInput | boolean
    serviceUtilizationRate?: BoolFieldUpdateOperationsInput | boolean
    serviceThroughput?: BoolFieldUpdateOperationsInput | boolean
    serviceLiveWaitTime?: BoolFieldUpdateOperationsInput | boolean
    serviceOther?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectDetectionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceObjectBehaviorDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceOtherDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceThroughputUnitOfTime?: NullableEnumservice_throughput_unit_of_timeFieldUpdateOperationsInput | service_throughput_unit_of_time | null
    viewingAngle?: Enumcamera_viewing_angleFieldUpdateOperationsInput | camera_viewing_angle
  }

  export type cameraUncheckedUpdateManyWithoutCameraInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rtspUrl?: StringFieldUpdateOperationsInput | string
    serviceObjectDetection?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectCounts?: BoolFieldUpdateOperationsInput | boolean
    serviceDwellTime?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectIngressEgress?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectBehavior?: BoolFieldUpdateOperationsInput | boolean
    serviceOccupancyTracking?: BoolFieldUpdateOperationsInput | boolean
    serviceUtilizationRate?: BoolFieldUpdateOperationsInput | boolean
    serviceThroughput?: BoolFieldUpdateOperationsInput | boolean
    serviceLiveWaitTime?: BoolFieldUpdateOperationsInput | boolean
    serviceOther?: BoolFieldUpdateOperationsInput | boolean
    serviceObjectDetectionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceObjectBehaviorDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceOtherDescription?: NullableStringFieldUpdateOperationsInput | string | null
    serviceThroughputUnitOfTime?: NullableEnumservice_throughput_unit_of_timeFieldUpdateOperationsInput | service_throughput_unit_of_time | null
    viewingAngle?: Enumcamera_viewing_angleFieldUpdateOperationsInput | camera_viewing_angle
  }

  export type api_keyCreateManyOrganizationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    key: string
  }

  export type locationCreateManyOrganizationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    name: string
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    number?: number
    serialNumber?: string | null
    connectionType: location_connection_type
  }

  export type organization_invitationCreateManyOrganizationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    email: string
    role: organization_member_role
    token: string
  }

  export type organization_memberCreateManyOrganizationInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    role: organization_member_role
    userId: string
  }

  export type api_keyUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
  }

  export type api_keyUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
  }

  export type api_keyUncheckedUpdateManyWithoutApi_keyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
  }

  export type locationUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: Enumlocation_connection_typeFieldUpdateOperationsInput | location_connection_type
    camera?: cameraUpdateManyWithoutLocationNestedInput
  }

  export type locationUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: Enumlocation_connection_typeFieldUpdateOperationsInput | location_connection_type
    camera?: cameraUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type locationUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: Enumlocation_connection_typeFieldUpdateOperationsInput | location_connection_type
  }

  export type organization_invitationUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    token?: StringFieldUpdateOperationsInput | string
  }

  export type organization_invitationUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    token?: StringFieldUpdateOperationsInput | string
  }

  export type organization_invitationUncheckedUpdateManyWithoutOrganization_invitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    token?: StringFieldUpdateOperationsInput | string
  }

  export type organization_memberUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type organization_memberUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type organization_memberUncheckedUpdateManyWithoutOrganization_memberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumorganization_member_roleFieldUpdateOperationsInput | organization_member_role
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type parking_spaceCreateManyParking_lotInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    label?: string | null
    order?: number | null
    type?: parking_space_type
    status?: parking_space_status
    parkedAt?: Date | string | null
    zoneId?: string | null
    vehicleId?: string | null
    media?: Buffer | null
    cameraId?: string | null
    detectedPlate?: string | null
    lastDetectionId?: string | null
  }

  export type parking_spaceUpdateWithoutParking_lotInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumparking_space_typeFieldUpdateOperationsInput | parking_space_type
    status?: Enumparking_space_statusFieldUpdateOperationsInput | parking_space_status
    parkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPlate?: NullableStringFieldUpdateOperationsInput | string | null
    lastDetectionId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle?: vehicleUpdateOneWithoutParking_spaceNestedInput
    parking_space_activity_log?: parking_space_activity_logUpdateManyWithoutParking_spaceNestedInput
  }

  export type parking_spaceUncheckedUpdateWithoutParking_lotInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumparking_space_typeFieldUpdateOperationsInput | parking_space_type
    status?: Enumparking_space_statusFieldUpdateOperationsInput | parking_space_status
    parkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPlate?: NullableStringFieldUpdateOperationsInput | string | null
    lastDetectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parking_space_activity_log?: parking_space_activity_logUncheckedUpdateManyWithoutParking_spaceNestedInput
  }

  export type parking_spaceUncheckedUpdateManyWithoutParking_spaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumparking_space_typeFieldUpdateOperationsInput | parking_space_type
    status?: Enumparking_space_statusFieldUpdateOperationsInput | parking_space_status
    parkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPlate?: NullableStringFieldUpdateOperationsInput | string | null
    lastDetectionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type parking_space_activity_logCreateManyParking_spaceInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    text?: string | null
  }

  export type parking_space_activity_logUpdateWithoutParking_spaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type parking_space_activity_logUncheckedUpdateWithoutParking_spaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type parking_space_activity_logUncheckedUpdateManyWithoutParking_space_activity_logInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type parking_spaceCreateManyVehicleInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    label?: string | null
    order?: number | null
    type?: parking_space_type
    status?: parking_space_status
    parkedAt?: Date | string | null
    zoneId?: string | null
    parkingLotId?: string | null
    media?: Buffer | null
    cameraId?: string | null
    detectedPlate?: string | null
    lastDetectionId?: string | null
  }

  export type parking_spaceUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumparking_space_typeFieldUpdateOperationsInput | parking_space_type
    status?: Enumparking_space_statusFieldUpdateOperationsInput | parking_space_status
    parkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPlate?: NullableStringFieldUpdateOperationsInput | string | null
    lastDetectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parking_lot?: parking_lotUpdateOneWithoutParking_spaceNestedInput
    parking_space_activity_log?: parking_space_activity_logUpdateManyWithoutParking_spaceNestedInput
  }

  export type parking_spaceUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumparking_space_typeFieldUpdateOperationsInput | parking_space_type
    status?: Enumparking_space_statusFieldUpdateOperationsInput | parking_space_status
    parkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingLotId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPlate?: NullableStringFieldUpdateOperationsInput | string | null
    lastDetectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parking_space_activity_log?: parking_space_activity_logUncheckedUpdateManyWithoutParking_spaceNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}