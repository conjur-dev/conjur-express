import { Routes } from './api/routes';
import { ServerInterface } from './server_interface';
import { Logger } from '../logger/logger';
import express from 'express';
import http from 'http';
import morgan from 'morgan';

export class Server implements ServerInterface {

  private Port: number;
  private StaticPath: string;
  private DefaultResource: string;
  private Configuration: express.Express | undefined;
  private Instance: http.Server | undefined;

  constructor(port: number, staticPath: string, defaultResource: string) {
    this.Port = port;
    this.StaticPath = staticPath;
    this.DefaultResource = defaultResource;
  }

  Start() {
    return new Promise<void>((resolve) => {
      Logger.Info('[HTTP] Starting ...');

      this.Configuration = express();

      this.Configuration.use(express.json());
      this.Configuration.use(morgan('common'));
  
      this.Configuration.use(Routes);
  
      this.Configuration.use(express.static(this.StaticPath));
      this.Configuration.get("/*", (request, response) => {
        response.sendFile(this.DefaultResource);
      });
  
      this.Instance = this.Configuration.listen(
        this.Port,
        () => {
          Logger.Info(`[HTTP] Server listening at port ${this.Port}`);
          resolve();
        });
    });    
  }

  Stop() {
    return new Promise<void>((resolve, reject) => {
      Logger.Info(`[HTTP] Stopping ...`);
      if (!this.Instance) {
        Logger.Warn(`[HTTP] No server instance`);
        resolve();
        return;
      }
      this.Instance.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        Logger.Info(`[HTTP] Stop completed`);
        resolve();
      });
    })
  }

};
