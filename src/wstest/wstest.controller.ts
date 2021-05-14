import { Controller, Get, Header, Param } from '@nestjs/common';
import { EventsGateway } from 'src/events/events.gateway';

@Controller('wstest')
export class WstestController {

  constructor(
    private eventsGateway: EventsGateway
  ){}

  @Get('/:user')
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  @Header('Access-Control-Allow-Headers', 'Content-Type, Accept')
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
