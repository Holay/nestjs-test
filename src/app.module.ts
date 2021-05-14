import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { WstestModule } from './wstest/wstest.module';

@Module({
  imports: [EventsModule, WstestModule],
})
export class AppModule {}
