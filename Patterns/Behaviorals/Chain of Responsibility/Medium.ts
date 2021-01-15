import ILogger from './interfaces/ILogger.ts';
import { Levels } from './interfaces/ILoggerLevel.ts';

export default class Medium implements ILogger {
  next: ILogger;
  constructor(logger: ILogger) {
    this.next = logger;
  }
  setNextClassification(logger: ILogger): void {
    this.next.setNextClassification(logger);
  }
  classify(severity: Levels): void {
    if (severity === Levels.MEDIUM) {
      throw new Error('Medium error was thrown, please check the logger file for more details');
    } else {
      this.next.classify(severity);
    }
  }
}
