import { Body, Controller, Get, Param } from '@nestjs/common';
import { CameraService } from './camera.service';
import { SendKafkaMessages } from './models';

@Controller('/scan')
export class CameraController {
    constructor (private readonly appService: CameraService) {
    }

    @Get()
    async scan () {
        await this.appService.scanCars();
        return 'Done scanning 1 car';
    }

    @Get('/:amount')
    async scanMultiple (@Param('amount') amount?: number) {
        await this.appService.scanCars(amount);
        return `Done scanning ${amount} car`;
    }
}
