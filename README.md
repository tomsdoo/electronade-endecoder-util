# electronade-endecoder-util

It's a package that provides some utilities for `electronade-endecoder`.  
See [electronade-endecoder-util.netlify.app](https://electronade-endecoder-util.netlify.app/) also.

It's an optional module for `electronade-endecoder` so `electronade-endecoder` should be installed before using `electronade-endecoder-util`.

![npm](https://img.shields.io/npm/v/electronade-endecoder-util)
![NPM](https://img.shields.io/npm/l/electronade-endecoder-util)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/electronade-endecoder-util)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/electronade-endecoder-util)
![Maintenance](https://img.shields.io/maintenance/yes/2022)

## Installation
``` shell
npm install electronade-endecoder-util
```

## Interfaces

``` typescript
class SecretKey {
  constructor(password: string, salt: string, exposedName?: string);
  public encode(plainText: string) => Promise<string>;
  public decode(encodedText: string) => Promise<string>;
  public encrypt(plainBuffer: Buffer) => Promise<string>;
  public decrypt(encodedText: string) => Promise<Buffer>;
}
```

## Usage

import and use SecretKey class in Renderer process.

``` typescript
import { SecretKey } from "electronade-endecoder-util";

const key = new SecretKey(
  "password",
  "salt"
);

const encodedText = await key.encode("this is a test");

console.log(
  await key.decode(encodedText)
) // this is a test

```
