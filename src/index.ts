export class SecretKey {
  protected password: string;
  protected salt: string;
  protected exposedName: string;
  constructor(password: string, salt: string, exposedName?: string) {
    this.password = password;
    this.salt = salt;
    this.exposedName = exposedName ?? "electronade";
  }

  public async encode(plainText: string): Promise<string> {
    // @ts-expect-error
    return await globalThis[this.exposedName].endecoder.encode({
      plainText,
      password: this.password,
      salt: this.salt,
    });
  }

  public async decode(encodedText: string): Promise<string> {
    // @ts-expect-error
    return await globalThis[this.exposedName].endecoder.decode({
      encodedText,
      password: this.password,
      salt: this.salt,
    });
  }

  public async encrypt(plainBuffer: Buffer): Promise<string> {
    // @ts-expect-error
    return await globalThis[this.exposedName].endecoder.encrypt({
      plainBuffer,
      password: this.password,
      salt: this.salt,
    });
  }

  public async decrypt(encodedText: string): Promise<Buffer> {
    // @ts-expect-error
    return await globalThis[this.exposedName].endecoder.decrypt({
      encodedText,
      password: this.password,
      salt: this.salt,
    });
  }
}
