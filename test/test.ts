import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { randomBytes } from "crypto";

import { SecretKey } from "../src/";

let password: string;
let salt: string;
let plainText: string;
let encodedText: string;
let plainBuffer: Buffer;

describe("SecretKey class interfaces", () => {
  before(() => {
    password = "password";
    salt = "salt";
    plainText = "plain text";
    encodedText = "encoded text";
    plainBuffer = randomBytes(1024);

    // @ts-ignore
    globalThis.electronade = {
      endecoder: {
        encode: ({
          plainText,
          password,
          salt,
        }: {
          plainText: string;
          password: string;
          salt: string;
        }) => Promise.resolve([plainText, password, salt].join("\n")),

        decode: ({
          encodedText,
          password,
          salt,
        }: {
          encodedText: string;
          password: string;
          salt: string;
        }) => Promise.resolve([encodedText, password, salt].join("\n")),

        encrypt: ({
          plainBuffer,
          password,
          salt,
        }: {
          plainBuffer: Buffer;
          password: string;
          salt: string;
        }) =>
          Promise.resolve(
            [plainBuffer.toString("base64"), password, salt].join("\n")
          ),

        decrypt: ({
          encodedText,
          password,
          salt,
        }: {
          encodedText: string;
          password: string;
          salt: string;
        }) => Promise.resolve([encodedText, password, salt].join("\n")),
      },
    };
  });

  it("encode()", async () => {
    assert.equal(
      await new SecretKey(password, salt).encode(plainText),
      [plainText, password, salt].join("\n")
    );
  });

  it("decode()", async () => {
    assert.equal(
      await new SecretKey(password, salt).decode(encodedText),
      [encodedText, password, salt].join("\n")
    );
  });

  it("encrypt()", async () => {
    assert.equal(
      await new SecretKey(password, salt).encrypt(plainBuffer),
      [plainBuffer.toString("base64"), password, salt].join("\n")
    );
  });

  it("decrypt()", async () => {
    assert.equal(
      await new SecretKey(password, salt).decrypt(encodedText),
      [encodedText, password, salt].join("\n")
    );
  });
});
