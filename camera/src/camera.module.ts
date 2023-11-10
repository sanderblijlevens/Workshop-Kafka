import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CameraController } from './camera.controller';
import { CameraService } from './camera.service';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [KafkaModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [CameraController],
  providers: [CameraService],
})
export class CameraModule {}
