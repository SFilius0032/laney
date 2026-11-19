export default class LaneNumber {
  private value: number;

  private secret: boolean;

  public constructor() {
    this.value = 0; //add randomiser
    this.secret = false; //add randomiser

  }

  public getValue(): number {
    return this.value;
  }

  public isSecret(): boolean {
    return this.secret;
  }
}
