import ILogger from './interfaces/ILogger.ts';
import { Levels } from './interfaces/ILoggerLevel.ts';

export default class Warning implements ILogger {
  next: ILogger;
  constructor(logger: ILogger) {
    this.next = logger;
  }
  setNextClassification(logger: ILogger): void {
    this.next.setNextClassification(logger);
  }
  classify(severity: Levels): void {
    if (severity === Levels.WARNING) {
      throw new Error('Warner error occurs, please be careful');
    } else {
      this.next.classify(severity);
    }
  }
}
