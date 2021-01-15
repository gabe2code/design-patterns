import { Levels } from './ILoggerLevel.ts';

export default interface ILogger {
  setNextClassification(logger: ILogger): void;
  classify(severity: Levels): void;
};
