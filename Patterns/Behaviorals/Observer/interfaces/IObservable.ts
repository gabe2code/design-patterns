import IObserver from './IObserver.ts';

export default interface IObservable {
  add(observable: IObserver): void;
  remove(observable: IObserver): void;
  notify(): void;
};
