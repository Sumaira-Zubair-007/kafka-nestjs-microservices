import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './get-user-request.dto';
import {  TransactionCreatedEvent } from './transaction-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('Account_SERVICE') private readonly accountClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreatedEvent: TransactionCreatedEvent) {
    this.accountClient
      .send('get_user', new GetUserRequest(orderCreatedEvent.accountId))
      .subscribe((user) => {
        console.log(
          `Account ID ${user.stripeaccountId} a transaction of $${orderCreatedEvent.transaction}...`,
        );
      });
  }
}
