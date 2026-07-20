import { argon2id } from 'hash-wasm'

const VERSION = 'tria/v1'

const ARGON2_MEMORY_KIB = 64 * 1024
const ARGON2_PASSES = 3
const ARGON2_PARALLELISM = 1

const PASSWORD_LENGTH = 18

const UPPERCASE = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
const LOWERCASE = 'abcdefghijkmnopqrstuvwxyz'
const DIGITS = '0123456789'
const SYMBOLS = '!#$%&()*<=>?@[]^_{}~'

const ALL_CHARACTERS =
  UPPERCASE +
  LOWERCASE +
  DIGITS +
  SYMBOLS

const encoder = new TextEncoder()

const toArrayBuffer = (
  bytes: Uint8Array
): ArrayBuffer => {
  const buffer = new ArrayBuffer(
    bytes.byteLength
  )

  new Uint8Array(buffer).set(bytes)

  return buffer
}

export const copyPass = async (
  password: string
): Promise<void> => {
  try {
    await navigator.clipboard.writeText(password)
  } catch (error) {
    console.error(
      'Failed to copy password:',
      error
    )
  }
}

const normalizeIdentifier = (
  value: string,
  fieldName: string
): string => {
  const normalized = value
    .trim()
    .toLowerCase()

  if (normalized.length === 0) {
    throw new Error(
      `${fieldName} cannot be empty`
    )
  }

  return normalized
}

const deriveMasterKey = async (
  masterCode: string
): Promise<Uint8Array> => {
  if (masterCode.trim().length === 0) {
    throw new Error(
      'Master code cannot be empty'
    )
  }

  return await argon2id({
    password: masterCode,
    salt: `${VERSION}/master-key`,
    iterations: ARGON2_PASSES,
    memorySize: ARGON2_MEMORY_KIB,
    parallelism: ARGON2_PARALLELISM,
    hashLength: 32,
    outputType: 'binary',
  })
}

const encodeField = (
  value: string
): Uint8Array => {
  const bytes = encoder.encode(value)

  const result = new Uint8Array(
    4 + bytes.length
  )

  const view = new DataView(
    result.buffer
  )

  view.setUint32(
    0,
    bytes.length,
    false
  )

  result.set(bytes, 4)

  return result
}

const concatenateBytes = (
  ...arrays: Uint8Array[]
): Uint8Array => {
  const totalLength = arrays.reduce(
    (total, array) =>
      total + array.length,
    0
  )

  const result = new Uint8Array(
    totalLength
  )

  let offset = 0

  for (const array of arrays) {
    result.set(array, offset)
    offset += array.length
  }

  return result
}

const createAccountMessage = (
  domain: string,
  username: string,
  revision: number
): Uint8Array => {
  const revisionBuffer =
    new ArrayBuffer(4)

  const revisionView =
    new DataView(
      revisionBuffer
    )

  revisionView.setUint32(
    0,
    revision,
    false
  )

  return concatenateBytes(
    encodeField(VERSION),
    encodeField(domain),
    encodeField(username),
    new Uint8Array(revisionBuffer)
  )
}

const deriveAccountBytes = async (
  masterKeyBytes: Uint8Array,
  message: Uint8Array
): Promise<Uint8Array> => {
  const masterKey =
    await crypto.subtle.importKey(
      'raw',
      toArrayBuffer(masterKeyBytes),
      {
        name: 'HMAC',
        hash: 'SHA-256',
      },
      false,
      ['sign']
    )

  const result: number[] = []

  for (
    let counter = 0;
    counter < 4;
    counter++
  ) {
    const counterBuffer =
      new ArrayBuffer(4)

    const counterView =
      new DataView(counterBuffer)

    counterView.setUint32(
      0,
      counter,
      false
    )

    const blockMessage =
      concatenateBytes(
        message,
        new Uint8Array(counterBuffer)
      )

    const signature =
      await crypto.subtle.sign(
        'HMAC',
        masterKey,
        toArrayBuffer(blockMessage)
      )

    result.push(
      ...new Uint8Array(signature)
    )
  }

  return new Uint8Array(result)
}

const createRandomReader = (
  bytes: Uint8Array
) => {
  let index = 0

  const nextByte = (): number => {
    if (
      index >= bytes.length
    ) {
      throw new Error(
        'Not enough deterministic entropy'
      )
    }

    return bytes[index++] || 0
  }

  const randomInt = (
    max: number
  ): number => {
    const limit =
      256 - (256 % max)

    while (true) {
      const byte = nextByte()

      if (byte < limit) {
        return byte % max
      }
    }
  }

  return {
    randomInt,
  }
}

const generatePassword = (
  bytes: Uint8Array,
  length = PASSWORD_LENGTH
): string => {
  if (length < 4) {
    throw new Error(
      'Password length must be at least 4'
    )
  }

  const random =
    createRandomReader(bytes)

  const passwordChars = [
    UPPERCASE[
      random.randomInt(
        UPPERCASE.length
      )
    ],

    LOWERCASE[
      random.randomInt(
        LOWERCASE.length
      )
    ],

    DIGITS[
      random.randomInt(
        DIGITS.length
      )
    ],

    SYMBOLS[
      random.randomInt(
        SYMBOLS.length
      )
    ],
  ]

  while (
    passwordChars.length < length
  ) {
    passwordChars.push(
      ALL_CHARACTERS[
        random.randomInt(
          ALL_CHARACTERS.length
        )
      ]
    )
  }

  for (
    let index =
      passwordChars.length - 1;

    index > 0;

    index--
  ) {
    const swapIndex =
      random.randomInt(
        index + 1
      )

    const temp =
      passwordChars[index]

    passwordChars[index] =
      passwordChars[swapIndex]

    passwordChars[swapIndex] =
      temp
  }

  return passwordChars.join('')
}

const passwordGenerator = async (
  username: string,
  masterCode: string,
  domain: string,
  revision = 0
): Promise<string> => {
  if (
    !Number.isInteger(revision) ||
    revision < 0
  ) {
    throw new Error(
      'Revision must be a non-negative integer'
    )
  }

  const safeUsername =
    normalizeIdentifier(
      username,
      'Username'
    )

  const safeDomain =
    normalizeIdentifier(
      domain,
      'Domain'
    )

  const masterKey =
    await deriveMasterKey(
      masterCode
    )

  const accountMessage =
    createAccountMessage(
      safeDomain,
      safeUsername,
      revision
    )

  const accountBytes =
    await deriveAccountBytes(
      masterKey,
      accountMessage
    )

  const password =
    generatePassword(
      accountBytes
    )

  await copyPass(password)

  return password
}

export default passwordGenerator
