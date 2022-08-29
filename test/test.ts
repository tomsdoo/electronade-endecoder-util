import { describe, it } from "mocha";
import { strict as assert } from "assert";

import { SecretKey } from "../src/";

let password: string;
let salt: string;
let plainText: string;
let encodedText: string;

describe("SecretKey class interfaces", () => {
  before(() => {
    password = "password";
    salt = "salt";
    plainText = "plain text";
    encodedText = "encoded text";

    // @ts-ignore
    globalThis.electronade = {
      endecoder: {
        encode: ({
          plainText,
          password,
          salt
        }: {
          plainText: string;
          password: string;
          salt: string;
        }) => Promise.resolve([
          plainText,
          password,
          salt
        ].join("\n")),

        decode: ({
          encodedText,
          password,
          salt
        }: {
          encodedText: string;
          password: string;
          salt: string;
        }) => Promise.resolve([
          encodedText,
          password,
          salt
        ].join("\n"))
      }
    };
  });

  it("encode()", async () => {
    assert.equal(
      await new SecretKey(password, salt)
        .encode(plainText),
      [ plainText, password, salt ].join("\n")
    )
  });

  it("decode()", async () => {
    assert.equal(
      await new SecretKey(password, salt)
        .decode(encodedText),
      [ encodedText, password, salt ].join("\n")
    );
  });
});
