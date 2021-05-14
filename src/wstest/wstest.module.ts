import { Module } from '@nestjs/common';
import { EventsGateway } from 'src/events/events.gateway';
import { WstestController } from './wstest.controller';

@Module({
  controllers: [ WstestController ],
  providers: [ EventsGateway ]
})
export class WstestModule {}
