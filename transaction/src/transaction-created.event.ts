export class TransactionCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly accountId: string,
    public readonly transaction: number,
  ) {}
}
