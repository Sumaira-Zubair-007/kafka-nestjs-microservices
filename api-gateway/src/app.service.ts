import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import {  CreateTransactionRequest } from './create-transaction-request.dto';
import {  TransactionCreatedEvent } from './transaction-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('TRANSACTION_SERVICE') private readonly transactionClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createTransaction({ accountId, transaction }: CreateTransactionRequest) {
    this.transactionClient.emit(
      'order_created',
      new TransactionCreatedEvent('123', accountId, transaction),
    );
  }
}
