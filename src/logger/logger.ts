import { LoggerInterface } from "./logger_interface";
import * as winston from 'winston';

class LoggerWrapper implements LoggerInterface {

  private Winston: winston.Logger

  constructor() {
    this.Winston = winston.createLogger({
      level: 'debug',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.printf(info => JSON.stringify({
          timestamp: info.timestamp,
          level: info.level,
          message: info.message,
          splat: info.splat ? info.splat : '',
        }))
      ),
      transports: [
        new winston.transports.Console({
          format: winston.format.cli(),
        })
      ]
    });
  }

  Debug(message: string) {
    this.Winston.debug(message);
  }

  Info(message: string) {
    this.Winston.info(message);
  }

  Warn(message: string) {
    this.Winston.warn(message);
  }

  Error(message: string) {
    this.Winston.error(message);
  }

};

export const Logger = new LoggerWrapper();
