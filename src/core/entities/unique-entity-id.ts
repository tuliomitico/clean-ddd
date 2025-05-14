export class UniqueEntityID {
  private value: string;

  constructor(value?: string) {
    this.value = value ?? crypto.randomUUID();
  }

  toString() {
    return this.value;
  }

  toValue() {
    return this.value;
  }

  public equals(id: UniqueEntityID) {
    return this.value === id.toValue();
  }
}
