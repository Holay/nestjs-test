import {
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;

  afterInit(server: any) {
    setInterval(() => {
      this.sendData('PENAM092')
    }, 30000)
  }

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }

  @SubscribeMessage('test')
  replyToUser(@MessageBody() user: string){
    this.sendData(user)
  }

  sendData(user) {
    this.server.emit(`Notifications-${user}`, { messages: [`Test notification sent to: ${user}`], type: 'success', previewMessage: 'Test Notification', header: 'Test', time: new Date() })
  }
}
