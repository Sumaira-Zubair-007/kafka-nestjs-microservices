export class GetUserRequest {
  constructor(public readonly accountId: string) {}

  toString() {
    return JSON.stringify({
      accountId: this.accountId,
    });
  }
}
