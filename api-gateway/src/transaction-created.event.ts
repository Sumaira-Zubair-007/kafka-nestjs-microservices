export class TransactionCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly accountId: string,
    public readonly transaction: number,
  ) {}

  toString() {
    return JSON.stringify({
      orderId: this.orderId,
      accountId: this.accountId,
      transaction: this.transaction,
    });
  }
}
