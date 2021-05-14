import { Controller, Get, Param } from '@nestjs/common';
import { EventsGateway } from 'src/events/events.gateway';

@Controller('wstest')
export class WstestController {

  constructor(
    private eventsGateway: EventsGateway
  ){}

  @Get('/:user')
  testSocket(
    @Param('user') user: string
  ){
    let count = 0;
    for (let index = 0; index < 10000; index++) {
      count++;      
    }
    console.log(`sending notification to ${user}`)
    this.eventsGateway.sendData(user || 'PENAM092')
    return 'Endpoint call succesful'
  }
}
