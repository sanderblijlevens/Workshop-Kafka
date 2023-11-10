import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './kafka/consumer.service';
import { ConfigService } from '@nestjs/config';
import { sleep } from './utils/sleep';

@Injectable()
export class PoliceConsumer implements OnModuleInit {
  constructor(
    private readonly consumerService: ConsumerService,
    private readonly configService: ConfigService,
  ) {}

  async onModuleInit() {
    await this.consumerService.consume({
      topic: { topic: this.configService.get('KAFKA_TOPIC') },
      config: { groupId: this.configService.get('KAFKA_CONSUMER_GROUP') },
      onMessage: async (message) => {
        await sleep(20);
        console.log(`Police received message: ${message.value.toString()}`);
      },
    });
  }
}
