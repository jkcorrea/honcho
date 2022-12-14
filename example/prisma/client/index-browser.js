
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.1
 * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
 */
Prisma.prismaVersion = {
  client: "4.7.1",
  engine: "272861e07ab64f234d3ffc4094e32bd61775599c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.Api_keyScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  key: 'key',
  organizationId: 'organizationId'
});

exports.Prisma.CameraScalarFieldEnum = makeEnum({
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
});

exports.Prisma.EventScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  start: 'start',
  end: 'end',
  organizationId: 'organizationId',
  locationId: 'locationId'
});

exports.Prisma.Event_guestScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  checkedInAt: 'checkedInAt',
  guestId: 'guestId',
  eventId: 'eventId'
});

exports.Prisma.GuestScalarFieldEnum = makeEnum({
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
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.LocationScalarFieldEnum = makeEnum({
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
});

exports.Prisma.NotificationScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  readAt: 'readAt',
  data: 'data',
  email: 'email',
  phone: 'phone',
  sentAt: 'sentAt'
});

exports.Prisma.OrganizationScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  subdomain: 'subdomain',
  stripeCustomerId: 'stripeCustomerId',
  status: 'status',
  statuses: 'statuses',
  statuses2: 'statuses2'
});

exports.Prisma.Organization_invitationScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  email: 'email',
  role: 'role',
  token: 'token',
  organizationId: 'organizationId'
});

exports.Prisma.Organization_memberScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  role: 'role',
  userId: 'userId',
  organizationId: 'organizationId'
});

exports.Prisma.Parking_lotScalarFieldEnum = makeEnum({
  id: 'id',
  label: 'label',
  createdAt: 'createdAt',
  notifyEmail: 'notifyEmail',
  notifyPhone: 'notifyPhone',
  updatedAt: 'updatedAt'
});

exports.Prisma.Parking_spaceScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Parking_space_activity_logScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  text: 'text',
  parkingSpaceId: 'parkingSpaceId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.VehicleScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  year: 'year',
  make: 'make',
  model: 'model',
  color: 'color',
  licensePlate: 'licensePlate',
  guestId: 'guestId'
});
exports.VehicleColor = makeEnum({
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
});

exports.camera_viewing_angle = makeEnum({
  TOP_DOWN: 'TOP_DOWN',
  RAISED_ANGLE: 'RAISED_ANGLE',
  DIRECT_PARALLEL: 'DIRECT_PARALLEL',
  OTHER: 'OTHER',
  UNDECIDED: 'UNDECIDED'
});

exports.location_connection_type = makeEnum({
  SERVER_ON_PREM: 'SERVER_ON_PREM',
  EDGE_DEVICE_ON_PREM: 'EDGE_DEVICE_ON_PREM',
  CURBCLOUD: 'CURBCLOUD',
  NOT_SURE: 'NOT_SURE'
});

exports.organization_member_role = makeEnum({
  OWNER: 'OWNER',
  MEMBER: 'MEMBER',
  READ_ONLY: 'READ_ONLY'
});

exports.organization_status = makeEnum({
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
});

exports.parking_space_status = makeEnum({
  OCCUPIED: 'OCCUPIED',
  CHECKED_IN: 'CHECKED_IN',
  REGISTERED: 'REGISTERED',
  UNOCCUPIED: 'UNOCCUPIED',
  UNKNOWN: 'UNKNOWN'
});

exports.parking_space_type = makeEnum({
  MANAGED: 'MANAGED',
  MONITORED: 'MONITORED'
});

exports.service_throughput_unit_of_time = makeEnum({
  PerMinute: 'PerMinute',
  PerHour: 'PerHour',
  PerDay: 'PerDay'
});

exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
