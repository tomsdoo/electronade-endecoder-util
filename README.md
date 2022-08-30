# electronade-endecoder-util

It's a package that provides some utilities for `electronade-endecoder`.

It's an optional module for `electronade-endecoder` so `electronade-endecoder` should be installed before using `electronade-endecoder-util`.

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
