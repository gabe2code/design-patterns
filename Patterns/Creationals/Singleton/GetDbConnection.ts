// @ts-ignore
import Singleton from "./Singleton.ts";

const instance = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance === instance2);
