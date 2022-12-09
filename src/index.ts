import { Controller } from './controller';
import process from 'node:process';

const controller = new Controller();
controller.Start();

process.on('SIGINT', () => {
  controller.Stop();
});
