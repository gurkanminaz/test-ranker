import { Logger } from '@nestjs/common';
import {
  OnGatewayInit,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { PollsService } from './polls.service';
import { Namespace } from 'socket.io';
import { SocketWithAuth } from './types';

@WebSocketGateway({
  namespace: 'polls',
})
export class PollsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(PollsGateway.name);
  constructor(private readonly pollsService: PollsService) {}

  @WebSocketServer() io: Namespace;

  afterInit(): void {
    this.logger.log(`Websocket Gateway initialized`);
  }

  handleConnection(client: SocketWithAuth) {
    const sockets = this.io.sockets;

    this.logger.debug(
      `Socket connected with userID: ${client.userID}, pollID: ${client.pollID}, name: ${client.name}`,
    );

    this.logger.log(`WS Client with id: ${client.id} connected!`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);

    this.io.emit('hello', `from ${client.id}`);
  }

  handleDisconnect(client: SocketWithAuth) {
    const sockets = this.io.sockets;

    this.logger.debug(
      `Socket disconnected with userID: ${client.userID}, pollID: ${client.pollID}, name: ${client.name}`,
    );
    this.logger.log(`WS Client with id: ${client.id} disconnected!`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);
  }
}
