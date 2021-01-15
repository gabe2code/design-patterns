import ILogger from './interfaces/ILogger.ts';
import { Levels } from './interfaces/ILoggerLevel.ts';

export default class Success implements ILogger {
  setNextClassification(logger: ILogger): void {
    console.log('this is the last state of the chain');
  }
  classify(severity: Levels): void {
    console.log(`Operation ${severity.toString().toLowerCase()}`);
  }
}
