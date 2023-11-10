import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';
import { ConfigService } from '@nestjs/config';
import { getLicencePlate } from "./licencePlate";

@Injectable()
export class CameraService {
  constructor(
    private readonly producerService: ProducerService,
    private readonly configService: ConfigService,
  ) {}

  async scanCars(amount: number = 1): Promise<void> {
    for (let i = 1; i <= amount; i++) {
      const licencePlate = getLicencePlate();
      await this.producerService.produce(
        this.configService.get('KAFKA_TOPIC'),
        {
          value:
            (amount > 1 ? `[${i}] ` : '') +
            `Car scanned with licence plate: ${licencePlate} at ${(new Date).toLocaleTimeString()}`,
        },
      );
      if (i % 100 === 0) {
        console.log(`Produced message ${i}`);
      }
    }
  }
}
