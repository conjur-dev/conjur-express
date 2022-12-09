import { ServerInterface } from './server/server_interface';
import { Server } from './server/server';
import { Logger } from './logger/logger';
import path from 'path';

export class Controller {

  private Server: ServerInterface

  constructor() {
    this.Server = new Server(
      8080,
      path.join(__dirname, '../client/build'),
      path.join(__dirname, '../client/build/index.html'));
  }

  async Start() {
    Logger.Info('[Controller] Starting ...');
    await this.Server.Start();
    Logger.Info('[Controller] Start completed');
  }

  async Stop() {
    Logger.Info('[Controller] Stopping ...');
    await this.Server.Stop();
    Logger.Info('[Controller] Stop completed');
  }

};
