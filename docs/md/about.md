# electronade-endecoder-util

It's a package that provides some utilities for [electronade-endecoder](https://electronade-endecoder.netlify.app/).

It's an optional module for `electronade-endecoder` so `electronade-endecoder` should be installed before using `electronade-endecoder-util`.

![npm](https://img.shields.io/npm/v/electronade-endecoder-util)
![NPM](https://img.shields.io/npm/l/electronade-endecoder-util)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/electronade-endecoder-util)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/electronade-endecoder-util)
![Maintenance](https://img.shields.io/maintenance/yes/2022)

[![](https://nodei.co/npm/electronade-endecoder-util.svg?mini=true)](https://www.npmjs.com/package/electronade-endecoder-util)

## installation
``` shell
npm install electronade-endecoder-util
```

## interfaces

``` mermaid
classDiagram

class SecretKey {
  +constructor(password: string, salt: string, exposedName?: string)
  +encode(plainText: string) Promise~string~
  +decode(encodedText: string) Promise~string~
  +encrypt(plainBuffer: Buffer) Promise~string~
  +decrypt(encodedText: string) Promise~Buffer~
}
```

``` typescript
import { SecretKey } from "electronade-endecoder-util";

const key = new SecretKey("password", "salt");
const plainText = "this is a test":

const encodedText = await key.encode(plainText);

assert.equal(
  await key.decode(encodedText),
  plainText
);
```
