import ILogger from './interfaces/ILogger.ts';
import { Levels } from './interfaces/ILoggerLevel.ts';

export default class Critical implements ILogger {
  next: ILogger;
  constructor(logger: ILogger) {
    this.next = logger;
  }
  setNextClassification(logger: ILogger): void {
    this.next.setNextClassification(logger);
  }
  classify(severity: Levels): void {
    if (severity === Levels.CRITICAL) {
      throw new Error('Critical error thrown');
    } else {
      this.next.classify(severity);
    }
  }
}
