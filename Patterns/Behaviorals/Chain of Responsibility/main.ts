/**
 * In all games there is always a logger available to show/throw errors depending of the severity of the error. You can always use if-else nested
 * but this structure is hard to maintain and over all, does not scale properly. Here is when the chain of responsibility coming handy.
 * Others common uses are in classification of entities which could become a nightmare to scale properly 
 */

import Critical from './Critical.ts';
import { Levels } from './interfaces/ILoggerLevel.ts';
import Medium from './Medium.ts';
import Success from './Success.ts';
import Warning from './Warnings.ts';

const criticalLogger = new Critical(new Medium(new Warning(new Success())));
// const mediumLogger = new Medium();
// const warningLogger = new Warning();
// const successLogger = new Success();
// criticalLogger.setNextClassification(mediumLogger);
// mediumLogger.setNextClassification(warningLogger);
// warningLogger.setNextClassification(successLogger);

criticalLogger.classify(Levels.SUCCESS);
