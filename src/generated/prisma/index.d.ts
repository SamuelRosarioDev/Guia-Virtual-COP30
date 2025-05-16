
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Hotelier
 * 
 */
export type Hotelier = $Result.DefaultSelection<Prisma.$HotelierPayload>
/**
 * Model Trader
 * 
 */
export type Trader = $Result.DefaultSelection<Prisma.$TraderPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model TouristAttraction
 * 
 */
export type TouristAttraction = $Result.DefaultSelection<Prisma.$TouristAttractionPayload>
/**
 * Model Bank
 * 
 */
export type Bank = $Result.DefaultSelection<Prisma.$BankPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotelier`: Exposes CRUD operations for the **Hotelier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hoteliers
    * const hoteliers = await prisma.hotelier.findMany()
    * ```
    */
  get hotelier(): Prisma.HotelierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trader`: Exposes CRUD operations for the **Trader** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Traders
    * const traders = await prisma.trader.findMany()
    * ```
    */
  get trader(): Prisma.TraderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.touristAttraction`: Exposes CRUD operations for the **TouristAttraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TouristAttractions
    * const touristAttractions = await prisma.touristAttraction.findMany()
    * ```
    */
  get touristAttraction(): Prisma.TouristAttractionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bank`: Exposes CRUD operations for the **Bank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banks
    * const banks = await prisma.bank.findMany()
    * ```
    */
  get bank(): Prisma.BankDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Hotelier: 'Hotelier',
    Trader: 'Trader',
    Event: 'Event',
    TouristAttraction: 'TouristAttraction',
    Bank: 'Bank'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "hotelier" | "trader" | "event" | "touristAttraction" | "bank"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Hotelier: {
        payload: Prisma.$HotelierPayload<ExtArgs>
        fields: Prisma.HotelierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelierPayload>
          }
          findFirst: {
            args: Prisma.HotelierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelierPayload>
          }
          findMany: {
            args: Prisma.HotelierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelierPayload>[]
          }
          create: {
            args: Prisma.HotelierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelierPayload>
          }
          createMany: {
            args: Prisma.HotelierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HotelierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelierPayload>
          }
          update: {
            args: Prisma.HotelierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelierPayload>
          }
          deleteMany: {
            args: Prisma.HotelierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HotelierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelierPayload>
          }
          aggregate: {
            args: Prisma.HotelierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotelier>
          }
          groupBy: {
            args: Prisma.HotelierGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelierGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelierCountArgs<ExtArgs>
            result: $Utils.Optional<HotelierCountAggregateOutputType> | number
          }
        }
      }
      Trader: {
        payload: Prisma.$TraderPayload<ExtArgs>
        fields: Prisma.TraderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TraderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TraderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>
          }
          findFirst: {
            args: Prisma.TraderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TraderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>
          }
          findMany: {
            args: Prisma.TraderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>[]
          }
          create: {
            args: Prisma.TraderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>
          }
          createMany: {
            args: Prisma.TraderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TraderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>
          }
          update: {
            args: Prisma.TraderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>
          }
          deleteMany: {
            args: Prisma.TraderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TraderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TraderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>
          }
          aggregate: {
            args: Prisma.TraderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrader>
          }
          groupBy: {
            args: Prisma.TraderGroupByArgs<ExtArgs>
            result: $Utils.Optional<TraderGroupByOutputType>[]
          }
          count: {
            args: Prisma.TraderCountArgs<ExtArgs>
            result: $Utils.Optional<TraderCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      TouristAttraction: {
        payload: Prisma.$TouristAttractionPayload<ExtArgs>
        fields: Prisma.TouristAttractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TouristAttractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristAttractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TouristAttractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristAttractionPayload>
          }
          findFirst: {
            args: Prisma.TouristAttractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristAttractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TouristAttractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristAttractionPayload>
          }
          findMany: {
            args: Prisma.TouristAttractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristAttractionPayload>[]
          }
          create: {
            args: Prisma.TouristAttractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristAttractionPayload>
          }
          createMany: {
            args: Prisma.TouristAttractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TouristAttractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristAttractionPayload>
          }
          update: {
            args: Prisma.TouristAttractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristAttractionPayload>
          }
          deleteMany: {
            args: Prisma.TouristAttractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TouristAttractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TouristAttractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristAttractionPayload>
          }
          aggregate: {
            args: Prisma.TouristAttractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTouristAttraction>
          }
          groupBy: {
            args: Prisma.TouristAttractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TouristAttractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TouristAttractionCountArgs<ExtArgs>
            result: $Utils.Optional<TouristAttractionCountAggregateOutputType> | number
          }
        }
      }
      Bank: {
        payload: Prisma.$BankPayload<ExtArgs>
        fields: Prisma.BankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          findFirst: {
            args: Prisma.BankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          findMany: {
            args: Prisma.BankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          create: {
            args: Prisma.BankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          createMany: {
            args: Prisma.BankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          update: {
            args: Prisma.BankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          deleteMany: {
            args: Prisma.BankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          aggregate: {
            args: Prisma.BankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBank>
          }
          groupBy: {
            args: Prisma.BankGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankCountArgs<ExtArgs>
            result: $Utils.Optional<BankCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    hotelier?: HotelierOmit
    trader?: TraderOmit
    event?: EventOmit
    touristAttraction?: TouristAttractionOmit
    bank?: BankOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    idUser: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    country: string | null
    typeUser: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    idUser: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    country: string | null
    typeUser: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    idUser: number
    name: number
    email: number
    password: number
    phone: number
    country: number
    typeUser: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    idUser?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    country?: true
    typeUser?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    idUser?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    country?: true
    typeUser?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    idUser?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    country?: true
    typeUser?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    idUser: string
    name: string
    email: string
    password: string
    phone: string
    country: string
    typeUser: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUser?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    country?: boolean
    typeUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotelier?: boolean | User$hotelierArgs<ExtArgs>
    trader?: boolean | User$traderArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    idUser?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    country?: boolean
    typeUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUser" | "name" | "email" | "password" | "phone" | "country" | "typeUser" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotelier?: boolean | User$hotelierArgs<ExtArgs>
    trader?: boolean | User$traderArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      hotelier: Prisma.$HotelierPayload<ExtArgs> | null
      trader: Prisma.$TraderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idUser: string
      name: string
      email: string
      password: string
      phone: string
      country: string
      typeUser: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `idUser`
     * const userWithIdUserOnly = await prisma.user.findMany({ select: { idUser: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotelier<T extends User$hotelierArgs<ExtArgs> = {}>(args?: Subset<T, User$hotelierArgs<ExtArgs>>): Prisma__HotelierClient<$Result.GetResult<Prisma.$HotelierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trader<T extends User$traderArgs<ExtArgs> = {}>(args?: Subset<T, User$traderArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly idUser: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly typeUser: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.hotelier
   */
  export type User$hotelierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotelier
     */
    select?: HotelierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotelier
     */
    omit?: HotelierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelierInclude<ExtArgs> | null
    where?: HotelierWhereInput
  }

  /**
   * User.trader
   */
  export type User$traderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    where?: TraderWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Hotelier
   */

  export type AggregateHotelier = {
    _count: HotelierCountAggregateOutputType | null
    _avg: HotelierAvgAggregateOutputType | null
    _sum: HotelierSumAggregateOutputType | null
    _min: HotelierMinAggregateOutputType | null
    _max: HotelierMaxAggregateOutputType | null
  }

  export type HotelierAvgAggregateOutputType = {
    totalQuantity: number | null
    quantityOccupied: number | null
  }

  export type HotelierSumAggregateOutputType = {
    totalQuantity: number | null
    quantityOccupied: number | null
  }

  export type HotelierMinAggregateOutputType = {
    idHotelier: string | null
    hotelName: string | null
    totalQuantity: number | null
    quantityOccupied: number | null
    cnpj: string | null
    link: string | null
    address: string | null
    userId: string | null
  }

  export type HotelierMaxAggregateOutputType = {
    idHotelier: string | null
    hotelName: string | null
    totalQuantity: number | null
    quantityOccupied: number | null
    cnpj: string | null
    link: string | null
    address: string | null
    userId: string | null
  }

  export type HotelierCountAggregateOutputType = {
    idHotelier: number
    hotelName: number
    totalQuantity: number
    quantityOccupied: number
    cnpj: number
    link: number
    address: number
    userId: number
    _all: number
  }


  export type HotelierAvgAggregateInputType = {
    totalQuantity?: true
    quantityOccupied?: true
  }

  export type HotelierSumAggregateInputType = {
    totalQuantity?: true
    quantityOccupied?: true
  }

  export type HotelierMinAggregateInputType = {
    idHotelier?: true
    hotelName?: true
    totalQuantity?: true
    quantityOccupied?: true
    cnpj?: true
    link?: true
    address?: true
    userId?: true
  }

  export type HotelierMaxAggregateInputType = {
    idHotelier?: true
    hotelName?: true
    totalQuantity?: true
    quantityOccupied?: true
    cnpj?: true
    link?: true
    address?: true
    userId?: true
  }

  export type HotelierCountAggregateInputType = {
    idHotelier?: true
    hotelName?: true
    totalQuantity?: true
    quantityOccupied?: true
    cnpj?: true
    link?: true
    address?: true
    userId?: true
    _all?: true
  }

  export type HotelierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotelier to aggregate.
     */
    where?: HotelierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hoteliers to fetch.
     */
    orderBy?: HotelierOrderByWithRelationInput | HotelierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hoteliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hoteliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hoteliers
    **/
    _count?: true | HotelierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelierMaxAggregateInputType
  }

  export type GetHotelierAggregateType<T extends HotelierAggregateArgs> = {
        [P in keyof T & keyof AggregateHotelier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotelier[P]>
      : GetScalarType<T[P], AggregateHotelier[P]>
  }




  export type HotelierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelierWhereInput
    orderBy?: HotelierOrderByWithAggregationInput | HotelierOrderByWithAggregationInput[]
    by: HotelierScalarFieldEnum[] | HotelierScalarFieldEnum
    having?: HotelierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelierCountAggregateInputType | true
    _avg?: HotelierAvgAggregateInputType
    _sum?: HotelierSumAggregateInputType
    _min?: HotelierMinAggregateInputType
    _max?: HotelierMaxAggregateInputType
  }

  export type HotelierGroupByOutputType = {
    idHotelier: string
    hotelName: string
    totalQuantity: number
    quantityOccupied: number
    cnpj: string
    link: string | null
    address: string
    userId: string
    _count: HotelierCountAggregateOutputType | null
    _avg: HotelierAvgAggregateOutputType | null
    _sum: HotelierSumAggregateOutputType | null
    _min: HotelierMinAggregateOutputType | null
    _max: HotelierMaxAggregateOutputType | null
  }

  type GetHotelierGroupByPayload<T extends HotelierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelierGroupByOutputType[P]>
            : GetScalarType<T[P], HotelierGroupByOutputType[P]>
        }
      >
    >


  export type HotelierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idHotelier?: boolean
    hotelName?: boolean
    totalQuantity?: boolean
    quantityOccupied?: boolean
    cnpj?: boolean
    link?: boolean
    address?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelier"]>



  export type HotelierSelectScalar = {
    idHotelier?: boolean
    hotelName?: boolean
    totalQuantity?: boolean
    quantityOccupied?: boolean
    cnpj?: boolean
    link?: boolean
    address?: boolean
    userId?: boolean
  }

  export type HotelierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idHotelier" | "hotelName" | "totalQuantity" | "quantityOccupied" | "cnpj" | "link" | "address" | "userId", ExtArgs["result"]["hotelier"]>
  export type HotelierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HotelierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotelier"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idHotelier: string
      hotelName: string
      totalQuantity: number
      quantityOccupied: number
      cnpj: string
      link: string | null
      address: string
      userId: string
    }, ExtArgs["result"]["hotelier"]>
    composites: {}
  }

  type HotelierGetPayload<S extends boolean | null | undefined | HotelierDefaultArgs> = $Result.GetResult<Prisma.$HotelierPayload, S>

  type HotelierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelierCountAggregateInputType | true
    }

  export interface HotelierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotelier'], meta: { name: 'Hotelier' } }
    /**
     * Find zero or one Hotelier that matches the filter.
     * @param {HotelierFindUniqueArgs} args - Arguments to find a Hotelier
     * @example
     * // Get one Hotelier
     * const hotelier = await prisma.hotelier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelierFindUniqueArgs>(args: SelectSubset<T, HotelierFindUniqueArgs<ExtArgs>>): Prisma__HotelierClient<$Result.GetResult<Prisma.$HotelierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotelier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelierFindUniqueOrThrowArgs} args - Arguments to find a Hotelier
     * @example
     * // Get one Hotelier
     * const hotelier = await prisma.hotelier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelierFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelierClient<$Result.GetResult<Prisma.$HotelierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotelier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelierFindFirstArgs} args - Arguments to find a Hotelier
     * @example
     * // Get one Hotelier
     * const hotelier = await prisma.hotelier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelierFindFirstArgs>(args?: SelectSubset<T, HotelierFindFirstArgs<ExtArgs>>): Prisma__HotelierClient<$Result.GetResult<Prisma.$HotelierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotelier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelierFindFirstOrThrowArgs} args - Arguments to find a Hotelier
     * @example
     * // Get one Hotelier
     * const hotelier = await prisma.hotelier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelierFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelierFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelierClient<$Result.GetResult<Prisma.$HotelierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hoteliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hoteliers
     * const hoteliers = await prisma.hotelier.findMany()
     * 
     * // Get first 10 Hoteliers
     * const hoteliers = await prisma.hotelier.findMany({ take: 10 })
     * 
     * // Only select the `idHotelier`
     * const hotelierWithIdHotelierOnly = await prisma.hotelier.findMany({ select: { idHotelier: true } })
     * 
     */
    findMany<T extends HotelierFindManyArgs>(args?: SelectSubset<T, HotelierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotelier.
     * @param {HotelierCreateArgs} args - Arguments to create a Hotelier.
     * @example
     * // Create one Hotelier
     * const Hotelier = await prisma.hotelier.create({
     *   data: {
     *     // ... data to create a Hotelier
     *   }
     * })
     * 
     */
    create<T extends HotelierCreateArgs>(args: SelectSubset<T, HotelierCreateArgs<ExtArgs>>): Prisma__HotelierClient<$Result.GetResult<Prisma.$HotelierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hoteliers.
     * @param {HotelierCreateManyArgs} args - Arguments to create many Hoteliers.
     * @example
     * // Create many Hoteliers
     * const hotelier = await prisma.hotelier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelierCreateManyArgs>(args?: SelectSubset<T, HotelierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hotelier.
     * @param {HotelierDeleteArgs} args - Arguments to delete one Hotelier.
     * @example
     * // Delete one Hotelier
     * const Hotelier = await prisma.hotelier.delete({
     *   where: {
     *     // ... filter to delete one Hotelier
     *   }
     * })
     * 
     */
    delete<T extends HotelierDeleteArgs>(args: SelectSubset<T, HotelierDeleteArgs<ExtArgs>>): Prisma__HotelierClient<$Result.GetResult<Prisma.$HotelierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotelier.
     * @param {HotelierUpdateArgs} args - Arguments to update one Hotelier.
     * @example
     * // Update one Hotelier
     * const hotelier = await prisma.hotelier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelierUpdateArgs>(args: SelectSubset<T, HotelierUpdateArgs<ExtArgs>>): Prisma__HotelierClient<$Result.GetResult<Prisma.$HotelierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hoteliers.
     * @param {HotelierDeleteManyArgs} args - Arguments to filter Hoteliers to delete.
     * @example
     * // Delete a few Hoteliers
     * const { count } = await prisma.hotelier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelierDeleteManyArgs>(args?: SelectSubset<T, HotelierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hoteliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hoteliers
     * const hotelier = await prisma.hotelier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelierUpdateManyArgs>(args: SelectSubset<T, HotelierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hotelier.
     * @param {HotelierUpsertArgs} args - Arguments to update or create a Hotelier.
     * @example
     * // Update or create a Hotelier
     * const hotelier = await prisma.hotelier.upsert({
     *   create: {
     *     // ... data to create a Hotelier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotelier we want to update
     *   }
     * })
     */
    upsert<T extends HotelierUpsertArgs>(args: SelectSubset<T, HotelierUpsertArgs<ExtArgs>>): Prisma__HotelierClient<$Result.GetResult<Prisma.$HotelierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hoteliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelierCountArgs} args - Arguments to filter Hoteliers to count.
     * @example
     * // Count the number of Hoteliers
     * const count = await prisma.hotelier.count({
     *   where: {
     *     // ... the filter for the Hoteliers we want to count
     *   }
     * })
    **/
    count<T extends HotelierCountArgs>(
      args?: Subset<T, HotelierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotelier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelierAggregateArgs>(args: Subset<T, HotelierAggregateArgs>): Prisma.PrismaPromise<GetHotelierAggregateType<T>>

    /**
     * Group by Hotelier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelierGroupByArgs} args - Group by arguments.
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
      T extends HotelierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelierGroupByArgs['orderBy'] }
        : { orderBy?: HotelierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, HotelierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotelier model
   */
  readonly fields: HotelierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotelier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hotelier model
   */
  interface HotelierFieldRefs {
    readonly idHotelier: FieldRef<"Hotelier", 'String'>
    readonly hotelName: FieldRef<"Hotelier", 'String'>
    readonly totalQuantity: FieldRef<"Hotelier", 'Int'>
    readonly quantityOccupied: FieldRef<"Hotelier", 'Int'>
    readonly cnpj: FieldRef<"Hotelier", 'String'>
    readonly link: FieldRef<"Hotelier", 'String'>
    readonly address: FieldRef<"Hotelier", 'String'>
    readonly userId: FieldRef<"Hotelier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hotelier findUnique
   */
  export type HotelierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotelier
     */
    select?: HotelierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotelier
     */
    omit?: HotelierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelierInclude<ExtArgs> | null
    /**
     * Filter, which Hotelier to fetch.
     */
    where: HotelierWhereUniqueInput
  }

  /**
   * Hotelier findUniqueOrThrow
   */
  export type HotelierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotelier
     */
    select?: HotelierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotelier
     */
    omit?: HotelierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelierInclude<ExtArgs> | null
    /**
     * Filter, which Hotelier to fetch.
     */
    where: HotelierWhereUniqueInput
  }

  /**
   * Hotelier findFirst
   */
  export type HotelierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotelier
     */
    select?: HotelierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotelier
     */
    omit?: HotelierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelierInclude<ExtArgs> | null
    /**
     * Filter, which Hotelier to fetch.
     */
    where?: HotelierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hoteliers to fetch.
     */
    orderBy?: HotelierOrderByWithRelationInput | HotelierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hoteliers.
     */
    cursor?: HotelierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hoteliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hoteliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hoteliers.
     */
    distinct?: HotelierScalarFieldEnum | HotelierScalarFieldEnum[]
  }

  /**
   * Hotelier findFirstOrThrow
   */
  export type HotelierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotelier
     */
    select?: HotelierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotelier
     */
    omit?: HotelierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelierInclude<ExtArgs> | null
    /**
     * Filter, which Hotelier to fetch.
     */
    where?: HotelierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hoteliers to fetch.
     */
    orderBy?: HotelierOrderByWithRelationInput | HotelierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hoteliers.
     */
    cursor?: HotelierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hoteliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hoteliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hoteliers.
     */
    distinct?: HotelierScalarFieldEnum | HotelierScalarFieldEnum[]
  }

  /**
   * Hotelier findMany
   */
  export type HotelierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotelier
     */
    select?: HotelierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotelier
     */
    omit?: HotelierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelierInclude<ExtArgs> | null
    /**
     * Filter, which Hoteliers to fetch.
     */
    where?: HotelierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hoteliers to fetch.
     */
    orderBy?: HotelierOrderByWithRelationInput | HotelierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hoteliers.
     */
    cursor?: HotelierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hoteliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hoteliers.
     */
    skip?: number
    distinct?: HotelierScalarFieldEnum | HotelierScalarFieldEnum[]
  }

  /**
   * Hotelier create
   */
  export type HotelierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotelier
     */
    select?: HotelierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotelier
     */
    omit?: HotelierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelierInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotelier.
     */
    data: XOR<HotelierCreateInput, HotelierUncheckedCreateInput>
  }

  /**
   * Hotelier createMany
   */
  export type HotelierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hoteliers.
     */
    data: HotelierCreateManyInput | HotelierCreateManyInput[]
  }

  /**
   * Hotelier update
   */
  export type HotelierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotelier
     */
    select?: HotelierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotelier
     */
    omit?: HotelierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelierInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotelier.
     */
    data: XOR<HotelierUpdateInput, HotelierUncheckedUpdateInput>
    /**
     * Choose, which Hotelier to update.
     */
    where: HotelierWhereUniqueInput
  }

  /**
   * Hotelier updateMany
   */
  export type HotelierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hoteliers.
     */
    data: XOR<HotelierUpdateManyMutationInput, HotelierUncheckedUpdateManyInput>
    /**
     * Filter which Hoteliers to update
     */
    where?: HotelierWhereInput
    /**
     * Limit how many Hoteliers to update.
     */
    limit?: number
  }

  /**
   * Hotelier upsert
   */
  export type HotelierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotelier
     */
    select?: HotelierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotelier
     */
    omit?: HotelierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelierInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotelier to update in case it exists.
     */
    where: HotelierWhereUniqueInput
    /**
     * In case the Hotelier found by the `where` argument doesn't exist, create a new Hotelier with this data.
     */
    create: XOR<HotelierCreateInput, HotelierUncheckedCreateInput>
    /**
     * In case the Hotelier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelierUpdateInput, HotelierUncheckedUpdateInput>
  }

  /**
   * Hotelier delete
   */
  export type HotelierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotelier
     */
    select?: HotelierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotelier
     */
    omit?: HotelierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelierInclude<ExtArgs> | null
    /**
     * Filter which Hotelier to delete.
     */
    where: HotelierWhereUniqueInput
  }

  /**
   * Hotelier deleteMany
   */
  export type HotelierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hoteliers to delete
     */
    where?: HotelierWhereInput
    /**
     * Limit how many Hoteliers to delete.
     */
    limit?: number
  }

  /**
   * Hotelier without action
   */
  export type HotelierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotelier
     */
    select?: HotelierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotelier
     */
    omit?: HotelierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelierInclude<ExtArgs> | null
  }


  /**
   * Model Trader
   */

  export type AggregateTrader = {
    _count: TraderCountAggregateOutputType | null
    _min: TraderMinAggregateOutputType | null
    _max: TraderMaxAggregateOutputType | null
  }

  export type TraderMinAggregateOutputType = {
    idTrader: string | null
    storeName: string | null
    storeType: string | null
    cpf: string | null
    cnpj: string | null
    address: string | null
    userId: string | null
  }

  export type TraderMaxAggregateOutputType = {
    idTrader: string | null
    storeName: string | null
    storeType: string | null
    cpf: string | null
    cnpj: string | null
    address: string | null
    userId: string | null
  }

  export type TraderCountAggregateOutputType = {
    idTrader: number
    storeName: number
    storeType: number
    cpf: number
    cnpj: number
    address: number
    userId: number
    _all: number
  }


  export type TraderMinAggregateInputType = {
    idTrader?: true
    storeName?: true
    storeType?: true
    cpf?: true
    cnpj?: true
    address?: true
    userId?: true
  }

  export type TraderMaxAggregateInputType = {
    idTrader?: true
    storeName?: true
    storeType?: true
    cpf?: true
    cnpj?: true
    address?: true
    userId?: true
  }

  export type TraderCountAggregateInputType = {
    idTrader?: true
    storeName?: true
    storeType?: true
    cpf?: true
    cnpj?: true
    address?: true
    userId?: true
    _all?: true
  }

  export type TraderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trader to aggregate.
     */
    where?: TraderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traders to fetch.
     */
    orderBy?: TraderOrderByWithRelationInput | TraderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TraderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Traders
    **/
    _count?: true | TraderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TraderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TraderMaxAggregateInputType
  }

  export type GetTraderAggregateType<T extends TraderAggregateArgs> = {
        [P in keyof T & keyof AggregateTrader]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrader[P]>
      : GetScalarType<T[P], AggregateTrader[P]>
  }




  export type TraderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraderWhereInput
    orderBy?: TraderOrderByWithAggregationInput | TraderOrderByWithAggregationInput[]
    by: TraderScalarFieldEnum[] | TraderScalarFieldEnum
    having?: TraderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TraderCountAggregateInputType | true
    _min?: TraderMinAggregateInputType
    _max?: TraderMaxAggregateInputType
  }

  export type TraderGroupByOutputType = {
    idTrader: string
    storeName: string
    storeType: string
    cpf: string
    cnpj: string | null
    address: string
    userId: string
    _count: TraderCountAggregateOutputType | null
    _min: TraderMinAggregateOutputType | null
    _max: TraderMaxAggregateOutputType | null
  }

  type GetTraderGroupByPayload<T extends TraderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TraderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TraderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TraderGroupByOutputType[P]>
            : GetScalarType<T[P], TraderGroupByOutputType[P]>
        }
      >
    >


  export type TraderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idTrader?: boolean
    storeName?: boolean
    storeType?: boolean
    cpf?: boolean
    cnpj?: boolean
    address?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trader"]>



  export type TraderSelectScalar = {
    idTrader?: boolean
    storeName?: boolean
    storeType?: boolean
    cpf?: boolean
    cnpj?: boolean
    address?: boolean
    userId?: boolean
  }

  export type TraderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idTrader" | "storeName" | "storeType" | "cpf" | "cnpj" | "address" | "userId", ExtArgs["result"]["trader"]>
  export type TraderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TraderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trader"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idTrader: string
      storeName: string
      storeType: string
      cpf: string
      cnpj: string | null
      address: string
      userId: string
    }, ExtArgs["result"]["trader"]>
    composites: {}
  }

  type TraderGetPayload<S extends boolean | null | undefined | TraderDefaultArgs> = $Result.GetResult<Prisma.$TraderPayload, S>

  type TraderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TraderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TraderCountAggregateInputType | true
    }

  export interface TraderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trader'], meta: { name: 'Trader' } }
    /**
     * Find zero or one Trader that matches the filter.
     * @param {TraderFindUniqueArgs} args - Arguments to find a Trader
     * @example
     * // Get one Trader
     * const trader = await prisma.trader.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TraderFindUniqueArgs>(args: SelectSubset<T, TraderFindUniqueArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trader that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TraderFindUniqueOrThrowArgs} args - Arguments to find a Trader
     * @example
     * // Get one Trader
     * const trader = await prisma.trader.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TraderFindUniqueOrThrowArgs>(args: SelectSubset<T, TraderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trader that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderFindFirstArgs} args - Arguments to find a Trader
     * @example
     * // Get one Trader
     * const trader = await prisma.trader.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TraderFindFirstArgs>(args?: SelectSubset<T, TraderFindFirstArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trader that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderFindFirstOrThrowArgs} args - Arguments to find a Trader
     * @example
     * // Get one Trader
     * const trader = await prisma.trader.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TraderFindFirstOrThrowArgs>(args?: SelectSubset<T, TraderFindFirstOrThrowArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Traders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Traders
     * const traders = await prisma.trader.findMany()
     * 
     * // Get first 10 Traders
     * const traders = await prisma.trader.findMany({ take: 10 })
     * 
     * // Only select the `idTrader`
     * const traderWithIdTraderOnly = await prisma.trader.findMany({ select: { idTrader: true } })
     * 
     */
    findMany<T extends TraderFindManyArgs>(args?: SelectSubset<T, TraderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trader.
     * @param {TraderCreateArgs} args - Arguments to create a Trader.
     * @example
     * // Create one Trader
     * const Trader = await prisma.trader.create({
     *   data: {
     *     // ... data to create a Trader
     *   }
     * })
     * 
     */
    create<T extends TraderCreateArgs>(args: SelectSubset<T, TraderCreateArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Traders.
     * @param {TraderCreateManyArgs} args - Arguments to create many Traders.
     * @example
     * // Create many Traders
     * const trader = await prisma.trader.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TraderCreateManyArgs>(args?: SelectSubset<T, TraderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trader.
     * @param {TraderDeleteArgs} args - Arguments to delete one Trader.
     * @example
     * // Delete one Trader
     * const Trader = await prisma.trader.delete({
     *   where: {
     *     // ... filter to delete one Trader
     *   }
     * })
     * 
     */
    delete<T extends TraderDeleteArgs>(args: SelectSubset<T, TraderDeleteArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trader.
     * @param {TraderUpdateArgs} args - Arguments to update one Trader.
     * @example
     * // Update one Trader
     * const trader = await prisma.trader.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TraderUpdateArgs>(args: SelectSubset<T, TraderUpdateArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Traders.
     * @param {TraderDeleteManyArgs} args - Arguments to filter Traders to delete.
     * @example
     * // Delete a few Traders
     * const { count } = await prisma.trader.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TraderDeleteManyArgs>(args?: SelectSubset<T, TraderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Traders
     * const trader = await prisma.trader.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TraderUpdateManyArgs>(args: SelectSubset<T, TraderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trader.
     * @param {TraderUpsertArgs} args - Arguments to update or create a Trader.
     * @example
     * // Update or create a Trader
     * const trader = await prisma.trader.upsert({
     *   create: {
     *     // ... data to create a Trader
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trader we want to update
     *   }
     * })
     */
    upsert<T extends TraderUpsertArgs>(args: SelectSubset<T, TraderUpsertArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Traders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderCountArgs} args - Arguments to filter Traders to count.
     * @example
     * // Count the number of Traders
     * const count = await prisma.trader.count({
     *   where: {
     *     // ... the filter for the Traders we want to count
     *   }
     * })
    **/
    count<T extends TraderCountArgs>(
      args?: Subset<T, TraderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TraderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TraderAggregateArgs>(args: Subset<T, TraderAggregateArgs>): Prisma.PrismaPromise<GetTraderAggregateType<T>>

    /**
     * Group by Trader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderGroupByArgs} args - Group by arguments.
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
      T extends TraderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TraderGroupByArgs['orderBy'] }
        : { orderBy?: TraderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TraderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trader model
   */
  readonly fields: TraderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trader.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TraderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trader model
   */
  interface TraderFieldRefs {
    readonly idTrader: FieldRef<"Trader", 'String'>
    readonly storeName: FieldRef<"Trader", 'String'>
    readonly storeType: FieldRef<"Trader", 'String'>
    readonly cpf: FieldRef<"Trader", 'String'>
    readonly cnpj: FieldRef<"Trader", 'String'>
    readonly address: FieldRef<"Trader", 'String'>
    readonly userId: FieldRef<"Trader", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trader findUnique
   */
  export type TraderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * Filter, which Trader to fetch.
     */
    where: TraderWhereUniqueInput
  }

  /**
   * Trader findUniqueOrThrow
   */
  export type TraderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * Filter, which Trader to fetch.
     */
    where: TraderWhereUniqueInput
  }

  /**
   * Trader findFirst
   */
  export type TraderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * Filter, which Trader to fetch.
     */
    where?: TraderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traders to fetch.
     */
    orderBy?: TraderOrderByWithRelationInput | TraderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Traders.
     */
    cursor?: TraderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traders.
     */
    distinct?: TraderScalarFieldEnum | TraderScalarFieldEnum[]
  }

  /**
   * Trader findFirstOrThrow
   */
  export type TraderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * Filter, which Trader to fetch.
     */
    where?: TraderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traders to fetch.
     */
    orderBy?: TraderOrderByWithRelationInput | TraderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Traders.
     */
    cursor?: TraderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traders.
     */
    distinct?: TraderScalarFieldEnum | TraderScalarFieldEnum[]
  }

  /**
   * Trader findMany
   */
  export type TraderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * Filter, which Traders to fetch.
     */
    where?: TraderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traders to fetch.
     */
    orderBy?: TraderOrderByWithRelationInput | TraderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Traders.
     */
    cursor?: TraderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traders.
     */
    skip?: number
    distinct?: TraderScalarFieldEnum | TraderScalarFieldEnum[]
  }

  /**
   * Trader create
   */
  export type TraderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * The data needed to create a Trader.
     */
    data: XOR<TraderCreateInput, TraderUncheckedCreateInput>
  }

  /**
   * Trader createMany
   */
  export type TraderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Traders.
     */
    data: TraderCreateManyInput | TraderCreateManyInput[]
  }

  /**
   * Trader update
   */
  export type TraderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * The data needed to update a Trader.
     */
    data: XOR<TraderUpdateInput, TraderUncheckedUpdateInput>
    /**
     * Choose, which Trader to update.
     */
    where: TraderWhereUniqueInput
  }

  /**
   * Trader updateMany
   */
  export type TraderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Traders.
     */
    data: XOR<TraderUpdateManyMutationInput, TraderUncheckedUpdateManyInput>
    /**
     * Filter which Traders to update
     */
    where?: TraderWhereInput
    /**
     * Limit how many Traders to update.
     */
    limit?: number
  }

  /**
   * Trader upsert
   */
  export type TraderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * The filter to search for the Trader to update in case it exists.
     */
    where: TraderWhereUniqueInput
    /**
     * In case the Trader found by the `where` argument doesn't exist, create a new Trader with this data.
     */
    create: XOR<TraderCreateInput, TraderUncheckedCreateInput>
    /**
     * In case the Trader was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TraderUpdateInput, TraderUncheckedUpdateInput>
  }

  /**
   * Trader delete
   */
  export type TraderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * Filter which Trader to delete.
     */
    where: TraderWhereUniqueInput
  }

  /**
   * Trader deleteMany
   */
  export type TraderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Traders to delete
     */
    where?: TraderWhereInput
    /**
     * Limit how many Traders to delete.
     */
    limit?: number
  }

  /**
   * Trader without action
   */
  export type TraderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    nameEvent: string | null
    description: string | null
    typeEvent: string | null
    address: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    nameEvent: string | null
    description: string | null
    typeEvent: string | null
    address: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    nameEvent: number
    description: number
    typeEvent: number
    address: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    nameEvent?: true
    description?: true
    typeEvent?: true
    address?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    nameEvent?: true
    description?: true
    typeEvent?: true
    address?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    nameEvent?: true
    description?: true
    typeEvent?: true
    address?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
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




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    nameEvent: string
    description: string
    typeEvent: string
    address: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEvent?: boolean
    description?: boolean
    typeEvent?: boolean
    address?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    nameEvent?: boolean
    description?: boolean
    typeEvent?: boolean
    address?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameEvent" | "description" | "typeEvent" | "address" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameEvent: string
      description: string
      typeEvent: string
      address: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
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
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
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
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly nameEvent: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly typeEvent: FieldRef<"Event", 'String'>
    readonly address: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
  }


  /**
   * Model TouristAttraction
   */

  export type AggregateTouristAttraction = {
    _count: TouristAttractionCountAggregateOutputType | null
    _min: TouristAttractionMinAggregateOutputType | null
    _max: TouristAttractionMaxAggregateOutputType | null
  }

  export type TouristAttractionMinAggregateOutputType = {
    id: string | null
    nameTouristAttractions: string | null
    typeTouristSpot: string | null
    address: string | null
    description: string | null
  }

  export type TouristAttractionMaxAggregateOutputType = {
    id: string | null
    nameTouristAttractions: string | null
    typeTouristSpot: string | null
    address: string | null
    description: string | null
  }

  export type TouristAttractionCountAggregateOutputType = {
    id: number
    nameTouristAttractions: number
    typeTouristSpot: number
    address: number
    description: number
    _all: number
  }


  export type TouristAttractionMinAggregateInputType = {
    id?: true
    nameTouristAttractions?: true
    typeTouristSpot?: true
    address?: true
    description?: true
  }

  export type TouristAttractionMaxAggregateInputType = {
    id?: true
    nameTouristAttractions?: true
    typeTouristSpot?: true
    address?: true
    description?: true
  }

  export type TouristAttractionCountAggregateInputType = {
    id?: true
    nameTouristAttractions?: true
    typeTouristSpot?: true
    address?: true
    description?: true
    _all?: true
  }

  export type TouristAttractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TouristAttraction to aggregate.
     */
    where?: TouristAttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TouristAttractions to fetch.
     */
    orderBy?: TouristAttractionOrderByWithRelationInput | TouristAttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TouristAttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TouristAttractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TouristAttractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TouristAttractions
    **/
    _count?: true | TouristAttractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TouristAttractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TouristAttractionMaxAggregateInputType
  }

  export type GetTouristAttractionAggregateType<T extends TouristAttractionAggregateArgs> = {
        [P in keyof T & keyof AggregateTouristAttraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTouristAttraction[P]>
      : GetScalarType<T[P], AggregateTouristAttraction[P]>
  }




  export type TouristAttractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TouristAttractionWhereInput
    orderBy?: TouristAttractionOrderByWithAggregationInput | TouristAttractionOrderByWithAggregationInput[]
    by: TouristAttractionScalarFieldEnum[] | TouristAttractionScalarFieldEnum
    having?: TouristAttractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TouristAttractionCountAggregateInputType | true
    _min?: TouristAttractionMinAggregateInputType
    _max?: TouristAttractionMaxAggregateInputType
  }

  export type TouristAttractionGroupByOutputType = {
    id: string
    nameTouristAttractions: string
    typeTouristSpot: string
    address: string
    description: string | null
    _count: TouristAttractionCountAggregateOutputType | null
    _min: TouristAttractionMinAggregateOutputType | null
    _max: TouristAttractionMaxAggregateOutputType | null
  }

  type GetTouristAttractionGroupByPayload<T extends TouristAttractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TouristAttractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TouristAttractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TouristAttractionGroupByOutputType[P]>
            : GetScalarType<T[P], TouristAttractionGroupByOutputType[P]>
        }
      >
    >


  export type TouristAttractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameTouristAttractions?: boolean
    typeTouristSpot?: boolean
    address?: boolean
    description?: boolean
  }, ExtArgs["result"]["touristAttraction"]>



  export type TouristAttractionSelectScalar = {
    id?: boolean
    nameTouristAttractions?: boolean
    typeTouristSpot?: boolean
    address?: boolean
    description?: boolean
  }

  export type TouristAttractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameTouristAttractions" | "typeTouristSpot" | "address" | "description", ExtArgs["result"]["touristAttraction"]>

  export type $TouristAttractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TouristAttraction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameTouristAttractions: string
      typeTouristSpot: string
      address: string
      description: string | null
    }, ExtArgs["result"]["touristAttraction"]>
    composites: {}
  }

  type TouristAttractionGetPayload<S extends boolean | null | undefined | TouristAttractionDefaultArgs> = $Result.GetResult<Prisma.$TouristAttractionPayload, S>

  type TouristAttractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TouristAttractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TouristAttractionCountAggregateInputType | true
    }

  export interface TouristAttractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TouristAttraction'], meta: { name: 'TouristAttraction' } }
    /**
     * Find zero or one TouristAttraction that matches the filter.
     * @param {TouristAttractionFindUniqueArgs} args - Arguments to find a TouristAttraction
     * @example
     * // Get one TouristAttraction
     * const touristAttraction = await prisma.touristAttraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TouristAttractionFindUniqueArgs>(args: SelectSubset<T, TouristAttractionFindUniqueArgs<ExtArgs>>): Prisma__TouristAttractionClient<$Result.GetResult<Prisma.$TouristAttractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TouristAttraction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TouristAttractionFindUniqueOrThrowArgs} args - Arguments to find a TouristAttraction
     * @example
     * // Get one TouristAttraction
     * const touristAttraction = await prisma.touristAttraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TouristAttractionFindUniqueOrThrowArgs>(args: SelectSubset<T, TouristAttractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TouristAttractionClient<$Result.GetResult<Prisma.$TouristAttractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TouristAttraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristAttractionFindFirstArgs} args - Arguments to find a TouristAttraction
     * @example
     * // Get one TouristAttraction
     * const touristAttraction = await prisma.touristAttraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TouristAttractionFindFirstArgs>(args?: SelectSubset<T, TouristAttractionFindFirstArgs<ExtArgs>>): Prisma__TouristAttractionClient<$Result.GetResult<Prisma.$TouristAttractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TouristAttraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristAttractionFindFirstOrThrowArgs} args - Arguments to find a TouristAttraction
     * @example
     * // Get one TouristAttraction
     * const touristAttraction = await prisma.touristAttraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TouristAttractionFindFirstOrThrowArgs>(args?: SelectSubset<T, TouristAttractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TouristAttractionClient<$Result.GetResult<Prisma.$TouristAttractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TouristAttractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristAttractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TouristAttractions
     * const touristAttractions = await prisma.touristAttraction.findMany()
     * 
     * // Get first 10 TouristAttractions
     * const touristAttractions = await prisma.touristAttraction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const touristAttractionWithIdOnly = await prisma.touristAttraction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TouristAttractionFindManyArgs>(args?: SelectSubset<T, TouristAttractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouristAttractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TouristAttraction.
     * @param {TouristAttractionCreateArgs} args - Arguments to create a TouristAttraction.
     * @example
     * // Create one TouristAttraction
     * const TouristAttraction = await prisma.touristAttraction.create({
     *   data: {
     *     // ... data to create a TouristAttraction
     *   }
     * })
     * 
     */
    create<T extends TouristAttractionCreateArgs>(args: SelectSubset<T, TouristAttractionCreateArgs<ExtArgs>>): Prisma__TouristAttractionClient<$Result.GetResult<Prisma.$TouristAttractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TouristAttractions.
     * @param {TouristAttractionCreateManyArgs} args - Arguments to create many TouristAttractions.
     * @example
     * // Create many TouristAttractions
     * const touristAttraction = await prisma.touristAttraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TouristAttractionCreateManyArgs>(args?: SelectSubset<T, TouristAttractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TouristAttraction.
     * @param {TouristAttractionDeleteArgs} args - Arguments to delete one TouristAttraction.
     * @example
     * // Delete one TouristAttraction
     * const TouristAttraction = await prisma.touristAttraction.delete({
     *   where: {
     *     // ... filter to delete one TouristAttraction
     *   }
     * })
     * 
     */
    delete<T extends TouristAttractionDeleteArgs>(args: SelectSubset<T, TouristAttractionDeleteArgs<ExtArgs>>): Prisma__TouristAttractionClient<$Result.GetResult<Prisma.$TouristAttractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TouristAttraction.
     * @param {TouristAttractionUpdateArgs} args - Arguments to update one TouristAttraction.
     * @example
     * // Update one TouristAttraction
     * const touristAttraction = await prisma.touristAttraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TouristAttractionUpdateArgs>(args: SelectSubset<T, TouristAttractionUpdateArgs<ExtArgs>>): Prisma__TouristAttractionClient<$Result.GetResult<Prisma.$TouristAttractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TouristAttractions.
     * @param {TouristAttractionDeleteManyArgs} args - Arguments to filter TouristAttractions to delete.
     * @example
     * // Delete a few TouristAttractions
     * const { count } = await prisma.touristAttraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TouristAttractionDeleteManyArgs>(args?: SelectSubset<T, TouristAttractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TouristAttractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristAttractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TouristAttractions
     * const touristAttraction = await prisma.touristAttraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TouristAttractionUpdateManyArgs>(args: SelectSubset<T, TouristAttractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TouristAttraction.
     * @param {TouristAttractionUpsertArgs} args - Arguments to update or create a TouristAttraction.
     * @example
     * // Update or create a TouristAttraction
     * const touristAttraction = await prisma.touristAttraction.upsert({
     *   create: {
     *     // ... data to create a TouristAttraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TouristAttraction we want to update
     *   }
     * })
     */
    upsert<T extends TouristAttractionUpsertArgs>(args: SelectSubset<T, TouristAttractionUpsertArgs<ExtArgs>>): Prisma__TouristAttractionClient<$Result.GetResult<Prisma.$TouristAttractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TouristAttractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristAttractionCountArgs} args - Arguments to filter TouristAttractions to count.
     * @example
     * // Count the number of TouristAttractions
     * const count = await prisma.touristAttraction.count({
     *   where: {
     *     // ... the filter for the TouristAttractions we want to count
     *   }
     * })
    **/
    count<T extends TouristAttractionCountArgs>(
      args?: Subset<T, TouristAttractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TouristAttractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TouristAttraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristAttractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TouristAttractionAggregateArgs>(args: Subset<T, TouristAttractionAggregateArgs>): Prisma.PrismaPromise<GetTouristAttractionAggregateType<T>>

    /**
     * Group by TouristAttraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristAttractionGroupByArgs} args - Group by arguments.
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
      T extends TouristAttractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TouristAttractionGroupByArgs['orderBy'] }
        : { orderBy?: TouristAttractionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TouristAttractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTouristAttractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TouristAttraction model
   */
  readonly fields: TouristAttractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TouristAttraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TouristAttractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TouristAttraction model
   */
  interface TouristAttractionFieldRefs {
    readonly id: FieldRef<"TouristAttraction", 'String'>
    readonly nameTouristAttractions: FieldRef<"TouristAttraction", 'String'>
    readonly typeTouristSpot: FieldRef<"TouristAttraction", 'String'>
    readonly address: FieldRef<"TouristAttraction", 'String'>
    readonly description: FieldRef<"TouristAttraction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TouristAttraction findUnique
   */
  export type TouristAttractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouristAttraction
     */
    select?: TouristAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouristAttraction
     */
    omit?: TouristAttractionOmit<ExtArgs> | null
    /**
     * Filter, which TouristAttraction to fetch.
     */
    where: TouristAttractionWhereUniqueInput
  }

  /**
   * TouristAttraction findUniqueOrThrow
   */
  export type TouristAttractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouristAttraction
     */
    select?: TouristAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouristAttraction
     */
    omit?: TouristAttractionOmit<ExtArgs> | null
    /**
     * Filter, which TouristAttraction to fetch.
     */
    where: TouristAttractionWhereUniqueInput
  }

  /**
   * TouristAttraction findFirst
   */
  export type TouristAttractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouristAttraction
     */
    select?: TouristAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouristAttraction
     */
    omit?: TouristAttractionOmit<ExtArgs> | null
    /**
     * Filter, which TouristAttraction to fetch.
     */
    where?: TouristAttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TouristAttractions to fetch.
     */
    orderBy?: TouristAttractionOrderByWithRelationInput | TouristAttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TouristAttractions.
     */
    cursor?: TouristAttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TouristAttractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TouristAttractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TouristAttractions.
     */
    distinct?: TouristAttractionScalarFieldEnum | TouristAttractionScalarFieldEnum[]
  }

  /**
   * TouristAttraction findFirstOrThrow
   */
  export type TouristAttractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouristAttraction
     */
    select?: TouristAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouristAttraction
     */
    omit?: TouristAttractionOmit<ExtArgs> | null
    /**
     * Filter, which TouristAttraction to fetch.
     */
    where?: TouristAttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TouristAttractions to fetch.
     */
    orderBy?: TouristAttractionOrderByWithRelationInput | TouristAttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TouristAttractions.
     */
    cursor?: TouristAttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TouristAttractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TouristAttractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TouristAttractions.
     */
    distinct?: TouristAttractionScalarFieldEnum | TouristAttractionScalarFieldEnum[]
  }

  /**
   * TouristAttraction findMany
   */
  export type TouristAttractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouristAttraction
     */
    select?: TouristAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouristAttraction
     */
    omit?: TouristAttractionOmit<ExtArgs> | null
    /**
     * Filter, which TouristAttractions to fetch.
     */
    where?: TouristAttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TouristAttractions to fetch.
     */
    orderBy?: TouristAttractionOrderByWithRelationInput | TouristAttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TouristAttractions.
     */
    cursor?: TouristAttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TouristAttractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TouristAttractions.
     */
    skip?: number
    distinct?: TouristAttractionScalarFieldEnum | TouristAttractionScalarFieldEnum[]
  }

  /**
   * TouristAttraction create
   */
  export type TouristAttractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouristAttraction
     */
    select?: TouristAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouristAttraction
     */
    omit?: TouristAttractionOmit<ExtArgs> | null
    /**
     * The data needed to create a TouristAttraction.
     */
    data: XOR<TouristAttractionCreateInput, TouristAttractionUncheckedCreateInput>
  }

  /**
   * TouristAttraction createMany
   */
  export type TouristAttractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TouristAttractions.
     */
    data: TouristAttractionCreateManyInput | TouristAttractionCreateManyInput[]
  }

  /**
   * TouristAttraction update
   */
  export type TouristAttractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouristAttraction
     */
    select?: TouristAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouristAttraction
     */
    omit?: TouristAttractionOmit<ExtArgs> | null
    /**
     * The data needed to update a TouristAttraction.
     */
    data: XOR<TouristAttractionUpdateInput, TouristAttractionUncheckedUpdateInput>
    /**
     * Choose, which TouristAttraction to update.
     */
    where: TouristAttractionWhereUniqueInput
  }

  /**
   * TouristAttraction updateMany
   */
  export type TouristAttractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TouristAttractions.
     */
    data: XOR<TouristAttractionUpdateManyMutationInput, TouristAttractionUncheckedUpdateManyInput>
    /**
     * Filter which TouristAttractions to update
     */
    where?: TouristAttractionWhereInput
    /**
     * Limit how many TouristAttractions to update.
     */
    limit?: number
  }

  /**
   * TouristAttraction upsert
   */
  export type TouristAttractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouristAttraction
     */
    select?: TouristAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouristAttraction
     */
    omit?: TouristAttractionOmit<ExtArgs> | null
    /**
     * The filter to search for the TouristAttraction to update in case it exists.
     */
    where: TouristAttractionWhereUniqueInput
    /**
     * In case the TouristAttraction found by the `where` argument doesn't exist, create a new TouristAttraction with this data.
     */
    create: XOR<TouristAttractionCreateInput, TouristAttractionUncheckedCreateInput>
    /**
     * In case the TouristAttraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TouristAttractionUpdateInput, TouristAttractionUncheckedUpdateInput>
  }

  /**
   * TouristAttraction delete
   */
  export type TouristAttractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouristAttraction
     */
    select?: TouristAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouristAttraction
     */
    omit?: TouristAttractionOmit<ExtArgs> | null
    /**
     * Filter which TouristAttraction to delete.
     */
    where: TouristAttractionWhereUniqueInput
  }

  /**
   * TouristAttraction deleteMany
   */
  export type TouristAttractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TouristAttractions to delete
     */
    where?: TouristAttractionWhereInput
    /**
     * Limit how many TouristAttractions to delete.
     */
    limit?: number
  }

  /**
   * TouristAttraction without action
   */
  export type TouristAttractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouristAttraction
     */
    select?: TouristAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouristAttraction
     */
    omit?: TouristAttractionOmit<ExtArgs> | null
  }


  /**
   * Model Bank
   */

  export type AggregateBank = {
    _count: BankCountAggregateOutputType | null
    _min: BankMinAggregateOutputType | null
    _max: BankMaxAggregateOutputType | null
  }

  export type BankMinAggregateOutputType = {
    id: string | null
    nameBank: string | null
    cnpj: string | null
    address: string | null
  }

  export type BankMaxAggregateOutputType = {
    id: string | null
    nameBank: string | null
    cnpj: string | null
    address: string | null
  }

  export type BankCountAggregateOutputType = {
    id: number
    nameBank: number
    cnpj: number
    address: number
    _all: number
  }


  export type BankMinAggregateInputType = {
    id?: true
    nameBank?: true
    cnpj?: true
    address?: true
  }

  export type BankMaxAggregateInputType = {
    id?: true
    nameBank?: true
    cnpj?: true
    address?: true
  }

  export type BankCountAggregateInputType = {
    id?: true
    nameBank?: true
    cnpj?: true
    address?: true
    _all?: true
  }

  export type BankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank to aggregate.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banks
    **/
    _count?: true | BankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankMaxAggregateInputType
  }

  export type GetBankAggregateType<T extends BankAggregateArgs> = {
        [P in keyof T & keyof AggregateBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBank[P]>
      : GetScalarType<T[P], AggregateBank[P]>
  }




  export type BankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankWhereInput
    orderBy?: BankOrderByWithAggregationInput | BankOrderByWithAggregationInput[]
    by: BankScalarFieldEnum[] | BankScalarFieldEnum
    having?: BankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankCountAggregateInputType | true
    _min?: BankMinAggregateInputType
    _max?: BankMaxAggregateInputType
  }

  export type BankGroupByOutputType = {
    id: string
    nameBank: string
    cnpj: string
    address: string
    _count: BankCountAggregateOutputType | null
    _min: BankMinAggregateOutputType | null
    _max: BankMaxAggregateOutputType | null
  }

  type GetBankGroupByPayload<T extends BankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankGroupByOutputType[P]>
            : GetScalarType<T[P], BankGroupByOutputType[P]>
        }
      >
    >


  export type BankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameBank?: boolean
    cnpj?: boolean
    address?: boolean
  }, ExtArgs["result"]["bank"]>



  export type BankSelectScalar = {
    id?: boolean
    nameBank?: boolean
    cnpj?: boolean
    address?: boolean
  }

  export type BankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameBank" | "cnpj" | "address", ExtArgs["result"]["bank"]>

  export type $BankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bank"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameBank: string
      cnpj: string
      address: string
    }, ExtArgs["result"]["bank"]>
    composites: {}
  }

  type BankGetPayload<S extends boolean | null | undefined | BankDefaultArgs> = $Result.GetResult<Prisma.$BankPayload, S>

  type BankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankCountAggregateInputType | true
    }

  export interface BankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bank'], meta: { name: 'Bank' } }
    /**
     * Find zero or one Bank that matches the filter.
     * @param {BankFindUniqueArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankFindUniqueArgs>(args: SelectSubset<T, BankFindUniqueArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankFindUniqueOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankFindUniqueOrThrowArgs>(args: SelectSubset<T, BankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindFirstArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankFindFirstArgs>(args?: SelectSubset<T, BankFindFirstArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindFirstOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankFindFirstOrThrowArgs>(args?: SelectSubset<T, BankFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banks
     * const banks = await prisma.bank.findMany()
     * 
     * // Get first 10 Banks
     * const banks = await prisma.bank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankWithIdOnly = await prisma.bank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankFindManyArgs>(args?: SelectSubset<T, BankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bank.
     * @param {BankCreateArgs} args - Arguments to create a Bank.
     * @example
     * // Create one Bank
     * const Bank = await prisma.bank.create({
     *   data: {
     *     // ... data to create a Bank
     *   }
     * })
     * 
     */
    create<T extends BankCreateArgs>(args: SelectSubset<T, BankCreateArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banks.
     * @param {BankCreateManyArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const bank = await prisma.bank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankCreateManyArgs>(args?: SelectSubset<T, BankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bank.
     * @param {BankDeleteArgs} args - Arguments to delete one Bank.
     * @example
     * // Delete one Bank
     * const Bank = await prisma.bank.delete({
     *   where: {
     *     // ... filter to delete one Bank
     *   }
     * })
     * 
     */
    delete<T extends BankDeleteArgs>(args: SelectSubset<T, BankDeleteArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bank.
     * @param {BankUpdateArgs} args - Arguments to update one Bank.
     * @example
     * // Update one Bank
     * const bank = await prisma.bank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankUpdateArgs>(args: SelectSubset<T, BankUpdateArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banks.
     * @param {BankDeleteManyArgs} args - Arguments to filter Banks to delete.
     * @example
     * // Delete a few Banks
     * const { count } = await prisma.bank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankDeleteManyArgs>(args?: SelectSubset<T, BankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banks
     * const bank = await prisma.bank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankUpdateManyArgs>(args: SelectSubset<T, BankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bank.
     * @param {BankUpsertArgs} args - Arguments to update or create a Bank.
     * @example
     * // Update or create a Bank
     * const bank = await prisma.bank.upsert({
     *   create: {
     *     // ... data to create a Bank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bank we want to update
     *   }
     * })
     */
    upsert<T extends BankUpsertArgs>(args: SelectSubset<T, BankUpsertArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCountArgs} args - Arguments to filter Banks to count.
     * @example
     * // Count the number of Banks
     * const count = await prisma.bank.count({
     *   where: {
     *     // ... the filter for the Banks we want to count
     *   }
     * })
    **/
    count<T extends BankCountArgs>(
      args?: Subset<T, BankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BankAggregateArgs>(args: Subset<T, BankAggregateArgs>): Prisma.PrismaPromise<GetBankAggregateType<T>>

    /**
     * Group by Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankGroupByArgs} args - Group by arguments.
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
      T extends BankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankGroupByArgs['orderBy'] }
        : { orderBy?: BankGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bank model
   */
  readonly fields: BankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bank model
   */
  interface BankFieldRefs {
    readonly id: FieldRef<"Bank", 'String'>
    readonly nameBank: FieldRef<"Bank", 'String'>
    readonly cnpj: FieldRef<"Bank", 'String'>
    readonly address: FieldRef<"Bank", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bank findUnique
   */
  export type BankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank findUniqueOrThrow
   */
  export type BankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank findFirst
   */
  export type BankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank findFirstOrThrow
   */
  export type BankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank findMany
   */
  export type BankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Filter, which Banks to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank create
   */
  export type BankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * The data needed to create a Bank.
     */
    data: XOR<BankCreateInput, BankUncheckedCreateInput>
  }

  /**
   * Bank createMany
   */
  export type BankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banks.
     */
    data: BankCreateManyInput | BankCreateManyInput[]
  }

  /**
   * Bank update
   */
  export type BankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * The data needed to update a Bank.
     */
    data: XOR<BankUpdateInput, BankUncheckedUpdateInput>
    /**
     * Choose, which Bank to update.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank updateMany
   */
  export type BankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banks.
     */
    data: XOR<BankUpdateManyMutationInput, BankUncheckedUpdateManyInput>
    /**
     * Filter which Banks to update
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to update.
     */
    limit?: number
  }

  /**
   * Bank upsert
   */
  export type BankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * The filter to search for the Bank to update in case it exists.
     */
    where: BankWhereUniqueInput
    /**
     * In case the Bank found by the `where` argument doesn't exist, create a new Bank with this data.
     */
    create: XOR<BankCreateInput, BankUncheckedCreateInput>
    /**
     * In case the Bank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankUpdateInput, BankUncheckedUpdateInput>
  }

  /**
   * Bank delete
   */
  export type BankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Filter which Bank to delete.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank deleteMany
   */
  export type BankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banks to delete
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to delete.
     */
    limit?: number
  }

  /**
   * Bank without action
   */
  export type BankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    idUser: 'idUser',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    country: 'country',
    typeUser: 'typeUser',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HotelierScalarFieldEnum: {
    idHotelier: 'idHotelier',
    hotelName: 'hotelName',
    totalQuantity: 'totalQuantity',
    quantityOccupied: 'quantityOccupied',
    cnpj: 'cnpj',
    link: 'link',
    address: 'address',
    userId: 'userId'
  };

  export type HotelierScalarFieldEnum = (typeof HotelierScalarFieldEnum)[keyof typeof HotelierScalarFieldEnum]


  export const TraderScalarFieldEnum: {
    idTrader: 'idTrader',
    storeName: 'storeName',
    storeType: 'storeType',
    cpf: 'cpf',
    cnpj: 'cnpj',
    address: 'address',
    userId: 'userId'
  };

  export type TraderScalarFieldEnum = (typeof TraderScalarFieldEnum)[keyof typeof TraderScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    nameEvent: 'nameEvent',
    description: 'description',
    typeEvent: 'typeEvent',
    address: 'address',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TouristAttractionScalarFieldEnum: {
    id: 'id',
    nameTouristAttractions: 'nameTouristAttractions',
    typeTouristSpot: 'typeTouristSpot',
    address: 'address',
    description: 'description'
  };

  export type TouristAttractionScalarFieldEnum = (typeof TouristAttractionScalarFieldEnum)[keyof typeof TouristAttractionScalarFieldEnum]


  export const BankScalarFieldEnum: {
    id: 'id',
    nameBank: 'nameBank',
    cnpj: 'cnpj',
    address: 'address'
  };

  export type BankScalarFieldEnum = (typeof BankScalarFieldEnum)[keyof typeof BankScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    idUser?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    typeUser?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hotelier?: XOR<HotelierNullableScalarRelationFilter, HotelierWhereInput> | null
    trader?: XOR<TraderNullableScalarRelationFilter, TraderWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    idUser?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    typeUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotelier?: HotelierOrderByWithRelationInput
    trader?: TraderOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    idUser?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    typeUser?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hotelier?: XOR<HotelierNullableScalarRelationFilter, HotelierWhereInput> | null
    trader?: XOR<TraderNullableScalarRelationFilter, TraderWhereInput> | null
  }, "idUser" | "email">

  export type UserOrderByWithAggregationInput = {
    idUser?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    typeUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    idUser?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    country?: StringWithAggregatesFilter<"User"> | string
    typeUser?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HotelierWhereInput = {
    AND?: HotelierWhereInput | HotelierWhereInput[]
    OR?: HotelierWhereInput[]
    NOT?: HotelierWhereInput | HotelierWhereInput[]
    idHotelier?: StringFilter<"Hotelier"> | string
    hotelName?: StringFilter<"Hotelier"> | string
    totalQuantity?: IntFilter<"Hotelier"> | number
    quantityOccupied?: IntFilter<"Hotelier"> | number
    cnpj?: StringFilter<"Hotelier"> | string
    link?: StringNullableFilter<"Hotelier"> | string | null
    address?: StringFilter<"Hotelier"> | string
    userId?: StringFilter<"Hotelier"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HotelierOrderByWithRelationInput = {
    idHotelier?: SortOrder
    hotelName?: SortOrder
    totalQuantity?: SortOrder
    quantityOccupied?: SortOrder
    cnpj?: SortOrder
    link?: SortOrderInput | SortOrder
    address?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type HotelierWhereUniqueInput = Prisma.AtLeast<{
    idHotelier?: string
    cnpj?: string
    userId?: string
    AND?: HotelierWhereInput | HotelierWhereInput[]
    OR?: HotelierWhereInput[]
    NOT?: HotelierWhereInput | HotelierWhereInput[]
    hotelName?: StringFilter<"Hotelier"> | string
    totalQuantity?: IntFilter<"Hotelier"> | number
    quantityOccupied?: IntFilter<"Hotelier"> | number
    link?: StringNullableFilter<"Hotelier"> | string | null
    address?: StringFilter<"Hotelier"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "idHotelier" | "cnpj" | "userId">

  export type HotelierOrderByWithAggregationInput = {
    idHotelier?: SortOrder
    hotelName?: SortOrder
    totalQuantity?: SortOrder
    quantityOccupied?: SortOrder
    cnpj?: SortOrder
    link?: SortOrderInput | SortOrder
    address?: SortOrder
    userId?: SortOrder
    _count?: HotelierCountOrderByAggregateInput
    _avg?: HotelierAvgOrderByAggregateInput
    _max?: HotelierMaxOrderByAggregateInput
    _min?: HotelierMinOrderByAggregateInput
    _sum?: HotelierSumOrderByAggregateInput
  }

  export type HotelierScalarWhereWithAggregatesInput = {
    AND?: HotelierScalarWhereWithAggregatesInput | HotelierScalarWhereWithAggregatesInput[]
    OR?: HotelierScalarWhereWithAggregatesInput[]
    NOT?: HotelierScalarWhereWithAggregatesInput | HotelierScalarWhereWithAggregatesInput[]
    idHotelier?: StringWithAggregatesFilter<"Hotelier"> | string
    hotelName?: StringWithAggregatesFilter<"Hotelier"> | string
    totalQuantity?: IntWithAggregatesFilter<"Hotelier"> | number
    quantityOccupied?: IntWithAggregatesFilter<"Hotelier"> | number
    cnpj?: StringWithAggregatesFilter<"Hotelier"> | string
    link?: StringNullableWithAggregatesFilter<"Hotelier"> | string | null
    address?: StringWithAggregatesFilter<"Hotelier"> | string
    userId?: StringWithAggregatesFilter<"Hotelier"> | string
  }

  export type TraderWhereInput = {
    AND?: TraderWhereInput | TraderWhereInput[]
    OR?: TraderWhereInput[]
    NOT?: TraderWhereInput | TraderWhereInput[]
    idTrader?: StringFilter<"Trader"> | string
    storeName?: StringFilter<"Trader"> | string
    storeType?: StringFilter<"Trader"> | string
    cpf?: StringFilter<"Trader"> | string
    cnpj?: StringNullableFilter<"Trader"> | string | null
    address?: StringFilter<"Trader"> | string
    userId?: StringFilter<"Trader"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TraderOrderByWithRelationInput = {
    idTrader?: SortOrder
    storeName?: SortOrder
    storeType?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    address?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TraderWhereUniqueInput = Prisma.AtLeast<{
    idTrader?: string
    cpf?: string
    cnpj?: string
    userId?: string
    AND?: TraderWhereInput | TraderWhereInput[]
    OR?: TraderWhereInput[]
    NOT?: TraderWhereInput | TraderWhereInput[]
    storeName?: StringFilter<"Trader"> | string
    storeType?: StringFilter<"Trader"> | string
    address?: StringFilter<"Trader"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "idTrader" | "cpf" | "cnpj" | "userId">

  export type TraderOrderByWithAggregationInput = {
    idTrader?: SortOrder
    storeName?: SortOrder
    storeType?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    address?: SortOrder
    userId?: SortOrder
    _count?: TraderCountOrderByAggregateInput
    _max?: TraderMaxOrderByAggregateInput
    _min?: TraderMinOrderByAggregateInput
  }

  export type TraderScalarWhereWithAggregatesInput = {
    AND?: TraderScalarWhereWithAggregatesInput | TraderScalarWhereWithAggregatesInput[]
    OR?: TraderScalarWhereWithAggregatesInput[]
    NOT?: TraderScalarWhereWithAggregatesInput | TraderScalarWhereWithAggregatesInput[]
    idTrader?: StringWithAggregatesFilter<"Trader"> | string
    storeName?: StringWithAggregatesFilter<"Trader"> | string
    storeType?: StringWithAggregatesFilter<"Trader"> | string
    cpf?: StringWithAggregatesFilter<"Trader"> | string
    cnpj?: StringNullableWithAggregatesFilter<"Trader"> | string | null
    address?: StringWithAggregatesFilter<"Trader"> | string
    userId?: StringWithAggregatesFilter<"Trader"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    nameEvent?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    typeEvent?: StringFilter<"Event"> | string
    address?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    nameEvent?: SortOrder
    description?: SortOrder
    typeEvent?: SortOrder
    address?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    nameEvent?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    typeEvent?: StringFilter<"Event"> | string
    address?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    nameEvent?: SortOrder
    description?: SortOrder
    typeEvent?: SortOrder
    address?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    nameEvent?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    typeEvent?: StringWithAggregatesFilter<"Event"> | string
    address?: StringWithAggregatesFilter<"Event"> | string
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type TouristAttractionWhereInput = {
    AND?: TouristAttractionWhereInput | TouristAttractionWhereInput[]
    OR?: TouristAttractionWhereInput[]
    NOT?: TouristAttractionWhereInput | TouristAttractionWhereInput[]
    id?: StringFilter<"TouristAttraction"> | string
    nameTouristAttractions?: StringFilter<"TouristAttraction"> | string
    typeTouristSpot?: StringFilter<"TouristAttraction"> | string
    address?: StringFilter<"TouristAttraction"> | string
    description?: StringNullableFilter<"TouristAttraction"> | string | null
  }

  export type TouristAttractionOrderByWithRelationInput = {
    id?: SortOrder
    nameTouristAttractions?: SortOrder
    typeTouristSpot?: SortOrder
    address?: SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type TouristAttractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TouristAttractionWhereInput | TouristAttractionWhereInput[]
    OR?: TouristAttractionWhereInput[]
    NOT?: TouristAttractionWhereInput | TouristAttractionWhereInput[]
    nameTouristAttractions?: StringFilter<"TouristAttraction"> | string
    typeTouristSpot?: StringFilter<"TouristAttraction"> | string
    address?: StringFilter<"TouristAttraction"> | string
    description?: StringNullableFilter<"TouristAttraction"> | string | null
  }, "id">

  export type TouristAttractionOrderByWithAggregationInput = {
    id?: SortOrder
    nameTouristAttractions?: SortOrder
    typeTouristSpot?: SortOrder
    address?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TouristAttractionCountOrderByAggregateInput
    _max?: TouristAttractionMaxOrderByAggregateInput
    _min?: TouristAttractionMinOrderByAggregateInput
  }

  export type TouristAttractionScalarWhereWithAggregatesInput = {
    AND?: TouristAttractionScalarWhereWithAggregatesInput | TouristAttractionScalarWhereWithAggregatesInput[]
    OR?: TouristAttractionScalarWhereWithAggregatesInput[]
    NOT?: TouristAttractionScalarWhereWithAggregatesInput | TouristAttractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TouristAttraction"> | string
    nameTouristAttractions?: StringWithAggregatesFilter<"TouristAttraction"> | string
    typeTouristSpot?: StringWithAggregatesFilter<"TouristAttraction"> | string
    address?: StringWithAggregatesFilter<"TouristAttraction"> | string
    description?: StringNullableWithAggregatesFilter<"TouristAttraction"> | string | null
  }

  export type BankWhereInput = {
    AND?: BankWhereInput | BankWhereInput[]
    OR?: BankWhereInput[]
    NOT?: BankWhereInput | BankWhereInput[]
    id?: StringFilter<"Bank"> | string
    nameBank?: StringFilter<"Bank"> | string
    cnpj?: StringFilter<"Bank"> | string
    address?: StringFilter<"Bank"> | string
  }

  export type BankOrderByWithRelationInput = {
    id?: SortOrder
    nameBank?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
  }

  export type BankWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    AND?: BankWhereInput | BankWhereInput[]
    OR?: BankWhereInput[]
    NOT?: BankWhereInput | BankWhereInput[]
    nameBank?: StringFilter<"Bank"> | string
    address?: StringFilter<"Bank"> | string
  }, "id" | "cnpj">

  export type BankOrderByWithAggregationInput = {
    id?: SortOrder
    nameBank?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    _count?: BankCountOrderByAggregateInput
    _max?: BankMaxOrderByAggregateInput
    _min?: BankMinOrderByAggregateInput
  }

  export type BankScalarWhereWithAggregatesInput = {
    AND?: BankScalarWhereWithAggregatesInput | BankScalarWhereWithAggregatesInput[]
    OR?: BankScalarWhereWithAggregatesInput[]
    NOT?: BankScalarWhereWithAggregatesInput | BankScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bank"> | string
    nameBank?: StringWithAggregatesFilter<"Bank"> | string
    cnpj?: StringWithAggregatesFilter<"Bank"> | string
    address?: StringWithAggregatesFilter<"Bank"> | string
  }

  export type UserCreateInput = {
    idUser?: string
    name: string
    email: string
    password: string
    phone: string
    country: string
    typeUser: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelier?: HotelierCreateNestedOneWithoutUserInput
    trader?: TraderCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    idUser?: string
    name: string
    email: string
    password: string
    phone: string
    country: string
    typeUser: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelier?: HotelierUncheckedCreateNestedOneWithoutUserInput
    trader?: TraderUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    typeUser?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelier?: HotelierUpdateOneWithoutUserNestedInput
    trader?: TraderUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    typeUser?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelier?: HotelierUncheckedUpdateOneWithoutUserNestedInput
    trader?: TraderUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    idUser?: string
    name: string
    email: string
    password: string
    phone: string
    country: string
    typeUser: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    typeUser?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    typeUser?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelierCreateInput = {
    idHotelier?: string
    hotelName: string
    totalQuantity: number
    quantityOccupied: number
    cnpj: string
    link?: string | null
    address: string
    user: UserCreateNestedOneWithoutHotelierInput
  }

  export type HotelierUncheckedCreateInput = {
    idHotelier?: string
    hotelName: string
    totalQuantity: number
    quantityOccupied: number
    cnpj: string
    link?: string | null
    address: string
    userId: string
  }

  export type HotelierUpdateInput = {
    idHotelier?: StringFieldUpdateOperationsInput | string
    hotelName?: StringFieldUpdateOperationsInput | string
    totalQuantity?: IntFieldUpdateOperationsInput | number
    quantityOccupied?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutHotelierNestedInput
  }

  export type HotelierUncheckedUpdateInput = {
    idHotelier?: StringFieldUpdateOperationsInput | string
    hotelName?: StringFieldUpdateOperationsInput | string
    totalQuantity?: IntFieldUpdateOperationsInput | number
    quantityOccupied?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HotelierCreateManyInput = {
    idHotelier?: string
    hotelName: string
    totalQuantity: number
    quantityOccupied: number
    cnpj: string
    link?: string | null
    address: string
    userId: string
  }

  export type HotelierUpdateManyMutationInput = {
    idHotelier?: StringFieldUpdateOperationsInput | string
    hotelName?: StringFieldUpdateOperationsInput | string
    totalQuantity?: IntFieldUpdateOperationsInput | number
    quantityOccupied?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type HotelierUncheckedUpdateManyInput = {
    idHotelier?: StringFieldUpdateOperationsInput | string
    hotelName?: StringFieldUpdateOperationsInput | string
    totalQuantity?: IntFieldUpdateOperationsInput | number
    quantityOccupied?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TraderCreateInput = {
    idTrader?: string
    storeName: string
    storeType: string
    cpf: string
    cnpj?: string | null
    address: string
    user: UserCreateNestedOneWithoutTraderInput
  }

  export type TraderUncheckedCreateInput = {
    idTrader?: string
    storeName: string
    storeType: string
    cpf: string
    cnpj?: string | null
    address: string
    userId: string
  }

  export type TraderUpdateInput = {
    idTrader?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    storeType?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTraderNestedInput
  }

  export type TraderUncheckedUpdateInput = {
    idTrader?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    storeType?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TraderCreateManyInput = {
    idTrader?: string
    storeName: string
    storeType: string
    cpf: string
    cnpj?: string | null
    address: string
    userId: string
  }

  export type TraderUpdateManyMutationInput = {
    idTrader?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    storeType?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type TraderUncheckedUpdateManyInput = {
    idTrader?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    storeType?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    id?: string
    nameEvent: string
    description: string
    typeEvent: string
    address: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateInput = {
    id?: string
    nameEvent: string
    description: string
    typeEvent: string
    address: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEvent?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeEvent?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEvent?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeEvent?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    nameEvent: string
    description: string
    typeEvent: string
    address: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEvent?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeEvent?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEvent?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeEvent?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TouristAttractionCreateInput = {
    id?: string
    nameTouristAttractions: string
    typeTouristSpot: string
    address: string
    description?: string | null
  }

  export type TouristAttractionUncheckedCreateInput = {
    id?: string
    nameTouristAttractions: string
    typeTouristSpot: string
    address: string
    description?: string | null
  }

  export type TouristAttractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTouristAttractions?: StringFieldUpdateOperationsInput | string
    typeTouristSpot?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TouristAttractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTouristAttractions?: StringFieldUpdateOperationsInput | string
    typeTouristSpot?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TouristAttractionCreateManyInput = {
    id?: string
    nameTouristAttractions: string
    typeTouristSpot: string
    address: string
    description?: string | null
  }

  export type TouristAttractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTouristAttractions?: StringFieldUpdateOperationsInput | string
    typeTouristSpot?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TouristAttractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTouristAttractions?: StringFieldUpdateOperationsInput | string
    typeTouristSpot?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BankCreateInput = {
    id?: string
    nameBank: string
    cnpj: string
    address: string
  }

  export type BankUncheckedCreateInput = {
    id?: string
    nameBank: string
    cnpj: string
    address: string
  }

  export type BankUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameBank?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type BankUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameBank?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type BankCreateManyInput = {
    id?: string
    nameBank: string
    cnpj: string
    address: string
  }

  export type BankUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameBank?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type BankUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameBank?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HotelierNullableScalarRelationFilter = {
    is?: HotelierWhereInput | null
    isNot?: HotelierWhereInput | null
  }

  export type TraderNullableScalarRelationFilter = {
    is?: TraderWhereInput | null
    isNot?: TraderWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    idUser?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    typeUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    idUser?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    typeUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    idUser?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    typeUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HotelierCountOrderByAggregateInput = {
    idHotelier?: SortOrder
    hotelName?: SortOrder
    totalQuantity?: SortOrder
    quantityOccupied?: SortOrder
    cnpj?: SortOrder
    link?: SortOrder
    address?: SortOrder
    userId?: SortOrder
  }

  export type HotelierAvgOrderByAggregateInput = {
    totalQuantity?: SortOrder
    quantityOccupied?: SortOrder
  }

  export type HotelierMaxOrderByAggregateInput = {
    idHotelier?: SortOrder
    hotelName?: SortOrder
    totalQuantity?: SortOrder
    quantityOccupied?: SortOrder
    cnpj?: SortOrder
    link?: SortOrder
    address?: SortOrder
    userId?: SortOrder
  }

  export type HotelierMinOrderByAggregateInput = {
    idHotelier?: SortOrder
    hotelName?: SortOrder
    totalQuantity?: SortOrder
    quantityOccupied?: SortOrder
    cnpj?: SortOrder
    link?: SortOrder
    address?: SortOrder
    userId?: SortOrder
  }

  export type HotelierSumOrderByAggregateInput = {
    totalQuantity?: SortOrder
    quantityOccupied?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TraderCountOrderByAggregateInput = {
    idTrader?: SortOrder
    storeName?: SortOrder
    storeType?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    userId?: SortOrder
  }

  export type TraderMaxOrderByAggregateInput = {
    idTrader?: SortOrder
    storeName?: SortOrder
    storeType?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    userId?: SortOrder
  }

  export type TraderMinOrderByAggregateInput = {
    idTrader?: SortOrder
    storeName?: SortOrder
    storeType?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    userId?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    nameEvent?: SortOrder
    description?: SortOrder
    typeEvent?: SortOrder
    address?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    nameEvent?: SortOrder
    description?: SortOrder
    typeEvent?: SortOrder
    address?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    nameEvent?: SortOrder
    description?: SortOrder
    typeEvent?: SortOrder
    address?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TouristAttractionCountOrderByAggregateInput = {
    id?: SortOrder
    nameTouristAttractions?: SortOrder
    typeTouristSpot?: SortOrder
    address?: SortOrder
    description?: SortOrder
  }

  export type TouristAttractionMaxOrderByAggregateInput = {
    id?: SortOrder
    nameTouristAttractions?: SortOrder
    typeTouristSpot?: SortOrder
    address?: SortOrder
    description?: SortOrder
  }

  export type TouristAttractionMinOrderByAggregateInput = {
    id?: SortOrder
    nameTouristAttractions?: SortOrder
    typeTouristSpot?: SortOrder
    address?: SortOrder
    description?: SortOrder
  }

  export type BankCountOrderByAggregateInput = {
    id?: SortOrder
    nameBank?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
  }

  export type BankMaxOrderByAggregateInput = {
    id?: SortOrder
    nameBank?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
  }

  export type BankMinOrderByAggregateInput = {
    id?: SortOrder
    nameBank?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
  }

  export type HotelierCreateNestedOneWithoutUserInput = {
    create?: XOR<HotelierCreateWithoutUserInput, HotelierUncheckedCreateWithoutUserInput>
    connectOrCreate?: HotelierCreateOrConnectWithoutUserInput
    connect?: HotelierWhereUniqueInput
  }

  export type TraderCreateNestedOneWithoutUserInput = {
    create?: XOR<TraderCreateWithoutUserInput, TraderUncheckedCreateWithoutUserInput>
    connectOrCreate?: TraderCreateOrConnectWithoutUserInput
    connect?: TraderWhereUniqueInput
  }

  export type HotelierUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<HotelierCreateWithoutUserInput, HotelierUncheckedCreateWithoutUserInput>
    connectOrCreate?: HotelierCreateOrConnectWithoutUserInput
    connect?: HotelierWhereUniqueInput
  }

  export type TraderUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TraderCreateWithoutUserInput, TraderUncheckedCreateWithoutUserInput>
    connectOrCreate?: TraderCreateOrConnectWithoutUserInput
    connect?: TraderWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HotelierUpdateOneWithoutUserNestedInput = {
    create?: XOR<HotelierCreateWithoutUserInput, HotelierUncheckedCreateWithoutUserInput>
    connectOrCreate?: HotelierCreateOrConnectWithoutUserInput
    upsert?: HotelierUpsertWithoutUserInput
    disconnect?: HotelierWhereInput | boolean
    delete?: HotelierWhereInput | boolean
    connect?: HotelierWhereUniqueInput
    update?: XOR<XOR<HotelierUpdateToOneWithWhereWithoutUserInput, HotelierUpdateWithoutUserInput>, HotelierUncheckedUpdateWithoutUserInput>
  }

  export type TraderUpdateOneWithoutUserNestedInput = {
    create?: XOR<TraderCreateWithoutUserInput, TraderUncheckedCreateWithoutUserInput>
    connectOrCreate?: TraderCreateOrConnectWithoutUserInput
    upsert?: TraderUpsertWithoutUserInput
    disconnect?: TraderWhereInput | boolean
    delete?: TraderWhereInput | boolean
    connect?: TraderWhereUniqueInput
    update?: XOR<XOR<TraderUpdateToOneWithWhereWithoutUserInput, TraderUpdateWithoutUserInput>, TraderUncheckedUpdateWithoutUserInput>
  }

  export type HotelierUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<HotelierCreateWithoutUserInput, HotelierUncheckedCreateWithoutUserInput>
    connectOrCreate?: HotelierCreateOrConnectWithoutUserInput
    upsert?: HotelierUpsertWithoutUserInput
    disconnect?: HotelierWhereInput | boolean
    delete?: HotelierWhereInput | boolean
    connect?: HotelierWhereUniqueInput
    update?: XOR<XOR<HotelierUpdateToOneWithWhereWithoutUserInput, HotelierUpdateWithoutUserInput>, HotelierUncheckedUpdateWithoutUserInput>
  }

  export type TraderUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TraderCreateWithoutUserInput, TraderUncheckedCreateWithoutUserInput>
    connectOrCreate?: TraderCreateOrConnectWithoutUserInput
    upsert?: TraderUpsertWithoutUserInput
    disconnect?: TraderWhereInput | boolean
    delete?: TraderWhereInput | boolean
    connect?: TraderWhereUniqueInput
    update?: XOR<XOR<TraderUpdateToOneWithWhereWithoutUserInput, TraderUpdateWithoutUserInput>, TraderUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutHotelierInput = {
    create?: XOR<UserCreateWithoutHotelierInput, UserUncheckedCreateWithoutHotelierInput>
    connectOrCreate?: UserCreateOrConnectWithoutHotelierInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutHotelierNestedInput = {
    create?: XOR<UserCreateWithoutHotelierInput, UserUncheckedCreateWithoutHotelierInput>
    connectOrCreate?: UserCreateOrConnectWithoutHotelierInput
    upsert?: UserUpsertWithoutHotelierInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHotelierInput, UserUpdateWithoutHotelierInput>, UserUncheckedUpdateWithoutHotelierInput>
  }

  export type UserCreateNestedOneWithoutTraderInput = {
    create?: XOR<UserCreateWithoutTraderInput, UserUncheckedCreateWithoutTraderInput>
    connectOrCreate?: UserCreateOrConnectWithoutTraderInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTraderNestedInput = {
    create?: XOR<UserCreateWithoutTraderInput, UserUncheckedCreateWithoutTraderInput>
    connectOrCreate?: UserCreateOrConnectWithoutTraderInput
    upsert?: UserUpsertWithoutTraderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTraderInput, UserUpdateWithoutTraderInput>, UserUncheckedUpdateWithoutTraderInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type HotelierCreateWithoutUserInput = {
    idHotelier?: string
    hotelName: string
    totalQuantity: number
    quantityOccupied: number
    cnpj: string
    link?: string | null
    address: string
  }

  export type HotelierUncheckedCreateWithoutUserInput = {
    idHotelier?: string
    hotelName: string
    totalQuantity: number
    quantityOccupied: number
    cnpj: string
    link?: string | null
    address: string
  }

  export type HotelierCreateOrConnectWithoutUserInput = {
    where: HotelierWhereUniqueInput
    create: XOR<HotelierCreateWithoutUserInput, HotelierUncheckedCreateWithoutUserInput>
  }

  export type TraderCreateWithoutUserInput = {
    idTrader?: string
    storeName: string
    storeType: string
    cpf: string
    cnpj?: string | null
    address: string
  }

  export type TraderUncheckedCreateWithoutUserInput = {
    idTrader?: string
    storeName: string
    storeType: string
    cpf: string
    cnpj?: string | null
    address: string
  }

  export type TraderCreateOrConnectWithoutUserInput = {
    where: TraderWhereUniqueInput
    create: XOR<TraderCreateWithoutUserInput, TraderUncheckedCreateWithoutUserInput>
  }

  export type HotelierUpsertWithoutUserInput = {
    update: XOR<HotelierUpdateWithoutUserInput, HotelierUncheckedUpdateWithoutUserInput>
    create: XOR<HotelierCreateWithoutUserInput, HotelierUncheckedCreateWithoutUserInput>
    where?: HotelierWhereInput
  }

  export type HotelierUpdateToOneWithWhereWithoutUserInput = {
    where?: HotelierWhereInput
    data: XOR<HotelierUpdateWithoutUserInput, HotelierUncheckedUpdateWithoutUserInput>
  }

  export type HotelierUpdateWithoutUserInput = {
    idHotelier?: StringFieldUpdateOperationsInput | string
    hotelName?: StringFieldUpdateOperationsInput | string
    totalQuantity?: IntFieldUpdateOperationsInput | number
    quantityOccupied?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type HotelierUncheckedUpdateWithoutUserInput = {
    idHotelier?: StringFieldUpdateOperationsInput | string
    hotelName?: StringFieldUpdateOperationsInput | string
    totalQuantity?: IntFieldUpdateOperationsInput | number
    quantityOccupied?: IntFieldUpdateOperationsInput | number
    cnpj?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type TraderUpsertWithoutUserInput = {
    update: XOR<TraderUpdateWithoutUserInput, TraderUncheckedUpdateWithoutUserInput>
    create: XOR<TraderCreateWithoutUserInput, TraderUncheckedCreateWithoutUserInput>
    where?: TraderWhereInput
  }

  export type TraderUpdateToOneWithWhereWithoutUserInput = {
    where?: TraderWhereInput
    data: XOR<TraderUpdateWithoutUserInput, TraderUncheckedUpdateWithoutUserInput>
  }

  export type TraderUpdateWithoutUserInput = {
    idTrader?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    storeType?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type TraderUncheckedUpdateWithoutUserInput = {
    idTrader?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    storeType?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutHotelierInput = {
    idUser?: string
    name: string
    email: string
    password: string
    phone: string
    country: string
    typeUser: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trader?: TraderCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHotelierInput = {
    idUser?: string
    name: string
    email: string
    password: string
    phone: string
    country: string
    typeUser: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trader?: TraderUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHotelierInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHotelierInput, UserUncheckedCreateWithoutHotelierInput>
  }

  export type UserUpsertWithoutHotelierInput = {
    update: XOR<UserUpdateWithoutHotelierInput, UserUncheckedUpdateWithoutHotelierInput>
    create: XOR<UserCreateWithoutHotelierInput, UserUncheckedCreateWithoutHotelierInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHotelierInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHotelierInput, UserUncheckedUpdateWithoutHotelierInput>
  }

  export type UserUpdateWithoutHotelierInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    typeUser?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trader?: TraderUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHotelierInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    typeUser?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trader?: TraderUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutTraderInput = {
    idUser?: string
    name: string
    email: string
    password: string
    phone: string
    country: string
    typeUser: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelier?: HotelierCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTraderInput = {
    idUser?: string
    name: string
    email: string
    password: string
    phone: string
    country: string
    typeUser: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelier?: HotelierUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTraderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTraderInput, UserUncheckedCreateWithoutTraderInput>
  }

  export type UserUpsertWithoutTraderInput = {
    update: XOR<UserUpdateWithoutTraderInput, UserUncheckedUpdateWithoutTraderInput>
    create: XOR<UserCreateWithoutTraderInput, UserUncheckedCreateWithoutTraderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTraderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTraderInput, UserUncheckedUpdateWithoutTraderInput>
  }

  export type UserUpdateWithoutTraderInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    typeUser?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelier?: HotelierUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTraderInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    typeUser?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelier?: HotelierUncheckedUpdateOneWithoutUserNestedInput
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